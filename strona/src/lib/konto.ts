"use client";

// Hook stanu konta: sesja Supabase Auth + status Wyroczni (subskrypcja, limit).
// Używany przez czat, dziennik i przycisk zapisu czytania.

import { useCallback, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { pobierzStatusWyroczni, supabase, type StatusWyroczni } from "@/lib/supabase";

export interface Konto {
  /** true dopóki nie wiemy, czy ktoś jest zalogowany (pierwsze wczytanie) */
  wczytywanie: boolean;
  sesja: Session | null;
  uzytkownik: User | null;
  status: StatusWyroczni | null;
  odswiezStatus: () => Promise<void>;
  wyloguj: () => Promise<void>;
}

export function useKonto(): Konto {
  const [wczytywanie, setWczytywanie] = useState(true);
  const [sesja, setSesja] = useState<Session | null>(null);
  const [status, setStatus] = useState<StatusWyroczni | null>(null);

  const odswiezStatus = useCallback(async () => {
    setStatus(await pobierzStatusWyroczni());
  }, []);

  useEffect(() => {
    const klient = supabase();
    let aktywny = true;

    klient.auth.getSession().then(({ data }) => {
      if (!aktywny) return;
      setSesja(data.session);
      setWczytywanie(false);
      if (data.session) odswiezStatus();
    });

    const { data: sub } = klient.auth.onAuthStateChange((_zdarzenie, nowaSesja) => {
      if (!aktywny) return;
      setSesja(nowaSesja);
      setWczytywanie(false);
      if (nowaSesja) odswiezStatus();
      else setStatus(null);
    });

    return () => {
      aktywny = false;
      sub.subscription.unsubscribe();
    };
  }, [odswiezStatus]);

  const wyloguj = useCallback(async () => {
    await supabase().auth.signOut();
  }, []);

  return { wczytywanie, sesja, uzytkownik: sesja?.user ?? null, status, odswiezStatus, wyloguj };
}
