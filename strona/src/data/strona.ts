// Stałe całej strony. Zmieniasz tutaj, nie w komponentach.

export const NAZWA = "Aural Arcana";
export const DOMENA = "https://auralarcana.com";
export const OPIS_KROTKI =
  "A digital sanctuary of supernatural tarot. Free interactive readings, the meanings of all 78 cards, and original atmospheric music composed for divination, ritual and deep focus.";

export const KANAL_YT = "https://www.youtube.com/@aural_arcana";
export const KANAL_YT_NAZWA = "Aural Arcana: Sonic Mysteries";
export const KANAL_YT_ID = "UCJtwIOC7tYrDPOFnQVaCD8A";

// Profile marki w social media (stopka + JSON-LD sameAs).
export const SOCIAL: { nazwa: string; url: string }[] = [
  { nazwa: "YouTube", url: KANAL_YT },
  { nazwa: "Instagram", url: "https://www.instagram.com/auralarcana/" },
  { nazwa: "TikTok", url: "https://www.tiktok.com/@auralarcana" },
  { nazwa: "Pinterest", url: "https://www.pinterest.com/auralarcana/" },
];

export const ROK_STARTU = 2026;

// Jedno źródło FAQ: strona główna, JSON-LD i public/ai/faq.json mają być z tym zgodne.
export const FAQ: { pytanie: string; odpowiedz: string }[] = [
  {
    pytanie: "Is the tarot reading on Aural Arcana really free?",
    odpowiedz:
      "Yes. Every reading on this site is free, runs entirely in your browser, and requires no account, email or payment. Nothing you type into a reading is sent anywhere or stored on our servers.",
  },
  {
    pytanie: "How does the online tarot reading work?",
    odpowiedz:
      "You choose a spread, hold a question in mind, and draw cards from a digitally shuffled 78 card deck. The shuffle uses your browser's cryptographic random generator, so every draw is genuinely unpredictable. Each card you reveal comes with a full interpretation, and multi card spreads include a reading of how the cards relate to one another.",
  },
  {
    pytanie: "Can tarot predict the future?",
    odpowiedz:
      "We treat tarot as a mirror, not a crystal ball. The cards are a centuries old language of symbols and archetypes that can help you reflect on a situation from new angles. Readings on this site are offered for reflection, insight and entertainment, not as verified predictions or professional advice.",
  },
  {
    pytanie: "What is the music on Aural Arcana?",
    odpowiedz:
      "The site is the home of our YouTube channel, Aural Arcana: Sonic Mysteries, a library of original atmospheric music: mystical ambient, dark soundscapes, meditative drones and focus mixes composed to accompany tarot sessions, rituals, meditation and deep work. The music library on this site organizes those pieces by purpose, mood and length.",
  },
  {
    pytanie: "Do I need to know tarot to use this site?",
    odpowiedz:
      "No. The reading experience explains every card it deals, the guide section covers how a reading works, and each of the 78 cards has its own page with upright and reversed meanings, symbolism and questions for reflection.",
  },
];

export const DISCLAIMER =
  "Tarot readings on this site are symbolic interpretations offered for reflection, personal exploration and entertainment. They are not predictions of the future and no outcome is guaranteed. For medical, legal, financial or mental health concerns, consult a qualified professional.";
