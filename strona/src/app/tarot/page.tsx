import type { Metadata } from "next";
import TarotCzytanie from "@/components/TarotCzytanie";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export const metadata: Metadata = {
  title: "Free Online Tarot Reading",
  description:
    "Draw from a full 78 card tarot deck, free and with no sign up. Choose a one card, three card or five card spread, reveal your cards and read their meanings, together with how they speak to one another.",
  alternates: {
    canonical: "/tarot/",
    languages: { en: "/tarot/", pl: "/pl/tarot/", "x-default": "/tarot/" },
  },
};

export default function StronaTarot() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Tarot Reading", url: `${DOMENA}/tarot/` },
        ]}
      />
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">The reading room</p>
        <h1 className="mb-4 text-4xl">Free Tarot Reading</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          No account, no payment, nothing stored. For the fullest experience, dim the lights and
          put on one of our soundscapes before you begin.
        </p>
      </div>
      <TarotCzytanie />
    </div>
  );
}
