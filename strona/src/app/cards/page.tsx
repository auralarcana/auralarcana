import type { Metadata } from "next";
import Link from "next/link";
import { KARTY_WIELKIE, KOLORY, type Kolor } from "@/data/karty";
import { KARTY_MALE } from "@/data/karty-male";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export const metadata: Metadata = {
  title: "Tarot Card Meanings: All 78 Cards",
  description:
    "The complete tarot deck explained: all 22 Major Arcana and 56 Minor Arcana cards with upright and reversed meanings, symbolism, keywords and questions for reflection.",
  alternates: { canonical: "/cards/" },
};

export default function StronaKart() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Card Meanings", url: `${DOMENA}/cards/` },
        ]}
      />
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">The library of 78</p>
        <h1 className="mb-4 text-4xl">Tarot Card Meanings</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          Every card in the deck, from the Fool's first step to the World's completed circle. Each
          has its own page: symbolism, upright and reversed meanings, and questions worth carrying
          for a day.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="separator-gwiazda mb-8 text-2xl">Major Arcana</h2>
        <p className="mb-8 max-w-3xl text-sm text-przygaszony">
          Twenty two cards of archetype and destiny: the great chapters a life is written in. When
          these appear in a reading, the deck is pointing at something structural.
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {KARTY_WIELKIE.map((k) => (
            <li key={k.slug}>
              <Link
                href={`/cards/${k.slug}/`}
                className="block border border-linia bg-noc-2 px-4 py-3 transition-colors hover:border-zloto"
              >
                <span className="etykieta block text-przygaszony">{k.numeral}</span>
                <span className="text-kosc">{k.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {(Object.keys(KOLORY) as Kolor[]).map((kolor) => {
        const info = KOLORY[kolor];
        const karty = KARTY_MALE.filter((k) => k.suit === kolor);
        return (
          <section key={kolor} className="mb-16">
            <h2 className="separator-gwiazda mb-8 text-2xl">Suit of {info.name}</h2>
            <p className="mb-8 max-w-3xl text-sm text-przygaszony">
              The element of {info.element === "fire" ? "Fire" : info.element === "water" ? "Water" : info.element === "air" ? "Air" : "Earth"}: {info.theme}.
            </p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {karty.map((k) => (
                <li key={k.slug}>
                  <Link
                    href={`/cards/${k.slug}/`}
                    className="block border border-linia bg-noc-2 px-4 py-3 transition-colors hover:border-zloto"
                  >
                    <span className="text-kosc">{k.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
