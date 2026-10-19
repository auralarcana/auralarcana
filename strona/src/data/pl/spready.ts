// Polskie definicje rozkładów. Slugi wspólne z wersją angielską,
// dzięki czemu silnik czytania działa bez zmian.

import type { Spread } from "../spready";

export const SPREADY_PL: Spread[] = [
  {
    slug: "daily",
    name: "Karta dnia",
    tagline: "Jedna karta. Jeden dzień. Jeden cichy sygnał.",
    description:
      "Najprostsza praktyka tarota i wciąż jedna z najbardziej odkrywczych. Pojedyncza karta dobrana rano staje się soczewką dnia: nastrojem, na który warto uważać, energią, w którą warto się wychylić, ostrzeżeniem trzymanym lekko. Wróć wieczorem i zapytaj, co karta okazała się znaczyć.",
    level: "beginner",
    positions: [
      {
        name: "Sygnał",
        meaning: "Prąd płynący przez twój dzień. Nie rozkaz, tylko podszept.",
      },
    ],
  },
  {
    slug: "timeline",
    name: "Przeszłość, teraźniejszość, przyszłość",
    tagline: "Klasyczny łuk trzech kart: historia w ruchu.",
    description:
      "Najbardziej znany rozkład tarota. Trzy karty kreślą kształt sytuacji w czasie: korzenie, które ją karmią, chwilę, w której stoisz, i kierunek, w którym prąd już płynie. Karta przyszłości opisuje rozpęd, nie przeznaczenie. To wciąż ty trzymasz karty.",
    level: "beginner",
    positions: [
      {
        name: "Przeszłość",
        meaning: "Co ukształtowało tę sytuację. Korzeń, dług albo dar, który wnosisz.",
      },
      {
        name: "Teraźniejszość",
        meaning: "Gdzie energia siedzi teraz. Prawdziwa twarz tej chwili.",
      },
      {
        name: "Przyszłość",
        meaning: "Dokąd zmierza prąd, jeśli nic nie zmieni kursu.",
      },
    ],
  },
  {
    slug: "crossroads",
    name: "Rozstaje",
    tagline: "Sytuacja, przeszkoda, kierunek. Dla decyzji, które nie zaczekają.",
    description:
      "Roboczy rozkład do konkretnego problemu. Pierwsza karta nazywa sytuację uczciwie, druga prawdziwą przeszkodę, rzadko tę spodziewaną, a trzecia wskazuje możliwe przejście. Czytaj go jak radę starego przyjaciela, który odmawia schlebiania.",
    level: "intermediate",
    positions: [
      {
        name: "Sytuacja",
        meaning: "Sedno sprawy tak, jak widzą je karty, odarte z opowieści, którą o nim snujesz.",
      },
      {
        name: "Przeszkoda",
        meaning: "Co naprawdę stoi na drodze. Czasem okoliczność, częściej nawyk.",
      },
      {
        name: "Kierunek",
        meaning: "Możliwe przejście. Zaproszenie do działania, nie rozkaz.",
      },
    ],
  },
  {
    slug: "compass",
    name: "Kompas",
    tagline: "Pięć kart dla pytań, które sięgają głębiej.",
    description:
      "Pełniejsze czytanie dla spraw z historią i ciężarem. Kompas rozpina sytuację w czterech kierunkach wokół karty środkowej: co cię wspiera, co ci się opiera, co porusza się pod powierzchnią i dokąd zakręca droga. Daj mu czas, muzykę i uczciwe pytanie.",
    level: "deep",
    positions: [
      {
        name: "Serce",
        meaning: "Środek sprawy. Wszystko inne w tym czytaniu obraca się wokół tej karty.",
      },
      {
        name: "Co ci sprzyja",
        meaning: "Sojusznicy, mocne strony i prądy pracujące po cichu na twoją korzyść.",
      },
      {
        name: "Co się opiera",
        meaning: "Tarcie. Zewnętrzne przeszkody albo wewnętrzny opór spowalniający krok.",
      },
      {
        name: "Pod powierzchnią",
        meaning: "Ukryta warstwa: motywy, lęki i prądy denne jeszcze niewidoczne w świetle dnia.",
      },
      {
        name: "Dokąd to prowadzi",
        meaning: "Horyzont, ku któremu ta droga jest obecnie zwrócona.",
      },
    ],
  },
];

export function znajdzSpreadPl(slug: string): Spread | undefined {
  return SPREADY_PL.find((s) => s.slug === slug);
}
