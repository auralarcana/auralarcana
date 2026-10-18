import Link from "next/link";
import { DISCLAIMER, KANAL_YT, NAZWA, ROK_STARTU } from "@/data/strona";

export default function Stopka() {
  const rok = new Date().getFullYear();
  const lata = rok > ROK_STARTU ? `${ROK_STARTU}-${rok}` : `${ROK_STARTU}`;

  return (
    <footer className="mt-24 border-t border-linia">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="etykieta mb-3">{NAZWA}</p>
          <p className="text-sm text-przygaszony">
            A digital sanctuary of supernatural tarot and atmospheric music. Draw a card, put on a
            soundscape, and listen to what the symbols have to say.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="etykieta mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/tarot/" className="hover:text-zloto-2">Free Tarot Reading</Link></li>
            <li><Link href="/cards/" className="hover:text-zloto-2">All 78 Card Meanings</Link></li>
            <li><Link href="/music/" className="hover:text-zloto-2">Music Library</Link></li>
            <li><Link href="/guide/" className="hover:text-zloto-2">Tarot Guide</Link></li>
            <li><Link href="/privacy/" className="hover:text-zloto-2">Privacy</Link></li>
          </ul>
        </nav>

        <div>
          <p className="etykieta mb-3">The Music</p>
          <p className="mb-3 text-sm text-przygaszony">
            Original soundscapes for readings, ritual and focus live on our YouTube channel.
          </p>
          <a
            href={KANAL_YT}
            target="_blank"
            rel="noopener"
            className="inline-block border border-zloto px-4 py-2 text-sm tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
          >
            Aural Arcana on YouTube
          </a>
        </div>
      </div>

      <div className="border-t border-linia">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <p className="mb-2 text-xs text-przygaszony/80">{DISCLAIMER}</p>
          <p className="text-xs text-przygaszony/60">
            © {lata} {NAZWA}. All soundscapes and card interpretations are original work.
          </p>
        </div>
      </div>
    </footer>
  );
}
