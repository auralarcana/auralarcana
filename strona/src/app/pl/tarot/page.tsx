import type { Metadata } from "next";
import TarotCzytanie from "@/components/TarotCzytanie";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export const metadata: Metadata = {
  title: "Darmowy tarot online: czytanie kart",
  description:
    "Dobierz karty z pełnej talii 78 kart tarota, za darmo i bez zakładania konta. Wybierz rozkład jednej, trzech lub pięciu kart, odkryj swoje karty i przeczytaj ich znaczenia wraz z tym, jak mówią do siebie nawzajem.",
  alternates: {
    canonical: "/pl/tarot/",
    languages: { en: "/tarot/", pl: "/pl/tarot/", "x-default": "/tarot/" },
  },
};

export default function StronaTarotPl() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Strona główna", url: `${DOMENA}/pl/` },
          { name: "Czytanie tarota", url: `${DOMENA}/pl/tarot/` },
        ]}
      />
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">Pokój czytań</p>
        <h1 className="mb-4 text-4xl">Darmowe czytanie tarota</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          Bez konta, bez płatności, bez zapisywania czegokolwiek. Dla pełni doświadczenia przygaś
          światło i włącz jeden z naszych pejzaży dźwiękowych, zanim zaczniesz.
        </p>
      </div>
      <TarotCzytanie jezyk="pl" />
    </div>
  );
}
