import type { Metadata } from "next";
import Link from "next/link";
import { KartaAwers } from "@/components/KartaGrafika";
import OdtwarzaczYT from "@/components/OdtwarzaczYT";
import { FaqJsonLd } from "@/components/DaneStrukturalne";
import { znajdzKartePl } from "@/data/pl/karty";
import { KARTY_PL } from "@/data/pl/karty";
import KartaDnia from "@/components/KartaDnia";
import { SPREADY_PL } from "@/data/pl/spready";
import { UTWORY_PL } from "@/data/pl/muzyka";
import { ARTYKULY_PL } from "@/data/pl/artykuly";
import { FAQ_PL } from "@/data/pl/strona";
import { KANAL_YT, NAZWA } from "@/data/strona";

export const metadata: Metadata = {
  title: { absolute: "Aural Arcana: darmowy tarot online i muzyka do wróżb" },
  alternates: {
    canonical: "/pl/",
    languages: { en: "/", pl: "/pl/", "x-default": "/" },
  },
};

function iluKart(n: number): string {
  if (n === 1) return "1 karta";
  if (n >= 2 && n <= 4) return `${n} karty`;
  return `${n} kart`;
}

export default function StronaGlownaPl() {
  const heroKarty = ["gwiazda", "ksiezyc", "slonce"]
    .map(znajdzKartePl)
    .filter((k) => k !== undefined);
  const wyrozniane = UTWORY_PL.filter((u) => u.featured);
  const artykuly = ARTYKULY_PL.slice(0, 3);
  const kartyDnia = KARTY_PL.map(
    ({ description, upright, reversed, questions, keywordsReversed, ...reszta }) => reszta,
  );

  return (
    <>
      <FaqJsonLd faq={FAQ_PL} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div className="wejscie">
            <p className="etykieta mb-4">Nadprzyrodzony tarot · atmosferyczna muzyka</p>
            <h1 className="mb-6 text-4xl leading-tight sm:text-5xl">
              Karty są potasowane.
              <br />
              Muzyka czeka.
            </h1>
            <p className="mb-8 max-w-lg text-przygaszony">
              {NAZWA} to cyfrowe sanktuarium, w którym spotykają się tarot i dźwięk: darmowe
              interaktywne czytania z pełnej talii 78 kart, znaczenia każdej z nich i autorskie
              pejzaże dźwiękowe skomponowane do wróżb, rytuału i głębokiego skupienia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pl/tarot/"
                className="poswiata border border-zloto bg-zloto/10 px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
              >
                ZACZNIJ CZYTANIE
              </Link>
              <Link
                href="/pl/muzyka/"
                className="border border-linia px-8 py-3 tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
              >
                WEJDŹ W MUZYKĘ
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

      {/* KARTA DNIA */}
      <KartaDnia karty={kartyDnia} jezyk="pl" />

      {/* SPREADY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="separator-gwiazda etykieta mb-10 justify-center">✦ Wybierz swoje czytanie ✦</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPREADY_PL.map((s) => (
            <Link
              key={s.slug}
              href="/pl/tarot/"
              className="group border border-linia bg-noc-2 p-6 transition-colors hover:border-zloto"
            >
              <p className="etykieta mb-3 text-przygaszony">{iluKart(s.positions.length)}</p>
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
            <h2 className="mb-4 text-3xl">Sanktuarium, nie fabryka wróżb</h2>
            <p className="text-przygaszony">
              Czytamy tarot jak lustro, nie jak szklaną kulę: licząca stulecia mowa symboli pomaga
              zobaczyć własną sytuację pod kątami, których się nie wybrało. Bez gwarantowanych
              przyszłości, bez straszenia, bez dosprzedaży przebranej za przeznaczenie. Tylko
              karty, muzyka i twoja uwaga.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg">Karty</h3>
              <p className="text-sm text-przygaszony">
                Wszystkie 78 kart tarota, każda z własną stroną: symbolika, znaczenie proste i
                odwrócone oraz pytania, z którymi warto posiedzieć.{" "}
                <Link href="/pl/karty/" className="text-zloto-2 underline underline-offset-4">
                  Poznaj talię
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg">Muzyka</h3>
              <p className="text-sm text-przygaszony">
                Autorskie pejzaże dźwiękowe do czytań, medytacji i rytuału, uporządkowane według
                przeznaczenia, nastroju i długości.{" "}
                <Link href="/pl/muzyka/" className="text-zloto-2 underline underline-offset-4">
                  Przeglądaj bibliotekę
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg">Praktyka</h3>
              <p className="text-sm text-przygaszony">
                Przewodniki po uczciwym czytaniu: jak pytać, jak dobierać, jak słuchać i jak dźwięk
                pogłębia całą praktykę.{" "}
                <Link href="/pl/przewodnik/" className="text-zloto-2 underline underline-offset-4">
                  Czytaj przewodnik
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MUZYKA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="etykieta mb-2">Z kanału</p>
            <h2 className="text-3xl">Pejzaże dźwiękowe na stół</h2>
          </div>
          <a
            href={KANAL_YT}
            target="_blank"
            rel="noopener"
            className="text-sm text-przygaszony underline underline-offset-4 hover:text-zloto-2"
          >
            Aural Arcana: Sonic Mysteries na YouTube
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
            href="/pl/muzyka/"
            className="inline-block border border-linia px-6 py-2.5 text-sm tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
          >
            CAŁA BIBLIOTEKA
          </Link>
        </div>
      </section>

      {/* PRZEWODNIK */}
      <section className="border-t border-linia">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="etykieta mb-2">Nowe w przewodniku</p>
          <h2 className="mb-10 text-3xl">Poznaj język kart</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {artykuly.map((a) => (
              <Link
                key={a.slug}
                href={`/pl/przewodnik/${a.slug}/`}
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
          <h2 className="mb-10 text-center text-3xl">Pytania zadawane na progu</h2>
          <div className="space-y-4">
            {FAQ_PL.map((f) => (
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
