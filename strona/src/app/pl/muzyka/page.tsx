import type { Metadata } from "next";
import Link from "next/link";
import OdtwarzaczYT from "@/components/OdtwarzaczYT";
import { OkruszkiJsonLd } from "@/components/DaneStrukturalne";
import { KATEGORIE_PL, UTWORY_PL, utworyKategoriiPl } from "@/data/pl/muzyka";
import { DOMENA, KANAL_YT } from "@/data/strona";

export const metadata: Metadata = {
  title: "Muzyka do tarota, rytuału i skupienia",
  description:
    "Autorska muzyka atmosferyczna do czytania tarota, wróżb, medytacji i głębokiej pracy: mistyczny ambient, mroczne pejzaże dźwiękowe i sesje lofi z kanału YouTube Aural Arcana, uporządkowane według przeznaczenia, nastroju i długości.",
  alternates: {
    canonical: "/pl/muzyka/",
    languages: { en: "/music/", pl: "/pl/muzyka/", "x-default": "/music/" },
  },
};

export default function StronaMuzykiPl() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <OkruszkiJsonLd
        pozycje={[
          { name: "Strona główna", url: `${DOMENA}/pl/` },
          { name: "Biblioteka muzyki", url: `${DOMENA}/pl/muzyka/` },
        ]}
      />
      <div className="mb-6 text-center">
        <p className="etykieta mb-3">Dźwięk sanktuarium</p>
        <h1 className="mb-4 text-4xl">Biblioteka muzyki</h1>
        <p className="mx-auto max-w-2xl text-przygaszony">
          Każdy utwór tutaj to autorska kompozycja z naszego kanału YouTube, stworzona, by leżeć
          pod praktyką: czytaniem, rytuałem, medytacją, długą nocą pracy. Przeglądaj według
          przeznaczenia, porównaj długość z planowaną sesją i wciśnij play, kiedy zdecydujesz. Nic
          nie gra, dopóki nie poprosisz.
        </p>
      </div>

      <div className="mb-14 text-center">
        <a
          href={KANAL_YT}
          target="_blank"
          rel="noopener"
          className="inline-block border border-zloto px-6 py-2.5 text-sm tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          SUBSKRYBUJ NA YOUTUBE
        </a>
        <p className="mt-3 text-xs text-przygaszony">
          Nowe pejzaże dźwiękowe lądują najpierw na kanale, potem dołączają do tej biblioteki.
        </p>
      </div>

      {/* Nawigacja po kategoriach */}
      <nav aria-label="Kategorie muzyki" className="mb-14">
        <ul className="flex flex-wrap justify-center gap-2">
          {KATEGORIE_PL.filter((k) => utworyKategoriiPl(k.slug).length > 0).map((k) => (
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

      {KATEGORIE_PL.map((kat) => {
        const utwory = utworyKategoriiPl(kat.slug);
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
                    <span className="etykieta text-przygaszony">Do: </span>
                    <span className="text-kosc">{u.atmosphere}</span>
                  </p>
                  <p className="mt-1 text-xs text-przygaszony">
                    {u.duration} · nastroje: {u.moods.join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="border border-linia bg-noc-2 p-8 text-center">
        <h2 className="mb-3 text-2xl">Zaprzęgnij muzykę do pracy</h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-przygaszony">
          Wybierz utwór dłuższy niż sesja, wciśnij play i zacznij czytanie, podczas gdy on trzyma
          pokój. Wszystkie {UTWORY_PL.length} pejzaży łączy się z darmowym czytaniem.
        </p>
        <Link
          href="/pl/tarot/"
          className="inline-block border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          ZACZNIJ CZYTANIE
        </Link>
      </section>
    </div>
  );
}
