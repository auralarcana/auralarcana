// Talia polska: Wielkie Arkana (22). Małe Arkana (56) w pl/karty-male.ts.
// Interpretacje: własne teksty w tradycji Rider-Waite-Smith, pisane po polsku,
// nie tłumaczone słowo w słowo. slugEn łączy kartę z wersją angielską (hreflang).

import type { KartaTarota, Kolor, Zywiol } from "../karty";
import { KARTY_MALE_PL } from "./karty-male";

export const ZYWIOLY_PL: Record<Zywiol, { name: string; dopelniacz: string; domain: string }> = {
  fire: { name: "Ogień", dopelniacz: "Ognia", domain: "woli, pragnienia i działania" },
  water: { name: "Woda", dopelniacz: "Wody", domain: "emocji, intuicji i relacji" },
  air: { name: "Powietrze", dopelniacz: "Powietrza", domain: "myśli, prawdy i konfliktu" },
  earth: { name: "Ziemia", dopelniacz: "Ziemi", domain: "ciała, pracy i materii" },
};

export const KOLORY_PL: Record<
  Kolor,
  { name: string; dopelniacz: string; element: Zywiol; theme: string }
> = {
  wands: { name: "Buławy", dopelniacz: "Buław", element: "fire", theme: "wola, twórczość i ambicja" },
  cups: { name: "Kielichy", dopelniacz: "Kielichów", element: "water", theme: "uczucia, miłość i intuicja" },
  swords: { name: "Miecze", dopelniacz: "Mieczy", element: "air", theme: "umysł, prawda i konflikt" },
  pentacles: { name: "Pentakle", dopelniacz: "Pentakli", element: "earth", theme: "praca, ciało i życie materialne" },
};

export const KARTY_WIELKIE_PL: KartaTarota[] = [
  {
    slug: "glupiec",
    slugEn: "the-fool",
    name: "Głupiec",
    arcana: "major",
    number: 0,
    numeral: "0",
    element: "air",
    keywords: ["początek", "niewinność", "skok w nieznane", "wolność", "otwarta droga"],
    keywordsReversed: ["brawura", "wahanie", "naiwność", "falstarty"],
    essence: "Pierwszy krok zrobiony, zanim ścieżka w ogóle istnieje.",
    description:
      "Wędrowiec staje na krawędzi urwiska z porannym słońcem za plecami, cały dobytek niesie w małym tobołku. Pies przy nodze to instynkt: szczeka zachętę albo ostrzeżenie. Głupiec nosi numer zero: nie nicość, lecz otwarty okrąg, z którego rozwija się każda inna karta.",
    upright:
      "Coś nowego prosi się o początek i nie zaczeka, aż poczujesz się w pełni gotowa czy gotowy. Głupiec błogosławi szczery brak doświadczenia: zgoda na to, by wyjść na naiwnego, jest ceną każdego prawdziwego początku. Podróżuj lekko, pozwól drodze uczyć i daj ciekawości pierwszeństwo przed ostrożnością na jedną rozstrzygającą chwilę.",
    reversed:
      "Skok wykonywany jest bez namysłu albo wcale. W odwróceniu Głupiec ostrzega przed brawurą przebraną za spontaniczność, albo przed duszą tak wystraszoną krawędzią, że paraliż nazywa rozwagą. Zapytaj, które z tych dwojga jest twoje, zanim sezon początków się zamknie.",
    questions: [
      "Co zaczęłabym lub zaczął w tym tygodniu, gdybym nie bał się śmieszności?",
      "Gdzie moja ostrożność mnie chroni, a gdzie tylko zamyka?",
      "Co niosę ze sobą, czego ta podróż wcale nie wymaga?",
    ],
    musicSku: "cosmic-soundscapes",
  },
  {
    slug: "mag",
    slugEn: "the-magician",
    name: "Mag",
    arcana: "major",
    number: 1,
    numeral: "I",
    element: "air",
    keywords: ["wola", "manifestacja", "umiejętność", "skupienie", "jak w górze, tak na dole"],
    keywordsReversed: ["manipulacja", "rozproszona energia", "uśpiony talent"],
    essence: "Wszystkie cztery żywioły na stole i dłoń uniesiona ku niebu.",
    description:
      "Jedna ręka wzniesiona ku niebu, druga wskazuje ziemię: Mag stoi jako żywy kanał między ideą a materią. Na stole leżą buława, kielich, miecz i pentakl, wszystkie narzędzia, jakie zna talia. Nad głową unosi się lemniskata, leżąca ósemka nieskończonego obiegu.",
    upright:
      "Masz już każde narzędzie, którego ta praca wymaga; chwila prosi tylko o skupienie. Mag pojawia się tam, gdzie zamiar może stać się rezultatem, pod warunkiem że wola pozostanie zebrana w jednym punkcie. Mów jasno, działaj rozmyślnie i patrz, jak okoliczności układają się wokół twojej pewności.",
    reversed:
      "Moc przecieka albo bywa nadużywana. Odwrócony Mag oznacza talent rozproszony na zbyt wiele projektów, albo giętki język naginający prawdę do własnej wygody. Narzędzia wciąż leżą na stole. Pytanie brzmi, czy służą dziełu, czy przedstawieniu.",
    questions: [
      "Który jeden zamiar zasługuje teraz na całe moje skupienie?",
      "Jakie narzędzie lub umiejętność udaję, że nie istnieje?",
      "Gdzie przekonuję, a gdzie już manipuluję?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "arcykaplanka",
    slugEn: "the-high-priestess",
    name: "Arcykapłanka",
    arcana: "major",
    number: 2,
    numeral: "II",
    element: "water",
    keywords: ["intuicja", "tajemnica", "podświadomość", "cisza", "wiedza ukryta"],
    keywordsReversed: ["zignorowany instynkt", "sekrety", "szum powierzchni"],
    essence: "Zasłona między kolumnami i to, co czeka za nią.",
    description:
      "Siedzi między czarną i białą kolumną świątyni, za nią cienka zasłona w granaty, u stóp sierp księżyca. Zwój na jej kolanach jest na wpół ukryty: wiedza, której nie da się opowiedzieć, tylko przypomnieć. Arcykapłanka strzeże w talii wszystkiego, o czym umysł dnia zapomina.",
    upright:
      "Odpowiedź już w tobie jest, pod warstwą szumu. Ta karta radzi ciszę zamiast strategii: obserwuj sny, ufaj cichemu głosowi, który odzywa się, zanim nadejdą argumenty, i pozwól temu, co ukryte, odsłonić się o własnej godzinie. Nie wszystko, co prawdziwe, daje się już wyjaśnić.",
    reversed:
      "Zagłuszasz wewnętrzny głos cudzymi opiniami. Odwrócona Arcykapłanka oznacza intuicję przegłosowaną, sekrety trzymane zbyt długo, albo niezgodę na chwilę ciszy. Zasłona się nie poruszyła. To ty przestałaś, przestałeś na nią patrzeć.",
    questions: [
      "Co wiedziałam lub wiedziałem, zanim sam sobie to wyperswadowałem?",
      "Gdzie w moim życiu potrzebuję więcej ciszy niż porad?",
      "Wokół jakiej prawdy krążę, nie będąc jeszcze gotowym jej nazwać?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "cesarzowa",
    slugEn: "the-empress",
    name: "Cesarzowa",
    arcana: "major",
    number: 3,
    numeral: "III",
    element: "earth",
    keywords: ["obfitość", "twórczość", "opieka", "zmysły", "wzrost"],
    keywordsReversed: ["twórcza blokada", "nadopiekuńczość", "zaniedbanie siebie"],
    essence: "Ogród, który rośnie, bo jest kochany.",
    description:
      "W koronie z gwiazd Cesarzowa spoczywa pośród dojrzewającej pszenicy, obok wodospad, który nigdy nie wysycha. Jej tarcza nosi znak Wenus. To wielka ogrodniczka talii: wszystko, czego dotknie, jest nakarmione, a wszystko, co karmi, staje się pełniej sobą.",
    upright:
      "Twórz, pielęgnuj, karm. Cesarzowa błogosławi pracy twórczej, ciału otoczonemu troską, stołom nakrytym dla innych i projektom, którym dano cierpliwość ogrodu. Obfitość nie jest tu szczęśliwym trafem, lecz uprawą. Cokolwiek podlewasz uczciwie, urośnie.",
    reversed:
      "Ogród stoi zaniedbany, albo doglądany tak nerwowo, że nic nie może odetchnąć. Odwrócona Cesarzowa wskazuje twórczą suszę, zaniedbanie siebie, albo troskę, która skwaśniała w kontrolę. Wróć najpierw do ciała i zmysłów; reszta przyjdzie.",
    questions: [
      "Co od dawna zamierzam stworzyć i wciąż odkładam?",
      "Kto lub co pod moją opieką jest po cichu niedożywione, łącznie ze mną?",
      "Gdzie kończy się moja troska, a zaczyna kontrola?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "cesarz",
    slugEn: "the-emperor",
    name: "Cesarz",
    arcana: "major",
    number: 4,
    numeral: "IV",
    element: "fire",
    keywords: ["struktura", "autorytet", "granice", "strategia", "stabilność"],
    keywordsReversed: ["sztywność", "dominacja", "porzucona odpowiedzialność"],
    essence: "Porządek wykuty w kamieniu, żeby życie miało się o co oprzeć.",
    description:
      "Na tronie z nagiego kamienia, zdobionym głowami baranów, Cesarz trzyma w jednej ręce anch życia, w drugiej kulę świata. Za nim wznoszą się góry bez jednego drzewa. On sam jest strukturą: murami, które czynią możliwym sanktuarium, i więzienie tak samo.",
    upright:
      "Zbuduj ramę. Cesarz wzywa do granic wypowiedzianych wprost, planów z datami i cichego autorytetu kogoś, kto bierze odpowiedzialność zamiast zasług. Dyscyplina nie jest tu wrogiem wolności, lecz jej fundamentem.",
    reversed:
      "Rama stała się klatką, albo ramy nie ma wcale. Odwrócony Cesarz oznacza tyranię dużą lub małą, reguły egzekwowane po utracie sensu, albo życie czekające, aż ktoś inny przejmie ster. Władza nieobjęta to władza oddana.",
    questions: [
      "Gdzie moje życie potrzebuje struktury mocniejszej niż nastrój?",
      "Którą granicę wypowiedziałam lub wypowiedziałem, a której tylko po cichu żałuję?",
      "Prowadzę tę sytuację czy tylko ją kontroluję?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "hierofant",
    slugEn: "the-hierophant",
    name: "Hierofant",
    arcana: "major",
    number: 5,
    numeral: "V",
    element: "earth",
    keywords: ["tradycja", "nauczanie", "wiara", "instytucje", "wtajemniczenie"],
    keywordsReversed: ["dogmat", "bunt", "pusty rytuał"],
    essence: "Klucze do mądrości starszej niż jedno życie.",
    description:
      "Między dwiema kolumnami Hierofant unosi dłoń w geście błogosławieństwa, a dwóch adeptów klęczy u jego stóp. Pod nimi leżą skrzyżowane klucze: odziedziczone metody otwierające odziedziczone tajemnice. To każdy nauczyciel, linia przekazu i tradycja, dzięki którym wiedza przeżywa swojego pierwszego znawcę.",
    upright:
      "Szukaj nauczyciela, praktyki, sprawdzonej drogi. Hierofant sprzyja nauce od tych, którzy szli przed tobą, dołączaniu zamiast improwizacji i szacunkowi dla form, które niosły znaczenie przez stulecia. Wolność będzie znaczyć więcej, gdy poznasz reguły, od których cię uwalnia.",
    reversed:
      "Rytuał przeżył swojego ducha. Odwrócony Hierofant oznacza dogmat łykany w całości, instytucje słuchane z przyzwyczajenia, albo konieczny bunt przeciw nauce, która już nie uczy. Zachowaj mądrość; przepytaj mundur.",
    questions: [
      "Czyja nauka ukształtowała mnie, zanim zdążyłem ją zbadać?",
      "Która tradycja wciąż mnie karmi, a za którą idę ze strachu?",
      "Czego nauczyłbym się szybciej z przewodnikiem niż w pojedynkę?",
    ],
    musicSku: "grand-canyon",
  },
  {
    slug: "kochankowie",
    slugEn: "the-lovers",
    name: "Kochankowie",
    arcana: "major",
    number: 6,
    numeral: "VI",
    element: "air",
    keywords: ["miłość", "związek", "wybór", "zgodność", "pragnienie"],
    keywordsReversed: ["rozdźwięk", "unikanie wyboru", "rozminięte wartości"],
    essence: "Dwie drogi, jedno serce i anioł przyglądający się wyborowi.",
    description:
      "Pod płonącym aniołem dwie postaci stoją w ogrodzie, a między nimi wyrasta góra. Za jedną drzewo ognia, za drugą drzewo poznania ze zwiniętym wężem. Kochankowie tylko częściowo mówią o miłości. W samym rdzeniu to karta wyboru i tego, z czym się łączymy.",
    upright:
      "Przed tobą związek albo decyzja, i prosi o całego ciebie. Kochankowie błogosławią relacjom zbudowanym na szczerości i wyborom podjętym z wartości, nie z wygody. Czemu mówisz teraz tak, tym się stajesz. Wybieraj, jakby to miało znaczenie, bo ma.",
    reversed:
      "Coś się rozjechało: relacja jadąca na unikaniu, albo wybór odkładany tak długo, że podejmuje się sam. Odwróceni Kochankowie pytają, czy twoje zobowiązania wciąż zgadzają się z twoimi wartościami, i jaką szczerą rozmowę odkładasz.",
    questions: [
      "Do czego jestem proszona, proszony o pełne zobowiązanie?",
      "Gdzie moje wybory i wartości po cichu się kłócą?",
      "Jaka rozmowa odmieniłaby tę relację, gdybym się odważył?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "rydwan",
    slugEn: "the-chariot",
    name: "Rydwan",
    arcana: "major",
    number: 7,
    numeral: "VII",
    element: "water",
    keywords: ["zwycięstwo", "siła woli", "rozpęd", "panowanie", "determinacja"],
    keywordsReversed: ["utrata kierunku", "wymuszanie wyniku", "zgaszony napęd"],
    essence: "Dwa sfinksy ciągnące w przeciwne strony i wola, która mimo to jedzie naprzód.",
    description:
      "Postać w zbroi prowadzi rydwan zaprzężony w dwa sfinksy, czarnego i białego, które wyglądają, jakby chciały ruszyć w przeciwne strony. Lejców nie ma. Rydwanem kieruje sama wola: sprzeczność nie rozwiązana, lecz opanowana i zamieniona w ruch naprzód.",
    upright:
      "Ruszaj. Rydwan zapowiada zwycięstwo tym, którzy zbiorą swoje sprzeczne odruchy za jednym celem i nie dadzą się rozproszyć. Zrób z wątpliwości pasażerów, nie kierowców. Rozpęd, który teraz budujesz, poniesie dalej, niż stąd widać.",
    reversed:
      "Rydwan utknął, kręci się w miejscu, albo celuje nim ktoś inny. W odwróceniu ta karta oznacza napęd bez kierunku, albo uchwyt tak mocny, że koła nie mogą się obrócić. Rozluźnij dłonie, wybierz cel od nowa i zobowiąż się ponownie.",
    questions: [
      "Gdzie moja siła woli rozprasza się na zbyt wiele kierunków?",
      "Która moja sprzeczność potrzebuje opanowania, nie rozwiązania?",
      "Jak wyglądałby ten miesiąc, gdybym zebrał cały rozpęd za jednym celem?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "sila",
    slugEn: "strength",
    name: "Siła",
    arcana: "major",
    number: 8,
    numeral: "VIII",
    element: "fire",
    keywords: ["odwaga", "łagodność", "cierpliwość", "moc wewnętrzna", "oswajanie"],
    keywordsReversed: ["zwątpienie w siebie", "odruchowa reakcja", "działanie na siłę"],
    essence: "Lwia paszcza zamknięta łagodną dłonią.",
    description:
      "Postać w bieli spokojnie zamyka pysk lwa, a nad jej głową unosi się lemniskata nieskończoności. Bez zbroi, bez broni, bez szamotaniny. Siła w tarocie nigdy nie jest przemocą: to cierpliwe, czułe panowanie nad własną dziką naturą.",
    upright:
      "Jesteś silniejsza, silniejszy od tej sytuacji właśnie dlatego, że nie musisz ryczeć. Siła radzi odwagę wyrażoną łagodnością, wytrwałość zamiast gwałtowności i współczucie dla zwierzęcych lęków w tobie. Oswajaj, nie zamykaj w klatce.",
    reversed:
      "Lew wygrywa, albo pomyliłaś, pomyliłeś surowość z siłą. W odwróceniu ta karta oznacza wybuchowe reakcje, osuwającą się pewność siebie, albo wolę używaną jak obuch przeciw samemu sobie. Wyjdź wewnętrznemu zwierzęciu naprzeciw z cierpliwością; ono walczy tylko z tym, co walczy z nim.",
    questions: [
      "Który z moich instynktów potrzebuje oswojenia życzliwością, nie karą?",
      "Gdzie ryczę, bo boję się być cicho?",
      "Jak wyglądałaby tu odwaga cierpliwa zamiast odwagi siłowej?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "pustelnik",
    slugEn: "the-hermit",
    name: "Pustelnik",
    arcana: "major",
    number: 9,
    numeral: "IX",
    element: "earth",
    keywords: ["samotność", "poszukiwanie w głębi", "mądrość", "wycofanie", "przewodnictwo"],
    keywordsReversed: ["izolacja", "odrzucanie rady", "odwrót bez końca"],
    essence: "Jedna lampa uniesiona na szczycie, oświetlająca pojedynczy krok.",
    description:
      "Stary wędrowiec stoi na śnieżnym szczycie, unosząc latarnię, w której płonie sześcioramienna gwiazda. Światło nie odsłania całej drogi, tylko następny krok, a tyle właśnie należy się każdemu szukającemu. Pustelnik wycofuje się ze świata nie po to, by uciec, lecz by wreszcie go usłyszeć.",
    upright:
      "Cofnij się o krok. Pustelnik wzywa do rozmyślnej samotności: przerwy od rad, szumu i występów, by zasięgnąć zdania jedynego doradcy, który zna całą historię. Odpowiedź, której szukasz, nie leży na górze. Jest tym, czym się stajesz, wspinając się samotnie.",
    reversed:
      "Odwrót stwardniał w ukrywanie się. Odwrócony Pustelnik oznacza izolację po terminie ważności, mądrość gromadzoną zamiast dzieloną, albo samotność pomyloną z głębią. Lampa od początku miała wrócić na dół.",
    questions: [
      "Jakie pytanie da się rozstrzygnąć tylko w samotności, i czy dałem mu choć trochę ciszy?",
      "Czy moje wycofanie jest poszukiwaniem, czy ucieczką?",
      "Czego nauczyłam, nauczyłem się w ciemności, co jest teraz potrzebne komuś innemu?",
    ],
    musicSku: "tarot-the-hermit-1",
  },
  {
    slug: "kolo-fortuny",
    slugEn: "wheel-of-fortune",
    name: "Koło Fortuny",
    arcana: "major",
    number: 10,
    numeral: "X",
    element: "fire",
    keywords: ["cykle", "punkt zwrotny", "los", "szczęście", "perspektywa"],
    keywordsReversed: ["opór wobec zmiany", "trudny obrót", "zapętlenie"],
    essence: "Koło obraca się niezależnie od twojej gotowości; środek nie rusza się nigdy.",
    description:
      "Wielkie koło wisi na niebie, zapisane znakami alchemii, a po jego obwodzie wznoszą się i spadają dziwne stworzenia. W narożach cztery skrzydlate istoty czytają w spokoju, niewzruszone. Koło Fortuny to prognoza pogody w tarocie: pory roku się zmieniają, fortuny wirują, a nieruchomy pozostaje tylko patrzący środek.",
    upright:
      "Koło obraca się na twoją korzyść. Rozdział się domyka, drzwi się uchylają, przypadek wnosi to, czego wysiłek nie zdołał. Jedź z obrotem, zamiast czepiać się obręczy, i pamiętaj obie połowy lekcji: to wzniesienie, jak każdy wcześniejszy upadek, jest porą roku, nie wyrokiem.",
    reversed:
      "Trudny obrót, albo ta sama pętla raz jeszcze. Odwrócone Koło oznacza przeszkody poza twoją kontrolą, albo cykle, do których wsiadasz dobrowolnie. Koła nie zatrzymasz. Możesz zmienić, gdzie na nim stoisz.",
    questions: [
      "Która pora mojego życia wyraźnie się kończy, czy się na to godzę, czy nie?",
      "Jaki cykl powtarzam i jaki jest mój udział w tym powtórzeniu?",
      "Gdyby los jutro się odwrócił, co chciałbym mieć już uporządkowane?",
    ],
    musicSku: "alien-ambient",
  },
  {
    slug: "sprawiedliwosc",
    slugEn: "justice",
    name: "Sprawiedliwość",
    arcana: "major",
    number: 11,
    numeral: "XI",
    element: "air",
    keywords: ["prawda", "uczciwość", "konsekwencja", "odpowiedzialność", "jasność"],
    keywordsReversed: ["stronniczość", "unikana odpowiedzialność", "brak równowagi"],
    essence: "Miecz i waga, i żadnego palca na szali.",
    description:
      "Sprawiedliwość siedzi w koronie między dwiema kolumnami, z uniesionym mieczem w jednej ręce i wyważoną wagą w drugiej. W przeciwieństwie do swoich zawiązanych kuzynek z sądów patrzy ci prosto w oczy. W tarocie sprawiedliwość nie jest karą, lecz dokładnością: rzeczy zważone takimi, jakie są.",
    upright:
      "Prawda jest właśnie ważona, a szczerość to twój najlepszy adwokat. Sprawiedliwość zapowiada konsekwencje proporcjonalne do przyczyn, decyzje, które trzeba podjąć na faktach, nie na uczuciach, i cichą ulgę wzięcia odpowiedzialności za własną stronę rachunku.",
    reversed:
      "Szala jest przechylona, przez innych albo przez ciebie. Odwrócona Sprawiedliwość oznacza znoszoną niesprawiedliwość, omijaną odpowiedzialność, albo samoocenę tak surową, że przestała być dokładna. Prostuj zapis tam, gdzie możesz, zaczynając od własnego.",
    questions: [
      "Gdzie czekam na sprawiedliwość, zamiast o nią działać?",
      "Jaką konsekwencję właśnie przeżywam, którą pomogły zważyć moje własne wybory?",
      "Czego w tym konflikcie wymagałaby ode mnie doskonała dokładność, nie wygrana?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "wisielec",
    slugEn: "the-hanged-man",
    name: "Wisielec",
    arcana: "major",
    number: 12,
    numeral: "XII",
    element: "water",
    keywords: ["poddanie", "nowa perspektywa", "pauza", "ofiara", "zawieszenie"],
    keywordsReversed: ["zwlekanie", "jałowe męczeństwo", "opór wobec pauzy"],
    essence: "Do góry nogami z własnej woli, z aureolą tam, gdzie była szamotanina.",
    description:
      "Postać wisi za jedną kostkę na żywym drzewie, druga noga zgięta w cichym tanecznym kroku, dłonie rozluźnione za plecami. Twarz pogodna, otoczona światłem. Wisielec to najbardziej radykalny nauczyciel talii: wygrywa, zatrzymując się, widzi, odwracając obraz, i zyskuje, puszczając.",
    upright:
      "Przestań się szarpać, a widok się zmieni. Wisielec prosi o dobrowolne zawieszenie: pauzę, ofiarę, rozmyślne oddanie kontroli w zamian za perspektywę, której nic innego nie kupi. To, co z zewnątrz wygląda jak zwłoka, od środka jest dojrzewaniem.",
    reversed:
      "Pauza stała się prokrastynacją, albo ofiara niczemu nie służy. Odwrócony Wisielec oznacza męczeństwo bez znaczenia i zwłokę bez dojrzewania. Jeśli wiszenie nie zmienia już widoku, czas zejść.",
    questions: [
      "Nad czym mam rozluźnić uchwyt?",
      "Który problem mógłby się rozpuścić, gdybym spojrzał na niego dokładnie do góry nogami?",
      "Czy ta pauza coś dojrzewa, czy tylko coś odkłada?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "smierc",
    slugEn: "death",
    name: "Śmierć",
    arcana: "major",
    number: 13,
    numeral: "XIII",
    element: "water",
    keywords: ["zakończenia", "przemiana", "uwolnienie", "przejście", "odnowa"],
    keywordsReversed: ["kurczowe trzymanie", "zatrzymana przemiana", "lęk przed końcem"],
    essence: "Koniec, z którego po cichu zrobiony był każdy początek.",
    description:
      "Szkielet w czarnej zbroi jedzie na białym koniu pod sztandarem z białą różą. Królowie i dzieci padają przed nim jednako, a na horyzoncie słońce wschodzi, albo zachodzi, między dwiema wieżami. W tarocie Śmierć prawie nigdy nie oznacza śmierci dosłownej. Oznacza zakończenie, które umożliwia następne życie.",
    upright:
      "Coś się skończyło i uhonorowanie tego jest najłaskawszym dostępnym gestem. Śmierć zapowiada przemianę przez odjęcie: rolę, relację, obraz siebie dochodzący do naturalnego kresu. Opłacz to, co się kończy, a potem zauważ, o ile lżejsza zrobiła się droga.",
    reversed:
      "Zakończenie jest odpychane, a kosztuje to więcej, niż kosztowałaby strata. Odwrócona Śmierć oznacza przemianę wstrzymaną kurczowym trzymaniem: martwe układy podtrzymywane przy życiu ze strachu. Uwolnienie jest spóźnione i jakaś część ciebie o tym wie.",
    questions: [
      "Co w moim życiu już się skończyło, poza moimi przyzwyczajeniami?",
      "Co mogłoby się zacząć, gdybym przestał reanimować to, co minione?",
      "Co jestem winna, winien kończącemu się rozdziałowi: wdzięczność, żal czy po prostu pożegnanie?",
    ],
    musicSku: "solastalgia-vol1",
  },
  {
    slug: "umiarkowanie",
    slugEn: "temperance",
    name: "Umiarkowanie",
    arcana: "major",
    number: 14,
    numeral: "XIV",
    element: "fire",
    keywords: ["równowaga", "alchemia", "cierpliwość", "umiar", "uzdrawianie"],
    keywordsReversed: ["nadmiar", "niecierpliwość", "żywioły w zwarciu"],
    essence: "Woda przelewana między dwoma kielichami strumieniem, który nie powinien być możliwy.",
    description:
      "Anioł z jedną stopą na lądzie, drugą w strumieniu przelewa wodę między dwoma kielichami wbrew grawitacji. Na ścieżce za nim droga wije się ku ukoronowanemu wschodowi słońca. Umiarkowanie to alchemik talii: cierpliwa sztuka mieszania przeciwieństw w coś, czym żadne nie mogłoby być osobno.",
    upright:
      "Mieszaj, nie wybieraj. Umiarkowanie radzi środkową ścieżkę przebytą z rozmysłem: umiar, zdrowienie i powolne łączenie tych składników twojego życia, które na razie się odpychają. To, co warzysz, potrzebuje czasu bardziej niż siły.",
    reversed:
      "Mikstura straciła proporcje. Odwrócone Umiarkowanie oznacza nadmiar jednego składnika życia, wyczerpaną cierpliwość, albo siły połączone zbyt szybko i zwarzone. Wróć do małych miar i uczciwych proporcji.",
    questions: [
      "Które dwie części mojego życia trzeba zmieszać, zamiast rozdzielać?",
      "Gdzie moja niecierpliwość psuła powolny, ale prawdziwy proces?",
      "Jak naprawdę wygląda dla mnie umiar, mierzony w godzinach i nawykach?",
    ],
    musicSku: "bene-gesserit",
  },
  {
    slug: "diabel",
    slugEn: "the-devil",
    name: "Diabeł",
    arcana: "major",
    number: 15,
    numeral: "XV",
    element: "earth",
    keywords: ["zniewolenie", "cień", "nałóg", "materializm", "złudzenie braku wyjścia"],
    keywordsReversed: ["zrywanie łańcuchów", "spojrzenie w cień", "odzyskana moc"],
    essence: "Łańcuchy są prawdziwe; zamek nie.",
    description:
      "Rogata postać przycupnęła na czarnym postumencie, do którego przykuto dwie ludzkie sylwetki. Przyjrzyj się łańcuchom: wiszą luźno, dość szeroko, by w każdej chwili zdjąć je przez głowę. Diabeł włada każdą niewolą, którą moglibyśmy opuścić i nie opuszczamy, każdym apetytem, który po cichu stał się właścicielem.",
    upright:
      "Nazwij łańcuch. Diabeł pojawia się tam, gdzie nawyk, głód, umowa albo relacja zmieniły się z przyjemności w strażnika. Jego mocą jest przekonanie, że wyjścia nie ma. Jest. Zobaczyć, że zamek jest otwarty, to cała, trudna praca tej karty.",
    reversed:
      "Łańcuch się unosi. Odwrócony Diabeł oznacza pierwsze szczere spojrzenie we własny cień, nałóg wzięty pod światło, przerośnięty duszący układ. Wolność z początku będzie dziwna; zostań w niej mimo to.",
    questions: [
      "Czego rzekomo nie mogę rzucić i co mi to twierdzenie kupuje?",
      "Który z moich cieni rządzi właśnie dlatego, że nie chcę na niego spojrzeć?",
      "Skoro łańcuch wisi luźno, co naprawdę trzyma mnie przy postumencie?",
    ],
    musicSku: "alien-ambient",
  },
  {
    slug: "wieza",
    slugEn: "the-tower",
    name: "Wieża",
    arcana: "major",
    number: 16,
    numeral: "XVI",
    element: "fire",
    keywords: ["nagła zmiana", "objawienie", "zawalenie", "wyzwolenie", "prawda jak grom"],
    keywordsReversed: ["katastrofa odwlekana", "runięcie na raty", "wstrząsy wtórne"],
    essence: "Błyskawica robi w sekundę to, co wyparcie odkładało latami.",
    description:
      "Ukoronowana wieża na poszarpanej turni dostaje prosty cios pioruna; złota korona odlatuje, a postaci spadają przez nocne powietrze. Wieża to najbardziej lękana karta tarota i jego najuczciwsza: konstrukcja od dawna była fałszywa. Błyskawica tylko to ogłosiła.",
    upright:
      "Jakaś konstrukcja w twoim życiu pęka, bo stała na nieprawdzie, i żadna konserwacja nie miała jej uratować. Łaską Wieży jest szybkość. Pozwól jej runąć do końca, ocal lekcję zamiast cegieł i następną rzecz postaw na skale.",
    reversed:
      "Zawaleniu stawia się opór, przeciąga się je albo prywatnie się go boisz. Odwrócona Wieża oznacza konieczną rozbiórkę odkładaną na później, albo długie wstrząsy wtórne po tej już przeżytej. Pytanie nie brzmi, czy fałszywa konstrukcja runie, lecz ile ciebie przygniecie.",
    questions: [
      "Która konstrukcja w moim życiu stoi tylko dlatego, że odmawiam jej przeglądu?",
      "Jaka prawda, wypowiedziana na głos, zadziałałaby tu jak piorun?",
      "Czego nauczyło mnie ostatnie zawalenie, czego wygoda nie nauczyłaby nigdy?",
    ],
    musicSku: "alien-ambient",
  },
  {
    slug: "gwiazda",
    slugEn: "the-star",
    name: "Gwiazda",
    arcana: "major",
    number: 17,
    numeral: "XVII",
    element: "air",
    keywords: ["nadzieja", "odnowa", "przewodnie światło", "pogoda ducha", "wiara po ruinie"],
    keywordsReversed: ["zniechęcenie", "przygaszona wiara", "odcięcie"],
    essence: "Po Wieży niebo się przeciera i ktoś klęka przy wodzie.",
    description:
      "Pod wielką ośmioramienną gwiazdą postać klęczy nad sadzawką, lejąc wodę na ląd i na wodę zarazem. Nic nie jest ukryte, nic opancerzone. Gwiazda następuje w talii po Wieży nie bez powodu: to ciche, gwiezdne zdrowienie, możliwe dopiero wtedy, gdy fałszywa rzecz runęła.",
    upright:
      "Nadzieja, ta prawdziwa, ta, która widziała ruiny. Gwiazda obiecuje odnowę przez otwartość: rany przewietrzone, wiarę odzyskaną, przewodnie światło, które prosi tylko, by iść za nim w tempie spaceru. Jesteś bliżej wyleczenia, niż sądzisz.",
    reversed:
      "Światło wydaje się poza zasięgiem. Odwrócona Gwiazda oznacza zniechęcenie, cynizm noszony jak zbroja, albo nadzieję odkładaną tak długo, że przestała być pytana o zdanie. Gwiazda się nie poruszyła. Spójrz w górę jeszcze raz.",
    questions: [
      "Co we mnie po cichu zdrowieje i zasługuje na uznanie?",
      "Gdzie pozwoliłam, pozwoliłem cynizmowi stać na warcie przy starej ranie?",
      "Ku jakiemu odległemu światłu zgadzam się iść w uczciwym tempie?",
    ],
    musicSku: "cosmic-soundscapes",
  },
  {
    slug: "ksiezyc",
    slugEn: "the-moon",
    name: "Księżyc",
    arcana: "major",
    number: 18,
    numeral: "XVIII",
    element: "water",
    keywords: ["złudzenie", "sny", "nieświadomość", "lęk", "droga w nieznane"],
    keywordsReversed: ["rozwiewanie zamętu", "lęk puszczony", "prawda wychodzi na jaw"],
    essence: "Droga jest prawdziwa; to, co wyje obok niej, też.",
    description:
      "Księżyc o śpiącej twarzy sączy światło nad ścieżką biegnącą między dwiema wieżami ku ciemnym wzgórzom. Pies i wilk wyją w niebo, a rak wypełza z sadzawki. Księżyc to królestwo snu, projekcji i lęku: wszystkiego, co prawdziwe, lecz niewyraźne, i wszystkiego, co wyraźne, lecz nie całkiem prawdziwe.",
    upright:
      "Idziesz przy świetle księżyca i pewność jest chwilowo niedostępna. Księżyc radzi nazywać lęki, zamiast ich słuchać, zapisywać sny i nie ufać wnioskom wyciąganym o trzeciej nad ranem. Idź powoli. Droga biegnie dalej także tam, gdzie jej nie widzisz.",
    reversed:
      "Mgła zaczyna się podnosić. Odwrócony Księżyc oznacza zamęt, który się rozwiązuje, kłamstwo wychodzące na powierzchnię, albo niepokój puszczający uchwyt wraz z powrotem dnia. Sprawdź, co postanowiłaś, postanowiłeś w ciemności, zanim będziesz dalej wedle tego działać.",
    questions: [
      "Który z moich lęków jest psem stróżującym, a który tylko wyjącym wilkiem?",
      "Co mówi moja intuicja, co mój niepokój wciąż zagłusza?",
      "Jaka decyzja powinna poczekać, aż mgła opadnie?",
    ],
    musicSku: "tarot-the-moon-1",
  },
  {
    slug: "slonce",
    slugEn: "the-sun",
    name: "Słońce",
    arcana: "major",
    number: 19,
    numeral: "XIX",
    element: "fire",
    keywords: ["radość", "witalność", "jasność", "powodzenie", "odzyskana niewinność"],
    keywordsReversed: ["przygaszona radość", "wymuszony optymizm", "sukces z opóźnieniem"],
    essence: "Światło dnia tak proste i hojne, że nie potrzebuje interpretacji.",
    description:
      "Ogromne słońce o spokojnej twarzy leje proste i faliste promienie na dziecko jadące na białym koniu wzdłuż muru słoneczników. Nic na tym obrazie nie jest ukryte ani dwuznaczne, i o to chodzi. Słońce to najczystsze tak w talii: ciepło, prawda w pełnym świetle i radość niewymagająca uzasadnień.",
    upright:
      "Tak. Słońce zapowiada witalność, powodzenie widoczne z drugiego końca pola i powrót prostej radości, którą dorosłość odłożyła do niewłaściwej szuflady. Wyjdź na widok bez przepraszania. To, co rosło w ciemności, jest gotowe na światło.",
    reversed:
      "Słońce świeci zza zasłony. W odwróceniu ta karta oznacza radość stłumioną zmęczeniem lub zwątpieniem, sukces opóźniony, lecz nie odmówiony, albo optymizm odgrywany zamiast odczuwany. Odsłaniaj zasłonę po kawałku.",
    questions: [
      "Co w moim życiu zasługuje na świętowanie na głos, teraz, nie później?",
      "Gdzie odgrywam szczęście, zamiast na nie pozwolić?",
      "Co zrobiłbym dziś, gdybym w pełni uwierzył, że idzie dobrze?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "sad",
    slugEn: "judgement",
    name: "Sąd",
    arcana: "major",
    number: 20,
    numeral: "XX",
    element: "fire",
    keywords: ["przebudzenie", "rozrachunek", "powołanie", "odrodzenie", "rozgrzeszenie"],
    keywordsReversed: ["samoosądzanie", "ignorowane powołanie", "wstrzymane odrodzenie"],
    essence: "Trąba brzmi i wszystko, co pogrzebane, wstaje, by odpowiedzieć.",
    description:
      "Anioł wypełnia niebo dźwiękiem trąby, a szare postaci wstają z otwartych grobów z uniesionymi ramionami, odpowiadając na wezwanie, które słyszą tylko one. Sąd nie jest salą rozpraw. To poranek, w którym dawne ja nie może już leżeć pogrzebane, wezwanie do większego życia, przy którym poprzednie wydaje się snem.",
    upright:
      "Jesteś wzywana, wzywany, i wiesz o tym. Sąd oznacza rozrachunek z przeszłością, który uwalnia, zamiast potępiać: szczery remanent, prawdziwe wybaczenie i powstanie ku celowi. Odpowiedz na trąbę. Grób nigdy nie miał być adresem.",
    reversed:
      "Wezwanie słychać, lecz jest odrzucane. Odwrócony Sąd oznacza powołanie omijane, wybaczenie sobie wstrzymywane, albo odrodzenie odkładane pod papierami. Trąba nie cichnie. Tylko coraz trudniej udawać, że to szum tła.",
    questions: [
      "Jakie powołanie od dawna przekierowuję na pocztę głosową?",
      "Jaki stary wyrok o sobie dojrzał do uchylenia?",
      "Gdyby dzisiejszy dzień był wezwaniem, po co wreszcie bym wstał?",
    ],
    musicSku: "epic-mix",
  },
  {
    slug: "swiat",
    slugEn: "the-world",
    name: "Świat",
    arcana: "major",
    number: 21,
    numeral: "XXI",
    element: "earth",
    keywords: ["spełnienie", "scalenie", "pełnia", "dotarcie", "cykl ukoronowany"],
    keywordsReversed: ["niedokończone wątki", "prawie gotowe", "lęk przed domknięciem"],
    essence: "Taniec w środku domkniętego kręgu.",
    description:
      "Wewnątrz wielkiego wieńca laurowego tańcząca postać trzyma w każdej dłoni różdżkę, a cztery istoty z naroży przyglądają się z daleka. Świat jest ostatnią kartą Wielkich Arkanów: podróż Głupca ukończona, każdy żywioł scalony, krąg zamknięty nie jako koniec, lecz jako ukoronowanie.",
    upright:
      "Dotarcie. Świat oznacza cykl naprawdę ukończony: dzieło skończone, lekcję przyswojoną, rozdział na tyle pełny, że można go zostawić z wdzięcznością. Postój w tym osiągnięciu, zanim rzucisz się do następnego początku. Domykanie to umiejętność, a ty właśnie zapracowałaś, zapracowałeś na jej praktykę.",
    reversed:
      "Dziewięćdziesiąt procent zrobione, i krążenie w kółko. Odwrócony Świat oznacza wątki celowo niedowiązane, domknięcie odsuwane, bo kończy to, co znajome. Dokończ: ostatni krok to ten, który uwalnia sens całej podróży.",
    questions: [
      "Co w moim życiu prosi o porządne ukończenie, a nie porzucenie?",
      "Co znaczyłoby świętować, zanim natychmiast zacznę od nowa?",
      "Którą podróż skończyłam, skończyłem, nigdy nie przyznając, że dotarłem?",
    ],
    musicSku: "alien-ambient",
  },
];

export const KARTY_PL: KartaTarota[] = [...KARTY_WIELKIE_PL, ...KARTY_MALE_PL];

export function znajdzKartePl(slug: string): KartaTarota | undefined {
  return KARTY_PL.find((k) => k.slug === slug);
}
