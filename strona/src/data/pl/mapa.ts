// Mapa odpowiedników EN<->PL: sekcje, karty i artykuły.
// Używana przez przełącznik języka w nagłówku i przez hreflang.

import { KARTY_PL } from "./karty";
import { ARTYKULY_PL } from "./artykuly";

export const SEKCJE_EN_PL: Record<string, string> = {
  "/": "/pl/",
  "/tarot/": "/pl/tarot/",
  "/cards/": "/pl/karty/",
  "/music/": "/pl/muzyka/",
  "/guide/": "/pl/przewodnik/",
  "/about/": "/pl/o-projekcie/",
  "/privacy/": "/pl/prywatnosc/",
};

const KARTY_EN_NA_PL = new Map(KARTY_PL.map((k) => [k.slugEn!, k.slug]));
const KARTY_PL_NA_EN = new Map(KARTY_PL.map((k) => [k.slug, k.slugEn!]));
const ARTYKULY_EN_NA_PL = new Map(ARTYKULY_PL.map((a) => [a.slugEn, a.slug]));
const ARTYKULY_PL_NA_EN = new Map(ARTYKULY_PL.map((a) => [a.slug, a.slugEn]));

export function slugKartyPl(slugEn: string): string | undefined {
  return KARTY_EN_NA_PL.get(slugEn);
}

export function slugKartyEn(slugPl: string): string | undefined {
  return KARTY_PL_NA_EN.get(slugPl);
}

export function slugArtykuluPl(slugEn: string): string | undefined {
  return ARTYKULY_EN_NA_PL.get(slugEn);
}

export function slugArtykuluEn(slugPl: string): string | undefined {
  return ARTYKULY_PL_NA_EN.get(slugPl);
}

/** Ścieżka odpowiednika w drugim języku, albo strona główna drugiego języka. */
export function sciezkaOdpowiednika(sciezka: string): string {
  const s = sciezka.endsWith("/") ? sciezka : `${sciezka}/`;

  if (s.startsWith("/pl/")) {
    // PL -> EN
    for (const [en, pl] of Object.entries(SEKCJE_EN_PL)) {
      if (s === pl) return en;
    }
    const karta = s.match(/^\/pl\/karty\/([^/]+)\/$/);
    if (karta) {
      const en = slugKartyEn(karta[1]);
      return en ? `/cards/${en}/` : "/cards/";
    }
    const artykul = s.match(/^\/pl\/przewodnik\/([^/]+)\/$/);
    if (artykul) {
      const en = slugArtykuluEn(artykul[1]);
      return en ? `/guide/${en}/` : "/guide/";
    }
    return "/";
  }

  // EN -> PL
  if (SEKCJE_EN_PL[s]) return SEKCJE_EN_PL[s];
  const karta = s.match(/^\/cards\/([^/]+)\/$/);
  if (karta) {
    const pl = slugKartyPl(karta[1]);
    return pl ? `/pl/karty/${pl}/` : "/pl/karty/";
  }
  const artykul = s.match(/^\/guide\/([^/]+)\/$/);
  if (artykul) {
    const pl = slugArtykuluPl(artykul[1]);
    return pl ? `/pl/przewodnik/${pl}/` : "/pl/przewodnik/";
  }
  return "/pl/";
}
