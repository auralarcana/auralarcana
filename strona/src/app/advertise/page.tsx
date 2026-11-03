import type { Metadata } from "next";
import Link from "next/link";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { DOMENA, KANAL_YT } from "@/data/strona";
import { LUNACJE, MAIL_REKLAMY, PAKIETY } from "@/data/reklama";

export const metadata: Metadata = {
  title: "Advertise on Aural Arcana",
  description:
    "Partner placements for tarot decks, witchy shops, candle makers and occult booksellers on Aural Arcana: card page spots, New and Full Moon features and site-wide partnership, booked online.",
  alternates: { canonical: "/advertise/" },
};

const KROKI = [
  {
    nr: "I",
    tytul: "Book online",
    tekst: "Pick a placement below and pay securely through Stripe. Monthly plans can be cancelled at any time.",
  },
  {
    nr: "II",
    tytul: "Send us your details",
    tekst: "Within 24 hours we email you for your logo, link, one line about your brand and, for card pages, the card you want.",
  },
  {
    nr: "III",
    tytul: "Go live",
    tekst: "Your placement is live within three days, clearly marked as a partner, and designed to sit inside the site, not shout over it.",
  },
];

export default function StronaReklamy() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Home", url: `${DOMENA}/` },
          { name: "Advertise", url: `${DOMENA}/advertise/` },
        ]}
      />

      <header className="mx-auto mb-14 max-w-3xl text-center">
        <p className="etykieta mb-3">Partners</p>
        <h1 className="mb-5 text-4xl">Advertise on Aural Arcana</h1>
        <p className="text-przygaszony">
          Aural Arcana is a reading room: free interactive tarot, the meanings of all 78 cards and
          original dark ambient music to read to. The people who find us are mid-practice, deck in
          hand, looking for the right card, the right spread, the right atmosphere. That is the
          moment your deck, candle or book belongs on the table.
        </p>
      </header>

      <div className="mx-auto mb-14 max-w-3xl border-y border-linia py-5 text-center">
        <p className="etykieta mb-2">Founding partner rate</p>
        <p className="text-przygaszony">
          The first ten partners pay roughly 30% less, and keep that rate for as long as they stay.
        </p>
      </div>

      <section aria-label="Placements" className="mb-20 grid gap-6 md:grid-cols-3">
        {PAKIETY.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className={`flex flex-col border p-7 ${p.wyrozniony ? "border-zloto bg-noc-2" : "border-linia"}`}
          >
            <p className="etykieta mb-3">{p.wyrozniony ? "Seasonal" : "Placement"}</p>
            <h2 className="mb-4 text-2xl">{p.nazwa}</h2>
            <p className="mb-1">
              <span className="text-4xl text-zloto-2">{p.cenaFounding}</span>{" "}
              <span className="text-przygaszony line-through">{p.cenaRegularna}</span>
            </p>
            <p className="mb-5 text-sm text-przygaszony">{p.okres}</p>
            <p className="mb-6 text-przygaszony">{p.opis}</p>
            <ul className="mb-8 space-y-2 text-base">
              {p.zawiera.map((z) => (
                <li key={z} className="flex gap-3">
                  <span aria-hidden className="text-zloto">✦</span>
                  <span>{z}</span>
                </li>
              ))}
            </ul>
            <a
              href={p.link}
              target="_blank"
              rel="noopener"
              className={`mt-auto block px-6 py-3 text-center text-sm tracking-widest transition-colors ${
                p.wyrozniony
                  ? "bg-zloto text-noc hover:bg-zloto-2"
                  : "border border-zloto text-zloto-2 hover:bg-zloto hover:text-noc"
              }`}
            >
              BOOK {p.nazwa.toUpperCase()}
            </a>
          </article>
        ))}
      </section>

      <section className="mb-20 grid gap-12 md:grid-cols-2">
        <div>
          <p className="etykieta mb-3">Coming lunations</p>
          <h2 className="mb-6 text-2xl">Moons you can book</h2>
          <ul className="divide-y divide-linia border-y border-linia">
            {LUNACJE.map((l) => (
              <li key={l.data} className="flex items-baseline justify-between gap-4 py-3">
                <span>{l.nazwa}</span>
                <span className="text-sm text-przygaszony">{l.data}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-przygaszony">
            Each lunation carries one Lunation Feature, first come, first served.
          </p>
        </div>

        <div>
          <p className="etykieta mb-3">What we feature</p>
          <h2 className="mb-6 text-2xl">Who fits here</h2>
          <p className="mb-4">
            Tarot and oracle decks, candles and ritual tools, crystals, occult and folklore books,
            journals, courses and music made for practice.
          </p>
          <p className="text-przygaszony">
            We decline anything that promises certainty for money: psychic hotlines, guaranteed
            spells, gambling, get-rich schemes. Every placement is labelled as a partner, and we keep
            the right to say no to a brand that does not suit the room.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-10 text-center">
          <p className="etykieta mb-3">How it works</p>
          <h2 className="text-2xl">From booking to live in three days</h2>
        </div>
        <ol className="grid gap-8 md:grid-cols-3">
          {KROKI.map((k) => (
            <li key={k.nr} className="text-center">
              <p className="mb-3 font-[family-name:var(--font-naglowki)] text-3xl text-zloto">{k.nr}</p>
              <h3 className="mb-2 text-xl">{k.tytul}</h3>
              <p className="text-przygaszony">{k.tekst}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl border-t border-linia pt-12 text-center">
        <p className="etykieta mb-3">Independent deck artists</p>
        <h2 className="mb-5 text-2xl">Made your own deck?</h2>
        <p className="mb-8 text-przygaszony">
          Our editorial features of independent decks are free and always will be. Tell us about
          your work and we will consider it for a card page or a guide. Paid placements above are for
          shops and brands who want guaranteed space.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${MAIL_REKLAMY}?subject=Aural%20Arcana%20partnership`}
            className="border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            WRITE TO US
          </a>
          <Link
            href="/tarot/"
            className="border border-linia px-8 py-3 tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
          >
            SEE THE READING ROOM
          </Link>
        </div>
        <p className="mt-6 text-sm text-przygaszony">
          {MAIL_REKLAMY} ·{" "}
          <a href={KANAL_YT} target="_blank" rel="noopener" className="hover:text-zloto-2">
            Aural Arcana on YouTube
          </a>
        </p>
      </section>
    </div>
  );
}
