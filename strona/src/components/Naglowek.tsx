"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAZWA } from "@/data/strona";
import { sciezkaOdpowiednika } from "@/data/pl/mapa";

const POZYCJE_EN = [
  { href: "/tarot/", label: "Reading" },
  { href: "/cards/", label: "The Cards" },
  { href: "/music/", label: "Music" },
  { href: "/guide/", label: "Guide" },
  { href: "/about/", label: "About" },
];

const POZYCJE_PL = [
  { href: "/pl/tarot/", label: "Czytanie" },
  { href: "/pl/karty/", label: "Karty" },
  { href: "/pl/muzyka/", label: "Muzyka" },
  { href: "/pl/przewodnik/", label: "Przewodnik" },
  { href: "/pl/o-projekcie/", label: "O projekcie" },
];

export default function Naglowek() {
  const [otwarte, setOtwarte] = useState(false);
  const sciezka = usePathname();
  const poPolsku = sciezka === "/pl" || sciezka.startsWith("/pl/");
  const POZYCJE = poPolsku ? POZYCJE_PL : POZYCJE_EN;
  const odpowiednik = sciezkaOdpowiednika(sciezka);

  return (
    <header className="sticky top-0 z-50 border-b border-linia bg-noc/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href={poPolsku ? "/pl/" : "/"}
          className="flex items-center gap-3"
          aria-label={poPolsku ? `${NAZWA}, strona główna` : `${NAZWA}, home`}
        >
          <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
            <circle cx="20" cy="20" r="17" fill="none" stroke="#c6a35f" strokeWidth="1.2" />
            <path
              d="M20 5 L23.5 16.5 L35 20 L23.5 23.5 L20 35 L16.5 23.5 L5 20 L16.5 16.5 Z"
              fill="none"
              stroke="#e8d7a8"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="20" r="3.2" fill="none" stroke="#c6a35f" strokeWidth="1" />
          </svg>
          <span
            className="text-lg tracking-[0.18em] text-zloto-2"
            style={{ fontFamily: "var(--font-naglowki)" }}
          >
            AURAL ARCANA
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label={poPolsku ? "Główna" : "Main"}>
          {POZYCJE.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`etykieta transition-colors hover:text-zloto-2 ${
                sciezka === p.href ? "text-zloto-2" : ""
              }`}
              aria-current={sciezka === p.href ? "page" : undefined}
            >
              {p.label}
            </Link>
          ))}
          <Link
            href={odpowiednik}
            className="etykieta border border-linia px-2.5 py-1 text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
            aria-label={poPolsku ? "Switch to English" : "Przełącz na polski"}
            lang={poPolsku ? "en" : "pl"}
            hrefLang={poPolsku ? "en" : "pl"}
          >
            {poPolsku ? "EN" : "PL"}
          </Link>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Link
            href={odpowiednik}
            className="etykieta border border-linia px-2.5 py-1 text-przygaszony"
            aria-label={poPolsku ? "Switch to English" : "Przełącz na polski"}
            lang={poPolsku ? "en" : "pl"}
            hrefLang={poPolsku ? "en" : "pl"}
          >
            {poPolsku ? "EN" : "PL"}
          </Link>
          <button
            type="button"
            aria-expanded={otwarte}
            aria-label={
              poPolsku
                ? otwarte
                  ? "Zamknij menu"
                  : "Otwórz menu"
                : otwarte
                  ? "Close menu"
                  : "Open menu"
            }
            onClick={() => setOtwarte(!otwarte)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-zloto" fill="none" strokeWidth="1.5">
              {otwarte ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {otwarte && (
        <nav
          className="border-t border-linia px-4 pb-5 pt-3 md:hidden"
          aria-label={poPolsku ? "Główna mobilna" : "Main mobile"}
        >
          <ul className="flex flex-col gap-4">
            {POZYCJE.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="etykieta block py-1"
                  onClick={() => setOtwarte(false)}
                  aria-current={sciezka === p.href ? "page" : undefined}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
