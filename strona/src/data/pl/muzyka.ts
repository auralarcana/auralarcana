// Polska wersja biblioteki muzyki. Tytuły filmów zostają angielskie,
// bo takie są na kanale; opisy i kategorie są polskie.
// Nowy film: najpierw wpis w ../muzyka.ts, potem polski odpowiednik tutaj.

import type { KategoriaMuzyki, Utwor } from "../muzyka";

export const KATEGORIE_PL: KategoriaMuzyki[] = [
  {
    slug: "tarot-sessions",
    name: "Muzyka do czytania tarota",
    description:
      "Długie, atmosferyczne kompozycje pisane pod czytanie: na tyle obecne, by utrzymać nastrój, na tyle ciche, by karty mogły mówić.",
  },
  {
    slug: "mystical-ambient",
    name: "Mistyczne i nadprzyrodzone klimaty",
    description:
      "Pejzaże dźwiękowe niewidzialnego: rytualne drony, dalekie głosy, powietrze gęste od znaków. Do wróżenia, pisania dziennika i pokojów przy świecach.",
  },
  {
    slug: "otherworldly",
    name: "Nieziemski i mroczny ambient",
    description:
      "Transmisje z dziwniejszych miejsc. Obce faktury i kosmiczne pomruki do introspekcji na skraju mapy.",
  },
  {
    slug: "focus",
    name: "Skupienie i nauka",
    description:
      "Lofi i spokojne pejzaże dźwiękowe zestrojone pod koncentrację: długie sesje pracy, nauki albo cichego tworzenia.",
  },
  {
    slug: "cinematic",
    name: "Epickie i filmowe",
    description:
      "Orkiestrowy ciężar i rozpęd. Na dni, które potrzebują ścieżki dźwiękowej większej od siebie.",
  },
  {
    slug: "mysteries",
    name: "Sonic Mysteries",
    description:
      "Krótkie eseje wideo o zakazanej historii i dziwnych artefaktach, z autorską muzyką kanału w tle.",
  },
];

export const UTWORY_PL: Utwor[] = [
  {
    sku: "solastalgia-vol1",
    youtubeId: "7fbAjUR-jpI",
    title: "S O L A S T A L G I A, Vol. 1",
    description:
      "Sześćdziesiąt minut atmosferycznego, mistycznego ambientu. Powolne przypływy dźwięku nazwane od tęsknoty za zmieniającym się domem: melancholijne, rozległe i dziwnie kojące.",
    atmosphere: "Długie sesje tarota, praca z cieniem, nocny dziennik.",
    duration: "59:54",
    minutes: 60,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["melancholijny", "rozległy", "kontemplacyjny"],
    featured: true,
  },
  {
    sku: "bene-gesserit",
    youtubeId: "yT6b3ssny9Q",
    title: "Meditative Ambient Inspired by the Bene Gesserit",
    description:
      "Godzina zdyscyplinowanego bezruchu inspirowana zakonem jasnowidzących z Diuny. Niskie drony i pulsy jak oddech, zbudowane pod wewnętrzny trening i jasne widzenie.",
    atmosphere: "Medytacja, przygotowanie rytuału, długie czytania.",
    duration: "1:02:25",
    minutes: 62,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["hipnotyczny", "zdyscyplinowany", "głęboki"],
    featured: true,
  },
  {
    sku: "alien-ambient",
    youtubeId: "GHSJcOaemJw",
    title: "Alien Ambient Music Compilation",
    description:
      "Kompilacja nieziemskich transmisji ambientowych. Zimne światło, powolne orbity i architektury, których nie projektowała ludzka ręka.",
    atmosphere: "Wróżenie na krawędziach, głęboka introspekcja, patrzenie w gwiazdy.",
    duration: "1:03:41",
    minutes: 64,
    categories: ["otherworldly", "tarot-sessions"],
    moods: ["obcy", "chłodny", "przestrzenny"],
    featured: true,
  },
  {
    sku: "cosmic-soundscapes",
    youtubeId: "mTFkHbdrIR8",
    title: "Visual ASMR: Cosmic Soundscapes",
    description:
      "Krótszy zestaw kosmicznych pejzaży dźwiękowych z powoli płynącym obrazem. Obce faktury ambientu zestrojone pod zmysłową ciszę.",
    atmosphere: "Czytania jednej karty, dekompresja, uważne pauzy.",
    duration: "23:08",
    minutes: 23,
    categories: ["otherworldly"],
    moods: ["nieważki", "spokojny", "dziwny"],
  },
  {
    sku: "neo-tokyo-ronin",
    youtubeId: "aEPdXeuRkWQ",
    title: "Cyberpunk Samurai Lofi for the Neo Tokyo Ronin",
    description:
      "Ponad godzina spokojnych pejzaży lofi w neonowym deszczu. Bity do nauki dla wędrownego szermierza z terminami.",
    atmosphere: "Głęboka praca, maratony nauki, nocne tworzenie.",
    duration: "1:09:49",
    minutes: 70,
    categories: ["focus"],
    moods: ["deszczowy", "miarowy", "nocny"],
  },
  {
    sku: "lofi-focus",
    youtubeId: "8kDGetAuCQ8",
    title: "Lofi Beats: The Secret Weapon for Mastering Focus",
    description:
      "Zwarta sesja lofi o tym, czemu bity niskiej wierności niosą uwagę wysokiej wierności. Wciśnij play, otwórz robotę.",
    atmosphere: "Krótkie sprinty skupionej pracy lub nauki.",
    duration: "17:50",
    minutes: 18,
    categories: ["focus"],
    moods: ["ciepły", "miarowy", "niespieszny"],
  },
  {
    sku: "epic-mix",
    youtubeId: "QChD34JnHHY",
    title: "Epic Music Mix for RPGs and Workouts",
    description:
      "Prawie godzina orkiestrowego ognia: bitewne bębny, wznoszące się smyczki i wola dokończenia tego, co zaczęte.",
    atmosphere: "Kampanie RPG, trening, odważne poranki.",
    duration: "53:30",
    minutes: 54,
    categories: ["cinematic"],
    moods: ["heroiczny", "napędzający", "jasny"],
  },
  {
    sku: "grand-canyon",
    youtubeId: "iCpTRUyUk9s",
    title: "Did Ancient Egyptians Visit the Grand Canyon?",
    description:
      "Dźwiękowa zagadka o zakazanej historii Wielkiego Kanionu i legendzie egipskiej jaskini z 1909 roku, z autorską muzyką ambient w tle.",
    atmosphere: "Godzina ciekawości. Polecamy słuchawki.",
    duration: "10:38",
    minutes: 11,
    categories: ["mysteries"],
    moods: ["ciekawski", "mroczny", "narracyjny"],
  },
  {
    sku: "mummified-baboons",
    youtubeId: "2mBgRQmR-yg",
    title: "Egypt's Monkey Business: Mummified Baboons",
    description:
      "Trzyminutowa zagadka: co zmumifikowane pawiany starożytnego Egiptu mówią o zaginionych szlakach handlowych i legendarnej krainie Punt.",
    atmosphere: "Krótki dziwny przystanek między czytaniami.",
    duration: "3:05",
    minutes: 3,
    categories: ["mysteries"],
    moods: ["ciekawski", "starożytny", "żwawy"],
  },
];

export function utworySkuPl(sku: string): Utwor | undefined {
  return UTWORY_PL.find((u) => u.sku === sku);
}

export function utworyKategoriiPl(slug: string): Utwor[] {
  return UTWORY_PL.filter((u) => u.categories.includes(slug));
}
