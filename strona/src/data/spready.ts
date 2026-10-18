// Definicje rozkładów. Używane przez wyrocznię (TarotCzytanie) i przewodnik.

export interface Pozycja {
  name: string;
  meaning: string;
}

export interface Spread {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  level: "beginner" | "intermediate" | "deep";
  positions: Pozycja[];
}

export const SPREADY: Spread[] = [
  {
    slug: "daily",
    name: "The Daily Card",
    tagline: "One card. One day. One quiet signal.",
    description:
      "The simplest practice in tarot and still one of the most revealing. A single card drawn in the morning becomes a lens for the day: a mood to watch for, an energy to lean into, a warning to hold lightly. Return in the evening and ask what the card turned out to mean.",
    level: "beginner",
    positions: [
      {
        name: "The Signal",
        meaning: "The current moving through your day. Not an order, an undertone.",
      },
    ],
  },
  {
    slug: "timeline",
    name: "Past, Present, Future",
    tagline: "The classic three card arc of a story in motion.",
    description:
      "The best known spread in tarot. Three cards trace the shape of a situation through time: the roots that feed it, the moment you stand in, and the direction the current is already flowing. The future card describes momentum, not fate. You remain the one holding the cards.",
    level: "beginner",
    positions: [
      {
        name: "Past",
        meaning: "What shaped this situation. The root, the debt, the gift you carry in.",
      },
      {
        name: "Present",
        meaning: "Where the energy sits right now. The true face of the moment.",
      },
      {
        name: "Future",
        meaning: "Where the current is heading if nothing changes course.",
      },
    ],
  },
  {
    slug: "crossroads",
    name: "The Crossroads",
    tagline: "Situation, challenge, direction. For decisions that will not wait.",
    description:
      "A working spread for a specific problem. The first card names the situation honestly, the second names the real obstacle, which is rarely the one you expected, and the third points toward a possible way through. Read it as counsel from an old friend who refuses to flatter you.",
    level: "intermediate",
    positions: [
      {
        name: "The Situation",
        meaning: "The heart of the matter as the cards see it, stripped of the story you tell about it.",
      },
      {
        name: "The Challenge",
        meaning: "What truly stands in the way. Sometimes a circumstance, more often a habit.",
      },
      {
        name: "The Direction",
        meaning: "A possible way through. An invitation to act, not a command.",
      },
    ],
  },
  {
    slug: "compass",
    name: "The Compass",
    tagline: "Five cards for the questions that run deeper.",
    description:
      "A fuller reading for matters with history and weight. The Compass maps a situation in four directions around a central card: what supports you, what resists you, what moves beneath the surface, and where the path is bending. Give this one time, music, and an honest question.",
    level: "deep",
    positions: [
      {
        name: "The Heart",
        meaning: "The center of the matter. Everything else in the reading turns around this card.",
      },
      {
        name: "What Favors You",
        meaning: "Allies, strengths and currents working quietly in your favor.",
      },
      {
        name: "What Resists",
        meaning: "The friction. Outer obstacles or inner resistance slowing your step.",
      },
      {
        name: "Beneath the Surface",
        meaning: "The hidden layer: motives, fears and undercurrents not yet visible in daylight.",
      },
      {
        name: "Where It Leads",
        meaning: "The horizon this path is presently pointed toward.",
      },
    ],
  },
];

export function znajdzSpread(slug: string): Spread | undefined {
  return SPREADY.find((s) => s.slug === slug);
}
