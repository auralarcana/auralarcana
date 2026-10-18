import type { MetadataRoute } from "next";
import { KARTY } from "@/data/karty";
import { ARTYKULY } from "@/data/artykuly";
import { DOMENA } from "@/data/strona";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const teraz = new Date();

  const glowne: MetadataRoute.Sitemap = [
    { url: `${DOMENA}/`, lastModified: teraz, changeFrequency: "weekly", priority: 1 },
    { url: `${DOMENA}/tarot/`, lastModified: teraz, changeFrequency: "monthly", priority: 0.9 },
    { url: `${DOMENA}/music/`, lastModified: teraz, changeFrequency: "weekly", priority: 0.9 },
    { url: `${DOMENA}/cards/`, lastModified: teraz, changeFrequency: "monthly", priority: 0.8 },
    { url: `${DOMENA}/guide/`, lastModified: teraz, changeFrequency: "monthly", priority: 0.7 },
    { url: `${DOMENA}/about/`, lastModified: teraz, changeFrequency: "yearly", priority: 0.4 },
    { url: `${DOMENA}/privacy/`, lastModified: teraz, changeFrequency: "yearly", priority: 0.2 },
  ];

  const karty: MetadataRoute.Sitemap = KARTY.map((k) => ({
    url: `${DOMENA}/cards/${k.slug}/`,
    lastModified: teraz,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const artykuly: MetadataRoute.Sitemap = ARTYKULY.map((a) => ({
    url: `${DOMENA}/guide/${a.slug}/`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...glowne, ...karty, ...artykuly];
}
