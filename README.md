# Aura Arcana (auralarcana.com)

Strona tarota nadprzyrodzonego połączona z kanałem YouTube **Aural Arcana: Sonic Mysteries**: darmowe interaktywne czytania z pełnej talii 78 kart, znaczenia wszystkich kart, przewodnik po praktyce i biblioteka autorskiej muzyki do czytań, rytuałów i skupienia.

Układ taki jak Auto-mate: statyczny Next.js, każdy push na `main` buduje stronę i wysyła ją po FTP na Hostingera.

## Uruchomienie lokalnie

```bash
cd strona
npm install
npm run dev        # http://localhost:3000
npm run build      # statyczny export do strona/out/
```

## Gdzie co jest

```
strona/
├── public/              .htaccess, robots.txt, llms.txt, .well-known/ai.txt, ai/*.json, ikony
├── src/app/             strony: / , /tarot/ , /cards/ (+78 podstron), /music/ , /guide/ (+artykuły), /about/ , /privacy/
├── src/components/      Naglowek, Stopka, DaneStrukturalne (JSON-LD), KartaGrafika (SVG kart),
│                        TarotCzytanie (wyrocznia), OdtwarzaczYT (fasada YouTube)
├── src/data/            CAŁA treść: karty.ts (Wielkie Arkana), karty-male.ts (Małe Arkana),
│                        muzyka.ts (filmy z YouTube), artykuly.ts, spready.ts, strona.ts (stałe, FAQ)
└── src/lib/tarot.ts     tasowanie (crypto), dobieranie, synteza odczytu
```

Zasada: treść tylko w `src/data/*.ts`, nigdy w komponentach. FAQ w `strona.ts` musi być zgodne z `public/ai/faq.json` (zmieniasz jedno, zmieniasz drugie).

## Jak dodać nowy film z YouTube

1. Opublikuj film na kanale.
2. W `src/data/muzyka.ts` dodaj wpis do `UTWORY`: `youtubeId` z adresu `watch?v=...`, tytuł, opis, kategoria, czas trwania.
3. Commit i push: strona przebuduje się sama.

## Jak dodać artykuł do przewodnika

Dodaj wpis do `ARTYKULY` w `src/data/artykuly.ts` (slug, tytuł, opis, data, bloki treści). Strona artykułu i sitemap powstają automatycznie.

## Wdrażanie (GitHub → Hostinger)

Workflow `.github/workflows/deploy.yml` buduje `strona/` i wysyła `strona/out/` do `/public_html/` przez lftp.

Sekrety (GitHub → Settings → Secrets and variables → Actions):
- `FTP_SERWER` np. `ftp://46.xxx.xxx.xxx` lub host z panelu Hostingera
- `FTP_LOGIN`
- `FTP_HASLO`

UWAGA: `mirror --delete` kasuje z `public_html` wszystko, czego nie ma w buildzie. Niczego nie wgrywaj ręcznie przez File Manager.

## SEO / GEO

- metadata + canonical na każdej stronie, `sitemap.xml`, `robots.txt` (boty AI dozwolone)
- JSON-LD: Organization, WebSite, FAQPage (z tej samej tablicy co widoczne FAQ), Article, BreadcrumbList
- pliki dla modeli: `/llms.txt`, `/.well-known/ai.txt`, `/ai/summary.json`, `/ai/faq.json`
- Google Search Console: dodać property `auralarcana.com` i zgłosić sitemap

## Analityka

Cloudflare Web Analytics (bez cookies): po założeniu w panelu Cloudflare wklej token w `src/app/layout.tsx` (zakomentowany blok na dole) i odkomentuj. Dzięki temu strona nie potrzebuje banera zgody.

## Do uzupełnienia przez właścicielkę

- [ ] Sekrety FTP w GitHubie (wyżej)
- [ ] Domena auralarcana.com podpięta do Hostingera (jeśli inna, zmień `DOMENA` w `src/data/strona.ts` i domenę w `public/.htaccess`)
- [ ] Token Cloudflare Web Analytics (opcjonalnie)
- [ ] Przegląd treści prawnych: `/privacy/` (oznaczone w kodzie)
- [ ] Google Search Console: property + sitemap

## Rozwój (architektura jest na to gotowa)

- Monetyzacja przez Polar: dodać `src/data/handel.ts` z produktami (np. zestawy medytacji do pobrania, czytania premium); wzór w repo auto-mate
- Strefa klienta: Supabase Auth po stronie przeglądarki (flaga w `src/lib/`), wszystko z tajnymi kluczami przez Edge Functions
- Kolejne talie i spready: nowe pliki w `src/data/`, silnik w `lib/tarot.ts` jest od tego niezależny
- Wersja polska: struktura `src/data` pozwala dodać drugi język bez przebudowy szablonów
