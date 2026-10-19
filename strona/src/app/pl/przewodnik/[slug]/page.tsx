import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTYKULY_PL, znajdzArtykulPl } from "@/data/pl/artykuly";
import { ArtykulJsonLd, OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export function generateStaticParams() {
  return ARTYKULY_PL.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artykul = znajdzArtykulPl(slug);
  if (!artykul) return {};
  return {
    title: artykul.title,
    description: artykul.description,
    alternates: {
      canonical: `/pl/przewodnik/${artykul.slug}/`,
      languages: {
        en: `/guide/${artykul.slugEn}/`,
        pl: `/pl/przewodnik/${artykul.slug}/`,
        "x-default": `/guide/${artykul.slugEn}/`,
      },
    },
  };
}

export default async function StronaArtykuluPl({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artykul = znajdzArtykulPl(slug);
  if (!artykul) notFound();

  const inne = ARTYKULY_PL.filter((a) => a.slug !== artykul.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <ArtykulJsonLd
        tytul={artykul.title}
        opis={artykul.description}
        data={artykul.date}
        url={`${DOMENA}/pl/przewodnik/${artykul.slug}/`}
        jezyk="pl"
      />
      <OkruszkiJsonLd
        pozycje={[
          { name: "Strona główna", url: `${DOMENA}/pl/` },
          { name: "Przewodnik", url: `${DOMENA}/pl/przewodnik/` },
          { name: artykul.title, url: `${DOMENA}/pl/przewodnik/${artykul.slug}/` },
        ]}
      />

      <nav className="mb-10 text-sm text-przygaszony" aria-label="Okruszki">
        <Link href="/pl/przewodnik/" className="underline underline-offset-4 hover:text-kosc">
          Przewodnik
        </Link>
        <span className="mx-2">/</span>
        <span className="text-kosc">{artykul.title}</span>
      </nav>

      <article className="tekst-artykulu">
        <p className="etykieta mb-3">{artykul.readingTime} czytania</p>
        <h1 className="mb-8 text-4xl leading-tight">{artykul.title}</h1>
        {artykul.blocks.map((b, i) =>
          b.t === "h2" ? (
            <h2 key={i} className="mb-4 mt-10 text-2xl">
              {b.text}
            </h2>
          ) : (
            <p key={i} className="mb-5">
              {b.text}
            </p>
          ),
        )}
      </article>

      <div className="mt-14 border-t border-linia pt-8">
        <p className="etykieta mb-5">Czytaj dalej</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {inne.map((a) => (
            <Link
              key={a.slug}
              href={`/pl/przewodnik/${a.slug}/`}
              className="block border border-linia bg-noc-2 p-5 transition-colors hover:border-zloto"
            >
              <h3 className="mb-1 text-lg">{a.title}</h3>
              <p className="text-xs text-przygaszony">{a.readingTime} czytania</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/pl/tarot/"
            className="inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            PRZEĆWICZ W CZYTANIU
          </Link>
        </div>
      </div>
    </div>
  );
}
