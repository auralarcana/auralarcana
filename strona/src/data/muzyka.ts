// Biblioteka muzyki: prawdziwe filmy z kanału YouTube Aural Arcana: Sonic Mysteries.
// Po publikacji nowego filmu dodaj wpis tutaj. ID filmu bierzesz z adresu watch?v=...

export interface KategoriaMuzyki {
  slug: string;
  name: string;
  description: string;
}

export const KATEGORIE: KategoriaMuzyki[] = [
  {
    slug: "tarot-sessions",
    name: "Music for Tarot Readings",
    description:
      "Long form atmospheric pieces composed to sit beneath a reading: present enough to hold the mood, quiet enough to let the cards speak.",
  },
  {
    slug: "mystical-ambient",
    name: "Mystical and Supernatural Atmospheres",
    description:
      "Soundscapes of the unseen: ritual drones, distant voices, air thick with omen. For divination, journaling and candlelit rooms.",
  },
  {
    slug: "otherworldly",
    name: "Otherworldly and Dark Ambient",
    description:
      "Transmissions from stranger places. Alien textures and cosmic hums for introspection at the edge of the map.",
  },
  {
    slug: "focus",
    name: "Focus and Study",
    description:
      "Lofi and calm soundscapes engineered for concentration: long sessions of work, study or quiet making.",
  },
  {
    slug: "cinematic",
    name: "Epic and Cinematic",
    description:
      "Orchestral weight and momentum. For when the day needs a soundtrack larger than itself.",
  },
  {
    slug: "mysteries",
    name: "Sonic Mysteries",
    description:
      "Short video essays on forbidden history and strange artifacts, scored with original music from the channel.",
  },
];

export interface Utwor {
  sku: string;
  youtubeId: string;
  title: string;
  description: string;
  atmosphere: string;
  duration: string;
  minutes: number;
  categories: string[];
  moods: string[];
  featured?: boolean;
}

export const UTWORY: Utwor[] = [
  {
    sku: "tarot-the-moon-1",
    youtubeId: "ZThVVIKxl1s",
    title: "Tarot · The Moon I",
    description:
      "Slow, dark mystical ambient inspired by The Moon card: evolving drones, crystal singing bowls and a distant wordless choir under a vast cathedral reverb.",
    atmosphere: "Intuitive readings, dreamwork, night meditation.",
    duration: "3:34",
    minutes: 4,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["nocturnal", "dreamlike", "deep"],
  },
  {
    sku: "tarot-the-moon-2",
    youtubeId: "A2-32UW-vAQ",
    title: "Tarot · The Moon II",
    description:
      "The second movement of the Moon session: crystal bowls, low drones and a distant choir drifting like mist over still water.",
    atmosphere: "Journaling, intuition work, falling asleep with a question.",
    duration: "3:45",
    minutes: 4,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["misty", "calm", "intuitive"],
  },
  {
    sku: "tarot-the-hermit-1",
    youtubeId: "hLQJc959_jU",
    title: "Tarot · The Hermit I",
    description:
      "Minimalist ambient for The Hermit: sparse felt piano, warm tape hiss and a soft analog pad, with long silences between the notes.",
    atmosphere: "Solitary readings, reflection, quiet inner work.",
    duration: "3:04",
    minutes: 3,
    categories: ["tarot-sessions"],
    moods: ["solitary", "warm", "sparse"],
  },
  {
    sku: "tarot-the-hermit-2",
    youtubeId: "rPEUGfq1kjU",
    title: "Tarot · The Hermit II",
    description:
      "The Hermit session continues: felt piano, tape warmth and slow pads for evenings spent with one honest question.",
    atmosphere: "Journaling, shadow work, evening readings.",
    duration: "3:15",
    minutes: 3,
    categories: ["tarot-sessions"],
    moods: ["quiet", "reflective", "tender"],
  },
  {
    sku: "aural-arcana-eclipse-1",
    youtubeId: "B4iC2z7JNp8",
    title: "Aural Arcana · Eclipse I",
    description:
      "Celestial dark ambient: a low bowed cello drone, granular shimmer, night crickets and slow swelling pads in deep space reverb.",
    atmosphere: "Tarot sessions, deep focus, stargazing.",
    duration: "3:18",
    minutes: 3,
    categories: ["otherworldly", "tarot-sessions"],
    moods: ["celestial", "dark", "vast"],
  },
  {
    sku: "aural-arcana-eclipse-2",
    youtubeId: "t2BUdLJbWeo",
    title: "Aural Arcana · Eclipse II",
    description:
      "The second half of the Eclipse session: cello drones, crickets at the edge of the night and a slow celestial swell.",
    atmosphere: "Ritual, meditation, long spreads.",
    duration: "3:19",
    minutes: 3,
    categories: ["otherworldly", "mystical-ambient"],
    moods: ["nocturnal", "slow", "cosmic"],
  },
  {
    sku: "aural-arcana-ritual-1",
    youtubeId: "CYp3OgdLH1I",
    title: "Aural Arcana · Ritual I",
    description:
      "Hypnotic ritual ambient: a distant frame drum heartbeat, bowed metal, smoky low drones and a deep hum, like an ancient candlelit temple.",
    atmosphere: "Candle rituals, tarot, moving meditation.",
    duration: "3:35",
    minutes: 4,
    categories: ["mystical-ambient", "tarot-sessions"],
    moods: ["hypnotic", "ancient", "smoky"],
  },
  {
    sku: "aural-arcana-ritual-2",
    youtubeId: "CNThC06we44",
    title: "Aural Arcana · Ritual II",
    description:
      "The temple session continues: frame drum pulse, bowed metal and incense-thick drones for candle rituals and long readings.",
    atmosphere: "Candle rituals, spellwork, long readings.",
    duration: "3:35",
    minutes: 4,
    categories: ["mystical-ambient"],
    moods: ["steady", "incense", "ceremonial"],
  },
  {
    sku: "solastalgia-vol1",
    youtubeId: "7fbAjUR-jpI",
    title: "S O L A S T A L G I A, Vol. 1",
    description:
      "Sixty minutes of atmospheric and mystical ambient. Slow tides of sound named for the ache of a changing home: melancholic, vast and strangely consoling.",
    atmosphere: "Extended tarot sessions, shadow work, night journaling.",
    duration: "59:54",
    minutes: 60,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["melancholic", "vast", "contemplative"],
    featured: true,
  },
  {
    sku: "bene-gesserit",
    youtubeId: "yT6b3ssny9Q",
    title: "Meditative Ambient Inspired by the Bene Gesserit",
    description:
      "An hour of disciplined stillness inspired by Dune's order of seeresses. Low drones and breathlike pulses built for inner training and clear sight.",
    atmosphere: "Meditation, ritual preparation, long readings.",
    duration: "1:02:25",
    minutes: 62,
    categories: ["tarot-sessions", "mystical-ambient"],
    moods: ["hypnotic", "disciplined", "deep"],
    featured: true,
  },
  {
    sku: "alien-ambient",
    youtubeId: "GHSJcOaemJw",
    title: "Alien Ambient Music Compilation",
    description:
      "A compilation of otherworldly ambient transmissions. Cold light, slow orbits and architectures no human hand designed.",
    atmosphere: "Divination at the edges, deep introspection, stargazing.",
    duration: "1:03:41",
    minutes: 64,
    categories: ["otherworldly", "tarot-sessions"],
    moods: ["alien", "cold", "expansive"],
    featured: true,
  },
  {
    sku: "cosmic-soundscapes",
    youtubeId: "mTFkHbdrIR8",
    title: "Visual ASMR: Cosmic Soundscapes",
    description:
      "A shorter set of cosmic soundscapes with slow moving visuals. Alien ambient textures tuned for sensory quiet.",
    atmosphere: "Single card readings, decompression, mindful pauses.",
    duration: "23:08",
    minutes: 23,
    categories: ["otherworldly"],
    moods: ["weightless", "calm", "strange"],
  },
  {
    sku: "neo-tokyo-ronin",
    youtubeId: "aEPdXeuRkWQ",
    title: "Cyberpunk Samurai Lofi for the Neo Tokyo Ronin",
    description:
      "Over an hour of calm lofi soundscapes in neon rain. Study beats for a wandering swordsman with deadlines.",
    atmosphere: "Deep work, study marathons, late night making.",
    duration: "1:09:49",
    minutes: 70,
    categories: ["focus"],
    moods: ["rainy", "steady", "nocturnal"],
  },
  {
    sku: "lofi-focus",
    youtubeId: "8kDGetAuCQ8",
    title: "Lofi Beats: The Secret Weapon for Mastering Focus",
    description:
      "A compact lofi session on why low fidelity beats carry high fidelity attention. Press play, open the work.",
    atmosphere: "Short sprints of focused work or study.",
    duration: "17:50",
    minutes: 18,
    categories: ["focus"],
    moods: ["warm", "steady", "unhurried"],
  },
  {
    sku: "epic-mix",
    youtubeId: "QChD34JnHHY",
    title: "Epic Music Mix for RPGs and Workouts",
    description:
      "Nearly an hour of orchestral fire: battle drums, rising strings and the will to finish what you started.",
    atmosphere: "Tabletop campaigns, training, bold mornings.",
    duration: "53:30",
    minutes: 54,
    categories: ["cinematic"],
    moods: ["heroic", "driving", "bright"],
  },
  {
    sku: "grand-canyon",
    youtubeId: "iCpTRUyUk9s",
    title: "Did Ancient Egyptians Visit the Grand Canyon?",
    description:
      "A sonic mystery on the forbidden history of the Grand Canyon and the 1909 legend of an Egyptian cave, scored with original ambient music.",
    atmosphere: "Curiosity hour. Headphones recommended.",
    duration: "10:38",
    minutes: 11,
    categories: ["mysteries"],
    moods: ["curious", "shadowed", "narrative"],
  },
  {
    sku: "mummified-baboons",
    youtubeId: "2mBgRQmR-yg",
    title: "Egypt's Monkey Business: Mummified Baboons",
    description:
      "A three minute mystery: what the mummified baboons of ancient Egypt reveal about lost trade routes and the fabled land of Punt.",
    atmosphere: "A short strange detour between readings.",
    duration: "3:05",
    minutes: 3,
    categories: ["mysteries"],
    moods: ["curious", "ancient", "brisk"],
  },
];

export function utworySku(sku: string): Utwor | undefined {
  return UTWORY.find((u) => u.sku === sku);
}

export function utworyKategorii(slug: string): Utwor[] {
  return UTWORY.filter((u) => u.categories.includes(slug));
}
