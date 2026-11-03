// Cennik miejsc reklamowych (strona /advertise/). Ceny „founding” obowiązują dla pierwszych
// 10 partnerów i są ustawione w linkach Stripe (konto Malwiny). Zmiana ceny = nowy link w Stripe.

export type PakietReklamowy = {
  slug: string;
  nazwa: string;
  cenaRegularna: string;
  cenaFounding: string;
  okres: string;
  opis: string;
  zawiera: string[];
  link: string;
  wyrozniony?: boolean;
};

export const PAKIETY: PakietReklamowy[] = [
  {
    slug: "card-page",
    nazwa: "Card Page",
    cenaRegularna: "$29",
    cenaFounding: "$19",
    okres: "per month",
    opis: "Claim the card that belongs to your brand. A candle maker on The Star, a deck on The High Priestess, a grimoire on The Magician.",
    zawiera: [
      "Partner block on one card meaning page of your choice",
      "Logo, one line about your brand and a direct link",
      "Exclusive: one partner per card",
      "Cancel anytime",
    ],
    link: "https://buy.stripe.com/28EdRbadng5j9w3dp243S05",
  },
  {
    slug: "lunation",
    nazwa: "Lunation Feature",
    cenaRegularna: "$49",
    cenaFounding: "$35",
    okres: "one-off, two weeks",
    opis: "Ride a New or Full Moon. Around every lunation readers come looking for a spread, and your brand sits right beside it.",
    zawiera: [
      "Featured on the homepage and the free reading page",
      "Two weeks around the New or Full Moon you pick",
      "Mention in our lunation post on Instagram and Pinterest",
      "One-off payment, no subscription",
    ],
    link: "https://buy.stripe.com/fZucN7gBLdXb7nV0Cg43S06",
    wyrozniony: true,
  },
  {
    slug: "site-partner",
    nazwa: "Site Partner",
    cenaRegularna: "$99",
    cenaFounding: "$69",
    okres: "per month",
    opis: "Everywhere at once. For shops and makers who want to be the name readers see every time they look up a card.",
    zawiera: [
      "Partner block across all 78 card meaning pages",
      "Partner block on the free reading page",
      "Credit line in the descriptions of new videos on our YouTube channel",
      "One Pinterest pin a month linking to your shop",
      "Cancel anytime",
    ],
    link: "https://buy.stripe.com/dRmeVfbhrf1f0Zx0Cg43S07",
  },
];

// Najbliższe lunacje (daty wg czasu wschodnioamerykańskiego, astrolis.com).
export const LUNACJE: { data: string; nazwa: string }[] = [
  { data: "9 November 2026", nazwa: "New Moon in Scorpio" },
  { data: "24 November 2026", nazwa: "Full Moon in Gemini" },
  { data: "8 December 2026", nazwa: "New Moon in Sagittarius" },
  { data: "23 December 2026", nazwa: "Full Moon in Cancer" },
];

export const MAIL_REKLAMY = "info@auralarcana.com";
