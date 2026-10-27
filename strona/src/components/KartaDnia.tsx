"use client";

// Karta dnia: jedna karta na dobę, ta sama dla wszystkich odwiedzających danego dnia
// (liczona z lokalnej daty przeglądarki). Strona jest statyczna, więc wybór dzieje się po załadowaniu.

import { useEffect, useState } from "react";
import Link from "next/link";
import { KartaAwers } from "@/components/KartaGrafika";
import type { KartaTarota } from "@/data/karty";

export type KartaDniaDane = Omit<KartaTarota, "description" | "upright" | "reversed" | "questions" | "keywordsReversed">;

function numerDnia(): number {
  const d = new Date();
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}

export default function KartaDnia(props: {
  karty: KartaDniaDane[];
  jezyk: "en" | "pl";
}) {
  const { karty, jezyk } = props;
  const [indeks, setIndeks] = useState<number | null>(null);

  useEffect(() => {
    // mieszamy numer dnia, żeby kolejne dni nie szły po kolei przez talię
    const n = numerDnia();
    setIndeks((n * 37 + 11) % karty.length);
  }, [karty.length]);

  const pl = jezyk === "pl";
  const t = {
    etykieta: pl ? "Karta dnia" : "Card of the day",
    tytul: pl ? "Co mówi dziś talia" : "Today the deck says",
    wiecej: pl ? "PEŁNE ZNACZENIE" : "FULL MEANING",
    czytanie: pl ? "ZRÓB WŁASNE CZYTANIE" : "DRAW YOUR OWN READING",
    jutro: pl ? "Nowa karta co dzień. Wróć jutro." : "A new card every day. Come back tomorrow.",
  };
  const k = indeks === null ? null : karty[indeks];
  const linkKarty = k ? (pl ? `/pl/karty/${k.slug}/` : `/cards/${k.slug}/`) : "#";
  const linkTarota = pl ? "/pl/tarot/" : "/tarot/";

  return (
    <section className="border-y border-linia bg-noc-2/50" aria-live="polite">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[220px_1fr]">
        <div className="mx-auto w-44 shadow-2xl shadow-black/60 md:w-full">
          {k ? (
            <KartaAwers karta={k as KartaTarota} className="h-auto w-full" />
          ) : (
            <div className="aspect-[3/5] w-full border border-linia bg-noc" />
          )}
        </div>
        <div className="text-center md:text-left">
          <p className="etykieta mb-2">✦ {t.etykieta} ✦</p>
          <h2 className="mb-2 text-3xl">{k ? k.name : t.tytul}</h2>
          <p className="mb-4 text-lg italic text-fiolet">{k ? k.essence : " "}</p>
          {k && (
            <p className="mb-8 text-sm text-przygaszony">{k.keywords.slice(0, 4).join(" · ")}</p>
          )}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href={linkKarty}
              className="poswiata border border-zloto bg-zloto/10 px-6 py-2.5 text-sm tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
            >
              {t.wiecej}
            </Link>
            <Link
              href={linkTarota}
              className="border border-linia px-6 py-2.5 text-sm tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
            >
              {t.czytanie}
            </Link>
          </div>
          <p className="mt-6 text-xs text-przygaszony">{t.jutro}</p>
        </div>
      </div>
    </section>
  );
}
