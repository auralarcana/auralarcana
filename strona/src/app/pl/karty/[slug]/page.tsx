import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KARTY_PL, KOLORY_PL, ZYWIOLY_PL, znajdzKartePl } from "@/data/pl/karty";
import { utworySkuPl } from "@/data/pl/muzyka";
import { KartaAwers } from "@/components/KartaGrafika";
import OdtwarzaczYT from "@/components/OdtwarzaczYT";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export function generateStaticParams() {
  return KARTY_PL.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const karta = znajdzKartePl(slug);
  if (!karta) return {};
  return {
    title: `${karta.name}: znaczenie karty tarota`,
    description: `${karta.name} w tarocie: ${karta.essence} Znaczenie proste i odwrócone, symbolika, słowa kluczowe i pytania do refleksji.`,
    alternates: {
      canonical: `/pl/karty/${karta.slug}/`,
      languages: {
        en: `/cards/${karta.slugEn}/`,
        pl: `/pl/karty/${karta.slug}/`,
        "x-default": `/cards/${karta.slugEn}/`,
      },
    },
  };
}

export default async function StronaKartyPl({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const karta = znajdzKartePl(slug);
  if (!karta) notFound();

  const indeks = KARTY_PL.findIndex((k) => k.slug === karta.slug);
  const poprzednia = KARTY_PL[(indeks - 1 + KARTY_PL.length) % KARTY_PL.length];
  const nastepna = KARTY_PL[(indeks + 1) % KARTY_PL.length];
  const muzyka = karta.musicSku ? utworySkuPl(karta.musicSku) : undefined;
  const zywiol = ZYWIOLY_PL[karta.element];
  const pokrewne = KARTY_PL.filter(
    (k) => k.slug !== karta.slug && k.element === karta.element && k.arcana === karta.arcana,
  ).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Strona główna", url: `${DOMENA}/pl/` },
          { name: "Znaczenia kart", url: `${DOMENA}/pl/karty/` },
          { name: karta.name, url: `${DOMENA}/pl/karty/${karta.slug}/` },
        ]}
      />

      <nav className="mb-10 text-sm text-przygaszony" aria-label="Okruszki">
        <Link href="/pl/karty/" className="underline underline-offset-4 hover:text-kosc">
          Znaczenia kart
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
              ? `Wielkie Arkana · ${karta.numeral}`
              : `Małe Arkana · ${KOLORY_PL[karta.suit!].name}`}
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
            <h2 className="mb-3 text-2xl">Symbolika</h2>
            <p>{karta.description}</p>
          </section>

          <section className="mb-10 border border-linia bg-noc-2 p-6">
            <h2 className="mb-3 text-2xl">Znaczenie proste</h2>
            <p>{karta.upright}</p>
          </section>

          <section className="mb-10 border border-linia bg-noc-2 p-6">
            <h2 className="mb-3 text-2xl">Znaczenie odwrócone</h2>
            <p className="mb-3 text-sm text-przygaszony">
              {karta.keywordsReversed.join(" · ")}
            </p>
            <p>{karta.reversed}</p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl">Pytania, z którymi warto posiedzieć</h2>
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
              <h2 className="mb-2 text-2xl">Pejzaż dźwiękowy do tej karty</h2>
              <p className="mb-4 text-sm text-przygaszony">
                {muzyka.title}: {muzyka.atmosphere}
              </p>
              <div className="max-w-xl">
                <OdtwarzaczYT youtubeId={muzyka.youtubeId} title={muzyka.title} duration={muzyka.duration} />
              </div>
            </section>
          )}

          <section className="mb-10">
            <h2 className="mb-4 text-2xl">Gdzie spotkać tę kartę</h2>
            <p className="mb-4 text-przygaszony">
              Dobierz kartę {karta.name} w żywym czytaniu:{" "}
              <Link href="/pl/tarot/" className="text-zloto-2 underline underline-offset-4">
                darmowe czytanie tarota
              </Link>{" "}
              rozdaje z pełnej talii 78 kart, więc każda karta z tej strony może pojawić się na
              twoim stole.
            </p>
            {pokrewne.length > 0 && (
              <>
                <p className="etykieta mb-3 text-przygaszony">
                  Pokrewne karty {zywiol.dopelniacz}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {pokrewne.map((k) => (
                    <li key={k.slug}>
                      <Link
                        href={`/pl/karty/${k.slug}/`}
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

          <nav className="flex justify-between border-t border-linia pt-6 text-sm" aria-label="Nawigacja po kartach">
            <Link
              href={`/pl/karty/${poprzednia.slug}/`}
              className="text-przygaszony underline underline-offset-4 hover:text-kosc"
            >
              ← {poprzednia.name}
            </Link>
            <Link
              href={`/pl/karty/${nastepna.slug}/`}
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
