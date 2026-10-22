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
    sku: "tarot-the-moon-1",
    youtubeId: "ZThVVIKxl1s",
    title: "Tarot · The Moon I",
    description:
      "Spokojny, mroczny ambient mistyczny inspirowany kartą Księżyc: narastające drony, kryształowe misy i odległy chór bez słów w ogromnym pogłosie katedry.",
    atmosphere: "Intuicyjne czytania, praca ze snami, nocna medytacja.",
    duration: "3:34",
    minutes: 4,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["nocny", "senny", "głęboki"],
  },
  {
    sku: "tarot-the-moon-2",
    youtubeId: "A2-32UW-vAQ",
    title: "Tarot · The Moon II",
    description:
      "Druga część sesji Księżyca: kryształowe misy, niskie drony i odległy chór unoszący się jak mgła nad nieruchomą wodą.",
    atmosphere: "Pisanie dziennika, praca z intuicją, zasypianie z pytaniem.",
    duration: "3:45",
    minutes: 4,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["mglisty", "spokojny", "intuicyjny"],
  },
  {
    sku: "tarot-the-hermit-1",
    youtubeId: "hLQJc959_jU",
    title: "Tarot · The Hermit I",
    description:
      "Minimalistyczny ambient dla Pustelnika: rzadkie dźwięki wyciszonego pianina, ciepły szum taśmy i miękki analogowy pad, z długą ciszą między nutami.",
    atmosphere: "Czytania w samotności, refleksja, cicha praca wewnętrzna.",
    duration: "3:04",
    minutes: 3,
    categories: ["tarot-sessions"],
    moods: ["samotny", "ciepły", "oszczędny"],
  },
  {
    sku: "tarot-the-hermit-2",
    youtubeId: "rPEUGfq1kjU",
    title: "Tarot · The Hermit II",
    description:
      "Ciąg dalszy sesji Pustelnika: wyciszone pianino, ciepło taśmy i powolne pady na wieczory z jednym szczerym pytaniem.",
    atmosphere: "Dziennik, praca z cieniem, wieczorne czytania.",
    duration: "3:15",
    minutes: 3,
    categories: ["tarot-sessions"],
    moods: ["cichy", "refleksyjny", "czuły"],
  },
  {
    sku: "aural-arcana-eclipse-1",
    youtubeId: "B4iC2z7JNp8",
    title: "Aural Arcana · Eclipse I",
    description:
      "Niebiański dark ambient: niski dron smyczkowej wiolonczeli, granularne migotanie, nocne świerszcze i powoli narastające pady w kosmicznym pogłosie.",
    atmosphere: "Sesje tarota, głębokie skupienie, patrzenie w gwiazdy.",
    duration: "3:18",
    minutes: 3,
    categories: ["otherworldly", "tarot-sessions"],
    moods: ["niebiański", "mroczny", "rozległy"],
  },
  {
    sku: "aural-arcana-eclipse-2",
    youtubeId: "t2BUdLJbWeo",
    title: "Aural Arcana · Eclipse II",
    description:
      "Druga połowa sesji Zaćmienia: drony wiolonczeli, świerszcze na skraju nocy i powolna niebiańska fala.",
    atmosphere: "Rytuał, medytacja, długie rozkłady.",
    duration: "3:19",
    minutes: 3,
    categories: ["otherworldly", "mystical-ambient"],
    moods: ["nocny", "powolny", "kosmiczny"],
  },
  {
    sku: "aural-arcana-ritual-1",
    youtubeId: "CYp3OgdLH1I",
    title: "Aural Arcana · Ritual I",
    description:
      "Hipnotyczny ambient rytualny: odległe bicie bębna ramowego, smyczkowany metal, dymne niskie drony i głęboki pomruk, jak w starożytnej świątyni przy świecach.",
    atmosphere: "Rytuały przy świecach, tarot, medytacja w ruchu.",
    duration: "3:35",
    minutes: 4,
    categories: ["mystical-ambient", "tarot-sessions"],
    moods: ["hipnotyczny", "starożytny", "dymny"],
  },
  {
    sku: "aural-arcana-ritual-2",
    youtubeId: "CNThC06we44",
    title: "Aural Arcana · Ritual II",
    description:
      "Ciąg dalszy sesji w świątyni: puls bębna ramowego, smyczkowany metal i gęste od kadzidła drony na rytuały przy świecach i długie czytania.",
    atmosphere: "Rytuały przy świecach, praca magiczna, długie czytania.",
    duration: "3:35",
    minutes: 4,
    categories: ["mystical-ambient"],
    moods: ["miarowy", "kadzidlany", "ceremonialny"],
  },
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
