# Aural Arcana (auralarcana.com)

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
│                        TarotCzytanie (wyrocznia, prop jezyk="pl"), OdtwarzaczYT (fasada YouTube), UstawJezyk,
│                        CzatWyroczni (czat Claude pod rozkładem), ZapiszDoDziennika, Dziennik (konto + Arcana Journal)
├── src/data/            CAŁA treść EN: karty.ts (Wielkie Arkana), karty-male.ts (Małe Arkana),
│                        muzyka.ts (filmy z YouTube), artykuly.ts, spready.ts, strona.ts (stałe, FAQ)
├── src/data/pl/         CAŁA treść PL (lustrzane pliki) + mapa.ts (odpowiedniki slugów EN<->PL do hreflang)
├── src/lib/tarot.ts     tasowanie (crypto), dobieranie, synteza odczytu (EN i PL)
├── src/lib/supabase.ts  klient Supabase (konto, dziennik, adres Edge Function), src/lib/konto.ts: hook useKonto()
├── src/data/wyrocznia.ts (+ pl/) teksty czatu, dziennika i konta; LINK_SUBSKRYPCJI (przycisk "Dołącz")
└── scripts/eksport-biblioteki.mjs  eksport biblioteki muzyki do JSON dla Edge Function

supabase/
├── migrations/          schemat bazy: profiles (flaga subskrypcji), journal_entries, reader_calls, funkcja reader_status()
└── functions/reader-chat/  Edge Function czatu Wyroczni (Deno) + biblioteka.json (generowany, nie edytuj ręcznie)
```

Zasada: treść tylko w `src/data/*.ts`, nigdy w komponentach. FAQ w `strona.ts` musi być zgodne z `public/ai/faq.json` (zmieniasz jedno, zmieniasz drugie).

## Jak dodać nowy film z YouTube

1. Opublikuj film na kanale.
2. W `src/data/muzyka.ts` dodaj wpis do `UTWORY`: `youtubeId` z adresu `watch?v=...`, tytuł, opis, kategoria, czas trwania.
3. Dodaj polski odpowiednik (ten sam `sku` i `youtubeId`, polski opis) w `src/data/pl/muzyka.ts`.
4. `npm run eksport-biblioteki` (odświeża `supabase/functions/reader-chat/biblioteka.json`, z którego Wyrocznia proponuje utwory), potem `supabase functions deploy reader-chat`.
5. Commit i push: strona przebuduje się sama.

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
- [ ] Przegląd treści prawnych: `/privacy/` (oznaczone w kodzie); dopisać konto, dziennik i czat AI (dane idą do Supabase w UE i do API Anthropic)
- [ ] Sekret `ANTHROPIC_API_KEY` i Redirect URLs w Supabase (sekcja „Inner Circle”)
- [x] Google Search Console: property + sitemap

## Model sprzedaży (ustalony kierunek)

Stan: konto, Arcana Journal i czat Wyroczni DZIAŁAJĄ (sekcja „Inner Circle” wyżej); brak jeszcze płatności (Polar) i playlist premium.

Decyzja właścicielki: BEZ plików do pobrania (ludzie słuchają z telefonów, duże pliki odpadają). Zamiast tego JEDNA subskrypcja, która otwiera wszystko naraz:

- **Za darmo (silnik SEO, zostaje na zawsze):** czytania, znaczenia 78 kart, przewodnik, muzyka z YouTube na stronie.
- **Subskrypcja "Inner Circle" (Polar, jeden plan):**
  - Arcana Journal: dziennik czytań zapisywany na koncie (historia dobrań, notatki, wzorce w czasie),
  - playlisty premium streamowane na stronie (strefa klienta, bez pobierania),
  - dłuższe/ekskluzywne wersje pejzaży i wcześniejszy dostęp do nowych,
  - głębsze rozkłady dostępne tylko dla subskrybentów.
- Technicznie: Polar (płatności i bramka subskrypcji) + Supabase Auth (konto, dziennik) + streaming audio przez odtwarzacz na stronie (pliki za podpisanymi URL-ami, nie do pobrania wprost).
- Zasada: zero martwych przycisków; sekcja płatna pojawia się na stronie dopiero, gdy naprawdę działa.

## Inner Circle: konto, Arcana Journal i czat Wyroczni (Claude)

Pierwsza płatna funkcja. Działa na projekcie Supabase **Aural Arcana** (`emvvqzdfzkmgbkicgqfw`, region eu-north-1, osobne konto Supabase z organizacją „Aural Arcana”, plan darmowy).

### Co jest w środku

- **Konto**: Supabase Auth, logowanie linkiem e-mail (bez hasła). Strona `/journal/` i `/pl/dziennik/` (komponent `Dziennik`).
- **Arcana Journal**: tabela `journal_entries` (rozkład, pytanie, karty, notatka). Przycisk „Zapisz w dzienniku” pod gotowym rozkładem (`ZapiszDoDziennika`), widoczny tylko dla subskrybentek.
- **Czat Wyroczni**: panel pod wynikiem rozkładu (`CzatWyroczni`). Subskrybentka rozmawia z Claude (model Haiku) o kartach, które właśnie leżą na stole. Pozostali widzą zwiastun i przycisk „Dołącz do Inner Circle”.
- **Edge Function `reader-chat`** (`supabase/functions/reader-chat/index.ts`): sprawdza sesję, flagę subskrypcji i limit, dokłada do promptu rozkład, pytanie, 5 ostatnich wpisów z dziennika i bibliotekę muzyki, woła API Anthropic, loguje wywołanie. Każda odpowiedź Wyroczni kończy się linią `♪ Tytuł utworu: dlaczego`, którą front zamienia w link do biblioteki.
- **Limit**: 100 wiadomości na użytkownika na miesiąc kalendarzowy (UTC), liczone z `reader_calls` w funkcji SQL `reader_status()`. Nieudane wywołania (błąd API) nie zużywają limitu. Front pokazuje „Pozostało N ze 100”.
- **Log**: `reader_calls`: czas, `user_id`, model, `input_tokens`, `output_tokens`, `ok`, `error`. Podgląd: Supabase → Table Editor → `reader_calls`.
- **RLS**: użytkownik widzi i edytuje tylko swoje wpisy; `profiles` i `reader_calls` zapisuje wyłącznie Edge Function kluczem service_role.

### Sekrety i konfiguracja (robi właścicielka, raz)

1. **Klucz Anthropic**: Supabase → Project Settings → Edge Functions → Secrets → `ANTHROPIC_API_KEY` (z console.anthropic.com). Opcjonalnie `ANTHROPIC_MODEL` (domyślnie `claude-haiku-4-5`). Klucza nigdy nie wpisuj do repo ani do zmiennych `NEXT_PUBLIC_*`.
2. **Adresy logowania** (USTAWIONE): Supabase → Authentication → URL Configuration: Site URL `https://auralarcana.com`, Redirect URLs: `https://auralarcana.com/journal/`, `https://auralarcana.com/pl/dziennik/`, `https://auralarcana.com/**`, `http://localhost:3000/**`. Bez tego link z maila wraca na localhost.
3. **Maile**: domyślny nadawca Supabase ma limit kilku maili na godzinę. Przy większym ruchu podepnij własne SMTP (Authentication → SMTP Settings), np. Resend.
4. **Kto jest subskrybentem**: dopóki nie ma Polara, flagę ustawiasz ręcznie w SQL Editor:
   ```sql
   update public.profiles set is_subscriber = true where email = 'adres@przyklad.pl';
   -- z terminem ważności:
   update public.profiles set is_subscriber = true, subscriber_until = now() + interval '1 month' where email = '...';
   ```
   Gdy ruszy Polar, webhook ma robić dokładnie to samo (osobna Edge Function, do dodania).
5. **Przycisk „Dołącz do Inner Circle”**: stała `LINK_SUBSKRYPCJI` / `LINK_SUBSKRYPCJI_PL` w `src/data/wyrocznia.ts`. Teraz prowadzi do sekcji z zapowiedzią na stronie dziennika (zero martwych przycisków). Gdy ruszy Polar, wstaw tam adres checkoutu: przycisk zacznie prowadzić do płatności, a zapowiedź zniknie sama.

### Wdrażanie backendu

- Migracje: `supabase/migrations/*.sql`. Na projekcie są już zastosowane (SQL Editor). Kolejne: `supabase db push` albo SQL Editor.
- Edge Function: `supabase functions deploy reader-chat` (CLI zalogowane na to konto) albo panel: Edge Functions → reader-chat → Code (wklej `index.ts` i `biblioteka.json`). Ustawienie „Verify JWT with legacy secret” ma być WYŁĄCZONE: funkcja sama sprawdza sesję użytkownika. Katalog funkcji zawiera `biblioteka.json`, generowany skryptem `npm run eksport-biblioteki` w `strona/`.
- Front nie wymaga sekretów: adres projektu i klucz publishable są w `src/lib/supabase.ts` (do nadpisania przez `strona/.env.example`).

### Prompt Wyroczni

W `index.ts`, funkcja `promptSystemowy()`: dwa warianty (EN i PL), tradycja Rider-Waite-Smith, ton mistyczny i ciepły, zwięźle, bez myślników ze spacjami, bez przepowiadania jako faktu, bez porad medycznych/prawnych/finansowych. Zmiana promptu = edycja tego pliku i ponowny deploy funkcji.

## Rozwój (architektura jest na to gotowa)

- Strefa klienta: GOTOWA w zakresie konta, dziennika i czatu (Supabase Auth w przeglądarce, sekrety tylko w Edge Functions); do dodania: webhook Polar i playlisty premium
- Kolejne talie i spready: nowe pliki w `src/data/`, silnik w `lib/tarot.ts` jest od tego niezależny
- Wersja polska: GOTOWA (pełne `/pl/` z hreflang); kolejne języki analogicznie przez `src/data/<jezyk>/`
