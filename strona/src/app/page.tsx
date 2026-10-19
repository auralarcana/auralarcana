import type { Metadata } from "next";
import Link from "next/link";
import { KartaAwers } from "@/components/KartaGrafika";
import OdtwarzaczYT from "@/components/OdtwarzaczYT";
import { FaqJsonLd } from "@/components/DaneStrukturalne";
import { znajdzKarte } from "@/data/karty";
import { SPREADY } from "@/data/spready";
import { UTWORY } from "@/data/muzyka";
import { ARTYKULY } from "@/data/artykuly";
import { FAQ, KANAL_YT, NAZWA } from "@/data/strona";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", pl: "/pl/", "x-default": "/" },
  },
};

export default function StronaGlowna() {
  const heroKarty = ["the-star", "the-moon", "the-sun"]
    .map(znajdzKarte)
    .filter((k) => k !== undefined);
  const wyrozniane = UTWORY.filter((u) => u.featured);
  const artykuly = ARTYKULY.slice(0, 3);

  return (
    <>
      <FaqJsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div className="wejscie">
            <p className="etykieta mb-4">Supernatural tarot · atmospheric music</p>
            <h1 className="mb-6 text-4xl leading-tight sm:text-5xl">
              The cards are shuffled.
              <br />
              The music is waiting.
            </h1>
            <p className="mb-8 max-w-lg text-przygaszony">
              {NAZWA} is a digital sanctuary where tarot and sound meet: free interactive readings
              from a full 78 card deck, the meanings behind every card, and original soundscapes
              composed for divination, ritual and deep focus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/tarot/"
                className="poswiata border border-zloto bg-zloto/10 px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
              >
                BEGIN A READING
              </Link>
              <Link
                href="/music/"
                className="border border-linia px-8 py-3 tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
              >
                ENTER THE MUSIC
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden h-[420px] w-full max-w-md md:block" aria-hidden="true">
            {heroKarty.map((k, i) => (
              <div
                key={k.slug}
                className="absolute top-1/2 w-44 -translate-y-1/2 shadow-2xl shadow-black/60"
                style={{
                  left: `${i * 26 + 8}%`,
                  transform: `translateY(-50%) rotate(${(i - 1) * 9}deg)`,
                  zIndex: i === 1 ? 2 : 1,
                }}
              >
                <KartaAwers karta={k} className="h-auto w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPREADY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="separator-gwiazda etykieta mb-10 justify-center">✦ Choose your reading ✦</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPREADY.map((s) => (
            <Link
              key={s.slug}
              href="/tarot/"
              className="group border border-linia bg-noc-2 p-6 transition-colors hover:border-zloto"
            >
              <p className="etykieta mb-3 text-przygaszony">
                {s.positions.length} {s.positions.length === 1 ? "card" : "cards"}
              </p>
              <h3 className="mb-2 text-lg">{s.name}</h3>
              <p className="text-sm text-przygaszony">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FILOZOFIA */}
      <section className="border-y border-linia bg-noc-2/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl">A sanctuary, not a fortune factory</h2>
            <p className="text-przygaszony">
              We read tarot as a mirror rather than a crystal ball: a centuries old language of
              symbols that helps you see your own situation from angles you did not choose. No
              guaranteed futures, no fear, no upsells dressed as destiny. Just the cards, the
              music, and your attention.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg">The Cards</h3>
              <p className="text-sm text-przygaszony">
                All 78 cards of the tarot, each with its own page: symbolism, upright and reversed
                meanings, and questions worth sitting with. <Link href="/cards/" className="text-zloto-2 underline underline-offset-4">Explore the deck</Link>.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg">The Music</h3>
              <p className="text-sm text-przygaszony">
                Original soundscapes composed for readings, meditation and ritual, organized by
                purpose, mood and length. <Link href="/music/" className="text-zloto-2 underline underline-offset-4">Browse the library</Link>.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg">The Practice</h3>
              <p className="text-sm text-przygaszony">
                Guides on reading honestly: how to ask, how to draw, how to listen, and how sound
                deepens the whole practice. <Link href="/guide/" className="text-zloto-2 underline underline-offset-4">Read the guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MUZYKA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="etykieta mb-2">From the channel</p>
            <h2 className="text-3xl">Soundscapes for the table</h2>
          </div>
          <a
            href={KANAL_YT}
            target="_blank"
            rel="noopener"
            className="text-sm text-przygaszony underline underline-offset-4 hover:text-zloto-2"
          >
            Aural Arcana: Sonic Mysteries on YouTube
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {wyrozniane.map((u) => (
            <div key={u.sku}>
              <OdtwarzaczYT youtubeId={u.youtubeId} title={u.title} duration={u.duration} />
              <h3 className="mt-4 text-base">{u.title}</h3>
              <p className="mt-1 text-sm text-przygaszony">{u.atmosphere}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/music/"
            className="inline-block border border-linia px-6 py-2.5 text-sm tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
          >
            THE FULL LIBRARY
          </Link>
        </div>
      </section>

      {/* PRZEWODNIK */}
      <section className="border-t border-linia">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="etykieta mb-2">New in the guide</p>
          <h2 className="mb-10 text-3xl">Learn the language of the cards</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {artykuly.map((a) => (
              <Link
                key={a.slug}
                href={`/guide/${a.slug}/`}
                className="group border border-linia bg-noc-2 p-6 transition-colors hover:border-zloto"
              >
                <p className="etykieta mb-3 text-przygaszony">{a.readingTime}</p>
                <h3 className="mb-2 text-lg group-hover:text-zloto-2">{a.title}</h3>
                <p className="text-sm text-przygaszony">{a.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-linia bg-noc-2/50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="mb-10 text-center text-3xl">Questions asked at the threshold</h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <details key={f.pytanie} className="group border border-linia bg-noc p-5">
                <summary className="cursor-pointer list-none font-medium text-kosc marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {f.pytanie}
                    <span className="text-zloto transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm text-przygaszony">{f.odpowiedz}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
