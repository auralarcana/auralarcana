// Małe Arkana: 56 kart w czterech kolorach. Typ importowany z karty.ts.

import type { KartaTarota } from "./karty";

// Kolor i żywioł są nadpisywane w mapowaniu na końcu pliku.
function w(
  num: number,
  numeral: string,
  nazwa: string,
  dane: Omit<KartaTarota, "slug" | "name" | "arcana" | "suit" | "number" | "numeral" | "element">,
): KartaTarota {
  const slugName = nazwa.toLowerCase().replace(/\s+/g, "-");
  return {
    slug: slugName,
    name: nazwa,
    arcana: "minor",
    suit: "wands",
    number: num,
    numeral,
    element: "fire",
    ...dane,
  };
}

const WANDS: KartaTarota[] = [
  w(1, "Ace", "Ace of Wands", {
    keywords: ["inspiration", "new venture", "spark", "potential"],
    keywordsReversed: ["false start", "delayed spark", "scattered desire"],
    essence: "A living branch offered from a cloud: pure creative fire.",
    description:
      "A hand emerges from a cloud gripping a sprouting wand. Nothing is built yet; everything is possible. This is the raw spark before the plan.",
    upright:
      "A new passion, project or desire has just caught flame. Say yes while the spark is hot, and give it one concrete action within the week, because inspiration not acted on is only weather.",
    reversed:
      "The spark sputters: a project stalls at the idea stage, or enthusiasm scatters across too many openings. Choose one flame and feed it.",
    questions: [
      "What idea keeps returning and asking to be started?",
      "What single action would turn this spark into a fire?",
    ],
    musicSku: "epic-mix",
  }),
  w(2, "Two", "Two of Wands", {
    keywords: ["planning", "vision", "choice of horizon", "ambition"],
    keywordsReversed: ["playing small", "fear of leaving", "vague plans"],
    essence: "The world in one hand, the castle wall under the other.",
    description:
      "A figure holds a globe while standing on the ramparts of a secure castle, gazing at distant lands. Comfort behind, possibility ahead.",
    upright:
      "You have outgrown the current walls and you know it. Make the long range plan: map the territory, weigh the routes, and decide which horizon deserves your years.",
    reversed:
      "The map is drawn and never used. Reversed, this card marks ambition trimmed to fit comfort, or planning used as a substitute for departure.",
    questions: [
      "What would I attempt if staying safe were not an option?",
      "Which plan have I polished instead of begun?",
    ],
    musicSku: "epic-mix",
  }),
  w(3, "Three", "Three of Wands", {
    keywords: ["expansion", "foresight", "ships coming in", "momentum"],
    keywordsReversed: ["delays", "narrow vision", "stalled trade"],
    essence: "Watching the sea for ships you had the nerve to send.",
    description:
      "A merchant stands on a cliff watching ships cross a golden sea. The venture is launched; now vision and patience do the work.",
    upright:
      "Your earlier choices are starting to move. Expansion is favored: wider markets, farther shores, collaborators beyond the familiar circle. Keep watching the horizon, and be ready to meet what returns.",
    reversed:
      "Ships delayed or sent without a map. Check whether the venture needs more patience or a corrected course.",
    questions: [
      "What have I set in motion that now needs trust rather than tinkering?",
      "Where could my world be wider than I currently allow?",
    ],
    musicSku: "epic-mix",
  }),
  w(4, "Four", "Four of Wands", {
    keywords: ["celebration", "homecoming", "milestone", "community"],
    keywordsReversed: ["postponed joy", "unstable foundations", "strained welcome"],
    essence: "A garland strung between four wands: the first harvest of joy.",
    description:
      "Four wands support a canopy of flowers while figures celebrate before a castle. A threshold moment: something built is now worth gathering around.",
    upright:
      "Pause and celebrate a real milestone: a home, a bond, a stage of work completed. Joy shared now strengthens everything still under construction.",
    reversed:
      "The party is postponed or the foundation beneath it wobbles. Celebrate smaller, or shore up what the garland hangs from.",
    questions: [
      "What milestone have I rushed past without marking it?",
      "Who belongs at my table for this celebration?",
    ],
    musicSku: "epic-mix",
  }),
  w(5, "Five", "Five of Wands", {
    keywords: ["friction", "competition", "scattered conflict", "sparring"],
    keywordsReversed: ["conflict avoided", "tension released", "inner battles"],
    essence: "Five wands raised, and no two pointing the same way.",
    description:
      "Five figures clash with wands in what might be battle or practice. No one is wounded; nothing is decided. Energy burns in every direction at once.",
    upright:
      "Friction, rivalry, voices competing to be heard. Treat it as sparring: it can sharpen you if you stop needing to win every exchange. Align the wands toward one aim and the chaos becomes force.",
    reversed:
      "Conflict suppressed or finally cooling. Make sure the peace is agreement and not just exhaustion.",
    questions: [
      "Which conflict in my life is practice, and which is genuinely a battle?",
      "What shared aim could align these scattered energies?",
    ],
    musicSku: "epic-mix",
  }),
  w(6, "Six", "Six of Wands", {
    keywords: ["victory", "recognition", "pride", "good news"],
    keywordsReversed: ["unseen effort", "fallen favor", "hollow applause"],
    essence: "The laurel on the rider's brow, and the crowd that put it there.",
    description:
      "A rider crowned with laurel parades on a white horse through a cheering crowd. Victory made public: success that others can finally see.",
    upright:
      "A win is arriving, and with it recognition. Accept the applause honestly; letting yourself be seen succeeding is part of the work, not a betrayal of modesty.",
    reversed:
      "Effort unrecognized, or applause that rings hollow. Ask whose recognition actually matters, and whether you have claimed your own.",
    questions: [
      "What achievement am I deflecting instead of accepting?",
      "Whose recognition am I working for, and is that the right audience?",
    ],
    musicSku: "epic-mix",
  }),
  w(7, "Seven", "Seven of Wands", {
    keywords: ["defense", "perseverance", "conviction", "holding ground"],
    keywordsReversed: ["overwhelm", "giving ground", "exhausted defense"],
    essence: "One wand against six, and the high ground held anyway.",
    description:
      "A figure on a hilltop fends off six wands rising from below. The footing is uneven but the position is strong: conviction defended against challenge.",
    upright:
      "Your position is being tested: competitors, critics, demands. Hold the ground that matters. You have the advantage of knowing exactly why you stand where you stand.",
    reversed:
      "The siege is wearing you down, or you are defending territory you no longer want. Choose your hill deliberately.",
    questions: [
      "Which of my positions is worth defending, and which is just habit under attack?",
      "Where do I need to state my conviction plainly instead of apologetically?",
    ],
    musicSku: "epic-mix",
  }),
  w(8, "Eight", "Eight of Wands", {
    keywords: ["speed", "news", "momentum", "things in flight"],
    keywordsReversed: ["delays", "crossed signals", "haste misfiring"],
    essence: "Eight wands crossing the sky at once: the lull is over.",
    description:
      "Eight wands fly through clear air over a calm river, no figure in sight. Pure motion: messages landing, events accelerating, the long wait breaking open.",
    upright:
      "Events are about to move quickly. Answer the messages, clear the runway, strike while everything is in the air. Momentum like this does not hold formation for long.",
    reversed:
      "Arrows mid flight and stalling, or haste causing misdelivery. Slow down enough to aim.",
    questions: [
      "What is accelerating in my life, and am I ready for its landing?",
      "Which message or decision am I sitting on that wants speed?",
    ],
    musicSku: "epic-mix",
  }),
  w(9, "Nine", "Nine of Wands", {
    keywords: ["resilience", "last stand", "guardedness", "nearly there"],
    keywordsReversed: ["paranoia", "burnout", "refusing help"],
    essence: "Bandaged, tired, upright: the wall has held so far.",
    description:
      "A weary, bandaged figure leans on a wand before a fence of eight more. Wounded but standing, watching for the next wave that may never come.",
    upright:
      "You are closer to the end than the start, and more tired than you admit. This card honors resilience: hold the line one more round, but notice which defenses are protection and which are just scar tissue.",
    reversed:
      "Guarding against ghosts, or burning out a step before the finish. Let someone relieve the watch.",
    questions: [
      "What am I still defending that stopped attacking long ago?",
      "What would help me hold on for the last stretch, if I asked for it?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(10, "Ten", "Ten of Wands", {
    keywords: ["burden", "overload", "duty", "carrying it all"],
    keywordsReversed: ["release", "delegation", "collapse under load"],
    essence: "Ten wands carried at once, and the town so close.",
    description:
      "A figure hauls ten heavy wands up the road toward town, bent so far forward the destination is invisible. Everything achieved has become everything carried.",
    upright:
      "The load is real and most of it is self assigned. Finish what truly must be finished, then set down the rest: success that breaks the carrier was never the goal.",
    reversed:
      "The bundle is slipping or finally being set down. Delegate, decline, or drop; the town will still be there.",
    questions: [
      "Which of these burdens actually belongs to me?",
      "What could I set down today with no real consequence except relief?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(11, "Page", "Page of Wands", {
    keywords: ["enthusiasm", "exploration", "a spark of news", "free spirit"],
    keywordsReversed: ["fizzled hype", "restlessness", "all talk"],
    essence: "The messenger who falls in love with every road.",
    description:
      "A young figure in a desert admires a sprouting wand as if it were a torch. The Page carries fire's first gift: pure, uncommitted enthusiasm.",
    upright:
      "Follow the fascination. The Page of Wands blesses exploration, bold questions and beginner's fire. News of a creative opening may arrive; meet it with curiosity rather than a five year plan.",
    reversed:
      "Enthusiasm that never survives contact with effort. Pick one spark and stay past the honeymoon.",
    questions: [
      "What am I genuinely curious about right now?",
      "Where does my enthusiasm need follow through to become real?",
    ],
    musicSku: "epic-mix",
  }),
  w(12, "Knight", "Knight of Wands", {
    keywords: ["adventure", "impulsive action", "charisma", "full gallop"],
    keywordsReversed: ["recklessness", "scattered pursuits", "burnout sprints"],
    essence: "The horse is already running; the destination is a detail.",
    description:
      "A knight in armor decorated with salamanders charges on a rearing horse. Maximum velocity, minimum itinerary: desire on horseback.",
    upright:
      "Act boldly. The Knight of Wands favors the daring move, the trip booked, the pitch made before doubt files its paperwork. Just confirm the direction before you spend the horse.",
    reversed:
      "All gallop, no map: projects started hot and abandoned cold. Harness the fire to something that deserves a whole journey.",
    questions: [
      "Where is boldness the missing ingredient in my plans?",
      "Which pursuit deserves my full gallop rather than my passing excitement?",
    ],
    musicSku: "epic-mix",
  }),
  w(13, "Queen", "Queen of Wands", {
    keywords: ["confidence", "warmth", "magnetism", "self-possession"],
    keywordsReversed: ["dimmed fire", "jealousy", "approval seeking"],
    essence: "Sunflower in one hand, a black cat at her feet: warmth with a shadow well befriended.",
    description:
      "The Queen sits openly on a throne of lions and sunflowers, a black cat before her. She commands attention without demanding it: fire made hospitable.",
    upright:
      "Take up your full space. The Queen of Wands blesses confident warmth: leadership that energizes a room, desire owned without apology, and a shadow acknowledged rather than hidden.",
    reversed:
      "The fire turns inward as doubt or outward as envy. Return to what genuinely lights you up, not what photographs well.",
    questions: [
      "Where am I shrinking to keep others comfortable?",
      "What would I do with full confidence that I currently do tentatively?",
    ],
    musicSku: "epic-mix",
  }),
  w(14, "King", "King of Wands", {
    keywords: ["vision", "leadership", "mastery of fire", "bold strategy"],
    keywordsReversed: ["tyranny of vision", "impulsive rule", "promises unbacked"],
    essence: "The flame that learned to build rather than burn.",
    description:
      "The King sits with a flowering wand, salamanders biting their tails woven into his robe: fire matured into vision that completes its circles.",
    upright:
      "Lead from vision. The King of Wands turns inspiration into enterprise: he decides fast, delegates well and keeps the flame pointed at the future. Claim the leader's seat your idea requires.",
    reversed:
      "Vision becomes volume: grand plans announced, foundations skipped, people scorched. Match the fire with follow through.",
    questions: [
      "What vision of mine is mature enough to lead others toward?",
      "Where do my promises outrun my systems?",
    ],
    musicSku: "epic-mix",
  }),
];

const CUPS: KartaTarota[] = [
  w(1, "Ace", "Ace of Cups", {
    keywords: ["new love", "emotional opening", "compassion", "overflow"],
    keywordsReversed: ["blocked feelings", "emptiness", "love withheld"],
    essence: "A cup offered from a cloud, overflowing before it is even touched.",
    description:
      "A hand presents a chalice from which five streams pour while a dove descends. The heart's reservoir, suddenly unsealed.",
    upright:
      "Something is opening in the heart: new love, new compassion, a creative tenderness toward the world. Receive it without rationing. A full cup is meant to overflow.",
    reversed:
      "The cup is capped or quietly draining: feelings suppressed, affection withheld from others or yourself. Find the leak before blaming the drought.",
    questions: [
      "What is my heart trying to open toward?",
      "Where am I rationing love that exists in abundance?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(2, "Two", "Two of Cups", {
    keywords: ["partnership", "mutual attraction", "alliance", "reconciliation"],
    keywordsReversed: ["imbalance", "broken trust", "one-sided bond"],
    essence: "Two cups raised at eye level: the meeting of equals.",
    description:
      "Two figures exchange cups beneath the caduceus and a winged lion's head. Not a crowd scene, not a wedding: the precise moment two people truly see each other.",
    upright:
      "A bond of equals forms or deepens: romance, friendship or alliance built on mutual recognition. Honor the exchange by keeping it two way.",
    reversed:
      "The cups are uneven: one pours, one only drinks. Rebalance, or name what broke.",
    questions: [
      "In which relationship do I feel genuinely met as an equal?",
      "What imbalance have I been tolerating in silence?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(3, "Three", "Three of Cups", {
    keywords: ["friendship", "celebration", "community", "shared joy"],
    keywordsReversed: ["crowded isolation", "gossip", "third wheel"],
    essence: "Three cups lifted in a dance older than any of its dancers.",
    description:
      "Three figures dance in a circle, cups raised, fruit at their feet. Joy that exists only in company: the harvest festival of the heart.",
    upright:
      "Gather your people. The Three of Cups blesses friendship, collaboration and celebration shared. Some medicine comes only in the company of those who knew you before the title.",
    reversed:
      "Alone in the crowd, or a circle gone sour with comparison. Seek the friends who refill your cup rather than measure it.",
    questions: [
      "Which friendships deserve more deliberate tending?",
      "When did I last celebrate something with others, properly?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(4, "Four", "Four of Cups", {
    keywords: ["apathy", "contemplation", "missed offers", "discontent"],
    keywordsReversed: ["re-engagement", "new willingness", "noticing the gift"],
    essence: "A fourth cup offered from a cloud, and arms that stay folded.",
    description:
      "A figure sits beneath a tree, arms crossed, before three cups, while a cloud offers a fourth they do not see. Boredom as blindfold.",
    upright:
      "Discontent has settled in, and it may be hiding an offer. The Four of Cups asks whether you are resting or refusing: something is being extended that your folded arms cannot receive.",
    reversed:
      "The trance lifts; the fourth cup finally registers. Say yes before the cloud withdraws it.",
    questions: [
      "What offer or opportunity might I be too jaded to notice?",
      "Is my withdrawal restorative, or just a comfortable sulk?",
    ],
    musicSku: "cosmic-soundscapes",
  }),
  w(5, "Five", "Five of Cups", {
    keywords: ["grief", "loss", "regret", "what remains"],
    keywordsReversed: ["acceptance", "turning around", "forgiveness"],
    essence: "Three cups spilled, two still standing, and a figure who sees only the spill.",
    description:
      "A cloaked mourner stares at three overturned cups while two full ones wait behind them. Across the river, a bridge leads home. Grief is real; so is what remains.",
    upright:
      "Loss deserves its season: mourn what spilled without pretending it was nothing. But when you are ready, turn around. Two cups still stand, and the bridge has not moved.",
    reversed:
      "The turn is beginning: acceptance, self forgiveness, the first dry morning. Carry the lesson, not the cloak.",
    questions: [
      "What loss still asks for honest grieving rather than quick repair?",
      "What two cups remain standing behind me?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(6, "Six", "Six of Cups", {
    keywords: ["nostalgia", "innocence", "old friends", "gifts from the past"],
    keywordsReversed: ["living in the past", "rose-tinting", "release of history"],
    essence: "A cup of flowers passed between children in a town without clocks.",
    description:
      "In a quiet courtyard, one child offers another a cup filled with white flowers. The past returning in its sweetest form: memory as gift rather than anchor.",
    upright:
      "Something kind returns from your history: an old friend, a childhood joy, a memory with medicine in it. Accept the visit. Let the past inform the present without governing it.",
    reversed:
      "Nostalgia has become a residence. Keep the flowers, return the lease.",
    questions: [
      "What from my past still genuinely nourishes me?",
      "Where does fond memory shade into refusal of the present?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(7, "Seven", "Seven of Cups", {
    keywords: ["choices", "fantasy", "temptation", "scattered wishes"],
    keywordsReversed: ["clarity", "commitment", "illusions dissolving"],
    essence: "Seven cups in the clouds, each holding a different dream, none holding ground.",
    description:
      "A silhouetted figure faces seven cups floating in cloud, filled with castles, jewels, laurels, dragons. Every possibility shines; none has weight yet.",
    upright:
      "Options multiply and so do mirages. The Seven of Cups warns against shopping among fantasies while the real day passes. Choose one cup and give it gravity.",
    reversed:
      "The fog of options clears into decision. Fewer dreams, more deeds.",
    questions: [
      "Which of my options is a vision, and which is a mirage?",
      "What single choice, made today, would end the pleasant paralysis?",
    ],
    musicSku: "cosmic-soundscapes",
  }),
  w(8, "Eight", "Eight of Cups", {
    keywords: ["walking away", "seeking depth", "departure", "quiet courage"],
    keywordsReversed: ["fear of leaving", "one more try", "aimless drifting"],
    essence: "Eight cups stacked neatly, and footprints leading into the hills.",
    description:
      "Under an eclipsed moon, a figure walks away from eight carefully arranged cups toward the mountains. Nothing is broken. It is simply no longer enough.",
    upright:
      "You are allowed to leave something that works but no longer means. The Eight of Cups blesses the quiet departure toward depth: no drama, just truer ground.",
    reversed:
      "Staying out of fear, or leaving everything out of habit. Distinguish the search for depth from the flight from difficulty.",
    questions: [
      "What have I outgrown that I keep maintaining?",
      "What deeper thing calls me, and what does answering cost?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(9, "Nine", "Nine of Cups", {
    keywords: ["contentment", "wish fulfilled", "satisfaction", "pleasure"],
    keywordsReversed: ["smugness", "hollow comfort", "greed for more"],
    essence: "The innkeeper's smile, with nine cups arched behind him.",
    description:
      "A satisfied figure sits with arms crossed beneath an arc of nine golden cups. The traditional wish card: desire met, comfort earned, the good table set.",
    upright:
      "A wish is being granted, or already has been and awaits your noticing. Enjoy it fully and openly: satisfaction practiced well is gratitude in motion.",
    reversed:
      "The cups are full and the smile is thin. Comfort without meaning, or appetite that no fulfillment quiets. Ask what you actually wished for.",
    questions: [
      "Which fulfilled wishes have I forgotten to enjoy?",
      "What does true satisfaction look like for me, beyond acquisition?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(10, "Ten", "Ten of Cups", {
    keywords: ["lasting harmony", "family", "belonging", "emotional completion"],
    keywordsReversed: ["strained home", "ideal vs reality", "broken circle"],
    essence: "A rainbow of cups over an ordinary house: the extraordinary disguised as home.",
    description:
      "A couple opens their arms to a rainbow of ten cups while children dance beside a modest home. Not luxury: alignment. Love that has become a place to live.",
    upright:
      "Emotional life comes home to rest: family harmony, chosen kin, the deep belonging that makes ordinary evenings glow. Protect it with presence, not perfection.",
    reversed:
      "The postcard and the household disagree. Repair the real relationships rather than performing the ideal ones.",
    questions: [
      "What does belonging actually feel like in my body, and where do I find it?",
      "Where am I chasing the image of harmony instead of its substance?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(11, "Page", "Page of Cups", {
    keywords: ["creative messages", "intuition's apprentice", "wonder", "small surprises"],
    keywordsReversed: ["moodiness", "ignored intuition", "creative block"],
    essence: "A fish looks up from the cup, and the Page looks back, delighted.",
    description:
      "A young figure in a flowered tunic regards a fish peeking from their cup. The unconscious offering its first small gifts: whims, dreams, odd ideas worth honoring.",
    upright:
      "Take the strange little message seriously: the dream, the impulse, the idea that surfaces mid walk. The Page of Cups is intuition in apprenticeship; it grows by being believed.",
    reversed:
      "The fish is ignored or the moods run the ship. Feel fully, then choose deliberately.",
    questions: [
      "What odd inner nudge have I been dismissing?",
      "How could I give my imagination ten unjudged minutes a day?",
    ],
    musicSku: "cosmic-soundscapes",
  }),
  w(12, "Knight", "Knight of Cups", {
    keywords: ["romantic offers", "following the heart", "charm", "quests of feeling"],
    keywordsReversed: ["moody avoidance", "empty charm", "unrealistic quests"],
    essence: "The knight who rides at the pace of a poem.",
    description:
      "A knight on a slow white horse carries a cup like a grail, winged helmet shining. Not charging: approaching. Feeling given direction and a horse.",
    upright:
      "Lead with the heart, formally. An offer arrives or should be made: romantic, creative, humane. Beauty is a legitimate compass; follow it with both eyes open.",
    reversed:
      "Charm without delivery, or a quest that exists only in the telling. Let the heart keep its appointments.",
    questions: [
      "What would it mean to pursue this desire openly and honorably?",
      "Where do my romantic ideals excuse me from real commitments?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(13, "Queen", "Queen of Cups", {
    keywords: ["compassion", "emotional depth", "trusted intuition", "holding space"],
    keywordsReversed: ["emotional flooding", "porous boundaries", "martyred care"],
    essence: "She holds the only closed cup in the deck, and knows what is inside.",
    description:
      "On a throne at the sea's edge, the Queen contemplates an ornate, lidded chalice. She feels everything and is drowned by none of it: the mature heart.",
    upright:
      "Lead with deep feeling, well contained. The Queen of Cups blesses compassion with boundaries, intuition trusted as data, and the rare gift of truly listening. Hold space without handing over the keys.",
    reversed:
      "The sea comes over the throne: absorbing others' moods, caring past your own capacity. Return to your own cup first.",
    questions: [
      "Whose emotions am I carrying that are not mine to carry?",
      "How do I honor my sensitivity as a strength rather than a leak?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(14, "King", "King of Cups", {
    keywords: ["emotional mastery", "calm counsel", "diplomacy", "steady seas"],
    keywordsReversed: ["repressed feeling", "manipulated sympathy", "cold comfort"],
    essence: "His throne floats on a stormy sea, and his cup does not spill.",
    description:
      "The King sits composed on a throne adrift among waves, fish leaping behind him. He has not conquered the sea; he has made peace with riding it.",
    upright:
      "Steadiness amid strong feeling, yours or others'. The King of Cups counsels the diplomatic word, the calm presence in a stormy room, emotion mastered without being muted.",
    reversed:
      "Calm that is actually suppression, or sympathy used as leverage. Feel the storm honestly before captaining anyone else through theirs.",
    questions: [
      "Where is my calm genuine mastery, and where is it a sealed hatch?",
      "Who needs my steadiness right now, and can I give it without vanishing?",
    ],
    musicSku: "bene-gesserit",
  }),
];

const SWORDS: KartaTarota[] = [
  w(1, "Ace", "Ace of Swords", {
    keywords: ["breakthrough", "clarity", "truth", "a decisive idea"],
    keywordsReversed: ["confusion", "a blunted point", "truth misused"],
    essence: "One blade through the crown: the moment thought cuts clean.",
    description:
      "A hand from a cloud raises a sword crowned with laurel and palm. The mind's first gift: a truth sharp enough to change everything it touches.",
    upright:
      "Clarity arrives like weather breaking: the insight, the honest sentence, the decision that slices through months of fog. Use the blade for truth, and expect it to cut both ways.",
    reversed:
      "The point is blunted: ideas tangled, truth bent toward convenience. Sharpen by simplifying; say the true thing in one sentence.",
    questions: [
      "What truth have I recently seen with sudden clarity?",
      "Where would one honest sentence change the situation?",
    ],
    musicSku: "alien-ambient",
  }),
  w(2, "Two", "Two of Swords", {
    keywords: ["stalemate", "avoidance", "blocked decision", "truce"],
    keywordsReversed: ["the blindfold lifts", "forced choice", "released tension"],
    essence: "Blindfolded by choice, swords crossed over the heart.",
    description:
      "A seated figure, blindfolded, balances two crossed swords before a tide pooling behind them. The moon watches. A decision postponed by careful equilibrium.",
    upright:
      "You are keeping two options in balance to avoid choosing either. The truce costs more each week. Information will not decide this; the blindfold is yours to remove.",
    reversed:
      "The stalemate breaks, by your hand or events'. Better to lower the swords yourself than have the tide decide.",
    questions: [
      "What decision am I disguising as a need for more information?",
      "What am I protecting by refusing to look?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(3, "Three", "Three of Swords", {
    keywords: ["heartbreak", "painful truth", "grief", "the clean wound"],
    keywordsReversed: ["healing", "forgiveness", "pain released"],
    essence: "Three swords through one heart under rain that will eventually stop.",
    description:
      "A red heart pierced by three swords hangs against storm clouds and rain. The deck's most unambiguous image: this hurts, precisely and truly.",
    upright:
      "A painful truth lands: betrayal, loss, words that cannot be unheard. The mercy of this card is accuracy. A named wound can heal; a denied one only festers. Let it rain.",
    reversed:
      "The swords are being drawn out: forgiveness, perspective, the storm's end. Mind the scar tissue; it is newer than it feels.",
    questions: [
      "What pain am I refusing to name precisely?",
      "What would it take to let this wound close cleanly?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(4, "Four", "Four of Swords", {
    keywords: ["rest", "recovery", "retreat", "stillness before return"],
    keywordsReversed: ["restlessness", "forced pause", "recovery refused"],
    essence: "The knight lies down, and the war agrees to wait.",
    description:
      "A knight lies in effigy within a quiet chapel, three swords hung on the wall, one beneath him. Not death: the discipline of genuine rest.",
    upright:
      "Stop before you are stopped. The Four of Swords prescribes true rest: silence, sleep, sanctuary, the nervous system allowed to stand down. The battle will keep; you must too.",
    reversed:
      "Rest resisted until the body legislates it. Choose the pause voluntarily and it will cost half as much.",
    questions: [
      "What does real rest look like for me, not just stopping work?",
      "What am I afraid will happen if I am still?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(5, "Five", "Five of Swords", {
    keywords: ["hollow victory", "conflict's cost", "defeat", "ego's spoils"],
    keywordsReversed: ["reconciliation", "releasing grudges", "lessons of defeat"],
    essence: "He holds all the swords, and the field holds only wind.",
    description:
      "A smirking figure gathers swords while two others walk away under a torn sky. Someone won. Look at what the winning bought.",
    upright:
      "A conflict is being won at a price that may exceed the prize: relationships, trust, your own peace. Ask what victory is for. Some battles are best conceded, some best never fought.",
    reversed:
      "The grudge loosens; old battlefields can be left. Take the lesson and leave the swords.",
    questions: [
      "In my current conflict, what would winning actually cost?",
      "Which battle should I walk away from with my dignity intact?",
    ],
    musicSku: "alien-ambient",
  }),
  w(6, "Six", "Six of Swords", {
    keywords: ["transition", "passage", "leaving rough waters", "guided change"],
    keywordsReversed: ["resisted passage", "baggage overboard", "nowhere feels like away"],
    essence: "The boat is low in the water, but it is moving.",
    description:
      "A ferryman poles a boat carrying a cloaked figure and child toward a far shore; six swords stand upright in the bow. The waters behind are rough, ahead calm. You carry what cut you, and you go anyway.",
    upright:
      "A necessary passage is underway: a move, a change, a quiet departure from troubled waters. It is not yet arrival, and it does not need to be. Keep rowing.",
    reversed:
      "The boat circles back, or the cargo of old swords is swamping it. Decide what truly must make the crossing.",
    questions: [
      "What rough water am I finally ready to leave?",
      "Which swords do I carry that could be left on the old shore?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(7, "Seven", "Seven of Swords", {
    keywords: ["strategy", "stealth", "deception", "the lone operator"],
    keywordsReversed: ["confession", "exposure", "coming clean"],
    essence: "Five swords carried on tiptoe, two left shining in the grass.",
    description:
      "A figure sneaks from a camp carrying five swords, glancing back, leaving two behind. Cleverness in motion: strategy, theft, or self deception, depending on who is being fooled.",
    upright:
      "Someone is playing an indirect game: perhaps wisely, perhaps dishonestly, perhaps you. Strategy is legitimate; secrecy compounds. Count the swords you are carrying and whose they are.",
    reversed:
      "The scheme unravels or the conscience files its report. Coming clean costs less today than tomorrow.",
    questions: [
      "Where am I being strategic, and where simply hidden?",
      "What deception, mine or another's, is this situation resting on?",
    ],
    musicSku: "alien-ambient",
  }),
  w(8, "Eight", "Eight of Swords", {
    keywords: ["self-imposed limits", "feeling trapped", "mental bindings", "learned helplessness"],
    keywordsReversed: ["self-liberation", "perspective regained", "the first step out"],
    essence: "Bound and blindfolded in a cage of swords, with the gate standing open.",
    description:
      "A bound, blindfolded figure stands among eight swords planted in wet ground, a castle far behind. The bindings are loose, the feet are free, the swords form a fence with no gate because no gate is needed.",
    upright:
      "The trap is mostly made of thought. Real constraints exist, but the story that nothing can be done is the tightest cord. Test one binding today: make the call, take the step, ask.",
    reversed:
      "The blindfold slips; options reappear. Freedom arrives one disproven assumption at a time.",
    questions: [
      "Which of my constraints are real, and which are well rehearsed?",
      "What single action would disprove my favorite version of stuck?",
    ],
    musicSku: "alien-ambient",
  }),
  w(9, "Nine", "Nine of Swords", {
    keywords: ["anxiety", "sleepless nights", "dread", "the mind at 3 a.m."],
    keywordsReversed: ["dawn after panic", "shared fears", "perspective returning"],
    essence: "Nine swords on the wall, and not one of them has moved.",
    description:
      "A figure sits up in bed, face in hands, while nine swords hang horizontal in the dark. On the quilt, roses and zodiac signs: the real world, unharmed, just out of sight.",
    upright:
      "The suffering is real; the catastrophe is mostly rehearsal. Night multiplies every sword. Say the fear aloud, write it down, show it daylight, and watch it shrink to its true size.",
    reversed:
      "The panic breaks: fears spoken, help accepted, morning arriving. Be gentle with the night version of you.",
    questions: [
      "Which worry grows only in the dark, and who could I show it to?",
      "What does this fear need: action, comfort or simply sunrise?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(10, "Ten", "Ten of Swords", {
    keywords: ["painful ending", "rock bottom", "betrayal", "it is finished"],
    keywordsReversed: ["survival", "slow recovery", "refusing the final lesson"],
    essence: "Ten swords, a dark sky, and a dawn breaking anyway.",
    description:
      "A figure lies face down with ten swords in their back while gold light rises at the horizon. The deck's darkest hour, drawn with its most reliable sunrise.",
    upright:
      "Something is over in a way that leaves no ambiguity. The only direction remaining is up, and that is this card's strange gift. Let it be finished. Dawn is already in the frame.",
    reversed:
      "Rising slowly, or refusing to admit the ending happened. Ten swords is enough; do not go back for an eleventh.",
    questions: [
      "What ending am I still relitigating instead of surviving?",
      "What does the dawn in this situation look like, however faint?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(11, "Page", "Page of Swords", {
    keywords: ["curiosity", "vigilance", "new ideas", "the watchful student"],
    keywordsReversed: ["gossip", "scattered thinking", "all questions, no study"],
    essence: "Sword raised, hair in the wind, eyes everywhere at once.",
    description:
      "A youth stands on high ground, sword up, turning to watch the wind itself. The mind's apprentice: alert, quick, hungry for every signal.",
    upright:
      "Stay curious and verify. The Page of Swords blesses research, questions asked bluntly, and the energy of a mind newly fascinated. Watch everything; repeat only what you have checked.",
    reversed:
      "Vigilance curdles into gossip or anxiety; ideas sprout and nothing roots. Finish one line of inquiry.",
    questions: [
      "What do I want to understand deeply rather than just quickly?",
      "Where should my words be slower than my thoughts?",
    ],
    musicSku: "lofi-focus",
  }),
  w(12, "Knight", "Knight of Swords", {
    keywords: ["decisive charge", "intellectual force", "speed", "mission"],
    keywordsReversed: ["ruthlessness", "arguments won, people lost", "burnout velocity"],
    essence: "Into the headwind at full gallop, because the truth cannot wait.",
    description:
      "A knight charges into a storm, sword forward, horse barely touching ground. Conviction at maximum speed, for better and worse.",
    upright:
      "Move on the truth decisively: make the argument, send the application, cut the delay. The Knight of Swords wins by speed and focus. Just check the target before committing the charge.",
    reversed:
      "Velocity without diplomacy: debates won while rooms empty. Slow enough to keep your allies in the saddle.",
    questions: [
      "What truth requires swift, decisive action from me now?",
      "Where has my directness stopped serving the goal?",
    ],
    musicSku: "epic-mix",
  }),
  w(13, "Queen", "Queen of Swords", {
    keywords: ["clear-eyed honesty", "independence", "boundaries", "wit"],
    keywordsReversed: ["coldness", "bitterness", "walls past their purpose"],
    essence: "Her hand is open; her sword is vertical. Both are the point.",
    description:
      "The Queen sits in profile, sword upright, free hand extended: truth without cruelty, welcome without naivety. She has grieved and thought her way to clarity.",
    upright:
      "Speak plainly and expect plainness. The Queen of Swords blesses boundaries stated once, judgments made on evidence, and compassion that never requires self deception.",
    reversed:
      "Clarity hardens into cynicism, the guarded heart into a walled one. Keep the standards; readmit the warmth.",
    questions: [
      "Where is a kind, direct sentence overdue from me?",
      "Has my discernment drifted into armor?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(14, "King", "King of Swords", {
    keywords: ["intellectual authority", "truth as law", "judgment", "systems of thought"],
    keywordsReversed: ["cold rulings", "intellect as weapon", "biased judgment"],
    essence: "The sword tilts slightly: even final judgment leaves room for mercy.",
    description:
      "The King faces forward, sword tilted just off vertical, butterflies carved behind his throne. The mind matured into law: analysis in service of what is fair.",
    upright:
      "Decide from principle. The King of Swords calls for rigorous honesty, impartial judgment and the courage to rule on hard questions. Authority here is earned by consistency.",
    reversed:
      "Logic without pulse: rulings that are correct and corrosive. Recalibrate against the human consequences.",
    questions: [
      "What decision needs my most impartial, principled thinking?",
      "Where am I right in a way that is not helping?",
    ],
    musicSku: "alien-ambient",
  }),
];

const PENTACLES: KartaTarota[] = [
  w(1, "Ace", "Ace of Pentacles", {
    keywords: ["opportunity", "seed of prosperity", "new work", "tangible beginnings"],
    keywordsReversed: ["missed chance", "shaky foundations", "greed over growth"],
    essence: "A gold coin offered over a garden gate left open.",
    description:
      "A hand from a cloud presents a great pentacle above a garden whose archway frames distant mountains. Not winnings: a seed, with all the work and harvest implied.",
    upright:
      "A concrete opportunity arrives: work, money, health, home. It is a seed, not a jackpot. Plant it in real soil this week: the account opened, the offer answered, the first brick laid.",
    reversed:
      "The seed is dropped or hoarded unplanted. Review what the opportunity actually requires, and whether you have been waiting for a harvest you never sowed.",
    questions: [
      "What tangible opportunity is in my hand right now?",
      "What would planting it, concretely, this week, look like?",
    ],
    musicSku: "lofi-focus",
  }),
  w(2, "Two", "Two of Pentacles", {
    keywords: ["juggling", "adaptability", "balance in motion", "priorities"],
    keywordsReversed: ["dropped balls", "overcommitment", "rigid balance"],
    essence: "Two coins in an infinite loop, and ships riding the waves behind.",
    description:
      "A dancer juggles two pentacles bound in a lemniscate while tall ships climb heavy seas behind. Balance here is not stillness: it is rhythm.",
    upright:
      "Life demands juggling, and you are better at it than you feel. Keep the rhythm, but know which ball is glass and which is rubber. Adaptability is the skill being graded.",
    reversed:
      "Too many coins in the air; something made of glass is wobbling. Set down the rubber balls deliberately.",
    questions: [
      "Which of my current commitments are glass, and which rubber?",
      "What rhythm, not schedule, would make this load feel possible?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(3, "Three", "Three of Pentacles", {
    keywords: ["teamwork", "craftsmanship", "recognition of skill", "building together"],
    keywordsReversed: ["poor collaboration", "mediocrity accepted", "credit disputes"],
    essence: "The stonemason, the architect and the patron, all looking at the same arch.",
    description:
      "In a cathedral doorway, a young mason confers with two figures holding the plans. Skill meeting structure meeting support: how lasting things actually get built.",
    upright:
      "Your craft is ready for collaboration and recognition. Bring the work to the table where plans are drawn; ask for the resources mastery deserves. Great buildings are conversations.",
    reversed:
      "The team pulls apart or the standard slips. Restore either the respect or the specification, ideally both.",
    questions: [
      "Where would collaboration multiply what my skill alone cannot?",
      "Is the quality bar where I claim it is?",
    ],
    musicSku: "lofi-focus",
  }),
  w(4, "Four", "Four of Pentacles", {
    keywords: ["holding tight", "security", "control", "scarcity thinking"],
    keywordsReversed: ["loosened grip", "generosity", "fear of loss faced"],
    essence: "One coin underfoot, one hugged, one balanced on the crown: nothing left for the hands to receive.",
    description:
      "A crowned figure clutches a pentacle to their chest, stands on two more, balances a fourth on their head, the city far behind. Perfect security, perfect immobility.",
    upright:
      "You are holding on hard: money, control, a version of safety. Some holding is wise; this much is expensive. Hands that grip cannot also receive. Loosen one finger at a time.",
    reversed:
      "The grip eases, by choice or necessity. Watch for the opposite swing into careless spending of money or self.",
    questions: [
      "What am I gripping so tightly that it now grips me?",
      "What would genuine security, not hoarded security, be built from?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(5, "Five", "Five of Pentacles", {
    keywords: ["hardship", "exclusion", "cold season", "help unnoticed"],
    keywordsReversed: ["recovery", "doors opening", "aid accepted"],
    essence: "Snow, two figures outside, and a lit window they do not see.",
    description:
      "Two ragged figures pass through snow beneath a glowing stained glass window. The hardship is real. So is the sanctuary they have not looked up to notice.",
    upright:
      "A season of lack: material, physical or of belonging. You are not required to endure it unaided. The lit window exists; pride and habit keep eyes on the snow. Look up, ask, enter.",
    reversed:
      "The cold spell breaks: help accepted, health returning, a door opened. Remember what the snow taught about who showed up.",
    questions: [
      "What help is available that I have been too proud or too tired to request?",
      "Who shares my snow, and could we walk toward the window together?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(6, "Six", "Six of Pentacles", {
    keywords: ["generosity", "give and take", "patronage", "the flow of resources"],
    keywordsReversed: ["strings attached", "imbalance of power", "charity as control"],
    essence: "Scales in one hand, coins falling from the other.",
    description:
      "A merchant weighs coins in a scale while giving to two kneeling figures. Resources in circulation, with the quiet question: who decides, and what does the gift cost?",
    upright:
      "Give where you are full, receive where you are empty, and keep the scales visible. Generosity blesses both directions when it keeps no secret ledgers.",
    reversed:
      "The gift has hooks, or receiving feels like debt. Examine the power woven into this exchange.",
    questions: [
      "Where am I positioned now: giving, receiving, or weighing?",
      "Do my gifts free people or quietly bind them?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(7, "Seven", "Seven of Pentacles", {
    keywords: ["patience", "assessment", "slow growth", "the long game"],
    keywordsReversed: ["impatience", "sunk costs", "misdirected effort"],
    essence: "Leaning on the hoe, counting what the vine has actually produced.",
    description:
      "A farmer rests on a tool, studying seven pentacles ripening on a vine. The pause between labor and harvest where strategy is honestly reviewed.",
    upright:
      "Step back and audit the garden: what is growing, what is not, what deserves another season. Patience is only a virtue when attached to an honest assessment.",
    reversed:
      "Either quitting at the brink of harvest or watering a dead vine for sentiment. Let the evidence vote.",
    questions: [
      "Which of my efforts show real growth when measured honestly?",
      "What have I invested in that the numbers no longer justify?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(8, "Eight", "Eight of Pentacles", {
    keywords: ["diligence", "practice", "mastery in progress", "devotion to craft"],
    keywordsReversed: ["cut corners", "repetition without growth", "perfectionism"],
    essence: "Coin after coin, each truer than the last.",
    description:
      "An apprentice carves pentacles at a bench, finished pieces hung in a neat column, the city distant. Mastery shown as what it is: repetition with attention.",
    upright:
      "Head down, hands on, standards up. The Eight of Pentacles blesses deliberate practice: the extra rep, the detail honored, skill compounding quietly. This is how talent is actually made.",
    reversed:
      "Going through the motions, or polishing one coin forever. Reintroduce either attention or completion.",
    questions: [
      "What skill deserves my devoted, repeated practice this season?",
      "Where am I repeating without improving, and what feedback is missing?",
    ],
    musicSku: "lofi-focus",
  }),
  w(9, "Nine", "Nine of Pentacles", {
    keywords: ["self-sufficiency", "earned luxury", "refinement", "independence"],
    keywordsReversed: ["gilded cage", "overwork behind the garden", "worth tied to output"],
    essence: "A falcon on her glove, a vineyard she planted, an afternoon she owes to no one.",
    description:
      "An elegant figure strolls a ripe vineyard, a hooded falcon on one hand. Discipline has matured into abundance enjoyed alone and unapologetically.",
    upright:
      "Enjoy what you built. The Nine of Pentacles honors self sufficiency, refined taste and the security earned by years of discipline. You may rest in the vineyard; it will not stop being yours.",
    reversed:
      "The garden is beautiful and feels like a cage, or the harvest never seems sufficient proof of worth. Revisit what the independence was for.",
    questions: [
      "What have I earned that I have not yet allowed myself to enjoy?",
      "Is my independence serving my life, or substituting for parts of it?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(10, "Ten", "Ten of Pentacles", {
    keywords: ["legacy", "lasting wealth", "family continuity", "roots"],
    keywordsReversed: ["inheritance disputes", "instability at the root", "short-term thinking"],
    essence: "Ten coins arranged on the arch of a gate three generations pass through.",
    description:
      "An elder watches a family and their dogs in a prosperous courtyard, ten pentacles overlaying the scene like a hidden tree of life. Wealth as something that outlives its maker.",
    upright:
      "Think in decades. The Ten of Pentacles concerns legacy: family security, institutions, traditions and assets built to be handed on. Tend the roots and the orchard outlasts you.",
    reversed:
      "The foundation shows cracks: family friction over resources, or gains optimized for this quarter at the next generation's expense. Repair at the root.",
    questions: [
      "What am I building that should outlast me?",
      "Which family pattern around money or security am I continuing, and is it worthy?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(11, "Page", "Page of Pentacles", {
    keywords: ["studious beginnings", "a goal taken seriously", "learning by doing", "grounded dreams"],
    keywordsReversed: ["procrastination", "dabbling", "plans without soil"],
    essence: "The coin held up to the light like a question worth years.",
    description:
      "A youth in a green field studies a pentacle held at eye level, ignoring everything else. Ambition in its student phase: humble, absorbed, entirely sincere.",
    upright:
      "Begin the apprenticeship. The Page of Pentacles blesses courses started, skills studied, small ventures run for the learning. Treat the goal as a craft and the craft as a path.",
    reversed:
      "The course purchased and unopened, the dream researched to death. Trade one hour of planning for one hour of doing.",
    questions: [
      "What am I ready to study seriously rather than admire from a distance?",
      "What is the smallest real version of this goal I could start now?",
    ],
    musicSku: "lofi-focus",
  }),
  w(12, "Knight", "Knight of Pentacles", {
    keywords: ["methodical progress", "reliability", "routine", "the slow horse that arrives"],
    keywordsReversed: ["stagnation", "stubborn routines", "boredom mistaken for stability"],
    essence: "The only knight whose horse stands still, and whose fields are all plowed.",
    description:
      "A knight sits on a heavy black horse, pentacle in hand, overlooking furrowed fields. No charge, no drama: the entire kingdom of follow-through.",
    upright:
      "Win by routine. The Knight of Pentacles blesses the unglamorous middle of every long project: systems kept, promises met, the same good work done again today. Slow is how far gets built.",
    reversed:
      "The routine has become the destination. Keep the reliability; refresh the route.",
    questions: [
      "Which routine, kept faithfully, would transform this year?",
      "Where has my steadiness quietly become stuckness?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(13, "Queen", "Queen of Pentacles", {
    keywords: ["practical nurture", "grounded abundance", "resourcefulness", "sanctuary made real"],
    keywordsReversed: ["self-neglect in service", "worry about provision", "smothering practicality"],
    essence: "A throne in a garden, a hare in the grass, and everyone fed.",
    description:
      "The Queen cradles a pentacle on a throne carved with fruit and goats, roses arching overhead, a hare darting past. Care expressed as warm meals, paid bills and rooms that welcome.",
    upright:
      "Nurture practically. The Queen of Pentacles blesses the keeper of real sanctuaries: budgets that hold, tables that feed, bodies cared for including your own. Abundance here has soil on its hands.",
    reversed:
      "Everyone is fed except the cook. Put your own provision back on the list you manage so well.",
    questions: [
      "Who and what do I materially sustain, and is my name on that list?",
      "What would make my home more of a sanctuary this month?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(14, "King", "King of Pentacles", {
    keywords: ["material mastery", "stewardship", "prosperity", "the realized builder"],
    keywordsReversed: ["greed", "status over substance", "control through money"],
    essence: "His castle rises behind him; his hand rests on the bull's head, lightly.",
    description:
      "The King sits amid grapevines in a robe woven with fruit, one hand on a pentacle, his castle behind. Wealth as finished craft: resources mastered and made generous.",
    upright:
      "Steward what you have built. The King of Pentacles marks material mastery that funds more than itself: enterprises, families, communities. Lead with the calm of someone whose foundations are real.",
    reversed:
      "The gold begins to rule its owner: status chased, generosity metered, worth read from balances. Audit what wealth is for.",
    questions: [
      "What does mature stewardship of my resources require now?",
      "Where might my security be purchasing my stagnation?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
];

export const KARTY_MALE: KartaTarota[] = [
  ...WANDS.map((k) => ({ ...k, suit: "wands" as const, element: "fire" as const })),
  ...CUPS.map((k) => ({ ...k, suit: "cups" as const, element: "water" as const })),
  ...SWORDS.map((k) => ({ ...k, suit: "swords" as const, element: "air" as const })),
  ...PENTACLES.map((k) => ({ ...k, suit: "pentacles" as const, element: "earth" as const })),
];
