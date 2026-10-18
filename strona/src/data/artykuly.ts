// Artykuły przewodnika. Nowy artykuł = nowy wpis tutaj, bez zmian w szablonach.

export interface BlokTresci {
  t: "h2" | "p";
  text: string;
}

export interface Artykul {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO, data publikacji
  readingTime: string;
  blocks: BlokTresci[];
}

export const ARTYKULY: Artykul[] = [
  {
    slug: "how-to-approach-a-tarot-reading",
    title: "How to Approach a Tarot Reading",
    description:
      "A practical introduction to reading tarot: how to form a question, draw cards, and interpret what you see, without superstition and without a single prediction.",
    date: "2026-10-18",
    readingTime: "6 min",
    blocks: [
      {
        t: "p",
        text: "Nobody needs psychic powers to read tarot. What a reading requires is quieter and rarer: an honest question, a little stillness, and the willingness to look at your own situation from an angle you did not choose. The cards supply the angle. You supply everything else.",
      },
      { t: "h2", text: "What a reading actually is" },
      {
        t: "p",
        text: "A tarot deck is a portable library of 78 human situations: beginnings, betrayals, harvests, sleepless nights, arrivals. When you draw cards, you are not receiving a message from the future. You are drawing three random pages from that library and asking: if this were about my situation, what would it be saying? The randomness is the point. It breaks the loop of your usual thoughts and forces a genuinely new perspective into the room.",
      },
      {
        t: "p",
        text: "This is why a reading can feel uncannily accurate without anything supernatural occurring. The cards are mirrors with excellent angles. Whatever you see in them was already yours.",
      },
      { t: "h2", text: "Forming the question" },
      {
        t: "p",
        text: "Weak questions produce weak readings. 'Will I get the job?' gives you nothing to work with: the card cannot answer yes or no, and waiting is not a practice. Strong questions are open and owned: 'What should I understand about this opportunity?' or 'What in me needs attention as I make this decision?' Ask about what you can see, feel or do. The future tends to show up on its own schedule regardless.",
      },
      { t: "h2", text: "Drawing and reading the cards" },
      {
        t: "p",
        text: "Settle somewhere quiet. Put on something atmospheric and instrumental if it helps you drop beneath the surface of the day; that is exactly what our music library exists for. Hold the question loosely in mind, draw your cards, and before reading any interpretation, look at each image and notice your first reaction. That instinctive flicker of recognition or resistance is data.",
      },
      {
        t: "p",
        text: "Then read the card's meaning and ask the only question that matters: where is this in my life right now? A card is never about the card. The Tower is not about towers. It is about the thing you already suspect cannot stand much longer.",
      },
      { t: "h2", text: "Reversals, briefly" },
      {
        t: "p",
        text: "A reversed card is the same energy turned inward, blocked or overdue. Death upright is an ending in motion; reversed, an ending refused. Beginners can ignore reversals entirely and lose little. When you are ready for them, our reading experience includes reversals you can switch on or off.",
      },
      { t: "h2", text: "What to do afterwards" },
      {
        t: "p",
        text: "Write down the cards and one sentence about what each seemed to touch. Return in a week. The value of tarot compounds in review: patterns in your draws are patterns in your attention, and watching them change is watching yourself change. That, not prediction, is the old and honest magic of the cards.",
      },
    ],
  },
  {
    slug: "major-and-minor-arcana",
    title: "Major and Minor Arcana: The Two Languages of the Deck",
    description:
      "What the 22 Major Arcana and 56 Minor Arcana cards actually represent, how they differ, and how to weigh them when they appear together in a spread.",
    date: "2026-10-18",
    readingTime: "5 min",
    blocks: [
      {
        t: "p",
        text: "Every tarot deck speaks two languages. The Major Arcana speaks in thunder: 22 cards of archetype and destiny, the great chapters a life is written in. The Minor Arcana speaks in weather: 56 cards of moods, workdays, quarrels and small victories, the texture of the week you are actually living. A good reading listens to both.",
      },
      { t: "h2", text: "The Major Arcana: the Fool's journey" },
      {
        t: "p",
        text: "The majors run from 0, the Fool, to 21, the World, and they are traditionally read as one continuous story. The Fool sets out knowing nothing; meets power (the Magician) and mystery (the High Priestess); learns love, discipline and loss; survives the collapse of the Tower; heals under the Star; and finally dances in the completed circle of the World. It is not anyone's biography. It is everyone's, which is why these cards land so heavily in readings.",
      },
      {
        t: "p",
        text: "When a major appears in your spread, the deck is pointing at something structural: a theme with roots, a lesson that will repeat until attended to, a door of the once-in-a-decade kind. You do not schedule the Major Arcana. It schedules you.",
      },
      { t: "h2", text: "The Minor Arcana: four elements, four suits" },
      {
        t: "p",
        text: "The 56 minors divide into four suits, each governing one element and one domain of ordinary life. Wands carry fire: will, creativity, ambition, the projects that make you forget to eat. Cups carry water: emotion, love, intuition, grief, everything that flows. Swords carry air: thought, truth, conflict, the blessing and curse of a sharp mind. Pentacles carry earth: work, money, health, home, the slow kingdom of matter.",
      },
      {
        t: "p",
        text: "Within each suit, the numbered cards trace an arc from the ace's pure gift to the ten's completion, while the court cards, Page, Knight, Queen and King, embody the element at four stages of maturity: the student, the mover, the keeper, the master.",
      },
      { t: "h2", text: "Weighing them together" },
      {
        t: "p",
        text: "A spread heavy with majors describes a life being rearranged; take it seriously and move slowly. A spread of minors describes circumstances in motion and usually responds well to simple, practical action. One major among minors is often the hinge: read the minors as the situation and the major as what the situation is really about. The two languages disagree rarely, and when they do, the majors get the last word.",
      },
    ],
  },
  {
    slug: "choosing-a-tarot-spread",
    title: "Choosing a Tarot Spread: From One Card to the Compass",
    description:
      "How tarot spreads work, what position meanings add to a reading, and how to pick between a daily card, a three card line and a full five card spread.",
    date: "2026-10-18",
    readingTime: "5 min",
    blocks: [
      {
        t: "p",
        text: "A spread is a set of named positions into which cards are dealt: this card means the past, this one the obstacle, this one the direction. The positions do the quiet heavy lifting of a reading. The same card that means creative fire in one position means creative frustration in another. Choosing a spread is choosing the shape of the question.",
      },
      { t: "h2", text: "One card: the daily practice" },
      {
        t: "p",
        text: "The single card is the most underrated reading in tarot. Drawn in the morning, it gives the day a theme to watch for; reviewed at night, it teaches you more about the cards than any book, because you have spent a whole day seeing where it did and did not fit. If you are new, begin here and stay longer than feels necessary.",
      },
      { t: "h2", text: "Three cards: the workhorse spreads" },
      {
        t: "p",
        text: "Three positions are enough to give a situation a shape. Past, Present, Future tells a story in time and suits questions about how something came to be and where it is drifting. Situation, Challenge, Direction cuts differently: it names the matter, names the obstacle, and points a way through, which suits decisions. The cards gain meaning from each other: a gentle card in the Challenge position is a very different message from the same card in the Direction.",
      },
      { t: "h2", text: "Five cards: the Compass" },
      {
        t: "p",
        text: "Our deepest spread sets a central card, the heart of the matter, inside four bearings: what favors you, what resists you, what runs beneath the surface, and where it all leads. Use it for questions with history and stakes, and give it what it deserves: an unhurried half hour, a candle if you like, and a long piece of atmospheric music so the session has walls around it.",
      },
      { t: "h2", text: "Which to choose" },
      {
        t: "p",
        text: "Match the spread to the weight of the question, not to your appetite for information. Daily weather wants one card. A decision wants three. A knot that has been tightening for years wants the Compass, and possibly a notebook. More cards do not mean more truth; they mean more surface, which only helps if you are willing to read it all honestly.",
      },
    ],
  },
  {
    slug: "music-for-tarot-and-ritual",
    title: "Sound and the Reading: Why Music Changes What the Cards Say",
    description:
      "How atmospheric and ambient music deepens tarot readings, meditation and ritual, and how to choose a soundscape for the practice in front of you.",
    date: "2026-10-18",
    readingTime: "5 min",
    blocks: [
      {
        t: "p",
        text: "Every practitioner learns it eventually: the reading changes with the room. The same cards drawn under fluorescent light between emails say less than they do at a cleared table in low light with the right sound in the air. This is not mysticism, or not only. It is attention. Ritual atmosphere is a technology for changing the quality of your attention, and sound is its fastest lever.",
      },
      { t: "h2", text: "What sound does to a reading" },
      {
        t: "p",
        text: "A sustained ambient soundscape does three measurable things. It masks the ordinary noises that keep snapping attention back to the daily world. It gives the session a boundary: when the music starts, the reading has begun, and when it ends, the reading is sealed. And it slows you down. Long tones with no beat to follow invite the unfocused, associative state in which symbols actually speak, the same state that makes shower thoughts and highway epiphanies possible.",
      },
      { t: "h2", text: "Choosing a soundscape for the practice" },
      {
        t: "p",
        text: "Match the music to the work. A deep spread about grief or endings wants something vast and melancholic that gives feelings room; our Solastalgia sessions were composed for exactly that register. Disciplined inner work, meditation and preparation before a reading suit slow hypnotic drones in the spirit of our Bene Gesserit hour. Questions about the strange and the unknown pair well with otherworldly, alien textures. And when the reading is done and ordinary work resumes, a long lofi session keeps a thread of the atmosphere running through the day.",
      },
      { t: "h2", text: "A simple sound ritual" },
      {
        t: "p",
        text: "Try this with your next reading. Choose one long piece, longer than the session, so it never interrupts. Begin the music before you shuffle and let the first minute pass in silence on your side: just breathe and arrive. Draw and read as usual. When you finish, write your notes while the music still plays, then end it deliberately. The piece becomes a vessel: the next time you play it, your attention will remember the way down.",
      },
      {
        t: "p",
        text: "Everything in our music library was composed with this use in mind and is organized by purpose, mood and length. The library lives on YouTube, free, and new soundscapes are added as they are finished.",
      },
    ],
  },
];

export function znajdzArtykul(slug: string): Artykul | undefined {
  return ARTYKULY.find((a) => a.slug === slug);
}
