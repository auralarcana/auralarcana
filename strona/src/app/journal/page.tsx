import type { Metadata } from "next";
import Dziennik from "@/components/Dziennik";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";
import { TEKSTY_WYROCZNI } from "@/data/wyrocznia";

export const metadata: Metadata = {
  title: "Arcana Journal and the Inner Circle",
  description:
    "Your private journal of tarot readings and the membership that opens conversations with the Aural Arcana reader about your own spreads.",
  alternates: {
    canonical: "/journal/",
    languages: { en: "/journal/", pl: "/pl/dziennik/", "x-default": "/journal/" },
  },
};

export default function StronaDziennika() {
  const t = TEKSTY_WYROCZNI;
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Arcana Journal", url: `${DOMENA}/journal/` },
        ]}
      />
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">{t.dziennikEtykieta}</p>
        <h1 className="mb-4 text-4xl">{t.dziennikTytul}</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">{t.dziennikWstep}</p>
      </div>
      <Dziennik jezyk="en" />
    </div>
  );
}
