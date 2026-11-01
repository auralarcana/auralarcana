// Klient Supabase (przeglądarka). Konto, Arcana Journal i czat Wyroczni.
// Klucz publishable jest z natury publiczny (trafia do każdej przeglądarki);
// bezpieczeństwo danych zapewnia RLS w bazie, nie ukrywanie klucza.
// Zmienne NEXT_PUBLIC_* pozwalają podpiąć inny projekt (np. lokalny) bez zmian w kodzie.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://wlhxuzzxxqqncisfdcax.supabase.co";

export const SUPABASE_KLUCZ_PUBLICZNY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_ujXEVAeD0RbGgWPKP0WJZA_ElfJlhLV";

/** Adres Edge Function czatu Wyroczni. */
export const URL_CZATU_WYROCZNI = `${SUPABASE_URL}/functions/v1/reader-chat`;

let klient: SupabaseClient | null = null;

/** Jedna instancja na przeglądarkę (sesja trzymana w localStorage). */
export function supabase(): SupabaseClient {
  if (!klient) {
    klient = createClient(SUPABASE_URL, SUPABASE_KLUCZ_PUBLICZNY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    });
  }
  return klient;
}

/** Status dostępu zwracany przez funkcję SQL reader_status(). */
export interface StatusWyroczni {
  subscriber: boolean;
  used: number;
  limit: number;
  remaining: number;
  resets_at?: string;
}

export async function pobierzStatusWyroczni(): Promise<StatusWyroczni | null> {
  const { data, error } = await supabase().rpc("reader_status");
  if (error || !data) return null;
  return data as StatusWyroczni;
}
