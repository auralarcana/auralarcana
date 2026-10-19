import type { Metadata } from "next";
import Link from "next/link";
import type { Kolor } from "@/data/karty";
import { KARTY_WIELKIE_PL, KOLORY_PL, ZYWIOLY_PL } from "@/data/pl/karty";
import { KARTY_MALE_PL } from "@/data/pl/karty-male";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export const metadata: Metadata = {
  title: "Znaczenie kart tarota: wszystkie 78 kart",
  description:
    "Cała talia tarota objaśniona: wszystkie 22 Wielkie Arkana i 56 Małych Arkanów ze znaczeniami prostymi i odwróconymi, symboliką, słowami kluczowymi i pytaniami do refleksji.",
  alternates: {
    canonical: "/pl/karty/",
    languages: { en: "/cards/", pl: "/pl/karty/", "x-default": "/cards/" },
  },
};

export default function StronaKartPl() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Strona główna", url: `${DOMENA}/pl/` },
          { name: "Znaczenia kart", url: `${DOMENA}/pl/karty/` },
        ]}
      />
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">Biblioteka 78</p>
        <h1 className="mb-4 text-4xl">Znaczenie kart tarota</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          Każda karta talii, od pierwszego kroku Głupca po domknięty krąg Świata. Każda ma własną
          stronę: symbolikę, znaczenie proste i odwrócone oraz pytania warte noszenia przez cały
          dzień.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="separator-gwiazda mb-8 text-2xl">Wielkie Arkana</h2>
        <p className="mb-8 max-w-3xl text-sm text-przygaszony">
          Dwadzieścia dwie karty archetypu i przeznaczenia: wielkie rozdziały, którymi pisze się
          życie. Gdy pojawiają się w czytaniu, talia wskazuje coś strukturalnego.
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {KARTY_WIELKIE_PL.map((k) => (
            <li key={k.slug}>
              <Link
                href={`/pl/karty/${k.slug}/`}
                className="block border border-linia bg-noc-2 px-4 py-3 transition-colors hover:border-zloto"
              >
                <span className="etykieta block text-przygaszony">{k.numeral}</span>
                <span className="text-kosc">{k.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {(Object.keys(KOLORY_PL) as Kolor[]).map((kolor) => {
        const info = KOLORY_PL[kolor];
        const karty = KARTY_MALE_PL.filter((k) => k.suit === kolor);
        return (
          <section key={kolor} className="mb-16">
            <h2 className="separator-gwiazda mb-8 text-2xl">{info.name}</h2>
            <p className="mb-8 max-w-3xl text-sm text-przygaszony">
              Żywioł {ZYWIOLY_PL[info.element].dopelniacz}: {info.theme}.
            </p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {karty.map((k) => (
                <li key={k.slug}>
                  <Link
                    href={`/pl/karty/${k.slug}/`}
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
