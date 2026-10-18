import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTYKULY, znajdzArtykul } from "@/data/artykuly";
import { ArtykulJsonLd, OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA } from "@/data/strona";

export function generateStaticParams() {
  return ARTYKULY.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artykul = znajdzArtykul(slug);
  if (!artykul) return {};
  return {
    title: artykul.title,
    description: artykul.description,
    alternates: { canonical: `/guide/${artykul.slug}/` },
  };
}

export default async function StronaArtykulu({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artykul = znajdzArtykul(slug);
  if (!artykul) notFound();

  const inne = ARTYKULY.filter((a) => a.slug !== artykul.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <ArtykulJsonLd
        tytul={artykul.title}
        opis={artykul.description}
        data={artykul.date}
        url={`${DOMENA}/guide/${artykul.slug}/`}
      />
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Guide", url: `${DOMENA}/guide/` },
          { name: artykul.title, url: `${DOMENA}/guide/${artykul.slug}/` },
        ]}
      />

      <nav className="mb-10 text-sm text-przygaszony" aria-label="Breadcrumb">
        <Link href="/guide/" className="underline underline-offset-4 hover:text-kosc">
          Guide
        </Link>
        <span className="mx-2">/</span>
        <span className="text-kosc">{artykul.title}</span>
      </nav>

      <article className="tekst-artykulu">
        <p className="etykieta mb-3">{artykul.readingTime} read</p>
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
        <p className="etykieta mb-5">Keep reading</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {inne.map((a) => (
            <Link
              key={a.slug}
              href={`/guide/${a.slug}/`}
              className="block border border-linia bg-noc-2 p-5 transition-colors hover:border-zloto"
            >
              <h3 className="mb-1 text-lg">{a.title}</h3>
              <p className="text-xs text-przygaszony">{a.readingTime} read</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/tarot/"
            className="inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            PRACTICE WITH A READING
          </Link>
        </div>
      </div>
    </div>
  );
}
