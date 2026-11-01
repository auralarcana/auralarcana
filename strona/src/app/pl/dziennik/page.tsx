import type { Metadata } from "next";
import Dziennik from "@/components/Dziennik";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";
import { TEKSTY_WYROCZNI_PL } from "@/data/pl/wyrocznia";

export const metadata: Metadata = {
  title: "Arcana Journal i Inner Circle",
  description:
    "Twój prywatny dziennik czytań tarota i członkostwo, które otwiera rozmowy z Wyrocznią Aural Arcana o Twoich własnych rozkładach.",
  alternates: {
    canonical: "/pl/dziennik/",
    languages: { en: "/journal/", pl: "/pl/dziennik/", "x-default": "/journal/" },
  },
};

export default function StronaDziennikaPl() {
  const t = TEKSTY_WYROCZNI_PL;
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Strona główna", url: `${DOMENA}/pl/` },
          { name: "Arcana Journal", url: `${DOMENA}/pl/dziennik/` },
        ]}
      />
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">{t.dziennikEtykieta}</p>
        <h1 className="mb-4 text-4xl">{t.dziennikTytul}</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">{t.dziennikWstep}</p>
      </div>
      <Dziennik jezyk="pl" />
    </div>
  );
}
