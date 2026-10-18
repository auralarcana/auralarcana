import { DOMENA, FAQ, KANAL_YT, NAZWA, OPIS_KROTKI } from "@/data/strona";

// Stałe daty: datePublished = pierwszy commit projektu, dateModified = czas builda.
const DATA_PUBLIKACJI = "2026-10-18";
const DATA_MODYFIKACJI = new Date().toISOString().slice(0, 10);

export function OrganizacjaISerwis() {
  const dane = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${DOMENA}/#organizacja`,
        name: NAZWA,
        url: `${DOMENA}/`,
        logo: `${DOMENA}/icon-v1.svg`,
        sameAs: [KANAL_YT],
        description: OPIS_KROTKI,
      },
      {
        "@type": "WebSite",
        "@id": `${DOMENA}/#serwis`,
        url: `${DOMENA}/`,
        name: NAZWA,
        description: OPIS_KROTKI,
        publisher: { "@id": `${DOMENA}/#organizacja` },
        datePublished: DATA_PUBLIKACJI,
        dateModified: DATA_MODYFIKACJI,
        inLanguage: "en",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dane) }}
    />
  );
}

// FAQPage budowany z TEJ SAMEJ tablicy co widoczne FAQ na stronie głównej.
export function FaqJsonLd() {
  const dane = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.pytanie,
      acceptedAnswer: { "@type": "Answer", text: f.odpowiedz },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dane) }}
    />
  );
}

export function ArtykulJsonLd(props: {
  tytul: string;
  opis: string;
  data: string;
  url: string;
}) {
  const dane = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.tytul,
    description: props.opis,
    datePublished: props.data,
    dateModified: DATA_MODYFIKACJI,
    inLanguage: "en",
    url: props.url,
    author: { "@id": `${DOMENA}/#organizacja` },
    publisher: { "@id": `${DOMENA}/#organizacja` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dane) }}
    />
  );
}

export function OkruszkiJsonLd(props: { pozycje: { name: string; url: string }[] }) {
  const dane = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: props.pozycje.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      item: p.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dane) }}
    />
  );
}
