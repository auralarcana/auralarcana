import type { Metadata, Viewport } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";
import Naglowek from "@/components/Naglowek";
import Stopka from "@/components/Stopka";
import { OrganizacjaISerwis } from "@/components/DaneStrukturalne";
import { DOMENA, NAZWA, OPIS_KROTKI } from "@/data/strona";

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DOMENA),
  title: {
    default: `${NAZWA}: Free Tarot Readings and Music for Divination`,
    template: `%s · ${NAZWA}`,
  },
  description: OPIS_KROTKI,
  openGraph: {
    type: "website",
    siteName: NAZWA,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: "/icon-v1.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0a12",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${garamond.variable}`}>
      <body className="tlo-sanktuarium min-h-screen">
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-zloto focus:px-4 focus:py-2 focus:text-noc"
        >
          Skip to content
        </a>
        <OrganizacjaISerwis />
        <Naglowek />
        <main id="tresc">{children}</main>
        <Stopka />
        {/* Analityka: Cloudflare Web Analytics (bezcookiesowa).
            Po założeniu strony w panelu Cloudflare wklej token poniżej i odkomentuj.
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "TU_TOKEN"}'
        /> */}
      </body>
    </html>
  );
}
