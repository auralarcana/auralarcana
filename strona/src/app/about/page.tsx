import type { Metadata } from "next";
import Link from "next/link";
import { KANAL_YT } from "@/data/strona";

export const metadata: Metadata = {
  title: "About Aura Arcana",
  description:
    "Aura Arcana joins supernatural tarot with original atmospheric music: free readings, the meanings of all 78 cards, and soundscapes composed for divination, ritual and focus.",
  alternates: {
    canonical: "/about/",
    languages: { en: "/about/", pl: "/pl/o-projekcie/", "x-default": "/about/" },
  },
};

export default function StronaONas() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">The project</p>
        <h1 className="text-4xl">About Aura Arcana</h1>
      </div>

      <article className="tekst-artykulu space-y-5">
        <p>
          Aura Arcana began with a simple observation: a tarot reading is only half made of cards.
          The other half is atmosphere. The same spread, laid out between emails under office
          light, says less than it does at a cleared table, in low light, with the right sound in
          the air. Most tarot websites supply the cards. Almost none supply the air.
        </p>
        <p>
          So this project grew in two halves that were always meant to be one. The website is the
          reading room: a free interactive tarot drawing from the full 78 card deck, a library of
          card meanings written without fear or flattery, and guides to the practice itself. The
          YouTube channel, <a href={KANAL_YT} target="_blank" rel="noopener">Aural Arcana: Sonic
          Mysteries</a>, is the sound of the house: original ambient compositions, mystical
          soundscapes and focus sessions, made to sit beneath a reading the way candlelight sits
          beneath a face.
        </p>
        <p>
          A word on what we believe, because tarot attracts both true believers and professional
          debunkers, and we are neither. We treat the deck as one of the great symbolic
          instruments: 78 images refined across six centuries into a language for the parts of
          experience that plain speech reaches last. Whether anything supernatural moves the cards
          is a question we leave respectfully open. What we can promise is this: an honest shuffle,
          interpretations written with care, and no predictions sold as certainties. The cards do
          not tell your future here. They help you look at your present until it speaks.
        </p>
        <p>
          Everything on this site is free. The readings require no account and store nothing you
          type. If the project gives you something, the best returns are simple: play the music
          from the channel, subscribe there, and pass the address of this sanctuary to someone who
          would like it.
        </p>
      </article>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/tarot/"
          className="border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          BEGIN A READING
        </Link>
        <a
          href={KANAL_YT}
          target="_blank"
          rel="noopener"
          className="border border-linia px-8 py-3 tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
        >
          VISIT THE CHANNEL
        </a>
      </div>
    </div>
  );
}
