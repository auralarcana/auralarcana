"use client";

// Przycisk "Zapisz w dzienniku" pod gotowym rozkładem. Widoczny tylko dla subskrybentek
// (Arcana Journal jest częścią Inner Circle). Zapis: rozkład, pytanie, karty, notatka.

import Link from "next/link";
import { useState } from "react";
import type { Spread } from "@/data/spready";
import type { Dobycie, JezykOdczytu } from "@/lib/tarot";
import { TEKSTY_WYROCZNI } from "@/data/wyrocznia";
import { TEKSTY_WYROCZNI_PL } from "@/data/pl/wyrocznia";
import { useKonto } from "@/lib/konto";
import { supabase } from "@/lib/supabase";

interface Props {
  jezyk: JezykOdczytu;
  spread: Spread;
  dobycia: Dobycie[];
  intencja: string;
}

export default function ZapiszDoDziennika({ jezyk, spread, dobycia, intencja }: Props) {
  const t = jezyk === "pl" ? TEKSTY_WYROCZNI_PL : TEKSTY_WYROCZNI;
  const linkDziennika = jezyk === "pl" ? "/pl/dziennik/" : "/journal/";
  const konto = useKonto();
  const [notatka, setNotatka] = useState("");
  const [stan, setStan] = useState<"gotowe" | "zapis" | "zapisano" | "blad">("gotowe");

  if (!konto.sesja || !konto.status?.subscriber) return null;

  async function zapisz() {
    if (!konto.uzytkownik) return;
    setStan("zapis");
    const { error } = await supabase()
      .from("journal_entries")
      .insert({
        user_id: konto.uzytkownik.id,
        lang: jezyk,
        spread_slug: spread.slug,
        spread_name: spread.name,
        question: intencja.trim() || null,
        cards: dobycia.map((d) => ({
          slug: d.karta.slug,
          name: d.karta.name,
          reversed: d.reversed,
          position: spread.positions[d.positionIndex]?.name ?? "",
        })),
        note: notatka.trim() || null,
      });
    setStan(error ? "blad" : "zapisano");
  }

  if (stan === "zapisano") {
    return (
      <div className="mx-auto mt-10 max-w-3xl text-center text-sm">
        <p className="text-zloto-2">{t.zapisano}</p>
        <Link href={linkDziennika} target="_blank" rel="noopener" className="text-przygaszony underline underline-offset-4 hover:text-kosc">
          {t.otworzDziennik}
        </Link>
      </div>
    );
  }

  return (
    <section className="wejscie mx-auto mt-10 max-w-3xl border border-linia bg-noc-2 p-6 sm:p-8">
      <p className="etykieta mb-3">{t.zapiszTytul}</p>
      <label className="block">
        <span className="sr-only">{t.notatkaEtykieta}</span>
        <textarea
          value={notatka}
          onChange={(e) => setNotatka(e.target.value.slice(0, 2000))}
          rows={2}
          placeholder={t.notatkaPlaceholder}
          className="w-full border border-linia bg-noc p-3 text-kosc placeholder:text-przygaszony/50 focus:border-zloto focus:outline-none"
        />
      </label>
      <div className="mt-4 flex flex-wrap items-center gap-5">
        <button
          type="button"
          onClick={zapisz}
          disabled={stan === "zapis"}
          className="border border-zloto px-6 py-3 tracking-widest text-zloto-2 transition-colors hover:bg-zloto hover:text-noc disabled:opacity-50"
        >
          {t.zapisz}
        </button>
        {stan === "blad" && (
          <p className="text-sm italic text-fiolet" role="alert">
            {t.zapisBlad}
          </p>
        )}
      </div>
    </section>
  );
}
