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
├── src/app/             strony EN: / , /tarot/ , /cards/ (+78 podstron), /music/ , /guide/ (+artykuły), /about/ , /privacy/
├── src/app/pl/          pełna wersja polska: /pl/ , /pl/tarot/ , /pl/karty/ (+78), /pl/muzyka/ , /pl/przewodnik/ (+artykuły), /pl/o-projekcie/ , /pl/prywatnosc/
├── src/components/      Naglowek (z przełącznikiem EN/PL), Stopka, DaneStrukturalne (JSON-LD), KartaGrafika (SVG kart),
│                        TarotCzytanie (wyrocznia, prop jezyk="pl"), OdtwarzaczYT (fasada YouTube), UstawJezyk
├── src/data/            CAŁA treść EN: karty.ts (Wielkie Arkana), karty-male.ts (Małe Arkana),
│                        muzyka.ts (filmy z YouTube), artykuly.ts, spready.ts, strona.ts (stałe, FAQ)
├── src/data/pl/         CAŁA treść PL (lustrzane pliki) + mapa.ts (odpowiedniki slugów EN<->PL do hreflang)
└── src/lib/tarot.ts     tasowanie (crypto), dobieranie, synteza odczytu (EN i PL)
```

Zasada: treść tylko w `src/data/*.ts`, nigdy w komponentach. FAQ w `strona.ts` musi być zgodne z `public/ai/faq.json` (zmieniasz jedno, zmieniasz drugie).

## Jak dodać nowy film z YouTube

1. Opublikuj film na kanale.
2. W `src/data/muzyka.ts` dodaj wpis do `UTWORY`: `youtubeId` z adresu `watch?v=...`, tytuł, opis, kategoria, czas trwania.
3. Dodaj polski odpowiednik (ten sam `sku` i `youtubeId`, polski opis) w `src/data/pl/muzyka.ts`.
4. Commit i push: strona przebuduje się sama.

## Jak dodać artykuł do przewodnika

Dodaj wpis do `ARTYKULY` w `src/data/artykuly.ts` (slug, tytuł, opis, data, bloki treści) oraz polską wersję w `src/data/pl/artykuly.ts` (pole `slugEn` musi wskazywać slug angielski). Strona artykułu, hreflang i sitemap powstają automatycznie.

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

- **Cloudflare Web Analytics** (bez cookies, bez banera zgody): AKTYWNE, beacon w `src/app/layout.tsx`. Panel: Cloudflare → Analytics → Web analytics → auralarcana.com.
- **Google Search Console**: property `https://auralarcana.com/` weryfikowane plikiem `public/google3324b7616df0327b.html` (NIE USUWAĆ), sitemap zgłoszony.
- Google Analytics świadomie NIE jest używane: wymagałoby banera cookies w UE.

## Do uzupełnienia przez właścicielkę

- [ ] Sekrety FTP w GitHubie (wyżej)
- [ ] Domena auralarcana.com podpięta do Hostingera (jeśli inna, zmień `DOMENA` w `src/data/strona.ts` i domenę w `public/.htaccess`)
- [x] Cloudflare Web Analytics
- [ ] Przegląd treści prawnych: `/privacy/` (oznaczone w kodzie)
- [x] Google Search Console: property + sitemap

## Model sprzedaży (ustalony kierunek)

Decyzja właścicielki: BEZ plików do pobrania (ludzie słuchają z telefonów, duże pliki odpadają). Zamiast tego JEDNA subskrypcja, która otwiera wszystko naraz:

- **Za darmo (silnik SEO, zostaje na zawsze):** czytania, znaczenia 78 kart, przewodnik, muzyka z YouTube na stronie.
- **Subskrypcja "Inner Circle" (Polar, jeden plan):**
  - Arcana Journal: dziennik czytań zapisywany na koncie (historia dobrań, notatki, wzorce w czasie),
  - playlisty premium streamowane na stronie (strefa klienta, bez pobierania),
  - dłuższe/ekskluzywne wersje pejzaży i wcześniejszy dostęp do nowych,
  - głębsze rozkłady dostępne tylko dla subskrybentów.
- Technicznie: Polar (płatności i bramka subskrypcji) + Supabase Auth (konto, dziennik) + streaming audio przez odtwarzacz na stronie (pliki za podpisanymi URL-ami, nie do pobrania wprost).
- Zasada: zero martwych przycisków; sekcja płatna pojawia się na stronie dopiero, gdy naprawdę działa.

## Rozwój (architektura jest na to gotowa)

- Strefa klienta: Supabase Auth po stronie przeglądarki (flaga w `src/lib/`), wszystko z tajnymi kluczami przez Edge Functions
- Kolejne talie i spready: nowe pliki w `src/data/`, silnik w `lib/tarot.ts` jest od tego niezależny
- Wersja polska: GOTOWA (pełne `/pl/` z hreflang); kolejne języki analogicznie przez `src/data/<jezyk>/`
