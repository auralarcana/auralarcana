"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { KARTY, type KartaTarota } from "@/data/karty";
import { SPREADY, type Spread } from "@/data/spready";
import { utworySku } from "@/data/muzyka";
import { potasuj, syntezaOdczytu, type Dobycie } from "@/lib/tarot";
import { KartaAwers, KartaRewers } from "@/components/KartaGrafika";
import { DISCLAIMER } from "@/data/strona";

type Faza = "wybor-spreadu" | "skupienie" | "wybor-kart" | "odczyt";

function czyOdwrocona(): boolean {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint32Array(1))[0] % 5 === 0;
  }
  return Math.random() < 0.2;
}

const ILE_NA_STOLE = 18;

export default function TarotCzytanie() {
  const [faza, setFaza] = useState<Faza>("wybor-spreadu");
  const [spread, setSpread] = useState<Spread | null>(null);
  const [zReversami, setZReversami] = useState(true);
  const [intencja, setIntencja] = useState("");
  const [talia, setTalia] = useState<KartaTarota[]>([]);
  const [wybrane, setWybrane] = useState<number[]>([]);
  const [dobycia, setDobycia] = useState<Dobycie[]>([]);
  const [odkryte, setOdkryte] = useState<number>(0);

  const synteza = useMemo(
    () => (spread && dobycia.length > 1 ? syntezaOdczytu(dobycia, spread) : []),
    [dobycia, spread],
  );

  function zacznijSkupienie(s: Spread) {
    setSpread(s);
    setFaza("skupienie");
  }

  function rozlozKarty() {
    setTalia(potasuj(KARTY));
    setWybrane([]);
    setFaza("wybor-kart");
  }

  function wybierzKarte(i: number) {
    if (!spread || wybrane.includes(i)) return;
    const nowe = [...wybrane, i];
    setWybrane(nowe);
    if (nowe.length === spread.positions.length) {
      const dob: Dobycie[] = nowe.map((idx, p) => ({
        karta: talia[idx],
        reversed: zReversami ? czyOdwrocona() : false,
        positionIndex: p,
      }));
      setDobycia(dob);
      setOdkryte(0);
      window.setTimeout(() => setFaza("odczyt"), 450);
    }
  }

  function odNowa() {
    setFaza("wybor-spreadu");
    setSpread(null);
    setDobycia([]);
    setWybrane([]);
    setOdkryte(0);
    setIntencja("");
  }

  /* ----------------------------- FAZA 1: spread ----------------------------- */
  if (faza === "wybor-spreadu") {
    return (
      <div className="wejscie">
        <p className="mx-auto mb-10 max-w-2xl text-center text-przygaszony">
          Choose the shape of your reading. One card for a daily signal, three for a story or a
          decision, five when the question has roots. The deck holds all 78 cards, shuffled with
          true randomness each time.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {SPREADY.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => zacznijSkupienie(s)}
              className="group border border-linia bg-noc-2 p-6 text-left transition-colors hover:border-zloto"
            >
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <h3 className="text-xl">{s.name}</h3>
                <span className="etykieta whitespace-nowrap text-przygaszony">
                  {s.positions.length} {s.positions.length === 1 ? "card" : "cards"}
                </span>
              </div>
              <p className="mb-3 text-sm italic text-fiolet">{s.tagline}</p>
              <p className="text-sm text-przygaszony">{s.description}</p>
              <p className="etykieta mt-4 text-zloto opacity-0 transition-opacity group-hover:opacity-100">
                Begin this reading →
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------------------- FAZA 2: skupienie --------------------------- */
  if (faza === "skupienie" && spread) {
    return (
      <div className="wejscie mx-auto max-w-xl text-center">
        <p className="etykieta mb-2">{spread.name}</p>
        <h2 className="mb-6 text-2xl">Hold your question</h2>
        <p className="mb-6 text-przygaszony">
          Take one slow breath. Let the question form in its own words: not the answer you hope
          for, just the matter itself. You may write it below to sharpen it. It stays on this page
          and is never sent or stored anywhere.
        </p>
        <label className="block">
          <span className="sr-only">Your question or intention (optional)</span>
          <textarea
            value={intencja}
            onChange={(e) => setIntencja(e.target.value)}
            rows={2}
            placeholder="What should I understand about..."
            className="w-full border border-linia bg-noc-2 p-4 text-kosc placeholder:text-przygaszony/50 focus:border-zloto focus:outline-none"
          />
        </label>
        <div className="mt-6 flex items-center justify-center gap-3">
          <input
            id="reversy"
            type="checkbox"
            checked={zReversami}
            onChange={(e) => setZReversami(e.target.checked)}
            className="h-4 w-4 accent-[#c6a35f]"
          />
          <label htmlFor="reversy" className="text-sm text-przygaszony">
            Include reversed cards (a deeper, more demanding reading)
          </label>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={rozlozKarty}
            className="poswiata border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            SHUFFLE THE DECK
          </button>
          <button
            type="button"
            onClick={odNowa}
            className="text-sm text-przygaszony underline underline-offset-4 hover:text-kosc"
          >
            choose another spread
          </button>
        </div>
      </div>
    );
  }

  /* --------------------------- FAZA 3: wybór kart --------------------------- */
  if (faza === "wybor-kart" && spread) {
    const zostalo = spread.positions.length - wybrane.length;
    return (
      <div className="wejscie">
        <div className="mb-8 text-center">
          <p className="etykieta mb-2">{spread.name}</p>
          <h2 className="mb-3 text-2xl">The deck is spread before you</h2>
          <p aria-live="polite" className="text-przygaszony">
            {zostalo > 0
              ? `Choose ${zostalo} more ${zostalo === 1 ? "card" : "cards"}, wherever your hand is drawn.`
              : "The cards are chosen. Turning them over..."}
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-6 gap-2 sm:gap-3 md:grid-cols-9">
          {Array.from({ length: ILE_NA_STOLE }, (_, i) => {
            const wybrana = wybrane.includes(i);
            return (
              <button
                key={i}
                type="button"
                onClick={() => wybierzKarte(i)}
                disabled={wybrana || zostalo === 0}
                aria-label={wybrana ? `Card ${i + 1}, chosen` : `Choose card ${i + 1}`}
                className={`karta-wybor ${wybrana ? "-translate-y-3 opacity-40" : ""}`}
              >
                <KartaRewers className="h-auto w-full" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  /* ----------------------------- FAZA 4: odczyt ----------------------------- */
  if (faza === "odczyt" && spread) {
    return (
      <div className="wejscie">
        <div className="mb-10 text-center">
          <p className="etykieta mb-2">{spread.name}</p>
          {intencja.trim() && (
            <p className="mx-auto max-w-xl italic text-fiolet">&ldquo;{intencja.trim()}&rdquo;</p>
          )}
          <p className="mt-3 text-sm text-przygaszony" aria-live="polite">
            {odkryte < dobycia.length
              ? "Turn each card when you are ready. There is no hurry here."
              : "The reading is laid out in full below."}
          </p>
        </div>

        {/* Karty do odkrycia */}
        <div
          className={`mx-auto mb-14 grid max-w-3xl gap-4 ${
            dobycia.length === 1
              ? "max-w-[220px] grid-cols-1"
              : dobycia.length === 3
                ? "grid-cols-3"
                : "grid-cols-3 sm:grid-cols-5"
          }`}
        >
          {dobycia.map((d, i) => {
            const jestOdkryta = i < odkryte;
            return (
              <div key={i} className="text-center">
                <button
                  type="button"
                  className="karta-scena block w-full"
                  onClick={() => i === odkryte && setOdkryte(odkryte + 1)}
                  disabled={jestOdkryta || i !== odkryte}
                  aria-label={
                    jestOdkryta
                      ? `${d.karta.name}${d.reversed ? ", reversed" : ""}`
                      : i === odkryte
                        ? `Reveal the ${spread.positions[i].name} card`
                        : "Card not yet revealed"
                  }
                >
                  <div
                    className={`karta-bryla aspect-[3/5] w-full ${jestOdkryta ? "odkryta" : ""} ${
                      i === odkryte ? "poswiata" : ""
                    }`}
                  >
                    <div className="karta-rewers absolute inset-0">
                      <KartaRewers className="h-full w-full" />
                    </div>
                    <div className={`karta-awers ${d.reversed ? "rotate-180" : ""}`}>
                      <KartaAwers karta={d.karta} className="h-full w-full" />
                    </div>
                  </div>
                </button>
                <p className="etykieta mt-3 text-przygaszony">{spread.positions[i].name}</p>
              </div>
            );
          })}
        </div>

        {odkryte < dobycia.length && (
          <div className="mb-14 text-center">
            <button
              type="button"
              onClick={() => setOdkryte(dobycia.length)}
              className="text-sm text-przygaszony underline underline-offset-4 hover:text-kosc"
            >
              reveal all cards at once
            </button>
          </div>
        )}

        {/* Interpretacje */}
        <div className="mx-auto max-w-3xl space-y-10">
          {dobycia.slice(0, odkryte).map((d, i) => {
            const muzyka = d.karta.musicSku ? utworySku(d.karta.musicSku) : undefined;
            return (
              <section key={i} className="wejscie border border-linia bg-noc-2 p-6 sm:p-8">
                <p className="etykieta mb-1 text-przygaszony">
                  {spread.positions[i].name}: {spread.positions[i].meaning}
                </p>
                <h3 className="mb-1 text-2xl">
                  {d.karta.name}
                  {d.reversed && <span className="text-fiolet"> · reversed</span>}
                </h3>
                <p className="mb-4 text-sm italic text-fiolet">{d.karta.essence}</p>
                <p className="mb-3 text-sm text-przygaszony">
                  {(d.reversed ? d.karta.keywordsReversed : d.karta.keywords).join(" · ")}
                </p>
                <p className="mb-4">{d.reversed ? d.karta.reversed : d.karta.upright}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <Link
                    href={`/cards/${d.karta.slug}/`}
                    className="text-zloto-2 underline underline-offset-4 hover:text-zloto"
                  >
                    Full meaning of {d.karta.name}
                  </Link>
                  {muzyka && (
                    <Link
                      href="/music/"
                      className="text-przygaszony underline underline-offset-4 hover:text-kosc"
                    >
                      Soundscape for this card: {muzyka.title}
                    </Link>
                  )}
                </div>
              </section>
            );
          })}

          {/* Synteza */}
          {odkryte === dobycia.length && synteza.length > 0 && (
            <section className="wejscie border border-zloto/40 bg-noc-3 p-6 sm:p-8">
              <p className="etykieta mb-3">How the cards speak together</p>
              <div className="space-y-4">
                {synteza.map((z, i) => (
                  <p key={i}>{z}</p>
                ))}
              </div>
            </section>
          )}

          {odkryte === dobycia.length && (
            <div className="space-y-6 text-center">
              <p className="mx-auto max-w-xl text-xs text-przygaszony/80">{DISCLAIMER}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={odNowa}
                  className="border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
                >
                  NEW READING
                </button>
                <Link
                  href="/music/"
                  className="text-sm text-przygaszony underline underline-offset-4 hover:text-kosc"
                >
                  browse music for your next session
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
