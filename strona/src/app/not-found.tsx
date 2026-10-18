import Link from "next/link";
import { znajdzKarte } from "@/data/karty";
import { KartaAwers } from "@/components/KartaGrafika";

export default function NieZnaleziono() {
  const ksiezyc = znajdzKarte("the-moon");

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center">
      <p className="etykieta mb-3">404</p>
      <h1 className="mb-4 text-4xl">This path leads into the mist</h1>
      <p className="mb-10 max-w-md text-przygaszony">
        The page you were seeking does not exist, or has moved beyond the veil. The Moon rules
        moments like this: not every road by night goes where the signpost claimed.
      </p>
      {ksiezyc && (
        <div className="mb-10 w-40 opacity-80">
          <KartaAwers karta={ksiezyc} className="h-auto w-full" />
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="border border-zloto px-8 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc"
        >
          RETURN HOME
        </Link>
        <Link
          href="/tarot/"
          className="border border-linia px-8 py-3 tracking-widest text-przygaszony transition-colors hover:border-zloto hover:text-zloto-2"
        >
          ASK THE CARDS INSTEAD
        </Link>
      </div>
    </div>
  );
}
