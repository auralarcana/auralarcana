"use client";

// Strona konta i Arcana Journal: logowanie linkiem e-mail (Supabase Auth, bez hasła),
// status Inner Circle, lista zapisanych czytań. Używana przez /journal/ i /pl/dziennik/.

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { JezykOdczytu } from "@/lib/tarot";
import { TEKSTY_WYROCZNI } from "@/data/wyrocznia";
import { linkDoSubskrypcji, platnosciDzialaja } from "@/lib/subskrypcja";
import { TEKSTY_WYROCZNI_PL } from "@/data/pl/wyrocznia";
import { useKonto } from "@/lib/konto";
import { supabase } from "@/lib/supabase";

interface Wpis {
  id: string;
  created_at: string;
  lang: string;
  spread_name: string | null;
  question: string | null;
  cards: { slug: string; name: string; reversed: boolean; position: string }[];
  note: string | null;
}

export default function Dziennik({ jezyk }: { jezyk: JezykOdczytu }) {
  const t = jezyk === "pl" ? TEKSTY_WYROCZNI_PL : TEKSTY_WYROCZNI;
  const linkKart = jezyk === "pl" ? "/pl/karty/" : "/cards/";
  const linkTarota = jezyk === "pl" ? "/pl/tarot/" : "/tarot/";
  const konto = useKonto();

  const [email, setEmail] = useState("");
  const [stanLogowania, setStanLogowania] = useState<"gotowe" | "wysylka" | "wyslano" | "blad">("gotowe");
  const [wpisy, setWpisy] = useState<Wpis[] | null>(null);

  const wczytajWpisy = useCallback(async () => {
    const { data } = await supabase()
      .from("journal_entries")
      .select("id, created_at, lang, spread_name, question, cards, note")
      .order("created_at", { ascending: false })
      .limit(100);
    setWpisy((data as Wpis[]) ?? []);
  }, []);

  useEffect(() => {
    if (konto.sesja) wczytajWpisy();
    else setWpisy(null);
  }, [konto.sesja, wczytajWpisy]);

  async function wyslijLink(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStanLogowania("wysylka");
    // Link wraca na tę samą stronę (EN albo PL); Supabase musi mieć ten adres na liście Redirect URLs.
    const { error } = await supabase().auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin + window.location.pathname },
    });
    setStanLogowania(error ? "blad" : "wyslano");
  }

  async function usun(id: string) {
    if (!window.confirm(t.usunPotwierdz)) return;
    await supabase().from("journal_entries").delete().eq("id", id);
    wczytajWpisy();
  }

  const subskrybent = Boolean(konto.status?.subscriber);

  // Powrót z checkoutu Polar (?paid=1): subskrypcja nadaje się po e-mailu, więc
  // prosimy o zalogowanie tym samym adresem, jeśli jeszcze nie ma sesji.
  const [poPlatnosci, setPoPlatnosci] = useState(false);
  useEffect(() => {
    setPoPlatnosci(new URLSearchParams(window.location.search).get("paid") === "1");
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      {poPlatnosci && !subskrybent && (
        <section className="mb-8 border border-zloto/40 bg-noc-3 p-6 sm:p-8" role="status">
          <p className="etykieta mb-2">{t.dziekujemyEtykieta}</p>
          <p className="text-kosc">{t.dziekujemyTresc}</p>
        </section>
      )}

      {/* Konto */}
      <section className="mb-12 border border-linia bg-noc-2 p-6 sm:p-8">
        {konto.wczytywanie ? (
          <p className="text-sm text-przygaszony" aria-busy="true">
            …
          </p>
        ) : konto.sesja ? (
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
            <div>
              <p className="etykieta mb-1">{subskrybent ? t.statusSubskrybent : t.statusBrak}</p>
              <p className="text-sm text-przygaszony">
                {t.zalogowanoJako} <span className="text-kosc">{konto.uzytkownik?.email}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={konto.wyloguj}
              className="text-sm text-przygaszony underline underline-offset-4 hover:text-kosc"
            >
              {t.wyloguj}
            </button>
          </div>
        ) : (
          <>
            <h2 className="mb-2 text-2xl">{t.logowanieTytul}</h2>
            <p className="mb-5 text-sm text-przygaszony">{t.logowanieTresc}</p>
            {stanLogowania === "wyslano" ? (
              <p className="text-zloto-2" role="status">
                {t.linkWyslany}
              </p>
            ) : (
              <form onSubmit={wyslijLink} className="flex flex-col gap-3 sm:flex-row">
                <label className="flex-1">
                  <span className="sr-only">{t.emailEtykieta}</span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailEtykieta}
                    className="w-full border border-linia bg-noc p-3 text-kosc placeholder:text-przygaszony/50 focus:border-zloto focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  disabled={stanLogowania === "wysylka"}
                  className="border border-zloto px-6 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc disabled:opacity-50"
                >
                  {t.wyslijLink}
                </button>
              </form>
            )}
            {stanLogowania === "blad" && (
              <p className="mt-3 text-sm italic text-fiolet" role="alert">
                {t.logowanieBlad}
              </p>
            )}
          </>
        )}
      </section>

      {/* Inner Circle: co daje i jak dołączyć */}
      {!subskrybent && (
        <section id="inner-circle" className="mb-12 scroll-mt-24 border border-zloto/40 bg-noc-3 p-6 sm:p-8">
          <p className="etykieta mb-2">{t.innerCircleEtykieta}</p>
          <h2 className="mb-4 text-2xl">{t.innerCircleTytul}</h2>
          <p className="mb-5 text-przygaszony">{t.innerCircleTresc}</p>
          <ul className="mb-6 space-y-2 text-sm">
            {t.innerCirclePunkty.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden="true" className="text-zloto">
                  ✦
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {/* Dopóki LINK_SUBSKRYPCJI nie prowadzi do checkoutu, nie ma czego kupić: pokazujemy zapowiedź. */}
          {!platnosciDzialaja(jezyk) ? (
            <p className="text-sm italic text-fiolet">{t.innerCircleWkrotce}</p>
          ) : (
            <a
              href={linkDoSubskrypcji(jezyk, konto.uzytkownik?.email)}
              className="poswiata inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
            >
              {t.subskrybuj}
            </a>
          )}
        </section>
      )}

      {/* Wpisy */}
      {konto.sesja && (
        <section>
          <h2 className="separator-gwiazda mb-6 text-2xl">{t.wpisyTytul}</h2>
          {wpisy === null ? null : wpisy.length === 0 ? (
            <div className="text-center">
              <p className="mb-5 text-przygaszony">{t.brakWpisow}</p>
              <Link
                href={linkTarota}
                className="inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
              >
                {t.doCzytania}
              </Link>
            </div>
          ) : (
            <ol className="space-y-6">
              {wpisy.map((w) => (
                <li key={w.id} className="border border-linia bg-noc-2 p-6">
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="etykieta text-przygaszony">
                      {new Date(w.created_at).toLocaleDateString(jezyk === "pl" ? "pl-PL" : "en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      {w.spread_name && <span> · {w.spread_name}</span>}
                    </p>
                    <button
                      type="button"
                      onClick={() => usun(w.id)}
                      className="text-xs text-przygaszony underline underline-offset-4 hover:text-kosc"
                    >
                      {t.usun}
                    </button>
                  </div>
                  {w.question && <p className="mb-3 italic text-fiolet">&ldquo;{w.question}&rdquo;</p>}
                  <ul className="mb-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {w.cards.map((k, i) => (
                      <li key={i}>
                        <span className="text-przygaszony">{k.position}: </span>
                        {/* Slug jest w języku wpisu; link działa, gdy wpis powstał w tym samym języku co strona. */}
                        {w.lang === jezyk ? (
                          <Link
                            href={`${linkKart}${k.slug}/`}
                            className="text-zloto-2 underline underline-offset-4 hover:text-zloto"
                          >
                            {k.name}
                          </Link>
                        ) : (
                          <span className="text-kosc">{k.name}</span>
                        )}
                        {k.reversed && <span className="text-fiolet"> ({t.odwrocona})</span>}
                      </li>
                    ))}
                  </ul>
                  {w.note && (
                    <p className="text-sm">
                      <span className="etykieta text-przygaszony">{t.notatkaWpisu}: </span>
                      {w.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          )}
        </section>
      )}
    </div>
  );
}
