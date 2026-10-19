import type { Metadata } from "next";
import Link from "next/link";
import { ARTYKULY_PL } from "@/data/pl/artykuly";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export const metadata: Metadata = {
  title: "Przewodnik po tarocie: jak czytać karty",
  description:
    "Przewodniki po uczciwym czytaniu tarota: jak działa czytanie, co znaczą Wielkie i Małe Arkana, jak wybrać rozkład i jak muzyka i atmosfera pogłębiają praktykę.",
  alternates: {
    canonical: "/pl/przewodnik/",
    languages: { en: "/guide/", pl: "/pl/przewodnik/", "x-default": "/guide/" },
  },
};

export default function StronaPrzewodnikaPl() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Strona główna", url: `${DOMENA}/pl/` },
          { name: "Przewodnik", url: `${DOMENA}/pl/przewodnik/` },
        ]}
      />
      <div className="mb-14 text-center">
        <p className="etykieta mb-3">Praktyka</p>
        <h1 className="mb-4 text-4xl">Przewodnik po tarocie</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          Tarot nagradza szczerość bardziej niż talent. Te przewodniki omawiają rzemiosło:
          zadawanie prawdziwych pytań, czytanie obu arkanów, wybór rozkładu i budowanie atmosfery,
          na jaką zasługuje głębokie czytanie.
        </p>
      </div>

      <div className="space-y-6">
        {ARTYKULY_PL.map((a) => (
          <Link
            key={a.slug}
            href={`/pl/przewodnik/${a.slug}/`}
            className="group block border border-linia bg-noc-2 p-7 transition-colors hover:border-zloto"
          >
            <p className="etykieta mb-3 text-przygaszony">{a.readingTime} czytania</p>
            <h2 className="mb-2 text-2xl group-hover:text-zloto-2">{a.title}</h2>
            <p className="text-sm text-przygaszony">{a.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-14 border border-linia bg-noc-2 p-8 text-center">
        <h2 className="mb-3 text-2xl">A potem praktykuj</h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-przygaszony">
          Teoria to mapa; czytanie to teren. Dobierz pojedynczą kartę na koszt domu.
        </p>
        <Link
          href="/pl/tarot/"
          className="inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          ZACZNIJ CZYTANIE
        </Link>
      </div>
    </div>
  );
}
