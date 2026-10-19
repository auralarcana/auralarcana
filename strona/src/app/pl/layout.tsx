import type { Metadata } from "next";
import UstawJezyk from "@/components/UstawJezyk";
import { NAZWA } from "@/data/strona";
import { OPIS_KROTKI_PL } from "@/data/pl/strona";

export const metadata: Metadata = {
  title: {
    default: `${NAZWA}: darmowy tarot online i muzyka do wróżb`,
    template: `%s · ${NAZWA}`,
  },
  description: OPIS_KROTKI_PL,
  openGraph: {
    type: "website",
    siteName: NAZWA,
    locale: "pl_PL",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function LayoutPl({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UstawJezyk lang="pl" />
      {children}
    </>
  );
}
