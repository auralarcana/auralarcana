import type { Metadata } from "next";
import Link from "next/link";
import OdtwarzaczYT from "@/components/OdtwarzaczYT";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { KATEGORIE, UTWORY, utworyKategorii } from "@/data/muzyka";
import { DOMENA, KANAL_YT } from "@/data/strona";

export const metadata: Metadata = {
  title: "Music for Tarot, Ritual and Focus",
  description:
    "Original atmospheric music for tarot readings, divination, meditation and deep work: mystical ambient, dark soundscapes and lofi focus sessions from the Aural Arcana YouTube channel, organized by purpose, mood and length.",
  alternates: { canonical: "/music/" },
};

export default function StronaMuzyki() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Music Library", url: `${DOMENA}/music/` },
        ]}
      />
      <div className="mb-6 text-center">
        <p className="etykieta mb-3">The sound of the sanctuary</p>
        <h1 className="mb-4 text-4xl">Music Library</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          Every piece here is an original composition from our YouTube channel, made to sit beneath
          a practice: a reading, a ritual, a meditation, a long night of work. Browse by purpose,
          check the length against your session, and press play when you are ready. Nothing plays
          until you ask it to.
        </p>
      </div>

      <div className="mb-14 text-center">
        <a
          href={KANAL_YT}
          target="_blank"
          rel="noopener"
          className="inline-block border border-zloto px-6 py-2.5 text-sm tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          SUBSCRIBE ON YOUTUBE
        </a>
        <p className="mt-3 text-xs text-przygaszony">
          New soundscapes land on the channel first, then join this library.
        </p>
      </div>

      {/* Nawigacja po kategoriach */}
      <nav aria-label="Music categories" className="mb-14">
        <ul className="flex flex-wrap justify-center gap-2">
          {KATEGORIE.filter((k) => utworyKategorii(k.slug).length > 0).map((k) => (
            <li key={k.slug}>
              <a
                href={`#${k.slug}`}
                className="block border border-linia px-4 py-2 text-sm text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
              >
                {k.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {KATEGORIE.map((kat) => {
        const utwory = utworyKategorii(kat.slug);
        if (utwory.length === 0) return null;
        return (
          <section key={kat.slug} id={kat.slug} className="mb-16 scroll-mt-24">
            <h2 className="separator-gwiazda mb-3 text-2xl">{kat.name}</h2>
            <p className="mb-8 max-w-3xl text-sm text-przygaszony">{kat.description}</p>
            <div className="grid gap-8 md:grid-cols-2">
              {utwory.map((u) => (
                <article key={`${kat.slug}-${u.sku}`}>
                  <OdtwarzaczYT youtubeId={u.youtubeId} title={u.title} duration={u.duration} />
                  <h3 className="mt-4 text-lg">{u.title}</h3>
                  <p className="mt-1 text-sm text-przygaszony">{u.description}</p>
                  <p className="mt-2 text-sm">
                    <span className="etykieta text-przygaszony">For: </span>
                    <span className="text-kosc">{u.atmosphere}</span>
                  </p>
                  <p className="mt-1 text-xs text-przygaszony">
                    {u.duration} · moods: {u.moods.join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="border border-linia bg-noc-2 p-8 text-center">
        <h2 className="mb-3 text-2xl">Put the music to work</h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-przygaszony">
          Choose a piece longer than your session, press play, and begin a reading while it holds
          the room. All {UTWORY.length} soundscapes pair with the free reading experience.
        </p>
        <Link
          href="/tarot/"
          className="inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          BEGIN A READING
        </Link>
      </section>
    </div>
  );
}
