// Eksportuje bibliotekę muzyki (src/data/muzyka.ts + pl/muzyka.ts) do JSON,
// z którego korzysta Edge Function czatu Wyroczni (supabase/functions/reader-chat/biblioteka.json).
// Uruchom po każdej zmianie w muzyka.ts:  npm run eksport-biblioteki
// Wymaga Node 22+ (--experimental-strip-types wczytuje .ts bez kompilacji).

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const { UTWORY } = await import("../src/data/muzyka.ts");
const { UTWORY_PL } = await import("../src/data/pl/muzyka.ts");

const plPoSku = new Map(UTWORY_PL.map((u) => [u.sku, u]));

const biblioteka = UTWORY.filter((u) => !u.categories.includes("mysteries")).map((u) => {
  const pl = plPoSku.get(u.sku);
  return {
    sku: u.sku,
    title: u.title,
    youtubeId: u.youtubeId,
    minutes: u.minutes,
    moods: u.moods,
    categories: u.categories,
    atmosphere: u.atmosphere,
    atmospherePl: pl?.atmosphere ?? u.atmosphere,
  };
});

const tutaj = dirname(fileURLToPath(import.meta.url));
const cel = resolve(tutaj, "../../supabase/functions/reader-chat/biblioteka.json");
writeFileSync(cel, JSON.stringify(biblioteka, null, 2) + "\n");
console.log(`Zapisano ${biblioteka.length} utworów do ${cel}`);
