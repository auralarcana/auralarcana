import type { Metadata } from "next";
import Link from "next/link";
import { ARTYKULY } from "@/data/artykuly";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export const metadata: Metadata = {
  title: "Tarot Guide: How to Read the Cards",
  description:
    "Guides to reading tarot honestly: how a reading works, what the Major and Minor Arcana mean, how to choose a spread, and how music and atmosphere deepen the practice.",
  alternates: { canonical: "/guide/" },
};

export default function StronaPrzewodnika() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Guide", url: `${DOMENA}/guide/` },
        ]}
      />
      <div className="mb-14 text-center">
        <p className="etykieta mb-3">The practice</p>
        <h1 className="mb-4 text-4xl">Tarot Guide</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          Tarot rewards honesty more than talent. These guides cover the craft: asking real
          questions, reading both arcana, choosing spreads, and building the atmosphere a deep
          reading deserves.
        </p>
      </div>

      <div className="space-y-6">
        {ARTYKULY.map((a) => (
          <Link
            key={a.slug}
            href={`/guide/${a.slug}/`}
            className="group block border border-linia bg-noc-2 p-7 transition-colors hover:border-zloto"
          >
            <p className="etykieta mb-3 text-przygaszony">{a.readingTime} read</p>
            <h2 className="mb-2 text-2xl group-hover:text-zloto-2">{a.title}</h2>
            <p className="text-sm text-przygaszony">{a.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-14 border border-linia bg-noc-2 p-8 text-center">
        <h2 className="mb-3 text-2xl">Then practice</h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-przygaszony">
          Theory is the map; the reading is the territory. Draw a single card on the house.
        </p>
        <Link
          href="/tarot/"
          className="inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          BEGIN A READING
        </Link>
      </div>
    </div>
  );
}
