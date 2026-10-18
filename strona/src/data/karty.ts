// Talia: typy i Wielkie Arkana (22). Małe Arkana (56) w karty-male.ts.
// Interpretacje: własne teksty w tradycji Rider-Waite-Smith.

import { KARTY_MALE } from "./karty-male";

export type Zywiol = "fire" | "water" | "air" | "earth";
export type Kolor = "wands" | "cups" | "swords" | "pentacles";

export interface KartaTarota {
  slug: string;
  name: string;
  arcana: "major" | "minor";
  suit?: Kolor;
  number: number;
  numeral: string;
  element: Zywiol;
  keywords: string[];
  keywordsReversed: string[];
  essence: string;
  description: string;
  upright: string;
  reversed: string;
  questions: string[];
  musicSku?: string;
}

export const ZYWIOLY: Record<Zywiol, { name: string; domain: string }> = {
  fire: { name: "Fire", domain: "will, desire, action" },
  water: { name: "Water", domain: "emotion, intuition, relationship" },
  air: { name: "Air", domain: "thought, truth, conflict" },
  earth: { name: "Earth", domain: "body, work, matter" },
};

export const KOLORY: Record<Kolor, { name: string; element: Zywiol; theme: string }> = {
  wands: { name: "Wands", element: "fire", theme: "will, creativity and ambition" },
  cups: { name: "Cups", element: "water", theme: "emotion, love and intuition" },
  swords: { name: "Swords", element: "air", theme: "mind, truth and conflict" },
  pentacles: { name: "Pentacles", element: "earth", theme: "work, body and material life" },
};

export const KARTY_WIELKIE: KartaTarota[] = [
  {
    slug: "the-fool",
    name: "The Fool",
    arcana: "major",
    number: 0,
    numeral: "0",
    element: "air",
    keywords: ["beginnings", "innocence", "leap of faith", "freedom", "the unknown"],
    keywordsReversed: ["recklessness", "hesitation", "naivety", "false starts"],
    essence: "The first step taken before the path exists.",
    description:
      "A traveler stands at the edge of a cliff with the morning sun behind them, carrying everything they own in a small bundle. The dog at their heel is instinct, barking either encouragement or warning. The Fool is numbered zero: not nothing, but the open circle from which every other card unfolds.",
    upright:
      "Something new is asking to begin, and it will not wait for you to feel ready. The Fool blesses honest inexperience: the willingness to look foolish is the price of every genuine beginning. Travel light, trust the road to teach you, and let curiosity outrank caution for one decisive moment.",
    reversed:
      "The leap is being taken carelessly or not at all. Reversed, the Fool warns of recklessness dressed as spontaneity, or of a soul so afraid of the cliff edge that it calls paralysis prudence. Ask which one is yours before the season for beginnings closes.",
    questions: [
      "What would I begin this week if I were not afraid of looking foolish?",
      "Where does my caution protect me, and where does it merely confine me?",
      "What am I carrying that the journey does not require?",
    ],
    musicSku: "cosmic-soundscapes",
  },
  {
    slug: "the-magician",
    name: "The Magician",
    arcana: "major",
    number: 1,
    numeral: "I",
    element: "air",
    keywords: ["willpower", "manifestation", "skill", "focus", "as above, so below"],
    keywordsReversed: ["manipulation", "scattered energy", "untapped talent"],
    essence: "All four elements on the table, and a hand raised to heaven.",
    description:
      "One hand lifted to the sky, one pointed to the earth, the Magician stands as the living channel between idea and matter. On the table lie wand, cup, sword and pentacle: every tool the deck contains. Above the head floats the lemniscate, the sideways eight of endless circulation.",
    upright:
      "You already have every tool the work requires; what the moment asks for is focus. The Magician appears when intention can be turned into result, provided the will stays gathered on a single point. Speak clearly, act deliberately, and watch circumstance arrange itself around your certainty.",
    reversed:
      "Power is leaking or being misused. Reversed, the Magician marks talent scattered across too many projects, or a silver tongue bending truth to its own convenience. The tools still lie on the table. The question is whether they serve the work or the performance.",
    questions: [
      "Which single intention deserves all of my focus right now?",
      "What tool or skill am I pretending not to have?",
      "Where am I persuading, and where am I manipulating?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "the-high-priestess",
    name: "The High Priestess",
    arcana: "major",
    number: 2,
    numeral: "II",
    element: "water",
    keywords: ["intuition", "mystery", "the subconscious", "stillness", "hidden knowledge"],
    keywordsReversed: ["ignored instincts", "secrets", "surface noise"],
    essence: "The veil between the pillars, and what waits behind it.",
    description:
      "She sits between the black and white pillars of the temple, a thin veil of pomegranates behind her and a crescent moon at her feet. The scroll in her lap is half hidden: knowledge that cannot be told, only remembered. The High Priestess is the deck's keeper of everything the daylight mind forgets.",
    upright:
      "The answer is already inside you, beneath the noise. This card counsels stillness over strategy: watch your dreams, trust the small voice that speaks before reasons arrive, and let what is hidden reveal itself in its own hour. Not everything true can be explained yet.",
    reversed:
      "You are drowning the inner voice in other people's opinions. Reversed, the High Priestess marks intuition overruled, secrets kept too long, or a refusal to sit with silence. The veil has not moved. You have simply stopped looking at it.",
    questions: [
      "What did I know before I talked myself out of it?",
      "Where in my life do I need more silence than advice?",
      "What truth am I circling but not yet ready to name?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "the-empress",
    name: "The Empress",
    arcana: "major",
    number: 3,
    numeral: "III",
    element: "earth",
    keywords: ["abundance", "creativity", "nurture", "the senses", "growth"],
    keywordsReversed: ["creative block", "smothering", "neglect of self"],
    essence: "The garden that grows because it is loved.",
    description:
      "Crowned with stars, the Empress reclines in a field of ripening wheat beside a waterfall that never runs dry. Her shield bears the sign of Venus. She is the deck's great gardener: everything she touches is fed, and everything she feeds becomes more fully itself.",
    upright:
      "Make, tend, nourish. The Empress blesses creative work, bodies cared for, tables set for others, and projects given the slow patience a garden demands. Abundance here is not luck but cultivation. Whatever you water honestly will grow.",
    reversed:
      "The garden is untended, or tended so anxiously that nothing can breathe. Reversed, the Empress points at creative drought, self neglect, or care that has curdled into control. Return to the body and the senses first; the rest follows.",
    questions: [
      "What have I been meaning to create but keep postponing?",
      "Who or what in my care is quietly underfed, including myself?",
      "Where does my nurturing end and my control begin?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "the-emperor",
    name: "The Emperor",
    arcana: "major",
    number: 4,
    numeral: "IV",
    element: "fire",
    keywords: ["structure", "authority", "boundaries", "strategy", "stability"],
    keywordsReversed: ["rigidity", "domination", "abdicated responsibility"],
    essence: "Order carved into stone so that life can lean on it.",
    description:
      "On a throne of bare stone marked with rams' heads, the Emperor holds the ankh of life in one hand and the orb of the world in the other. Behind him rise mountains without a single tree. He is structure itself: the walls that make a sanctuary possible and a prison equally so.",
    upright:
      "Build the frame. The Emperor calls for boundaries stated plainly, plans with dates on them, and the quiet authority of someone who takes responsibility rather than credit. Discipline here is not the enemy of freedom but its foundation.",
    reversed:
      "The frame has become a cage, or there is no frame at all. Reversed, the Emperor marks tyranny large or small, rules enforced past their purpose, or a life waiting for someone else to take charge of it. Authority unclaimed is authority handed over.",
    questions: [
      "Where does my life need a firmer structure than my mood provides?",
      "Which boundary have I stated, and which have I only resented in silence?",
      "Am I leading this situation or merely controlling it?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "the-hierophant",
    name: "The Hierophant",
    arcana: "major",
    number: 5,
    numeral: "V",
    element: "earth",
    keywords: ["tradition", "teaching", "belief", "institutions", "initiation"],
    keywordsReversed: ["dogma", "rebellion", "empty ritual"],
    essence: "The keys to a wisdom older than any single life.",
    description:
      "Between two pillars the Hierophant raises a hand in blessing while two initiates kneel below. At his feet lie crossed keys: the inherited methods that unlock inherited mysteries. He is every teacher, lineage and tradition through which knowledge survives its first knower.",
    upright:
      "Seek the teacher, the practice, the proven path. The Hierophant favors learning from those who walked before you, joining rather than improvising, and honoring forms that have carried meaning for centuries. Freedom will mean more once you know the rules you are freed from.",
    reversed:
      "The ritual has outlived its spirit. Reversed, the Hierophant marks dogma swallowed whole, institutions obeyed out of habit, or a necessary rebellion against a teaching that no longer teaches. Keep the wisdom; question the uniform.",
    questions: [
      "Whose teaching has shaped me without my ever examining it?",
      "Which tradition still feeds me, and which do I follow out of fear?",
      "What could I learn faster with a guide than alone?",
    ],
    musicSku: "grand-canyon",
  },
  {
    slug: "the-lovers",
    name: "The Lovers",
    arcana: "major",
    number: 6,
    numeral: "VI",
    element: "air",
    keywords: ["love", "union", "choice", "alignment", "desire"],
    keywordsReversed: ["disharmony", "avoidance of choice", "misaligned values"],
    essence: "Two paths, one heart, and an angel watching the choosing.",
    description:
      "Beneath a blazing angel, two figures stand in a garden with a mountain rising between them. Behind one, the tree of flames; behind the other, the tree of knowledge with its coiled serpent. The Lovers is only partly about romance. At its core it is the card of choice, and of what we join ourselves to.",
    upright:
      "A union or a decision is before you, and it asks for your whole self. The Lovers blesses relationships built on honesty and choices made from values rather than convenience. What you say yes to now, you become. Choose like it matters, because it does.",
    reversed:
      "Something is out of alignment: a relationship running on avoidance, or a choice deferred so long it is making itself. Reversed, the Lovers asks whether your commitments still match your values, and what honest conversation you have been postponing.",
    questions: [
      "What am I being asked to commit to with my whole self?",
      "Where do my choices and my values quietly disagree?",
      "What conversation would change this relationship if I dared to have it?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "the-chariot",
    name: "The Chariot",
    arcana: "major",
    number: 7,
    numeral: "VII",
    element: "water",
    keywords: ["victory", "willpower", "momentum", "control", "determination"],
    keywordsReversed: ["loss of direction", "forcing outcomes", "stalled drive"],
    essence: "Two sphinxes pulling in opposite directions, and a will that drives them anyway.",
    description:
      "An armored figure rides a chariot drawn by two sphinxes, one black and one white, who look ready to walk opposite ways. There are no reins. The Chariot is steered by will alone: contradiction mastered, not resolved, and turned into forward motion.",
    upright:
      "Move. The Chariot announces victory for those who gather their conflicting impulses behind a single aim and refuse to be scattered. Discipline your doubts into passengers rather than drivers. The momentum you build now carries farther than you can currently see.",
    reversed:
      "The chariot is stuck, spinning, or aimed by someone else. Reversed, this card marks drive without direction or control gripped so hard the wheels cannot turn. Loosen your hands, re-choose the destination, then commit again.",
    questions: [
      "Where is my willpower scattered across too many directions?",
      "What contradiction in me needs mastering rather than resolving?",
      "What would gathering all my momentum behind one aim look like this month?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "strength",
    name: "Strength",
    arcana: "major",
    number: 8,
    numeral: "VIII",
    element: "fire",
    keywords: ["courage", "gentleness", "patience", "inner power", "taming"],
    keywordsReversed: ["self-doubt", "raw reaction", "forcing"],
    essence: "A lion's jaws closed by a gentle hand.",
    description:
      "A figure in white calmly closes the mouth of a lion, the lemniscate of infinity hovering above their head. No armor, no weapon, no struggle. Strength in the tarot is never force: it is the patient, affectionate mastery of one's own wild nature.",
    upright:
      "You are stronger than this situation, precisely because you do not need to roar. Strength counsels courage expressed as gentleness, persistence over intensity, and compassion toward the animal fears inside you. Tame, do not cage.",
    reversed:
      "The lion is winning, or you have mistaken harshness for strength. Reversed, this card marks reactive tempers, collapsing confidence, or willpower applied as brute force against yourself. Meet the inner animal with patience; it only fights what fights it.",
    questions: [
      "Which of my instincts needs taming with kindness rather than punishment?",
      "Where am I roaring because I am afraid to be quiet?",
      "What would patient courage look like here, instead of forceful courage?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "the-hermit",
    name: "The Hermit",
    arcana: "major",
    number: 9,
    numeral: "IX",
    element: "earth",
    keywords: ["solitude", "inner search", "wisdom", "withdrawal", "guidance"],
    keywordsReversed: ["isolation", "refusing counsel", "endless retreat"],
    essence: "One lamp, lifted on a mountain, lighting a single step at a time.",
    description:
      "An old wanderer stands on a snow peak, holding up a lantern in which a six pointed star burns. The light does not reveal the whole path, only the next step, which is all any seeker is owed. The Hermit withdraws from the world not to escape it but to finally hear it.",
    upright:
      "Step back. The Hermit calls for deliberate solitude: a pause from counsel, noise and performance in order to consult the one adviser who knows the whole story. The answer you seek is not on the mountain. It is what you become by climbing alone.",
    reversed:
      "Retreat has hardened into hiding. Reversed, the Hermit marks isolation past its purpose, wisdom hoarded instead of shared, or loneliness mistaken for depth. The lamp was always meant to be carried back down.",
    questions: [
      "What question can only be answered in solitude, and have I given it any?",
      "Is my withdrawal a search or an escape?",
      "What have I learned in the dark that someone else now needs?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "wheel-of-fortune",
    name: "Wheel of Fortune",
    arcana: "major",
    number: 10,
    numeral: "X",
    element: "fire",
    keywords: ["cycles", "turning point", "fate", "luck", "perspective"],
    keywordsReversed: ["resisting change", "a rough turn", "repeating loops"],
    essence: "The wheel turns whether or not you are ready; the center never moves.",
    description:
      "A great wheel hangs in the sky, inscribed with alchemical signs, while strange creatures rise and fall along its rim. In the corners, four winged beings read quietly, unmoved. The Wheel of Fortune is the tarot's weather report: seasons turn, fortunes rotate, and only the watching center is still.",
    upright:
      "The wheel is turning in your favor. A chapter closes, a door swings, chance introduces what effort could not. Ride the turn rather than clutching the rim, and remember both halves of the lesson: this rise, like every fall before it, is a season and not a verdict.",
    reversed:
      "A hard turn, or the same loop repeating. Reversed, the Wheel marks setbacks outside your control or cycles you keep boarding voluntarily. You cannot stop the wheel. You can change where you stand on it.",
    questions: [
      "Which season of my life is visibly ending, whether I consent or not?",
      "What cycle do I keep repeating, and what is my part in the repetition?",
      "If fortune turned tomorrow, what would I want already in order?",
    ],
    musicSku: "alien-ambient",
  },
  {
    slug: "justice",
    name: "Justice",
    arcana: "major",
    number: 11,
    numeral: "XI",
    element: "air",
    keywords: ["truth", "fairness", "consequence", "accountability", "clarity"],
    keywordsReversed: ["bias", "avoided accountability", "imbalance"],
    essence: "The sword and the scales, and no thumb on either.",
    description:
      "Justice sits crowned between two pillars, a raised sword in one hand and balanced scales in the other. Unlike her blindfolded cousins in courthouses, she looks straight at you. In the tarot, justice is not punishment but accuracy: things weighed as they actually are.",
    upright:
      "Truth is being weighed, and honesty is your best advocate. Justice announces consequences arriving in proportion to causes, decisions that must be made on facts rather than feelings, and the quiet relief of taking responsibility for your side of the ledger.",
    reversed:
      "The scales are tipped, by others or by you. Reversed, Justice marks unfairness endured, accountability dodged, or self judgment so harsh it has stopped being accurate. Correct the record where you can, beginning with your own.",
    questions: [
      "Where am I waiting for fairness instead of acting for it?",
      "What consequence am I living that my own choices helped weigh?",
      "In this conflict, what would perfect accuracy, not victory, require of me?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "the-hanged-man",
    name: "The Hanged Man",
    arcana: "major",
    number: 12,
    numeral: "XII",
    element: "water",
    keywords: ["surrender", "new perspective", "pause", "sacrifice", "suspension"],
    keywordsReversed: ["stalling", "useless martyrdom", "resisting the pause"],
    essence: "Upside down on purpose, with a halo where the struggle used to be.",
    description:
      "A figure hangs by one ankle from a living tree, the other leg bent in a quiet dance step, hands relaxed behind the back. The face is serene and ringed with light. The Hanged Man is the deck's most radical teacher: the one who wins by stopping, sees by inverting, and gains by letting go.",
    upright:
      "Stop struggling and the view will change. The Hanged Man asks for willing suspension: a pause, a sacrifice, a deliberate surrender of control in exchange for a perspective nothing else can buy. What looks like stalling from outside is ripening from within.",
    reversed:
      "The pause has become procrastination, or the sacrifice serves nothing. Reversed, the Hanged Man marks martyrdom without meaning and delay without ripening. If hanging there no longer changes the view, it is time to come down.",
    questions: [
      "What am I being asked to release my grip on?",
      "Which problem might dissolve if I looked at it exactly upside down?",
      "Is this pause ripening something, or just postponing it?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "death",
    name: "Death",
    arcana: "major",
    number: 13,
    numeral: "XIII",
    element: "water",
    keywords: ["endings", "transformation", "release", "transition", "renewal"],
    keywordsReversed: ["clinging", "stalled transformation", "fear of endings"],
    essence: "The end that every beginning was quietly made of.",
    description:
      "A skeleton in black armor rides a white horse under a banner bearing a white rose. Kings and children alike fall before it, while on the horizon the sun rises, or sets, between two towers. In tarot, Death almost never means literal death. It means the ending that makes the next life possible.",
    upright:
      "Something is over, and honoring that is the kindest available act. Death announces transformation through subtraction: a role, a relationship, a self image reaching its natural end. Grieve what is ending, then notice how much lighter the road has become.",
    reversed:
      "The ending is being refused, and it is costing more than the loss would. Reversed, Death marks a transformation stalled by clinging: dead arrangements kept on life support out of fear. Release is overdue, and some part of you knows it.",
    questions: [
      "What in my life has already ended, except in my routines?",
      "What could begin if I stopped resuscitating what is over?",
      "What do I owe the ending chapter: gratitude, grief or simply a goodbye?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "temperance",
    name: "Temperance",
    arcana: "major",
    number: 14,
    numeral: "XIV",
    element: "fire",
    keywords: ["balance", "alchemy", "patience", "moderation", "healing"],
    keywordsReversed: ["excess", "impatience", "clashing elements"],
    essence: "Water poured between two cups in a stream that should not be possible.",
    description:
      "An angel with one foot on land and one in the stream pours water between two cups in a flow that defies gravity. On the path behind, a road winds toward a crowned sunrise. Temperance is the deck's alchemist: the patient art of blending opposites into something neither could be alone.",
    upright:
      "Blend, do not choose. Temperance counsels the middle path walked with intention: moderation, healing, and the slow mixing of elements in your life that currently refuse each other. What you are brewing needs time more than it needs force.",
    reversed:
      "The mixture has lost its proportions. Reversed, Temperance marks excess in one ingredient of life, patience exhausted, or forces combined too fast and curdling. Return to small measures and honest ratios.",
    questions: [
      "Which two parts of my life need blending instead of separating?",
      "Where has my impatience been spoiling a slow but real process?",
      "What does moderation actually look like for me, measured in hours and habits?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "the-devil",
    name: "The Devil",
    arcana: "major",
    number: 15,
    numeral: "XV",
    element: "earth",
    keywords: ["bondage", "shadow", "addiction", "materialism", "illusion of no exit"],
    keywordsReversed: ["breaking chains", "facing the shadow", "reclaimed power"],
    essence: "The chains are real; the lock is not.",
    description:
      "A horned figure crouches on a black pedestal to which two human figures are chained. Look closely at the chains: they hang loose, wide enough to lift over the head at any time. The Devil rules every bondage we could leave and do not, every appetite that has quietly become an owner.",
    upright:
      "Name the chain. The Devil appears where a habit, craving, contract or relationship has turned from pleasure into keeper. Its power is the conviction that there is no exit. There is. Seeing the lock is open is the whole, difficult work of this card.",
    reversed:
      "The chain is lifting. Reversed, the Devil marks the first honest look at one's shadow, an addiction confronted, a controlling bond outgrown. Freedom will feel strange at first; stay with it anyway.",
    questions: [
      "What do I claim I cannot quit, and what does that claim buy me?",
      "Which of my shadows runs the show precisely because I will not look at it?",
      "If the chain is loose, what actually keeps me on the pedestal?",
    ],
    musicSku: "alien-ambient",
  },
  {
    slug: "the-tower",
    name: "The Tower",
    arcana: "major",
    number: 16,
    numeral: "XVI",
    element: "fire",
    keywords: ["sudden change", "revelation", "collapse", "liberation", "truth striking"],
    keywordsReversed: ["dreaded disaster", "delayed collapse", "aftershocks"],
    essence: "Lightning does in one second what denial postponed for years.",
    description:
      "A crowned tower built on a jagged peak takes a direct strike of lightning; its golden crown is blasted off and figures fall through the night air. The Tower is the tarot's most feared card and its most honest: the structure was already false. The lightning only announced it.",
    upright:
      "A structure in your life is breaking because it was built on an untruth, and no amount of maintenance was going to save it. The Tower's mercy is speed. Let it fall completely, salvage the lesson rather than the bricks, and build the next thing on rock.",
    reversed:
      "The collapse is being resisted, prolonged or privately dreaded. Reversed, the Tower marks a necessary demolition postponed, or the long aftershocks of one already survived. The question is not whether the false structure falls, but how much of you it lands on.",
    questions: [
      "Which structure in my life survives only because I refuse to inspect it?",
      "What truth, if spoken aloud, would act like lightning here?",
      "What did my last collapse teach me that comfort never could?",
    ],
    musicSku: "alien-ambient",
  },
  {
    slug: "the-star",
    name: "The Star",
    arcana: "major",
    number: 17,
    numeral: "XVII",
    element: "air",
    keywords: ["hope", "renewal", "guidance", "serenity", "faith after ruin"],
    keywordsReversed: ["discouragement", "dimmed faith", "disconnection"],
    essence: "After the Tower, the sky clears, and someone kneels at the water.",
    description:
      "Under a great eight pointed star, a figure kneels at a pool, pouring water onto both land and water. Nothing is hidden, nothing armored. The Star follows the Tower in the deck's order for a reason: it is the quiet, starlit healing that becomes possible only after the false thing has fallen.",
    upright:
      "Hope, the real kind, the kind that has seen ruins. The Star promises renewal through openness: wounds aired, faith recovered, a guiding light that asks only to be followed at walking pace. You are closer to healed than you believe.",
    reversed:
      "The light feels out of reach. Reversed, the Star marks discouragement, cynicism worn as armor, or hope deferred so long it stopped being consulted. The star has not moved. Look up again.",
    questions: [
      "What is quietly healing in me that deserves acknowledgment?",
      "Where have I let cynicism stand guard over an old wound?",
      "What distant light am I willing to walk toward at an honest pace?",
    ],
    musicSku: "cosmic-soundscapes",
  },
  {
    slug: "the-moon",
    name: "The Moon",
    arcana: "major",
    number: 18,
    numeral: "XVIII",
    element: "water",
    keywords: ["illusion", "dreams", "the unconscious", "fear", "the unknown path"],
    keywordsReversed: ["clearing confusion", "fear released", "truth surfacing"],
    essence: "The road is real; so are the things howling beside it.",
    description:
      "A moon with a sleeping face rains light over a path that runs between two towers toward dark hills. A dog and a wolf howl at the sky while a crayfish climbs from the pool. The Moon is the realm of dream, projection and fear: everything true that cannot be seen clearly, and everything clear that is not quite true.",
    upright:
      "You are walking by moonlight, and certainty is not currently available. The Moon counsels naming fears rather than obeying them, writing dreams down, and distrusting conclusions drawn at 3 a.m. Move slowly. The path continues even where you cannot see it.",
    reversed:
      "The fog is starting to lift. Reversed, the Moon marks confusion resolving, a deception surfacing, or anxiety releasing its grip as daylight returns. Check what you decided in the dark before you keep acting on it.",
    questions: [
      "Which of my fears is a watchdog, and which is just a wolf howling?",
      "What is my intuition saying that my anxiety keeps shouting over?",
      "What decision should wait until the fog clears?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "the-sun",
    name: "The Sun",
    arcana: "major",
    number: 19,
    numeral: "XIX",
    element: "fire",
    keywords: ["joy", "vitality", "clarity", "success", "innocence regained"],
    keywordsReversed: ["dimmed joy", "forced positivity", "delayed success"],
    essence: "Daylight so plain and generous it needs no interpretation.",
    description:
      "A huge sun with a calm face pours straight and wavy rays over a child riding a white horse past a wall of sunflowers. Nothing in the image is hidden or ambiguous, which is the point. The Sun is the deck's clearest yes: warmth, truth in full light, and joy that requires no justification.",
    upright:
      "Yes. The Sun announces vitality, success that can be seen from across the field, and the return of a simple joy adulthood had misfiled. Step into visibility without apology. What grew in the dark is ready for the light.",
    reversed:
      "The sun is shining behind a curtain. Reversed, this card marks joy muted by exhaustion or doubt, success delayed but not denied, or positivity performed instead of felt. Open the curtain a handwidth at a time.",
    questions: [
      "What in my life deserves to be celebrated out loud, now, not later?",
      "Where am I performing happiness instead of allowing it?",
      "What would I do today if I fully believed things are going well?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "judgement",
    name: "Judgement",
    arcana: "major",
    number: 20,
    numeral: "XX",
    element: "fire",
    keywords: ["awakening", "reckoning", "calling", "rebirth", "absolution"],
    keywordsReversed: ["self-judgment", "ignored calling", "stalled rebirth"],
    essence: "A trumpet sounds, and everything buried stands up to answer.",
    description:
      "An angel fills the sky with a trumpet blast while gray figures rise from open graves, arms lifted, answering a call only they can hear. Judgement is not a courtroom. It is the morning the old self can no longer stay buried, the summons to a larger life that makes the previous one feel like sleep.",
    upright:
      "You are being called, and you know it. Judgement marks a reckoning with the past that frees rather than condemns: honest inventory, true forgiveness, and a rising into purpose. Answer the trumpet. The grave was never meant to be an address.",
    reversed:
      "The call is heard and screened. Reversed, Judgement marks a vocation avoided, a self forgiveness withheld, or a rebirth postponed under paperwork. The trumpet does not stop. It only gets harder to pretend it is background noise.",
    questions: [
      "What calling have I been sending to voicemail?",
      "What old verdict about myself is ready to be overturned?",
      "If today were the summons, what would I finally rise and do?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "the-world",
    name: "The World",
    arcana: "major",
    number: 21,
    numeral: "XXI",
    element: "earth",
    keywords: ["completion", "integration", "wholeness", "arrival", "a cycle crowned"],
    keywordsReversed: ["loose ends", "almost finished", "fear of closure"],
    essence: "The dance at the center of the finished circle.",
    description:
      "Inside a great laurel wreath, a dancing figure holds a wand in each hand while the four beings of the corners look on. The World is the final card of the Major Arcana: the Fool's journey complete, every element integrated, the circle closed not as an ending but as a crowning.",
    upright:
      "Arrival. The World marks a cycle genuinely completed: a work finished, a lesson embodied, a chapter whole enough to be left with gratitude. Stand in the achievement before rushing to the next beginning. Completion is a skill, and you have earned its practice.",
    reversed:
      "Ninety percent done, and circling. Reversed, the World marks loose ends left deliberately untied, closure feared because it ends the familiar. Finish it: the last step is the one that releases the whole journey's meaning.",
    questions: [
      "What in my life is asking to be properly completed rather than abandoned?",
      "What would it mean to celebrate before immediately beginning again?",
      "Which journey have I finished without ever acknowledging the arrival?",
    ],
    musicSku: "alien-ambient",
  },
];

export const KARTY: KartaTarota[] = [...KARTY_WIELKIE, ...KARTY_MALE];

export function znajdzKarte(slug: string): KartaTarota | undefined {
  return KARTY.find((k) => k.slug === slug);
}
