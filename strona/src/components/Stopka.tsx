"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DISCLAIMER, KANAL_YT, NAZWA, ROK_STARTU, SOCIAL } from "@/data/strona";
import { DISCLAIMER_PL } from "@/data/pl/strona";

const TEKSTY = {
  en: {
    opis:
      "A digital sanctuary of supernatural tarot and atmospheric music. Draw a card, put on a soundscape, and listen to what the symbols have to say.",
    eksploruj: "Explore",
    linki: [
      { href: "/tarot/", label: "Free Tarot Reading" },
      { href: "/cards/", label: "All 78 Card Meanings" },
      { href: "/music/", label: "Music Library" },
      { href: "/guide/", label: "Tarot Guide" },
      { href: "/privacy/", label: "Privacy" },
    ],
    muzyka: "The Music",
    muzykaOpis: "Original soundscapes for readings, ritual and focus live on our YouTube channel.",
    kanal: "Aural Arcana on YouTube",
    prawa: "All soundscapes and card interpretations are original work.",
    obserwuj: "Follow",
  },
  pl: {
    opis:
      "Cyfrowe sanktuarium nadprzyrodzonego tarota i atmosferycznej muzyki. Dobierz kartę, włącz pejzaż dźwiękowy i posłuchaj, co mają do powiedzenia symbole.",
    eksploruj: "Odkrywaj",
    linki: [
      { href: "/pl/tarot/", label: "Darmowe czytanie tarota" },
      { href: "/pl/karty/", label: "Znaczenia wszystkich 78 kart" },
      { href: "/pl/muzyka/", label: "Biblioteka muzyki" },
      { href: "/pl/przewodnik/", label: "Przewodnik po tarocie" },
      { href: "/pl/prywatnosc/", label: "Prywatność" },
    ],
    muzyka: "Muzyka",
    muzykaOpis:
      "Autorskie pejzaże dźwiękowe do czytań, rytuału i skupienia mieszkają na naszym kanale YouTube.",
    kanal: "Aural Arcana na YouTube",
    prawa: "Wszystkie pejzaże dźwiękowe i interpretacje kart są pracą autorską.",
    obserwuj: "Obserwuj",
  },
} as const;

export default function Stopka() {
  const sciezka = usePathname();
  const poPolsku = sciezka === "/pl" || sciezka.startsWith("/pl/");
  const t = poPolsku ? TEKSTY.pl : TEKSTY.en;
  const disclaimer = poPolsku ? DISCLAIMER_PL : DISCLAIMER;

  const rok = new Date().getFullYear();
  const lata = rok > ROK_STARTU ? `${ROK_STARTU}-${rok}` : `${ROK_STARTU}`;

  return (
    <footer className="mt-24 border-t border-linia">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="etykieta mb-3">{NAZWA}</p>
          <p className="text-sm text-przygaszony">{t.opis}</p>
        </div>

        <nav aria-label={poPolsku ? "Stopka" : "Footer"}>
          <p className="etykieta mb-3">{t.eksploruj}</p>
          <ul className="space-y-2 text-sm">
            {t.linki.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-zloto-2">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="etykieta mb-3">{t.muzyka}</p>
          <p className="mb-3 text-sm text-przygaszony">{t.muzykaOpis}</p>
          <a
            href={KANAL_YT}
            target="_blank"
            rel="noopener"
            className="inline-block border border-zloto px-4 py-2 text-sm tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            {t.kanal}
          </a>
          <p className="etykieta mb-3 mt-8">{t.obserwuj}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {SOCIAL.map((s) => (
              <li key={s.nazwa}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener me"
                  className="text-przygaszony transition-colors hover:text-zloto-2"
                >
                  {s.nazwa}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-linia">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <p className="mb-2 text-xs text-przygaszony/80">{disclaimer}</p>
          <p className="text-xs text-przygaszony/60">
            © {lata} {NAZWA}. {t.prawa}
          </p>
        </div>
      </div>
    </footer>
  );
}
