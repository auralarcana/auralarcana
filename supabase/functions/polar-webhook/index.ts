// Edge Function: webhook Polar dla subskrypcji Inner Circle.
// Polar wysyła tu zdarzenia subscription.*; funkcja nadaje lub odbiera flagę
// is_subscriber w public.profiles po adresie e-mail klienta. Jeśli osoba nie ma
// jeszcze konta na stronie, wpis ląduje w pending_subscriptions i trigger
// handle_new_user() nada subskrypcję przy pierwszym logowaniu.
//
// Sekrety (Supabase → Edge Functions → Secrets):
//   POLAR_WEBHOOK_SECRET   sekret z Polar → Settings → Webhooks (NIGDY w repo)
// Ustawienie funkcji: "Verify JWT" WYŁĄCZONE (Polar nie wysyła tokenu Supabase);
// zamiast tego sprawdzamy podpis Standard Webhooks.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

interface SubskrypcjaPolar {
  id: string;
  status: string; // active, trialing, canceled, revoked, past_due, unpaid, incomplete
  current_period_end: string | null;
  ends_at: string | null;
  cancel_at_period_end: boolean;
  customer?: { email?: string | null };
  user?: { email?: string | null }; // starsze payloady
}

interface ZdarzeniePolar {
  type: string;
  data: SubskrypcjaPolar;
}

const AKTYWNE = new Set(["active", "trialing"]);
// Kilka dni zapasu, żeby odnowienie karty nie wycinało dostępu w dniu płatności.
const ZAPAS_DNI = 3;

function base64DoBajtow(b64: string): Uint8Array {
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
}

// Standard Webhooks: podpis = base64(HMAC-SHA256(secret, `${id}.${timestamp}.${body}`)).
// Polar podaje sekret jako zwykły tekst; SDK Polara koduje go base64 przed weryfikacją,
// więc kluczem HMAC są bajty samego sekretu (bez ewentualnego prefiksu whsec_).
async function podpisPoprawny(req: Request, body: string, sekret: string): Promise<boolean> {
  const id = req.headers.get("webhook-id");
  const ts = req.headers.get("webhook-timestamp");
  const sig = req.headers.get("webhook-signature");
  if (!id || !ts || !sig) return false;

  // Odrzucamy stare żądania (powtórki): 5 minut tolerancji.
  const wiek = Math.abs(Date.now() / 1000 - Number(ts));
  if (!Number.isFinite(wiek) || wiek > 300) return false;

  const klucz = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sekret.replace(/^whsec_/, "")),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", klucz, new TextEncoder().encode(`${id}.${ts}.${body}`));
  const oczekiwany = new Uint8Array(mac);

  // Nagłówek może zawierać kilka podpisów: "v1,xxx v1,yyy".
  for (const czesc of sig.split(" ")) {
    const [wersja, wartosc] = czesc.split(",");
    if (wersja !== "v1" || !wartosc) continue;
    const podany = base64DoBajtow(wartosc);
    if (podany.length === oczekiwany.length && podany.every((b, i) => b === oczekiwany[i])) return true;
  }
  return false;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return new Response("method_not_allowed", { status: 405 });

  const sekret = Deno.env.get("POLAR_WEBHOOK_SECRET");
  if (!sekret) {
    console.error("polar-webhook: brak sekretu POLAR_WEBHOOK_SECRET");
    return new Response("misconfigured", { status: 500 });
  }

  const body = await req.text();
  if (!(await podpisPoprawny(req, body, sekret))) {
    return new Response("invalid_signature", { status: 401 });
  }

  let zdarzenie: ZdarzeniePolar;
  try {
    zdarzenie = JSON.parse(body) as ZdarzeniePolar;
  } catch {
    return new Response("bad_json", { status: 400 });
  }

  // Interesują nas tylko zdarzenia subskrypcji; resztę potwierdzamy bez działania.
  if (!zdarzenie.type?.startsWith("subscription.")) {
    return new Response(JSON.stringify({ ignored: zdarzenie.type }), { status: 202 });
  }

  const sub = zdarzenie.data;
  const email = (sub.customer?.email ?? sub.user?.email ?? "").trim().toLowerCase();
  if (!email) return new Response("no_email", { status: 202 });

  const aktywna = AKTYWNE.has(sub.status);
  const koniecIso = sub.ends_at ?? sub.current_period_end;
  let until: string | null = null;
  if (aktywna && koniecIso) {
    const d = new Date(koniecIso);
    d.setUTCDate(d.getUTCDate() + ZAPAS_DNI);
    until = d.toISOString();
  }

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });

  // 1. Profil istnieje: aktualizujemy flagę.
  const { data: profile } = await admin
    .from("profiles")
    .update({ is_subscriber: aktywna, subscriber_until: until, polar_subscription_id: sub.id })
    .eq("email", email) // Supabase Auth zapisuje e-maile małymi literami
    .select("id");

  if (profile && profile.length > 0) {
    console.log(`polar-webhook ${zdarzenie.type} ${email} subscriber=${aktywna} until=${until}`);
    return new Response(JSON.stringify({ ok: true, updated: profile.length }), { status: 200 });
  }

  // 2. Brak konta: zapamiętujemy (albo kasujemy, gdy subskrypcja wygasła).
  if (aktywna) {
    await admin
      .from("pending_subscriptions")
      .upsert({ email, subscriber_until: until, polar_subscription_id: sub.id, updated_at: new Date().toISOString() });
  } else {
    await admin.from("pending_subscriptions").delete().eq("email", email);
  }
  console.log(`polar-webhook ${zdarzenie.type} ${email} pending subscriber=${aktywna}`);
  return new Response(JSON.stringify({ ok: true, pending: aktywna }), { status: 200 });
});
