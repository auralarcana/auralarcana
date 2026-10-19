// Silnik losowania i syntezy odczytu. Czysta logika, bez UI.

import { KARTY, ZYWIOLY, type KartaTarota, type Zywiol } from "@/data/karty";
import type { Spread } from "@/data/spready";

export interface Dobycie {
  karta: KartaTarota;
  reversed: boolean;
  positionIndex: number;
}

// Tasowanie Fisher-Yates na kryptograficznym źródle losowości.
// Math.random bywa przewidywalny; czytelnik zasługuje na uczciwe tasowanie.
function losowe(n: number): number {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const max = Math.floor(0xffffffff / n) * n;
    const buf = new Uint32Array(1);
    let x = 0;
    do {
      crypto.getRandomValues(buf);
      x = buf[0];
    } while (x >= max);
    return x % n;
  }
  return Math.floor(Math.random() * n);
}

export function potasuj<T>(talia: readonly T[]): T[] {
  const a = [...talia];
  for (let i = a.length - 1; i > 0; i--) {
    const j = losowe(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function dobierz(spread: Spread, zReversami: boolean): Dobycie[] {
  const talia = potasuj(KARTY);
  return spread.positions.map((_, i) => ({
    karta: talia[i],
    reversed: zReversami ? losowe(5) === 0 : false, // ok. 20% odwróconych
    positionIndex: i,
  }));
}

export type JezykOdczytu = "en" | "pl";

// Polskie nazwy żywiołów do syntezy (mianownik + dziedzina).
const ZYWIOLY_SYNTEZA_PL: Record<Zywiol, { name: string; domain: string }> = {
  fire: { name: "Ognia", domain: "woli, pragnienia i działania" },
  water: { name: "Wody", domain: "emocji, intuicji i relacji" },
  air: { name: "Powietrza", domain: "myśli, prawdy i konfliktu" },
  earth: { name: "Ziemi", domain: "ciała, pracy i materii" },
};

// Synteza relacji między kartami: deterministyczne zdania z faktów o dobyciu.
export function syntezaOdczytu(
  dobycia: Dobycie[],
  spread: Spread,
  jezyk: JezykOdczytu = "en",
): string[] {
  if (jezyk === "pl") return syntezaPl(dobycia, spread);
  if (dobycia.length < 2) return [];

  const zdania: string[] = [];
  const majors = dobycia.filter((d) => d.karta.arcana === "major");
  const reversy = dobycia.filter((d) => d.reversed);

  // Waga Wielkich Arkanów
  if (majors.length === dobycia.length) {
    zdania.push(
      "Every card in this reading belongs to the Major Arcana. The deck is speaking in its loudest voice: this is not about circumstances but about a chapter of your life rearranging itself. Expect the themes here to repeat until they are met directly.",
    );
  } else if (majors.length >= 2) {
    zdania.push(
      `With ${majors.length} Major Arcana cards present (${majors
        .map((m) => m.karta.name)
        .join(" and ")}), this reading points beyond day to day events toward something structural. The minor cards describe the situation; the majors describe what the situation is really about.`,
    );
  } else if (majors.length === 1) {
    zdania.push(
      `${majors[0].karta.name} is the only Major Arcana card here, which makes it the hinge of the reading. Read the other cards as the circumstances turning around it.`,
    );
  } else {
    zdania.push(
      "No Major Arcana cards appear in this spread. The deck is describing weather rather than climate: practical circumstances in motion, which usually respond well to simple, concrete action.",
    );
  }

  // Dominujący żywioł
  const liczniki = new Map<Zywiol, number>();
  for (const d of dobycia) {
    liczniki.set(d.karta.element, (liczniki.get(d.karta.element) ?? 0) + 1);
  }
  const posortowane = [...liczniki.entries()].sort((a, b) => b[1] - a[1]);
  const [dominujacy, ileDom] = posortowane[0];
  if (ileDom >= Math.max(2, Math.ceil(dobycia.length / 2))) {
    const z = ZYWIOLY[dominujacy];
    zdania.push(
      `The element of ${z.name} dominates this reading, which places its center of gravity in ${z.domain}. Whatever question you asked, the deck is answering from that territory.`,
    );
  } else if (posortowane.length >= 3 && dobycia.length >= 3) {
    zdania.push(
      "The elements here are scattered, with no single suit or force in charge. Readings like this often describe a life asking for integration: several domains each want a piece of your attention, and the work is weaving rather than choosing.",
    );
  }

  // Napięcia żywiołów (klasyczne pary przeciwne)
  const ma = (z: Zywiol) => (liczniki.get(z) ?? 0) > 0;
  if (ma("fire") && ma("water")) {
    zdania.push(
      "Fire and Water share this spread: desire and feeling, will and sensitivity. They extinguish each other when opposed and make steam, real driving power, when one agrees to serve the other. Notice which of the two you have been letting lead.",
    );
  }
  if (ma("air") && ma("earth")) {
    zdania.push(
      "Air and Earth both appear: ideas and matter, the plan and the soil. The reading suggests keeping thought and practice in one harness, letting each correct the other.",
    );
  }

  // Odwrócenia
  if (reversy.length === 0 && dobycia.length >= 3) {
    zdania.push(
      "All cards fell upright: the energies in this reading are flowing in the open, available to be worked with directly.",
    );
  } else if (reversy.length >= Math.ceil(dobycia.length / 2)) {
    zdania.push(
      `${reversy.length} of ${dobycia.length} cards are reversed. Much of this reading's energy is turned inward, blocked or overdue; look less at events and more at what in you is resisting or ripening.`,
    );
  }

  // Oś pozycji: pierwsza i ostatnia
  if (dobycia.length >= 3) {
    const pierwsza = dobycia[0];
    const ostatnia = dobycia[dobycia.length - 1];
    zdania.push(
      `The reading opens with ${pierwsza.karta.name} in the position of ${spread.positions[0].name} and closes with ${ostatnia.karta.name} as ${
        spread.positions[spread.positions.length - 1].name
      }. Hold those two cards side by side: the distance between them is the journey this spread is describing.`,
    );
  }

  return zdania;
}

function syntezaPl(dobycia: Dobycie[], spread: Spread): string[] {
  if (dobycia.length < 2) return [];

  const zdania: string[] = [];
  const majors = dobycia.filter((d) => d.karta.arcana === "major");
  const reversy = dobycia.filter((d) => d.reversed);

  // Waga Wielkich Arkanów
  if (majors.length === dobycia.length) {
    zdania.push(
      "Każda karta w tym czytaniu należy do Wielkich Arkanów. Talia mówi swoim najgłośniejszym głosem: to nie o okolicznościach, lecz o rozdziale życia, który właśnie się przestawia. Spodziewaj się, że tutejsze tematy będą wracać, póki nie wyjdziesz im naprzeciw.",
    );
  } else if (majors.length >= 2) {
    zdania.push(
      `Przy ${majors.length} kartach Wielkich Arkanów (${majors
        .map((m) => m.karta.name)
        .join(" i ")}) to czytanie wskazuje poza codzienne wydarzenia, ku czemuś strukturalnemu. Małe karty opisują sytuację; wielkie opisują, o czym ta sytuacja naprawdę jest.`,
    );
  } else if (majors.length === 1) {
    zdania.push(
      `${majors[0].karta.name} to jedyna Wielka Arkana w tym rozkładzie, co czyni ją zawiasem czytania. Pozostałe karty czytaj jako okoliczności obracające się wokół niej.`,
    );
  } else {
    zdania.push(
      "W tym rozkładzie nie ma Wielkich Arkanów. Talia opisuje pogodę, nie klimat: praktyczne okoliczności w ruchu, które zwykle dobrze reagują na proste, konkretne działanie.",
    );
  }

  // Dominujący żywioł
  const liczniki = new Map<Zywiol, number>();
  for (const d of dobycia) {
    liczniki.set(d.karta.element, (liczniki.get(d.karta.element) ?? 0) + 1);
  }
  const posortowane = [...liczniki.entries()].sort((a, b) => b[1] - a[1]);
  const [dominujacy, ileDom] = posortowane[0];
  if (ileDom >= Math.max(2, Math.ceil(dobycia.length / 2))) {
    const z = ZYWIOLY_SYNTEZA_PL[dominujacy];
    zdania.push(
      `W tym czytaniu dominuje żywioł ${z.name}, co osadza jego środek ciężkości w obszarze ${z.domain}. O cokolwiek pytasz, talia odpowiada z tamtego terytorium.`,
    );
  } else if (posortowane.length >= 3 && dobycia.length >= 3) {
    zdania.push(
      "Żywioły są tu rozproszone, bez jednego koloru czy jednej siły u steru. Takie czytania często opisują życie proszące o scalenie: kilka dziedzin chce po kawałku twojej uwagi, a praca polega na tkaniu, nie na wybieraniu.",
    );
  }

  // Napięcia żywiołów (klasyczne pary przeciwne)
  const ma = (z: Zywiol) => (liczniki.get(z) ?? 0) > 0;
  if (ma("fire") && ma("water")) {
    zdania.push(
      "Ogień i Woda dzielą ten rozkład: pragnienie i uczucie, wola i wrażliwość. Przeciwstawione, gaszą się nawzajem; gdy jedno zgodzi się służyć drugiemu, robią parę, prawdziwą siłę napędową. Zauważ, któremu z tych dwojga dotąd oddajesz prowadzenie.",
    );
  }
  if (ma("air") && ma("earth")) {
    zdania.push(
      "Pojawiają się i Powietrze, i Ziemia: idee i materia, plan i gleba. Czytanie podpowiada, by trzymać myśl i praktykę w jednym zaprzęgu i pozwolić, by każda poprawiała drugą.",
    );
  }

  // Odwrócenia
  if (reversy.length === 0 && dobycia.length >= 3) {
    zdania.push(
      "Wszystkie karty padły prosto: energie tego czytania płyną jawnie i można z nimi pracować wprost.",
    );
  } else if (reversy.length >= Math.ceil(dobycia.length / 2)) {
    zdania.push(
      `${reversy.length} z ${dobycia.length} kart jest odwróconych. Duża część energii tego czytania zwraca się do wewnątrz, jest zablokowana albo zaległa; patrz mniej na wydarzenia, a bardziej na to, co w tobie stawia opór albo dojrzewa.`,
    );
  }

  // Oś pozycji: pierwsza i ostatnia
  if (dobycia.length >= 3) {
    const pierwsza = dobycia[0];
    const ostatnia = dobycia[dobycia.length - 1];
    zdania.push(
      `Czytanie otwiera ${pierwsza.karta.name} na pozycji ${spread.positions[0].name}, a zamyka ${ostatnia.karta.name} jako ${
        spread.positions[spread.positions.length - 1].name
      }. Postaw te dwie karty obok siebie: odległość między nimi to podróż, którą opisuje ten rozkład.`,
    );
  }

  return zdania;
}
