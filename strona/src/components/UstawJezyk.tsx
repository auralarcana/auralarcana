"use client";

import { useEffect } from "react";

// Eksport statyczny ma jeden wspólny <html lang>. Ten drobiazg ustawia
// atrybut lang dokumentu po stronie klienta dla poddrzewa /pl/.
export default function UstawJezyk({ lang }: { lang: string }) {
  useEffect(() => {
    const poprzedni = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = poprzedni;
    };
  }, [lang]);
  return null;
}
