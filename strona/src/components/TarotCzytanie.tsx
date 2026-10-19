"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { KARTY, type KartaTarota } from "@/data/karty";
import { KARTY_PL } from "@/data/pl/karty";
import { SPREADY, type Spread } from "@/data/spready";
import { SPREADY_PL } from "@/data/pl/spready";
import { utworySku } from "@/data/muzyka";
import { utworySkuPl } from "@/data/pl/muzyka";
import { potasuj, syntezaOdczytu, type Dobycie, type JezykOdczytu } from "@/lib/tarot";
import { KartaAwers, KartaRewers } from "@/components/KartaGrafika";
import { DISCLAIMER } from "@/data/strona";
import { DISCLAIMER_PL } from "@/data/pl/strona";

type Faza = "wybor-spreadu" | "skupienie" | "wybor-kart" | "odczyt";

function czyOdwrocona(): boolean {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint32Array(1))[0] % 5 === 0;
  }
  return Math.random() < 0.2;
}

const ILE_NA_STOLE = 18;

// Odmiana "karta" w mianowniku i bierniku.
function kartyMian(n: number): string {
  if (n === 1) return "karta";
  if (n >= 2 && n <= 4) return "karty";
  return "kart";
}
function kartyBier(n: number): string {
  if (n === 1) return "kartę";
  return kartyMian(n);
}

const TEKSTY = {
  en: {
    intro:
      "Choose the shape of your reading. One card for a daily signal, three for a story or a decision, five when the question has roots. The deck holds all 78 cards, shuffled with true randomness each time.",
    ileKart: (n: number) => `${n} ${n === 1 ? "card" : "cards"}`,
    zacznij: "Begin this reading →",
    trzymajPytanie: "Hold your question",
    skupienie:
      "Take one slow breath. Let the question form in its own words: not the answer you hope for, just the matter itself. You may write it below to sharpen it. It stays on this page and is never sent or stored anywhere.",
    etykietaPytania: "Your question or intention (optional)",
    placeholder: "What should I understand about...",
    reversy: "Include reversed cards (a deeper, more demanding reading)",
    tasuj: "SHUFFLE THE DECK",
    innySpread: "choose another spread",
    taliaRozlozona: "The deck is spread before you",
    wybierzJeszcze: (n: number) =>
      `Choose ${n} more ${n === 1 ? "card" : "cards"}, wherever your hand is drawn.`,
    wybrano: "The cards are chosen. Turning them over...",
    kartaWybrana: (i: number) => `Card ${i}, chosen`,
    wybierzKarte: (i: number) => `Choose card ${i}`,
    odwrocona: ", reversed",
    odkryj: (nazwa: string) => `Reveal the ${nazwa} card`,
    nieodkryta: "Card not yet revealed",
    odwracaj: "Turn each card when you are ready. There is no hurry here.",
    rozpisane: "The reading is laid out in full below.",
    odkryjWszystkie: "reveal all cards at once",
    dopiskaRewers: " · reversed",
    pelneZnaczenie: (nazwa: string) => `Full meaning of ${nazwa}`,
    pejzaz: (tytul: string) => `Soundscape for this card: ${tytul}`,
    razem: "How the cards speak together",
    noweCzytanie: "NEW READING",
    przegladajMuzyke: "browse music for your next session",
    linkKarty: "/cards/",
    linkMuzyka: "/music/",
  },
  pl: {
    intro:
      "Wybierz kształt swojego czytania. Jedna karta na codzienny sygnał, trzy na historię albo decyzję, pięć, gdy pytanie ma korzenie. Talia zawiera wszystkie 78 kart, za każdym razem tasowanych prawdziwą losowością.",
    ileKart: (n: number) => `${n} ${kartyMian(n)}`,
    zacznij: "Zacznij to czytanie →",
    trzymajPytanie: "Zatrzymaj pytanie",
    skupienie:
      "Weź jeden powolny oddech. Pozwól pytaniu ułożyć się własnymi słowami: nie odpowiedzi, na którą liczysz, tylko samej sprawie. Możesz zapisać je poniżej, żeby je wyostrzyć. Zostaje na tej stronie i nigdy nie jest nigdzie wysyłane ani zapisywane.",
    etykietaPytania: "Twoje pytanie lub intencja (opcjonalnie)",
    placeholder: "Co powinnam zrozumieć o...",
    reversy: "Uwzględnij karty odwrócone (głębsze, bardziej wymagające czytanie)",
    tasuj: "POTASUJ TALIĘ",
    innySpread: "wybierz inny rozkład",
    taliaRozlozona: "Talia leży przed tobą rozłożona",
    wybierzJeszcze: (n: number) =>
      `Wybierz jeszcze ${n === 1 ? "jedną kartę" : `${n} ${kartyBier(n)}`}, gdziekolwiek ciągnie dłoń.`,
    wybrano: "Karty wybrane. Odwracamy...",
    kartaWybrana: (i: number) => `Karta ${i}, wybrana`,
    wybierzKarte: (i: number) => `Wybierz kartę ${i}`,
    odwrocona: ", odwrócona",
    odkryj: (nazwa: string) => `Odkryj kartę pozycji: ${nazwa}`,
    nieodkryta: "Karta jeszcze nieodkryta",
    odwracaj: "Odwracaj karty, kiedy poczujesz gotowość. Tutaj nic się nie spieszy.",
    rozpisane: "Pełne czytanie rozpisane jest poniżej.",
    odkryjWszystkie: "odkryj wszystkie karty naraz",
    dopiskaRewers: " · odwrócona",
    pelneZnaczenie: (nazwa: string) => `Pełne znaczenie karty ${nazwa}`,
    pejzaz: (tytul: string) => `Pejzaż dźwiękowy do tej karty: ${tytul}`,
    razem: "Jak karty mówią razem",
    noweCzytanie: "NOWE CZYTANIE",
    przegladajMuzyke: "przeglądaj muzykę na następną sesję",
    linkKarty: "/pl/karty/",
    linkMuzyka: "/pl/muzyka/",
  },
} as const;

export default function TarotCzytanie({ jezyk = "en" }: { jezyk?: JezykOdczytu }) {
  const t = TEKSTY[jezyk];
  const TALIA = jezyk === "pl" ? KARTY_PL : KARTY;
  const ROZKLADY = jezyk === "pl" ? SPREADY_PL : SPREADY;
  const szukajUtworu = jezyk === "pl" ? utworySkuPl : utworySku;
  const disclaimer = jezyk === "pl" ? DISCLAIMER_PL : DISCLAIMER;

  const [faza, setFaza] = useState<Faza>("wybor-spreadu");
  const [spread, setSpread] = useState<Spread | null>(null);
  const [zReversami, setZReversami] = useState(true);
  const [intencja, setIntencja] = useState("");
  const [talia, setTalia] = useState<KartaTarota[]>([]);
  const [wybrane, setWybrane] = useState<number[]>([]);
  const [dobycia, setDobycia] = useState<Dobycie[]>([]);
  const [odkryte, setOdkryte] = useState<number>(0);

  const synteza = useMemo(
    () => (spread && dobycia.length > 1 ? syntezaOdczytu(dobycia, spread, jezyk) : []),
    [dobycia, spread, jezyk],
  );

  function zacznijSkupienie(s: Spread) {
    setSpread(s);
    setFaza("skupienie");
  }

  function rozlozKarty() {
    setTalia(potasuj(TALIA));
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
        <p className="mx-auto mb-10 max-w-2xl text-center text-przygaszony">{t.intro}</p>
        <div className="grid gap-5 md:grid-cols-2">
          {ROZKLADY.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => zacznijSkupienie(s)}
              className="group border border-linia bg-noc-2 p-6 text-left transition-colors hover:border-zloto"
            >
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <h3 className="text-xl">{s.name}</h3>
                <span className="etykieta whitespace-nowrap text-przygaszony">
                  {t.ileKart(s.positions.length)}
                </span>
              </div>
              <p className="mb-3 text-sm italic text-fiolet">{s.tagline}</p>
              <p className="text-sm text-przygaszony">{s.description}</p>
              <p className="etykieta mt-4 text-zloto opacity-0 transition-opacity group-hover:opacity-100">
                {t.zacznij}
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
        <h2 className="mb-6 text-2xl">{t.trzymajPytanie}</h2>
        <p className="mb-6 text-przygaszony">{t.skupienie}</p>
        <label className="block">
          <span className="sr-only">{t.etykietaPytania}</span>
          <textarea
            value={intencja}
            onChange={(e) => setIntencja(e.target.value)}
            rows={2}
            placeholder={t.placeholder}
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
            {t.reversy}
          </label>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={rozlozKarty}
            className="poswiata border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            {t.tasuj}
          </button>
          <button
            type="button"
            onClick={odNowa}
            className="text-sm text-przygaszony underline underline-offset-4 hover:text-kosc"
          >
            {t.innySpread}
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
          <h2 className="mb-3 text-2xl">{t.taliaRozlozona}</h2>
          <p aria-live="polite" className="text-przygaszony">
            {zostalo > 0 ? t.wybierzJeszcze(zostalo) : t.wybrano}
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
                aria-label={wybrana ? t.kartaWybrana(i + 1) : t.wybierzKarte(i + 1)}
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
            <p className="mx-auto max-w-xl italic text-fiolet">
              {jezyk === "pl" ? <>&bdquo;{intencja.trim()}&rdquo;</> : <>&ldquo;{intencja.trim()}&rdquo;</>}
            </p>
          )}
          <p className="mt-3 text-sm text-przygaszony" aria-live="polite">
            {odkryte < dobycia.length ? t.odwracaj : t.rozpisane}
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
                      ? `${d.karta.name}${d.reversed ? t.odwrocona : ""}`
                      : i === odkryte
                        ? t.odkryj(spread.positions[i].name)
                        : t.nieodkryta
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
              {t.odkryjWszystkie}
            </button>
          </div>
        )}

        {/* Interpretacje */}
        <div className="mx-auto max-w-3xl space-y-10">
          {dobycia.slice(0, odkryte).map((d, i) => {
            const muzyka = d.karta.musicSku ? szukajUtworu(d.karta.musicSku) : undefined;
            return (
              <section key={i} className="wejscie border border-linia bg-noc-2 p-6 sm:p-8">
                <p className="etykieta mb-1 text-przygaszony">
                  {spread.positions[i].name}: {spread.positions[i].meaning}
                </p>
                <h3 className="mb-1 text-2xl">
                  {d.karta.name}
                  {d.reversed && <span className="text-fiolet">{t.dopiskaRewers}</span>}
                </h3>
                <p className="mb-4 text-sm italic text-fiolet">{d.karta.essence}</p>
                <p className="mb-3 text-sm text-przygaszony">
                  {(d.reversed ? d.karta.keywordsReversed : d.karta.keywords).join(" · ")}
                </p>
                <p className="mb-4">{d.reversed ? d.karta.reversed : d.karta.upright}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <Link
                    href={`${t.linkKarty}${d.karta.slug}/`}
                    className="text-zloto-2 underline underline-offset-4 hover:text-zloto"
                  >
                    {t.pelneZnaczenie(d.karta.name)}
                  </Link>
                  {muzyka && (
                    <Link
                      href={t.linkMuzyka}
                      className="text-przygaszony underline underline-offset-4 hover:text-kosc"
                    >
                      {t.pejzaz(muzyka.title)}
                    </Link>
                  )}
                </div>
              </section>
            );
          })}

          {/* Synteza */}
          {odkryte === dobycia.length && synteza.length > 0 && (
            <section className="wejscie border border-zloto/40 bg-noc-3 p-6 sm:p-8">
              <p className="etykieta mb-3">{t.razem}</p>
              <div className="space-y-4">
                {synteza.map((z, i) => (
                  <p key={i}>{z}</p>
                ))}
              </div>
            </section>
          )}

          {odkryte === dobycia.length && (
            <div className="space-y-6 text-center">
              <p className="mx-auto max-w-xl text-xs text-przygaszony/80">{disclaimer}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={odNowa}
                  className="border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
                >
                  {t.noweCzytanie}
                </button>
                <Link
                  href={t.linkMuzyka}
                  className="text-sm text-przygaszony underline underline-offset-4 hover:text-kosc"
                >
                  {t.przegladajMuzyke}
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
