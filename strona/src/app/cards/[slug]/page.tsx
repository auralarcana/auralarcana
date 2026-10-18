import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KARTY, KOLORY, ZYWIOLY, znajdzKarte } from "@/data/karty";
import { utworySku } from "@/data/muzyka";
import { KartaAwers } from "@/components/KartaGrafika";
import OdtwarzaczYT from "@/components/OdtwarzaczYT";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export function generateStaticParams() {
  return KARTY.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const karta = znajdzKarte(slug);
  if (!karta) return {};
  return {
    title: `${karta.name} Tarot Card Meaning`,
    description: `${karta.name} in tarot: ${karta.essence} Upright and reversed meaning, symbolism, keywords and questions for reflection.`,
    alternates: { canonical: `/cards/${karta.slug}/` },
  };
}

export default async function StronaKarty({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const karta = znajdzKarte(slug);
  if (!karta) notFound();

  const indeks = KARTY.findIndex((k) => k.slug === karta.slug);
  const poprzednia = KARTY[(indeks - 1 + KARTY.length) % KARTY.length];
  const nastepna = KARTY[(indeks + 1) % KARTY.length];
  const muzyka = karta.musicSku ? utworySku(karta.musicSku) : undefined;
  const zywiol = ZYWIOLY[karta.element];
  const pokrewne = KARTY.filter(
    (k) => k.slug !== karta.slug && k.element === karta.element && k.arcana === karta.arcana,
  ).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Card Meanings", url: `${DOMENA}/cards/` },
          { name: karta.name, url: `${DOMENA}/cards/${karta.slug}/` },
        ]}
      />

      <nav className="mb-10 text-sm text-przygaszony" aria-label="Breadcrumb">
        <Link href="/cards/" className="underline underline-offset-4 hover:text-kosc">
          Card Meanings
        </Link>
        <span className="mx-2">/</span>
        <span className="text-kosc">{karta.name}</span>
      </nav>

      <div className="grid gap-12 md:grid-cols-[280px_1fr]">
        <div>
          <div className="mx-auto max-w-[260px] shadow-2xl shadow-black/60 md:sticky md:top-24">
            <KartaAwers karta={karta} className="h-auto w-full" />
          </div>
        </div>

        <article>
          <p className="etykieta mb-2">
            {karta.arcana === "major"
              ? `Major Arcana · ${karta.numeral}`
              : `Minor Arcana · ${KOLORY[karta.suit!].name}`}
            {" · "}
            {zywiol.name}
          </p>
          <h1 className="mb-3 text-4xl">{karta.name}</h1>
          <p className="mb-6 text-lg italic text-fiolet">{karta.essence}</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {karta.keywords.map((s) => (
              <span key={s} className="border border-linia px-3 py-1 text-sm text-przygaszony">
                {s}
              </span>
            ))}
          </div>

          <section className="tekst-artykulu mb-10">
            <h2 className="mb-3 text-2xl">Symbolism</h2>
            <p>{karta.description}</p>
          </section>

          <section className="mb-10 border border-linia bg-noc-2 p-6">
            <h2 className="mb-3 text-2xl">Upright meaning</h2>
            <p>{karta.upright}</p>
          </section>

          <section className="mb-10 border border-linia bg-noc-2 p-6">
            <h2 className="mb-3 text-2xl">Reversed meaning</h2>
            <p className="mb-3 text-sm text-przygaszony">
              {karta.keywordsReversed.join(" · ")}
            </p>
            <p>{karta.reversed}</p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl">Questions to sit with</h2>
            <ul className="space-y-3">
              {karta.questions.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-zloto" aria-hidden="true">✦</span>
                  <span className="italic text-przygaszony">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          {muzyka && (
            <section className="mb-10">
              <h2 className="mb-2 text-2xl">A soundscape for this card</h2>
              <p className="mb-4 text-sm text-przygaszony">
                {muzyka.title}: {muzyka.atmosphere}
              </p>
              <div className="max-w-xl">
                <OdtwarzaczYT youtubeId={muzyka.youtubeId} title={muzyka.title} duration={muzyka.duration} />
              </div>
            </section>
          )}

          <section className="mb-10">
            <h2 className="mb-4 text-2xl">Where to meet this card</h2>
            <p className="mb-4 text-przygaszony">
              Draw {karta.name} in a live reading: the{" "}
              <Link href="/tarot/" className="text-zloto-2 underline underline-offset-4">
                free tarot reading
              </Link>{" "}
              deals from the full 78 card deck, so every card on this site can appear at your
              table.
            </p>
            {pokrewne.length > 0 && (
              <>
                <p className="etykieta mb-3 text-przygaszony">
                  Kindred cards of {zywiol.name}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {pokrewne.map((k) => (
                    <li key={k.slug}>
                      <Link
                        href={`/cards/${k.slug}/`}
                        className="block border border-linia px-3 py-1.5 text-sm transition-colors hover:border-zloto hover:text-zloto-2"
                      >
                        {k.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <nav className="flex justify-between border-t border-linia pt-6 text-sm" aria-label="Card navigation">
            <Link
              href={`/cards/${poprzednia.slug}/`}
              className="text-przygaszony underline underline-offset-4 hover:text-kosc"
            >
              ← {poprzednia.name}
            </Link>
            <Link
              href={`/cards/${nastepna.slug}/`}
              className="text-przygaszony underline underline-offset-4 hover:text-kosc"
            >
              {nastepna.name} →
            </Link>
          </nav>
        </article>
      </div>
    </div>
  );
}
