import type { Metadata } from "next";
import Link from "next/link";
import { KANAL_YT } from "@/data/strona";

export const metadata: Metadata = {
  title: "O projekcie Aura Arcana",
  description:
    "Aura Arcana łączy nadprzyrodzony tarot z autorską muzyką atmosferyczną: darmowe czytania, znaczenia wszystkich 78 kart i pejzaże dźwiękowe skomponowane do wróżb, rytuału i skupienia.",
  alternates: {
    canonical: "/pl/o-projekcie/",
    languages: { en: "/about/", pl: "/pl/o-projekcie/", "x-default": "/about/" },
  },
};

export default function StronaONasPl() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">Projekt</p>
        <h1 className="text-4xl">O projekcie Aura Arcana</h1>
      </div>

      <article className="tekst-artykulu space-y-5">
        <p>
          Aura Arcana zaczęła się od prostej obserwacji: czytanie tarota tylko w połowie składa się
          z kart. Druga połowa to atmosfera. Ten sam rozkład, położony między mailami w biurowym
          świetle, mówi mniej niż przy uprzątniętym stole, w półmroku, z właściwym dźwiękiem w
          powietrzu. Większość stron o tarocie dostarcza karty. Prawie żadna nie dostarcza
          powietrza.
        </p>
        <p>
          Projekt wyrósł więc w dwóch połowach, które od początku miały być jednym. Strona to pokój
          czytań: darmowy interaktywny tarot losujący z pełnej talii 78 kart, biblioteka znaczeń
          pisanych bez straszenia i bez schlebiania oraz przewodniki po samej praktyce. Kanał
          YouTube,{" "}
          <a href={KANAL_YT} target="_blank" rel="noopener">
            Aural Arcana: Sonic Mysteries
          </a>
          , to dźwięk tego domu: autorskie kompozycje ambient, mistyczne pejzaże dźwiękowe i sesje
          skupienia, pisane tak, by leżały pod czytaniem, jak światło świecy leży pod twarzą.
        </p>
        <p>
          Słowo o tym, w co wierzymy, bo tarot przyciąga zarówno żarliwie wierzących, jak i
          zawodowych demaskatorów, a my nie jesteśmy ani jednym, ani drugim. Traktujemy talię jako
          jeden z wielkich instrumentów symbolicznych: 78 obrazów szlifowanych przez sześć stuleci
          w język dla tych rejonów doświadczenia, do których zwykła mowa dociera ostatnia. Czy
          kartami porusza coś nadprzyrodzonego, to pytanie, które z szacunkiem zostawiamy otwarte.
          Możemy za to obiecać jedno: uczciwe tasowanie, interpretacje pisane z troską i żadnych
          przepowiedni sprzedawanych jako pewniki. Karty nie powiedzą ci tutaj przyszłości.
          Pomogą ci patrzeć na teraźniejszość, aż przemówi.
        </p>
        <p>
          Wszystko na tej stronie jest darmowe. Czytania nie wymagają konta i nie zapisują niczego,
          co wpiszesz. Jeśli projekt coś ci daje, najlepsza odpłata jest prosta: słuchaj muzyki z
          kanału, zasubskrybuj go i podaj adres tego sanktuarium komuś, komu by się spodobało.
        </p>
      </article>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/pl/tarot/"
          className="border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          ZACZNIJ CZYTANIE
        </Link>
        <a
          href={KANAL_YT}
          target="_blank"
          rel="noopener"
          className="border border-linia px-8 py-3 tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
        >
          ODWIEDŹ KANAŁ
        </a>
      </div>
    </div>
  );
}
