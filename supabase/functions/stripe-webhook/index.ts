// Edge Function: webhook Stripe dla subskrypcji Inner Circle.
// Stripe wysyła tu zdarzenia checkout.session.completed i customer.subscription.*;
// funkcja nadaje lub odbiera flagę is_subscriber w public.profiles.
// Dopasowanie: najpierw po stripe_customer_id, potem po e-mailu. Jeśli osoba nie ma
// jeszcze konta na stronie, wpis ląduje w pending_subscriptions i trigger
// handle_new_user() nada subskrypcję przy pierwszym logowaniu.
//
// Sekrety (Supabase → Edge Functions → Secrets):
//   STRIPE_WEBHOOK_SECRET   "Signing secret" endpointu z Stripe → Developers → Webhooks (whsec_..., NIGDY w repo)
// Ustawienie funkcji: "Verify JWT" WYŁĄCZONE (Stripe nie wysyła tokenu Supabase);
// zamiast tego sprawdzamy podpis Stripe-Signature.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

interface SubskrypcjaStripe {
  id: string;
  customer: string;
  status: string; // active, trialing, past_due, canceled, unpaid, incomplete, incomplete_expired, paused
  current_period_end?: number; // unix, w starszych wersjach API na subskrypcji
  cancel_at?: number | null;
  items?: { data?: { current_period_end?: number }[] };
}

interface SesjaCheckout {
  id: string;
  mode: string;
  customer: string | null;
  subscription: string | null;
  customer_details?: { email?: string | null };
  customer_email?: string | null;
}

interface ZdarzenieStripe {
  id: string;
  type: string;
  data: { object: SubskrypcjaStripe | SesjaCheckout };
}

const AKTYWNE = new Set(["active", "trialing"]);
// Kilka dni zapasu, żeby odnowienie karty nie wycinało dostępu w dniu płatności.
const ZAPAS_DNI = 3;

function hex(bajty: ArrayBuffer): string {
  return [...new Uint8Array(bajty)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Stripe-Signature: "t=<unix>,v1=<hex HMAC-SHA256(secret, `${t}.${body}`)>[,v1=...]"
async function podpisPoprawny(naglowek: string | null, body: string, sekret: string): Promise<boolean> {
  if (!naglowek) return false;
  const czesci = Object.fromEntries(
    naglowek.split(",").map((p) => {
      const i = p.indexOf("=");
      return [p.slice(0, i).trim(), p.slice(i + 1).trim()];
    }),
  );
  const t = czesci["t"];
  if (!t) return false;
  // Odrzucamy stare żądania (powtórki): 5 minut tolerancji.
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;

  const klucz = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sekret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const oczekiwany = hex(await crypto.subtle.sign("HMAC", klucz, new TextEncoder().encode(`${t}.${body}`)));
  const podane = naglowek
    .split(",")
    .filter((p) => p.trim().startsWith("v1="))
    .map((p) => p.trim().slice(3));
  return podane.some((p) => p.length === oczekiwany.length && p === oczekiwany);
}

function dataZapasu(unix?: number | null): string | null {
  if (!unix) return null;
  const d = new Date(unix * 1000);
  d.setUTCDate(d.getUTCDate() + ZAPAS_DNI);
  return d.toISOString();
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") return new Response("method_not_allowed", { status: 405 });

  const sekret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!sekret) {
    console.error("stripe-webhook: brak sekretu STRIPE_WEBHOOK_SECRET");
    return new Response("misconfigured", { status: 500 });
  }

  const body = await req.text();
  if (!(await podpisPoprawny(req.headers.get("stripe-signature"), body, sekret))) {
    return new Response("invalid_signature", { status: 401 });
  }

  let zdarzenie: ZdarzenieStripe;
  try {
    zdarzenie = JSON.parse(body) as ZdarzenieStripe;
  } catch {
    return new Response("bad_json", { status: 400 });
  }

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });

  // Nadaje albo odbiera subskrypcję: po stripe_customer_id, w razie braku po e-mailu,
  // a gdy konta nie ma, do pending_subscriptions.
  async function ustaw(opcje: {
    customerId: string | null;
    email: string | null;
    aktywna: boolean;
    until: string | null;
    subId: string | null;
  }) {
    const zmiana = {
      is_subscriber: opcje.aktywna,
      subscriber_until: opcje.until,
      stripe_customer_id: opcje.customerId,
      stripe_subscription_id: opcje.subId,
    };

    if (opcje.customerId) {
      const { data } = await admin.from("profiles").update(zmiana).eq("stripe_customer_id", opcje.customerId).select("id");
      if (data && data.length > 0) return `profil(customer) x${data.length}`;
    }
    if (opcje.email) {
      const { data } = await admin.from("profiles").update(zmiana).eq("email", opcje.email).select("id");
      if (data && data.length > 0) return `profil(email) x${data.length}`;
    }

    // Brak konta: kolejka na pierwsze logowanie (klucz: e-mail; bez e-maila szukamy po customerze).
    if (!opcje.email && opcje.customerId) {
      const { data } = await admin
        .from("pending_subscriptions")
        .select("email")
        .eq("stripe_customer_id", opcje.customerId)
        .limit(1);
      opcje.email = data?.[0]?.email ?? null;
    }
    if (!opcje.email) return "brak e-maila, pominięto";

    if (opcje.aktywna) {
      await admin.from("pending_subscriptions").upsert({
        email: opcje.email,
        subscriber_until: opcje.until,
        stripe_customer_id: opcje.customerId,
        stripe_subscription_id: opcje.subId,
        updated_at: new Date().toISOString(),
      });
      return "oczekuje";
    }
    await admin.from("pending_subscriptions").delete().eq("email", opcje.email);
    return "oczekujące usunięte";
  }

  let wynik = "zignorowano";

  if (zdarzenie.type === "checkout.session.completed") {
    const s = zdarzenie.data.object as SesjaCheckout;
    if (s.mode === "subscription") {
      const email = (s.customer_details?.email ?? s.customer_email ?? "").trim().toLowerCase() || null;
      // Termin przyjdzie w customer.subscription.created/updated; na razie bez terminu.
      wynik = await ustaw({ customerId: s.customer, email, aktywna: true, until: null, subId: s.subscription });
    }
  } else if (zdarzenie.type.startsWith("customer.subscription.")) {
    const sub = zdarzenie.data.object as SubskrypcjaStripe;
    const aktywna = AKTYWNE.has(sub.status) && zdarzenie.type !== "customer.subscription.deleted";
    const koniec = sub.cancel_at ?? sub.current_period_end ?? sub.items?.data?.[0]?.current_period_end ?? null;
    wynik = await ustaw({
      customerId: sub.customer,
      email: null,
      aktywna,
      until: aktywna ? dataZapasu(koniec) : null,
      subId: sub.id,
    });
  }

  console.log(`stripe-webhook ${zdarzenie.type}: ${wynik}`);
  return new Response(JSON.stringify({ ok: true, wynik }), { status: 200 });
});
