// Edge Function: czat Wyroczni Aural Arcana.
// Przyjmuje od zalogowanego subskrybenta aktualny rozkład, pytanie i historię rozmowy,
// dokłada pięć ostatnich wpisów z Arcana Journal i pyta Claude (Haiku).
// Każde wywołanie trafia do public.reader_calls (czas, użytkownik, tokeny).
//
// Sekrety (Supabase → Edge Functions → Secrets):
//   ANTHROPIC_API_KEY   klucz z console.anthropic.com (NIGDY w repo)
//   ANTHROPIC_MODEL     opcjonalnie, domyślnie claude-haiku-4-5
// SUPABASE_URL, SUPABASE_ANON_KEY i SUPABASE_SERVICE_ROLE_KEY Supabase podaje sam.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import BIBLIOTEKA from "./biblioteka.json" with { type: "json" };

type Jezyk = "en" | "pl";

interface KartaWejscie {
  name: string;
  reversed: boolean;
  position: string;
  positionMeaning?: string;
  keywords?: string[];
}

interface Wejscie {
  lang?: Jezyk;
  spread?: { name?: string; slug?: string };
  question?: string;
  cards?: KartaWejscie[];
  messages?: { role: "user" | "assistant"; content: string }[];
}

interface WpisDziennika {
  created_at: string;
  lang: string;
  spread_name: string | null;
  question: string | null;
  cards: { name: string; reversed: boolean; position: string }[];
  note: string | null;
}

const MODEL = Deno.env.get("ANTHROPIC_MODEL") ?? "claude-haiku-4-5";
const MAX_HISTORII = 12; // par wiadomości trzymanych w kontekście
const MAX_ZNAKOW_WIADOMOSCI = 2000;
const MAX_TOKENOW_ODPOWIEDZI = 700;

// Dozwolone źródła (CORS). Lokalny dev + produkcja.
const DOZWOLONE_ORIGINY = new Set([
  "https://auralarcana.com",
  "https://www.auralarcana.com",
  "http://localhost:3000",
]);

function naglowkiCors(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") ?? "";
  return {
    "Access-Control-Allow-Origin": DOZWOLONE_ORIGINY.has(origin) ? origin : "https://auralarcana.com",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
}

function odpowiedz(req: Request, status: number, dane: unknown): Response {
  return new Response(JSON.stringify(dane), {
    status,
    headers: { ...naglowkiCors(req), "Content-Type": "application/json" },
  });
}

function przytnij(tekst: string, max: number): string {
  return tekst.length > max ? tekst.slice(0, max) + "…" : tekst;
}

// ---------------------------------------------------------------------------
// Prompt systemowy. Dwa warianty, bo głos Wyroczni ma brzmieć naturalnie
// w obu językach, nie jak tłumaczenie.
// ---------------------------------------------------------------------------
function opisBiblioteki(lang: Jezyk): string {
  return BIBLIOTEKA.map(
    (u) => `- "${u.title}" (${u.minutes} min; ${u.moods.join(", ")}): ${lang === "pl" ? u.atmospherePl : u.atmosphere}`,
  ).join("\n");
}

function opisKart(cards: KartaWejscie[]): string {
  return cards
    .map((k, i) => {
      const slowa = k.keywords?.length ? ` [${k.keywords.join(", ")}]` : "";
      const znaczenie = k.positionMeaning ? ` (${k.positionMeaning})` : "";
      return `${i + 1}. ${k.position}${znaczenie}: ${k.name}${k.reversed ? " (reversed)" : ""}${slowa}`;
    })
    .join("\n");
}

function opisDziennika(wpisy: WpisDziennika[], lang: Jezyk): string {
  if (!wpisy.length) return lang === "pl" ? "(dziennik jest jeszcze pusty)" : "(the journal is still empty)";
  return wpisy
    .map((w) => {
      const data = w.created_at.slice(0, 10);
      const karty = (w.cards ?? [])
        .map((k) => `${k.position}: ${k.name}${k.reversed ? " (rev.)" : ""}`)
        .join("; ");
      const pytanie = w.question ? ` Q: "${przytnij(w.question, 200)}"` : "";
      const notatka = w.note ? ` Note: "${przytnij(w.note, 300)}"` : "";
      return `- ${data}, ${w.spread_name ?? "spread"}: ${karty}.${pytanie}${notatka}`;
    })
    .join("\n");
}

function promptSystemowy(lang: Jezyk, wejscie: Wejscie, dziennik: WpisDziennika[]): string {
  const karty = wejscie.cards?.length ? opisKart(wejscie.cards) : "(no cards drawn yet)";
  const pytanie = wejscie.question?.trim() || (lang === "pl" ? "(bez pytania)" : "(no stated question)");
  const spread = wejscie.spread?.name ?? (lang === "pl" ? "rozkład" : "spread");

  if (lang === "pl") {
    return `Jesteś Wyrocznią Aural Arcana: czytasz tarota na stronie auralarcana.com, domu kanału muzycznego Aural Arcana: Sonic Mysteries.

GŁOS: mistyczny, ale ciepły i konkretny. Mówisz do jednej osoby, po polsku, w drugiej osobie. Zwięźle: zwykle 2 do 4 krótkich akapitów, bez list wypunktowanych, bez nagłówków, bez emoji. Nigdy nie używasz myślnika ze spacjami (" - " ani " — ") jako znaku interpunkcyjnego: zamiast tego przecinek, kropka albo dwukropek. Nie przepowiadasz przyszłości jako faktu, nie dajesz porad medycznych, prawnych ani finansowych; w takich sprawach łagodnie odsyłasz do specjalisty.

TRADYCJA: interpretujesz karty w tradycji Rider-Waite-Smith, z uwagą na pozycję w rozkładzie, karty odwrócone, żywioły i to, jak karty rozmawiają ze sobą. Łączysz je w jedną opowieść zamiast omawiać osobno. Odpowiadasz na to, o co osoba naprawdę pyta; jeśli pytanie wychodzi poza rozkład, wracasz do kart.

AKTUALNE CZYTANIE
Rozkład: ${spread}
Pytanie osoby: ${pytanie}
Karty:
${karty}

OSTATNIE WPISY Z ARCANA JOURNAL TEJ OSOBY (od najnowszego; nawiązuj tylko, gdy to naprawdę coś wnosi):
${opisDziennika(dziennik, lang)}

BIBLIOTEKA MUZYKI AURAL ARCANA (dostępna na stronie):
${opisBiblioteki(lang)}

ZAKOŃCZENIE: każdą odpowiedź kończysz osobną, ostatnią linią z jedną propozycją utworu z biblioteki powyżej, pasującą do nastroju czytania, w dokładnie takim formacie:
♪ Tytuł utworu dokładnie jak w bibliotece: jedno zdanie, dlaczego ten.`;
  }

  return `You are the Aural Arcana reader: you read tarot on auralarcana.com, home of the music channel Aural Arcana: Sonic Mysteries.

VOICE: mystical but warm and concrete. You speak to one person, in English, in the second person. Concise: usually 2 to 4 short paragraphs, no bullet lists, no headings, no emoji. Never use a spaced dash (" - " or " — ") as punctuation: use a comma, a full stop or a colon instead. You do not predict the future as fact and you give no medical, legal or financial advice; for those you gently point to a qualified professional.

TRADITION: you interpret the cards in the Rider-Waite-Smith tradition, attentive to position in the spread, reversals, the elements, and the way the cards speak to one another. You weave them into one story rather than listing them. You answer what the person is really asking; when a question drifts beyond the spread, you bring it back to the cards.

CURRENT READING
Spread: ${spread}
The person's question: ${pytanie}
Cards:
${karty}

THIS PERSON'S LAST ARCANA JOURNAL ENTRIES (newest first; refer to them only when it truly adds something):
${opisDziennika(dziennik, lang)}

AURAL ARCANA MUSIC LIBRARY (available on the site):
${opisBiblioteki(lang)}

CLOSING: end every reply with a separate final line holding exactly one track suggestion from the library above that fits the mood of the reading, in exactly this format:
♪ Track title exactly as in the library: one sentence on why this one.`;
}

// ---------------------------------------------------------------------------
// Główna obsługa żądania
// ---------------------------------------------------------------------------
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: naglowkiCors(req) });
  if (req.method !== "POST") return odpowiedz(req, 405, { error: "method_not_allowed" });

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  // 1. Kim jest osoba? Token z nagłówka Authorization (sesja Supabase Auth w przeglądarce).
  const auth = req.headers.get("Authorization") ?? "";
  if (!auth.startsWith("Bearer ")) return odpowiedz(req, 401, { error: "unauthorized" });

  const klientUzytkownika = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: auth } },
  });
  const { data: dane, error: bladUzytkownika } = await klientUzytkownika.auth.getUser();
  if (bladUzytkownika || !dane.user) return odpowiedz(req, 401, { error: "unauthorized" });
  const uzytkownik = dane.user;

  // 2. Dostęp i limit: jedno źródło prawdy w SQL (reader_status).
  const admin = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });
  const { data: status, error: bladStatusu } = await admin.rpc("reader_status", { p_user: uzytkownik.id });
  if (bladStatusu || !status) return odpowiedz(req, 500, { error: "status_failed" });
  if (!status.subscriber) return odpowiedz(req, 403, { error: "not_subscriber", usage: status });
  if (status.remaining <= 0) return odpowiedz(req, 429, { error: "limit_reached", usage: status });

  // 3. Treść żądania: rozkład, pytanie, historia.
  let wejscie: Wejscie;
  try {
    wejscie = (await req.json()) as Wejscie;
  } catch {
    return odpowiedz(req, 400, { error: "bad_json" });
  }
  const lang: Jezyk = wejscie.lang === "pl" ? "pl" : "en";
  const historia = (wejscie.messages ?? [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-MAX_HISTORII * 2)
    .map((m) => ({ role: m.role, content: przytnij(m.content.trim(), MAX_ZNAKOW_WIADOMOSCI) }));
  if (!historia.length || historia[historia.length - 1].role !== "user") {
    return odpowiedz(req, 400, { error: "no_user_message" });
  }
  // API wymaga naprzemiennych ról zaczynających się od user.
  const wiadomosci: typeof historia = [];
  for (const m of historia) {
    if (!wiadomosci.length && m.role !== "user") continue;
    if (wiadomosci.length && wiadomosci[wiadomosci.length - 1].role === m.role) {
      wiadomosci[wiadomosci.length - 1].content += "\n\n" + m.content;
    } else {
      wiadomosci.push({ ...m });
    }
  }

  // 4. Pięć ostatnich wpisów z dziennika tej osoby.
  const { data: dziennik } = await admin
    .from("journal_entries")
    .select("created_at, lang, spread_name, question, cards, note")
    .eq("user_id", uzytkownik.id)
    .order("created_at", { ascending: false })
    .limit(5);

  // 5. Claude.
  const klucz = Deno.env.get("ANTHROPIC_API_KEY");
  if (!klucz) {
    console.error("reader-chat: brak sekretu ANTHROPIC_API_KEY");
    return odpowiedz(req, 500, { error: "reader_unavailable" });
  }
  const start = Date.now();
  let odpowiedzModelu = "";
  let tokenyWe = 0;
  let tokenyWy = 0;
  let blad: string | null = null;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": klucz,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENOW_ODPOWIEDZI,
        system: promptSystemowy(lang, wejscie, (dziennik ?? []) as WpisDziennika[]),
        messages: wiadomosci,
      }),
    });
    const json = await res.json();
    if (!res.ok) {
      blad = `anthropic_${res.status}: ${json?.error?.message ?? "unknown"}`;
    } else {
      odpowiedzModelu = (json.content ?? [])
        .filter((c: { type: string }) => c.type === "text")
        .map((c: { text: string }) => c.text)
        .join("\n")
        .trim();
      tokenyWe = json.usage?.input_tokens ?? 0;
      tokenyWy = json.usage?.output_tokens ?? 0;
    }
  } catch (e) {
    blad = `fetch_failed: ${(e as Error).message}`;
  }

  // 6. Log każdego wywołania: czas, użytkownik, tokeny, błąd. Nieudane nie zużywają limitu.
  await admin.from("reader_calls").insert({
    user_id: uzytkownik.id,
    lang,
    model: MODEL,
    input_tokens: tokenyWe,
    output_tokens: tokenyWy,
    ok: !blad,
    error: blad ? przytnij(blad, 500) : null,
  });

  if (blad) {
    console.error(`reader-chat ${uzytkownik.id} ${blad}`);
    return odpowiedz(req, 502, { error: "reader_unavailable" });
  }

  console.log(`reader-chat ${uzytkownik.id} ${lang} in=${tokenyWe} out=${tokenyWy} ${Date.now() - start}ms`);

  return odpowiedz(req, 200, {
    reply: odpowiedzModelu,
    usage: {
      used: status.used + 1,
      limit: status.limit,
      remaining: Math.max(status.remaining - 1, 0),
      resets_at: status.resets_at,
    },
  });
});
