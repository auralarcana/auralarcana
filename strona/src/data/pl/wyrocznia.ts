// Polskie teksty czatu Wyroczni, Arcana Journal i konta. Odpowiednik ../wyrocznia.ts.

import type { TekstyWyroczni } from "../wyrocznia";

export const TEKSTY_WYROCZNI_PL: TekstyWyroczni = {
  etykieta: "Zapytaj Wyrocznię",
  tytul: "Porozmawiaj z Wyrocznią Aural Arcana",
  wstep:
    "Wyrocznia zna karty na stole, Twoje pytanie i ostatnie strony Twojego dziennika. Zapytaj, co ten rozkład znaczy dla Ciebie, gdzie dwie karty się ze sobą spierają albo co zabrać ze sobą w jutro.",
  powitanie: (spread) =>
    `Rozkład ${spread} leży przed nami. Przeczytałam karty i pamiętam Twoje ostatnie strony. Zapytaj, co chcesz zrozumieć, a spojrzymy na to razem.`,
  placeholder: "Zapytaj o swoje karty...",
  wyslij: "Zapytaj",
  mysli: "Wyrocznia wsłuchuje się w karty...",
  pozostalo: (n, limit) => `Pozostało ${n} z ${limit} wiadomości w tym miesiącu`,
  odnowienie: (data) => `Odnowienie ${data}`,
  limitWyczerpany:
    "Wykorzystałaś wszystkie wiadomości na ten miesiąc. Wyrocznia odpoczywa do następnego księżyca; dziennik pozostaje otwarty.",
  bladOgolny: "Wyrocznia nie mogła teraz odpowiedzieć. Spróbuj za chwilę.",
  bladSesji: "Sesja wygasła. Zaloguj się ponownie, żeby kontynuować.",
  utworLink: "Posłuchaj w bibliotece muzyki",
  disclaimer:
    "Wyrocznia to głos AI pracujący w tradycji Rider-Waite. Jej słowa służą refleksji, nie są przepowiednią ani poradą specjalisty.",

  zwiastunTytul: "Zapytaj Wyrocznię o ten rozkład",
  zwiastunTresc:
    "Członkinie i członkowie Inner Circle mogą rozmawiać z Wyrocznią Aural Arcana o kartach, które właśnie leżą przed nimi: jak mówią razem, na co odpowiadają, czego odpowiedzieć nie chcą. Wyrocznia pamięta Twój Arcana Journal, więc każde czytanie pogłębia poprzednie.",
  zwiastunPunkty: [
    "Rozmowa o Twoim rozkładzie w tradycji Rider-Waite",
    "Kontekst z pięciu ostatnich wpisów w dzienniku",
    "100 wiadomości miesięcznie i utwór do każdej odpowiedzi",
  ],
  subskrybuj: "DOŁĄCZ DO INNER CIRCLE",
  zaloguj: "masz już konto? zaloguj się",
  juzSubskrybujesz: "Jesteś zalogowana, ale to konto nie należy jeszcze do Inner Circle.",

  zapiszTytul: "Zachowaj to czytanie w Arcana Journal",
  notatkaEtykieta: "Notatka dla siebie z przyszłości (opcjonalnie)",
  notatkaPlaceholder: "Co ten rozkład w Tobie poruszył?",
  zapisz: "ZAPISZ W DZIENNIKU",
  zapisano: "Zapisano. Wyrocznia zapamięta tę stronę.",
  zapisBlad: "Nie udało się zapisać strony. Spróbuj ponownie.",
  otworzDziennik: "otwórz swój dziennik",

  dziennikEtykieta: "Inner Circle",
  dziennikTytul: "Arcana Journal",
  dziennikWstep:
    "Twój prywatny zapis czytań: karty, które dobrałaś, pytania, które trzymałaś, notatki, które zostawiłaś. Wyrocznia czyta te strony, zanim Ci odpowie.",
  logowanieTytul: "Zaloguj się",
  logowanieTresc:
    "Bez hasła. Podaj e-mail, a wyślemy link do logowania. To samo konto otwiera Inner Circle na każdym urządzeniu.",
  emailEtykieta: "Twój e-mail",
  wyslijLink: "WYŚLIJ LINK DO LOGOWANIA",
  linkWyslany: "Sprawdź skrzynkę. Link zaloguje Cię na tym urządzeniu.",
  logowanieBlad: "Nie udało się wysłać linku. Sprawdź adres i spróbuj ponownie.",
  zalogowanoJako: "Zalogowano jako",
  wyloguj: "wyloguj",
  statusSubskrybent: "Członkostwo Inner Circle",
  statusBrak: "Jeszcze poza Inner Circle",
  innerCircleEtykieta: "Członkostwo",
  innerCircleTytul: "Inner Circle",
  innerCircleTresc:
    "Jedno członkostwo, które otwiera wszystko za zasłoną: Arcana Journal, rozmowy z Wyrocznią o Twoich własnych rozkładach i premium pejzaże dźwiękowe streamowane na stronie.",
  innerCirclePunkty: [
    "Arcana Journal: każde czytanie zapisane, z notatkami i wzorcami w czasie",
    "Wyrocznia: 100 wiadomości miesięcznie o kartach, które masz przed sobą",
    "Playlisty premium i dłuższe pejzaże dźwiękowe, streamowane na stronie",
  ],
  innerCircleWkrotce:
    "Członkostwo rusza wkrótce. Zaloguj się już teraz, a Twój dziennik będzie czekał, gdy otworzą się drzwi.",
  dziekujemyEtykieta: "Witaj w Inner Circle",
  dziekujemyTresc:
    "Dziękujemy. Członkostwo jest przypisane do e-maila podanego przy płatności: zaloguj się poniżej tym samym adresem (albo odśwież stronę, jeśli już jesteś zalogowana), a dziennik i Wyrocznia się otworzą.",
  wpisyTytul: "Twoje strony",
  brakWpisow: "Jeszcze nie ma stron. Dokończ czytanie i zapisz je w dzienniku.",
  usun: "usuń",
  usunPotwierdz: "Usunąć tę stronę z dziennika?",
  odwrocona: "odwrócona",
  pytanieEtykieta: "Pytanie",
  notatkaWpisu: "Notatka",
  doCzytania: "Zacznij nowe czytanie",
};
