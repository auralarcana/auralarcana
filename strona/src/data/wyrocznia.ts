// Teksty czatu Wyroczni, Arcana Journal i konta (EN). Polska wersja: pl/wyrocznia.ts.
// Zasada strony: treść w src/data, nie w komponentach.

/** Dokąd prowadzi przycisk "Subscribe": Stripe Payment Link planu miesięcznego.
 *  Dopóki to kotwica #inner-circle, strona pokazuje zapowiedź zamiast płatności. */
export const LINK_SUBSKRYPCJI = "/journal/#inner-circle";
export const LINK_SUBSKRYPCJI_PL = "/pl/dziennik/#inner-circle";
/** Stripe Payment Link planu rocznego (pusty = bez planu rocznego). */
export const LINK_SUBSKRYPCJI_ROCZNA = "";
/** Ceny do wyświetlenia przy przycisku (zgodne z produktem w Stripe). */
export const CENA_MIESIECZNA = "6.99 USD";
export const CENA_ROCZNA = "49 USD";

export interface TekstyWyroczni {
  // Panel czatu
  etykieta: string;
  tytul: string;
  wstep: string;
  powitanie: (spread: string) => string;
  placeholder: string;
  wyslij: string;
  mysli: string;
  pozostalo: (n: number, limit: number) => string;
  odnowienie: (data: string) => string;
  limitWyczerpany: string;
  bladOgolny: string;
  bladSesji: string;
  utworLink: string;
  disclaimer: string;
  // Zwiastun dla niezalogowanych i bez subskrypcji
  zwiastunTytul: string;
  zwiastunTresc: string;
  zwiastunPunkty: string[];
  subskrybuj: string;
  zaloguj: string;
  juzSubskrybujesz: string;
  // Zapis do dziennika
  zapiszTytul: string;
  notatkaEtykieta: string;
  notatkaPlaceholder: string;
  zapisz: string;
  zapisano: string;
  zapisBlad: string;
  otworzDziennik: string;
  // Strona dziennika / konta
  dziennikEtykieta: string;
  dziennikTytul: string;
  dziennikWstep: string;
  logowanieTytul: string;
  logowanieTresc: string;
  emailEtykieta: string;
  wyslijLink: string;
  linkWyslany: string;
  logowanieBlad: string;
  zalogowanoJako: string;
  wyloguj: string;
  statusSubskrybent: string;
  statusBrak: string;
  innerCircleEtykieta: string;
  innerCircleTytul: string;
  innerCircleTresc: string;
  innerCirclePunkty: string[];
  innerCircleWkrotce: string;
  cenaMiesiecznie: (cena: string) => string;
  cenaRocznie: (cena: string) => string;
  dziekujemyEtykieta: string;
  dziekujemyTresc: string;
  wpisyTytul: string;
  brakWpisow: string;
  usun: string;
  usunPotwierdz: string;
  odwrocona: string;
  pytanieEtykieta: string;
  notatkaWpisu: string;
  doCzytania: string;
}

export const TEKSTY_WYROCZNI: TekstyWyroczni = {
  etykieta: "Ask the reader",
  tytul: "Speak with the Aural Arcana reader",
  wstep:
    "The reader knows the cards on the table, your question and the last pages of your journal. Ask what the spread means for you, where two cards pull against each other, or what to carry into tomorrow.",
  powitanie: (spread) =>
    `The ${spread} is laid out before us. I have read the cards and I remember your last pages. Ask what you wish to understand, and we will look together.`,
  placeholder: "Ask about your cards...",
  wyslij: "Ask",
  mysli: "The reader is listening to the cards...",
  pozostalo: (n, limit) => `${n} of ${limit} messages left this month`,
  odnowienie: (data) => `Renews ${data}`,
  limitWyczerpany:
    "You have used every message for this month. The reader rests until the next moon; your journal stays open.",
  bladOgolny: "The reader could not answer just now. Please try again in a moment.",
  bladSesji: "Your session has expired. Sign in again to continue.",
  utworLink: "Listen in the music library",
  disclaimer:
    "The reader is an AI voice working in the Rider-Waite tradition. Its words are for reflection, not prediction or professional advice.",

  zwiastunTytul: "Ask the reader about this spread",
  zwiastunTresc:
    "Members of the Inner Circle can talk with the Aural Arcana reader about the exact cards in front of them: how they speak together, what they answer, what they refuse to answer. The reader remembers your Arcana Journal, so each reading deepens the last.",
  zwiastunPunkty: [
    "A conversation about your spread, in the Rider-Waite tradition",
    "Context from your last five journal entries",
    "100 messages every month, and a track to accompany each answer",
  ],
  subskrybuj: "JOIN THE INNER CIRCLE",
  zaloguj: "already a member? sign in",
  juzSubskrybujesz: "You are signed in, but this account is not part of the Inner Circle yet.",

  zapiszTytul: "Keep this reading in your Arcana Journal",
  notatkaEtykieta: "A note for your future self (optional)",
  notatkaPlaceholder: "What did this spread stir in you?",
  zapisz: "SAVE TO JOURNAL",
  zapisano: "Saved. The reader will remember this page.",
  zapisBlad: "The page could not be saved. Please try again.",
  otworzDziennik: "open your journal",

  dziennikEtykieta: "Inner Circle",
  dziennikTytul: "Arcana Journal",
  dziennikWstep:
    "Your private record of readings: the cards you drew, the questions you held, the notes you left behind. The reader reads these pages before answering you.",
  logowanieTytul: "Sign in",
  logowanieTresc:
    "No password. Enter your email and we will send a sign in link. The same account opens the Inner Circle on every device.",
  emailEtykieta: "Your email",
  wyslijLink: "SEND SIGN IN LINK",
  linkWyslany: "Check your inbox. The link signs you in on this device.",
  logowanieBlad: "The link could not be sent. Check the address and try again.",
  zalogowanoJako: "Signed in as",
  wyloguj: "sign out",
  statusSubskrybent: "Inner Circle member",
  statusBrak: "Not yet in the Inner Circle",
  innerCircleEtykieta: "Membership",
  innerCircleTytul: "The Inner Circle",
  innerCircleTresc:
    "One membership that opens everything behind the veil: the Arcana Journal, conversations with the reader about your own spreads, and the premium soundscapes streamed on the site.",
  innerCirclePunkty: [
    "Arcana Journal: every reading saved, with your notes and patterns over time",
    "The reader: 100 messages a month about the cards in front of you",
    "Premium playlists and extended soundscapes, streamed on the site",
  ],
  innerCircleWkrotce:
    "Membership opens soon. Sign in now and your journal will be waiting when the doors open.",
  cenaMiesiecznie: (cena) => `${cena} a month, cancel any time`,
  cenaRocznie: (cena) => `or ${cena} a year, two months free`,
  dziekujemyEtykieta: "Welcome to the Inner Circle",
  dziekujemyTresc:
    "Thank you. Your membership is tied to the email you used at checkout: sign in with that same address below (or refresh if you are already signed in) and the journal and the reader will open.",
  wpisyTytul: "Your pages",
  brakWpisow: "No pages yet. Finish a reading and save it to your journal.",
  usun: "remove",
  usunPotwierdz: "Remove this page from your journal?",
  odwrocona: "reversed",
  pytanieEtykieta: "Question",
  notatkaWpisu: "Note",
  doCzytania: "Begin a new reading",
};
