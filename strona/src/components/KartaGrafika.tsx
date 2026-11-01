import type { KartaTarota } from "@/data/karty";

// Grafika kart: autorskie ilustracje (public/karty/*.webp) w złotej ramce SVG z numerałem i nazwą.

const ZLOTO = "#c6a35f";
const ZLOTO_JASNE = "#e8d7a8";
/** Ilustracja karty (WebP 600x1000) po angielskim slugu; polska wersja niesie go w slugEn. */
export function obrazKarty(karta: KartaTarota): string {
  return `/karty/${karta.slugEn ?? karta.slug}.webp`;
}

export function KartaAwers(props: { karta: KartaTarota; className?: string }) {
  const { karta } = props;
  const gid = `cien-${karta.slugEn ?? karta.slug}`;
  return (
    <svg
      viewBox="0 0 300 500"
      className={props.className}
      role="img"
      aria-label={karta.slugEn ? `${karta.name}, karta tarota` : `${karta.name} tarot card`}
    >
      <defs>
        <linearGradient id={`${gid}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b0a12" stopOpacity="0.92" />
          <stop offset="1" stopColor="#0b0a12" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${gid}-d`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#0b0a12" stopOpacity="0.95" />
          <stop offset="1" stopColor="#0b0a12" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="500" fill="#0b0a12" />
      {/* Ilustracja */}
      <image
        href={obrazKarty(karta)}
        x="0"
        y="0"
        width="300"
        height="500"
        preserveAspectRatio="xMidYMid slice"
      />
      {/* Cień pod numerałem i nazwą, dla czytelności */}
      <rect x="0" y="0" width="300" height="92" fill={`url(#${gid}-g)`} />
      <rect x="0" y="392" width="300" height="108" fill={`url(#${gid}-d)`} />
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
      {/* Nazwa */}
      <path d="M70 428 L230 428" stroke={ZLOTO} strokeWidth="0.8" opacity="0.7" />
      <text
        x="150"
        y="458"
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
