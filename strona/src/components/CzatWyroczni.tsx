"use client";

// Panel czatu Wyroczni pod wynikiem rozkładu (strona czytania).
// Trzy stany: niezalogowana / bez subskrypcji -> zwiastun i przycisk subskrypcji,
// subskrybentka -> rozmowa z Claude przez Edge Function reader-chat, z licznikiem wiadomości.
// Historia rozmowy żyje tylko w tym komponencie (nowe czytanie = nowa rozmowa).

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Spread } from "@/data/spready";
import type { Dobycie, JezykOdczytu } from "@/lib/tarot";
import { UTWORY } from "@/data/muzyka";
import { CENA_MIESIECZNA, TEKSTY_WYROCZNI } from "@/data/wyrocznia";
import { linkDoSubskrypcji, platnosciDzialaja } from "@/lib/subskrypcja";
import { TEKSTY_WYROCZNI_PL } from "@/data/pl/wyrocznia";
import { useKonto } from "@/lib/konto";
import { supabase, URL_CZATU_WYROCZNI, type StatusWyroczni } from "@/lib/supabase";

interface Wiadomosc {
  role: "user" | "assistant";
  content: string;
  /** Powitanie jest lokalne: nie idzie do API i nie zużywa limitu. */
  lokalna?: boolean;
}

interface Props {
  jezyk: JezykOdczytu;
  spread: Spread;
  dobycia: Dobycie[];
  intencja: string;
}

const MAX_DLUGOSC_PYTANIA = 1000;

/** Rozdziela odpowiedź na treść i końcową linię z utworem ("♪ Tytuł: dlaczego"). */
function rozdzielUtwor(tekst: string): { tresc: string; utwor?: { tytul: string; dlaczego: string; kotwica?: string } } {
  const linie = tekst.trim().split("\n");
  const ostatnia = linie[linie.length - 1]?.trim() ?? "";
  if (!ostatnia.startsWith("♪")) return { tresc: tekst.trim() };
  const bezNuty = ostatnia.replace(/^♪\s*/, "");
  const dwukropek = bezNuty.indexOf(":");
  const tytul = (dwukropek > 0 ? bezNuty.slice(0, dwukropek) : bezNuty).replace(/^["„”]|["„”]$/g, "").trim();
  const dlaczego = dwukropek > 0 ? bezNuty.slice(dwukropek + 1).trim() : "";
  const utwor = UTWORY.find((u) => u.title.toLowerCase() === tytul.toLowerCase());
  return {
    tresc: linie.slice(0, -1).join("\n").trim(),
    // Utwory bywają w kilku kategoriach; link prowadzi do sekcji pierwszej z nich.
    utwor: { tytul: utwor?.title ?? tytul, dlaczego, kotwica: utwor?.categories[0] },
  };
}

function formatujDate(iso: string | undefined, jezyk: JezykOdczytu): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString(jezyk === "pl" ? "pl-PL" : "en-GB", {
      day: "numeric",
      month: "long",
    });
  } catch {
    return "";
  }
}

export default function CzatWyroczni({ jezyk, spread, dobycia, intencja }: Props) {
  const t = jezyk === "pl" ? TEKSTY_WYROCZNI_PL : TEKSTY_WYROCZNI;
  const linkDziennika = jezyk === "pl" ? "/pl/dziennik/" : "/journal/";
  const linkMuzyki = jezyk === "pl" ? "/pl/muzyka/" : "/music/";

  const konto = useKonto();
  const [status, setStatus] = useState<StatusWyroczni | null>(null);
  const [wiadomosci, setWiadomosci] = useState<Wiadomosc[]>([]);
  const [pytanie, setPytanie] = useState("");
  const [czeka, setCzeka] = useState(false);
  const [blad, setBlad] = useState<string | null>(null);
  const koniecListy = useRef<HTMLDivElement>(null);

  // Status z konta jako punkt wyjścia; odpowiedzi funkcji aktualizują go na bieżąco.
  useEffect(() => {
    if (konto.status) setStatus(konto.status);
  }, [konto.status]);

  // Powitanie przy pierwszym otwarciu czatu dla subskrybentki.
  useEffect(() => {
    if (status?.subscriber && wiadomosci.length === 0) {
      setWiadomosci([{ role: "assistant", content: t.powitanie(spread.name), lokalna: true }]);
    }
  }, [status?.subscriber, wiadomosci.length, spread.name, t]);

  useEffect(() => {
    koniecListy.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [wiadomosci, czeka]);

  // Karty w formie, którą rozumie Edge Function.
  const karty = useMemo(
    () =>
      dobycia.map((d) => ({
        name: d.karta.name,
        reversed: d.reversed,
        position: spread.positions[d.positionIndex]?.name ?? "",
        positionMeaning: spread.positions[d.positionIndex]?.meaning ?? "",
        keywords: (d.reversed ? d.karta.keywordsReversed : d.karta.keywords).slice(0, 5),
      })),
    [dobycia, spread],
  );

  async function wyslij(e: React.FormEvent) {
    e.preventDefault();
    const tekst = pytanie.trim();
    if (!tekst || czeka) return;
    setBlad(null);
    setPytanie("");

    const nowe: Wiadomosc[] = [...wiadomosci, { role: "user", content: tekst }];
    setWiadomosci(nowe);
    setCzeka(true);

    try {
      const { data } = await supabase().auth.getSession();
      const token = data.session?.access_token;
      if (!token) {
        setBlad(t.bladSesji);
        return;
      }
      const res = await fetch(URL_CZATU_WYROCZNI, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          lang: jezyk,
          spread: { name: spread.name, slug: spread.slug },
          question: intencja.trim(),
          cards: karty,
          messages: nowe.filter((m) => !m.lokalna).map(({ role, content }) => ({ role, content })),
        }),
      });
      const json = await res.json().catch(() => ({}));

      if (res.status === 401) {
        setBlad(t.bladSesji);
      } else if (res.status === 429) {
        if (json.usage) setStatus(json.usage);
        setBlad(t.limitWyczerpany);
      } else if (res.status === 403) {
        if (json.usage) setStatus(json.usage);
        konto.odswiezStatus();
      } else if (!res.ok || !json.reply) {
        setBlad(t.bladOgolny);
      } else {
        setWiadomosci([...nowe, { role: "assistant", content: json.reply }]);
        if (json.usage) setStatus((s) => ({ ...(s ?? json.usage), ...json.usage }));
      }
    } catch {
      setBlad(t.bladOgolny);
    } finally {
      setCzeka(false);
    }
  }

  // Dopóki nie wiemy, kto to, nie migamy zwiastunem.
  if (konto.wczytywanie || (konto.sesja && !status)) {
    return <section className="mx-auto mt-10 max-w-3xl border border-linia bg-noc-2 p-6 sm:p-8" aria-busy="true" />;
  }

  /* ----------------------- Zwiastun: brak konta lub subskrypcji ---------------------- */
  if (!konto.sesja || !status?.subscriber) {
    return (
      <section className="wejscie mx-auto mt-10 max-w-3xl border border-linia bg-noc-2 p-6 sm:p-8">
        <p className="etykieta mb-2">{t.etykieta}</p>
        <h3 className="mb-4 text-2xl">{t.zwiastunTytul}</h3>
        <p className="mb-5 text-przygaszony">{t.zwiastunTresc}</p>
        <ul className="mb-7 space-y-2 text-sm text-kosc">
          {t.zwiastunPunkty.map((p) => (
            <li key={p} className="flex gap-3">
              <span aria-hidden="true" className="text-zloto">
                ✦
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        {konto.sesja && <p className="mb-5 text-sm italic text-fiolet">{t.juzSubskrybujesz}</p>}
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={linkDoSubskrypcji(jezyk, konto.uzytkownik?.email)}
            className="poswiata inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            {t.subskrybuj}
          </a>
          {platnosciDzialaja(jezyk) && (
            <span className="text-sm text-przygaszony">{t.cenaMiesiecznie(CENA_MIESIECZNA)}</span>
          )}
          {!konto.sesja && (
            <Link
              href={linkDziennika}
              className="text-sm text-przygaszony underline underline-offset-4 hover:text-kosc"
            >
              {t.zaloguj}
            </Link>
          )}
        </div>
      </section>
    );
  }

  /* ------------------------------- Czat dla subskrybentki ------------------------------ */
  const limitWyczerpany = status.remaining <= 0;

  return (
    <section className="wejscie mx-auto mt-10 max-w-3xl border border-zloto/40 bg-noc-3 p-6 sm:p-8">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div>
          <p className="etykieta mb-1">{t.etykieta}</p>
          <h3 className="text-2xl">{t.tytul}</h3>
        </div>
        <p className="text-sm text-przygaszony" aria-live="polite">
          {t.pozostalo(status.remaining, status.limit)}
          {status.resets_at && limitWyczerpany && (
            <span className="block text-xs">{t.odnowienie(formatujDate(status.resets_at, jezyk))}</span>
          )}
        </p>
      </div>
      <p className="mb-6 text-sm text-przygaszony">{t.wstep}</p>

      <div className="mb-5 max-h-[32rem] space-y-5 overflow-y-auto pr-1" role="log" aria-live="polite">
        {wiadomosci.map((w, i) => {
          if (w.role === "user") {
            return (
              <div key={i} className="ml-auto max-w-[85%] border border-linia bg-noc-2 px-4 py-3 text-kosc">
                {w.content}
              </div>
            );
          }
          const { tresc, utwor } = rozdzielUtwor(w.content);
          return (
            <div key={i} className="max-w-[92%] border-l border-zloto/50 pl-4">
              {tresc.split(/\n{2,}/).map((akapit, j) => (
                <p key={j} className="mb-3 last:mb-0">
                  {akapit}
                </p>
              ))}
              {utwor && (
                <p className="mt-3 text-sm text-fiolet">
                  <span aria-hidden="true">♪ </span>
                  <Link
                    href={utwor.kotwica ? `${linkMuzyki}#${utwor.kotwica}` : linkMuzyki}
                    target="_blank"
                    rel="noopener"
                    className="text-zloto-2 underline underline-offset-4 hover:text-zloto"
                    title={t.utworLink}
                  >
                    {utwor.tytul}
                  </Link>
                  {utwor.dlaczego && <span>: {utwor.dlaczego}</span>}
                </p>
              )}
            </div>
          );
        })}
        {czeka && <p className="pl-4 text-sm italic text-przygaszony">{t.mysli}</p>}
        <div ref={koniecListy} />
      </div>

      {blad && (
        <p className="mb-4 text-sm italic text-fiolet" role="alert">
          {blad}
        </p>
      )}

      <form onSubmit={wyslij} className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">{t.placeholder}</span>
          <textarea
            value={pytanie}
            onChange={(e) => setPytanie(e.target.value.slice(0, MAX_DLUGOSC_PYTANIA))}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
            rows={2}
            disabled={czeka || limitWyczerpany}
            placeholder={limitWyczerpany ? t.limitWyczerpany : t.placeholder}
            className="w-full border border-linia bg-noc-2 p-3 text-kosc placeholder:text-przygaszony/50 focus:border-zloto focus:outline-none disabled:opacity-60"
          />
        </label>
        <button
          type="submit"
          disabled={czeka || limitWyczerpany || !pytanie.trim()}
          className="border border-zloto px-6 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-zloto-2"
        >
          {t.wyslij}
        </button>
      </form>
      <p className="mt-4 text-xs text-przygaszony/80">{t.disclaimer}</p>
    </section>
  );
}
