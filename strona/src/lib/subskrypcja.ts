// Link do zakupu Inner Circle (Stripe Payment Link). Jedno miejsce, z którego korzystają
// zwiastun czatu i strona dziennika. Gdy osoba jest zalogowana, przekazujemy jej
// e-mail do checkoutu, żeby subskrypcja trafiła na właściwe konto.

import { LINK_SUBSKRYPCJI, LINK_SUBSKRYPCJI_PL, LINK_SUBSKRYPCJI_ROCZNA } from "@/data/wyrocznia";
import type { JezykOdczytu } from "@/lib/tarot";

/** true, gdy przycisk prowadzi do prawdziwej płatności, a nie do zapowiedzi na stronie. */
export function platnosciDzialaja(jezyk: JezykOdczytu): boolean {
  const link = jezyk === "pl" ? LINK_SUBSKRYPCJI_PL : LINK_SUBSKRYPCJI;
  return /^https?:\/\//.test(link);
}

export function linkDoSubskrypcji(jezyk: JezykOdczytu, email?: string | null): string {
  const link = jezyk === "pl" ? LINK_SUBSKRYPCJI_PL : LINK_SUBSKRYPCJI;
  if (!platnosciDzialaja(jezyk) || !email) return link;
  const url = new URL(link);
  url.searchParams.set("prefilled_email", email);
  return url.toString();
}

/** Link do planu rocznego (ten sam mechanizm, inna cena); pusty string = brak planu rocznego. */
export function linkDoSubskrypcjiRocznej(email?: string | null): string {
  if (!LINK_SUBSKRYPCJI_ROCZNA) return "";
  const url = new URL(LINK_SUBSKRYPCJI_ROCZNA);
  if (email) url.searchParams.set("prefilled_email", email);
  return url.toString();
}
