import type { KartaTarota } from "@/data/karty";

// Autorska, generatywna grafika kart: SVG rysowane z danych karty.
// Zero plików graficznych, pełna spójność stylu, deterministyczne gwiazdy.

const ZLOTO = "#c6a35f";
const ZLOTO_JASNE = "#e8d7a8";
const FIOLET = "#8d78bd";

// Glify Wielkich Arkanów w siatce 100x100 (środek 50,50).
const GLIFY: Record<string, React.ReactNode> = {
  "the-fool": (
    <>
      <path d="M50 50 C56 44 64 48 62 56 C59 66 46 66 42 56 C37 44 49 34 60 38 C74 43 76 60 66 69 C54 80 34 74 30 60" />
      <circle cx="50" cy="50" r="2.4" />
    </>
  ),
  "the-magician": (
    <>
      <path d="M50 52 C46 42 32 42 32 52 C32 62 46 62 50 52 C54 42 68 42 68 52 C68 62 54 62 50 52 Z" />
      <path d="M50 24 L50 36" />
      <path d="M50 68 L50 80" />
    </>
  ),
  "the-high-priestess": (
    <>
      <path d="M30 26 L30 74" />
      <path d="M70 26 L70 74" />
      <path d="M58 34 A17 17 0 1 0 58 66 A13 13 0 1 1 58 34 Z" />
    </>
  ),
  "the-empress": (
    <>
      <circle cx="50" cy="40" r="14" />
      <path d="M50 54 L50 78" />
      <path d="M40 68 L60 68" />
    </>
  ),
  "the-emperor": (
    <>
      <path d="M50 46 C50 32 37 27 31 36" />
      <path d="M50 46 C50 32 63 27 69 36" />
      <path d="M50 46 L50 74" />
      <path d="M38 74 L62 74" />
    </>
  ),
  "the-hierophant": (
    <>
      <path d="M50 24 L50 78" />
      <path d="M38 38 L62 38" />
      <path d="M33 50 L67 50" />
      <path d="M38 62 L62 62" />
    </>
  ),
  "the-lovers": (
    <>
      <circle cx="42" cy="50" r="17" />
      <circle cx="58" cy="50" r="17" />
    </>
  ),
  "the-chariot": (
    <>
      <path d="M30 42 L50 26 L70 42" />
      <path d="M30 42 L70 42" />
      <path d="M28 58 L72 58" />
      <circle cx="38" cy="66" r="8" />
      <circle cx="62" cy="66" r="8" />
    </>
  ),
  strength: (
    <>
      <path d="M50 38 C47 31 38 31 38 38 C38 45 47 45 50 38 C53 31 62 31 62 38 C62 45 53 45 50 38 Z" />
      <path d="M28 72 C36 52 64 52 72 72" />
    </>
  ),
  "the-hermit": (
    <>
      <path d="M44 28 A9 9 0 0 1 56 28" />
      <path d="M50 32 L62 50 L50 68 L38 50 Z" />
      <circle cx="50" cy="50" r="3" />
      <path d="M50 68 L50 78" />
    </>
  ),
  "wheel-of-fortune": (
    <>
      <circle cx="50" cy="50" r="23" />
      <circle cx="50" cy="50" r="6" />
      <path d="M50 27 L50 44 M50 56 L50 73 M27 50 L44 50 M56 50 L73 50 M34 34 L46 46 M54 54 L66 66 M66 34 L54 46 M46 54 L34 66" />
    </>
  ),
  justice: (
    <>
      <path d="M50 26 L50 74" />
      <path d="M30 36 L70 36" />
      <path d="M30 36 L26 50 M30 36 L34 50" />
      <path d="M26 50 A6 5 0 0 0 34 50" />
      <path d="M70 36 L66 50 M70 36 L74 50" />
      <path d="M66 50 A6 5 0 0 0 74 50" />
      <path d="M42 74 L58 74" />
    </>
  ),
  "the-hanged-man": (
    <>
      <path d="M32 28 L68 28" />
      <path d="M50 28 L50 54" />
      <circle cx="50" cy="66" r="9" />
    </>
  ),
  death: (
    <>
      <circle cx="50" cy="42" r="6" />
      <path d="M50 36 C44 28 34 32 38 42 M50 36 C56 28 66 32 62 42 M44 46 C36 48 36 56 44 55 M56 46 C64 48 64 56 56 55" />
      <path d="M50 52 L50 78" />
      <path d="M50 62 L43 57 M50 70 L57 65" />
    </>
  ),
  temperance: (
    <>
      <path d="M50 26 L67 54 L33 54 Z" />
      <path d="M50 78 L33 50 L67 50 Z" />
    </>
  ),
  "the-devil": (
    <>
      <circle cx="50" cy="50" r="23" />
      <path d="M50 70 L38.2 33.8 L69 56.2 L31 56.2 L61.8 33.8 Z" />
    </>
  ),
  "the-tower": (
    <>
      <path d="M42 42 L42 78 L58 78 L58 42" />
      <path d="M40 42 L38 32 L46 37 L50 28 L54 37 L62 32 L60 42 Z" />
      <path d="M70 20 L55 46 L63 46 L46 70" />
    </>
  ),
  "the-star": (
    <>
      <path d="M50 26 L53.4 41.7 L67 33 L58.3 46.6 L74 50 L58.3 53.4 L67 67 L53.4 58.3 L50 74 L46.6 58.3 L33 67 L41.7 53.4 L26 50 L41.7 46.6 L33 33 L46.6 41.7 Z" />
    </>
  ),
  "the-moon": (
    <>
      <path d="M58 26 A25 25 0 1 0 58 74 A20 20 0 1 1 58 26 Z" />
      <path d="M38 80 L38 74 M50 82 L50 76 M62 80 L62 74" />
    </>
  ),
  "the-sun": (
    <>
      <circle cx="50" cy="50" r="14" />
      <path d="M50 24 L50 32 M50 68 L50 76 M24 50 L32 50 M68 50 L76 50 M32 32 L38 38 M62 62 L68 68 M68 32 L62 38 M38 62 L32 68" />
    </>
  ),
  judgement: (
    <>
      <path d="M26 36 L64 54 L58 66 L26 44 Z" />
      <path d="M64 54 L76 42 M64 54 L80 54 M64 54 L74 66" />
    </>
  ),
  "the-world": (
    <>
      <ellipse cx="50" cy="50" rx="19" ry="26" />
      <path d="M50 18 L53 24 L50 30 L47 24 Z" />
      <circle cx="24" cy="50" r="2" />
      <circle cx="76" cy="50" r="2" />
      <circle cx="50" cy="82" r="2" />
    </>
  ),
};

// Glify kolorów Małych Arkanów.
const GLIFY_KOLOROW: Record<string, React.ReactNode> = {
  wands: (
    <>
      <path d="M50 24 L50 76" />
      <path d="M50 36 L41 29 M50 36 L59 29" />
      <path d="M43 76 L57 76" />
    </>
  ),
  cups: (
    <>
      <path d="M33 32 L67 32 C67 50 58 57 50 57 C42 57 33 50 33 32 Z" />
      <path d="M50 57 L50 70" />
      <path d="M39 74 L61 74" />
    </>
  ),
  swords: (
    <>
      <path d="M50 20 L45 30 L45 58 L50 64 L55 58 L55 30 Z" />
      <path d="M36 64 L64 64" />
      <circle cx="50" cy="74" r="4" />
    </>
  ),
  pentacles: (
    <>
      <circle cx="50" cy="50" r="21" />
      <path d="M50 34 L59.4 62.9 L34.8 45.1 L65.2 45.1 L40.6 62.9 Z" />
    </>
  ),
};

// Deterministyczne gwiazdki tła (LCG od numeru karty).
function gwiazdki(seed: number): { x: number; y: number; r: number }[] {
  let s = seed * 2654435761 + 1013904223;
  const nast = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
  const wynik = [];
  for (let i = 0; i < 16; i++) {
    wynik.push({
      x: 24 + nast() * 252,
      y: 54 + nast() * 330,
      r: 0.6 + nast() * 1.1,
    });
  }
  return wynik;
}

function seedKarty(karta: KartaTarota): number {
  const kolor = karta.suit ? { wands: 100, cups: 200, swords: 300, pentacles: 400 }[karta.suit] : 0;
  return karta.number + kolor + (karta.arcana === "major" ? 31 : 7);
}

export function KartaAwers(props: { karta: KartaTarota; className?: string }) {
  const { karta } = props;
  const glif =
    karta.arcana === "major" ? GLIFY[karta.slug] : GLIFY_KOLOROW[karta.suit ?? "wands"];
  const kropki =
    karta.arcana === "minor" && karta.number <= 10
      ? Array.from({ length: karta.number }, (_, i) => i)
      : [];

  return (
    <svg
      viewBox="0 0 300 500"
      className={props.className}
      role="img"
      aria-label={`${karta.name} tarot card`}
    >
      <rect x="0" y="0" width="300" height="500" fill="#121020" />
      <rect x="10" y="10" width="280" height="480" fill="none" stroke={ZLOTO} strokeWidth="1.6" />
      <rect
        x="18"
        y="18"
        width="264"
        height="464"
        fill="none"
        stroke={ZLOTO}
        strokeWidth="0.7"
        opacity="0.55"
      />
      {/* Narożne ornamenty */}
      {[
        [18, 18, 1, 1],
        [282, 18, -1, 1],
        [18, 482, 1, -1],
        [282, 482, -1, -1],
      ].map(([x, y, sx, sy], i) => (
        <path
          key={i}
          d={`M${x} ${Number(y) + 18 * Number(sy)} L${x} ${y} L${Number(x) + 18 * Number(sx)} ${y}`}
          fill="none"
          stroke={ZLOTO_JASNE}
          strokeWidth="1.6"
        />
      ))}
      {/* Gwiazdki */}
      {gwiazdki(seedKarty(karta)).map((g, i) => (
        <circle key={i} cx={g.x} cy={g.y} r={g.r} fill={FIOLET} opacity="0.45" />
      ))}
      {/* Numerał */}
      <text
        x="150"
        y="52"
        textAnchor="middle"
        fill={ZLOTO_JASNE}
        fontSize="22"
        letterSpacing="4"
        fontFamily="var(--font-naglowki), serif"
      >
        {karta.numeral.toUpperCase()}
      </text>
      <path d="M110 66 L190 66" stroke={ZLOTO} strokeWidth="0.8" opacity="0.7" />
      {/* Glif centralny */}
      <g
        transform="translate(80 140) scale(1.4)"
        fill="none"
        stroke={ZLOTO_JASNE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {glif}
      </g>
      {/* Kropki liczby (Małe Arkana 1-10) */}
      {kropki.length > 0 && (
        <g>
          {kropki.map((i) => {
            const wRzedzie = Math.min(kropki.length, 5);
            const rzad = Math.floor(i / 5);
            const wTym = rzad === 0 ? wRzedzie : kropki.length - 5;
            const idx = i % 5;
            const szer = (wTym - 1) * 22;
            return (
              <circle
                key={i}
                cx={150 - szer / 2 + idx * 22}
                cy={330 + rzad * 18}
                r="3"
                fill={ZLOTO}
              />
            );
          })}
        </g>
      )}
      {/* Nazwa */}
      <path d="M70 420 L230 420" stroke={ZLOTO} strokeWidth="0.8" opacity="0.7" />
      <text
        x="150"
        y="450"
        textAnchor="middle"
        fill={ZLOTO_JASNE}
        fontSize={karta.name.length > 18 ? 15 : 18}
        letterSpacing="2.5"
        fontFamily="var(--font-naglowki), serif"
      >
        {karta.name.toUpperCase()}
      </text>
    </svg>
  );
}

export function KartaRewers(props: { className?: string }) {
  return (
    <svg viewBox="0 0 300 500" className={props.className} aria-hidden="true">
      <rect x="0" y="0" width="300" height="500" fill="#100d1d" />
      <rect x="10" y="10" width="280" height="480" fill="none" stroke={ZLOTO} strokeWidth="1.6" />
      <rect
        x="20"
        y="20"
        width="260"
        height="460"
        fill="none"
        stroke={ZLOTO}
        strokeWidth="0.7"
        opacity="0.5"
      />
      {/* Kratownica rombów */}
      <g stroke={ZLOTO} strokeWidth="0.45" opacity="0.32">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={`a${i}`} d={`M${-100 + i * 60} 0 L${200 + i * 60} 500`} />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <path key={`b${i}`} d={`M${100 + i * 60} 0 L${-200 + i * 60} 500`} />
        ))}
      </g>
      {/* Centralny emblemat */}
      <circle cx="150" cy="250" r="64" fill="#100d1d" stroke={ZLOTO} strokeWidth="1.3" />
      <circle cx="150" cy="250" r="54" fill="none" stroke={ZLOTO} strokeWidth="0.7" opacity="0.7" />
      <path
        d="M150 196 L162 238 L204 250 L162 262 L150 304 L138 262 L96 250 L138 238 Z"
        fill="none"
        stroke={ZLOTO_JASNE}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="150" cy="250" r="10" fill="none" stroke={ZLOTO_JASNE} strokeWidth="1.2" />
      {/* Księżyce w narożach */}
      {[
        [48, 60],
        [252, 60],
        [48, 440],
        [252, 440],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${Number(x) + 6} ${Number(y) - 12} A13 13 0 1 0 ${Number(x) + 6} ${
            Number(y) + 12
          } A10 10 0 1 1 ${Number(x) + 6} ${Number(y) - 12} Z`}
          fill="none"
          stroke={ZLOTO}
          strokeWidth="1.1"
        />
      ))}
    </svg>
  );
}
