// Małe Arkana po polsku: 56 kart w czterech kolorach.
// Kolor, żywioł i slugEn są nadpisywane w mapowaniu na końcu pliku.

import type { KartaTarota, Kolor } from "../karty";

function odpolsz(s: string): string {
  return s
    .toLowerCase()
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/[żź]/g, "z")
    .replace(/\s+/g, "-");
}

function w(
  num: number,
  numeral: string,
  nazwa: string,
  dane: Omit<
    KartaTarota,
    "slug" | "slugEn" | "name" | "arcana" | "suit" | "number" | "numeral" | "element"
  >,
): KartaTarota {
  return {
    slug: odpolsz(nazwa),
    name: nazwa,
    arcana: "minor",
    suit: "wands",
    number: num,
    numeral,
    element: "fire",
    ...dane,
  };
}

const BULAWY: KartaTarota[] = [
  w(1, "As", "As Buław", {
    keywords: ["natchnienie", "nowe przedsięwzięcie", "iskra", "potencjał"],
    keywordsReversed: ["falstart", "opóźniona iskra", "rozproszone pragnienie"],
    essence: "Żywa gałąź podana z obłoku: czysty twórczy ogień.",
    description:
      "Z obłoku wyłania się dłoń ściskająca pączkującą buławę. Nic jeszcze nie zbudowano; wszystko jest możliwe. To surowa iskra sprzed planu.",
    upright:
      "Nowa pasja, projekt albo pragnienie właśnie zajęły się ogniem. Powiedz tak, póki iskra jest gorąca, i daj jej jedno konkretne działanie w ciągu tygodnia, bo natchnienie bez czynu to tylko pogoda.",
    reversed:
      "Iskra się krztusi: projekt utyka na etapie pomysłu, albo zapał rozprasza się na zbyt wiele otwarć. Wybierz jeden płomień i go karm.",
    questions: [
      "Jaki pomysł wciąż wraca i prosi, by go zacząć?",
      "Jakie jedno działanie zamieniłoby tę iskrę w ogień?",
    ],
    musicSku: "epic-mix",
  }),
  w(2, "Dwójka", "Dwójka Buław", {
    keywords: ["planowanie", "wizja", "wybór horyzontu", "ambicja"],
    keywordsReversed: ["granie poniżej możliwości", "lęk przed wyruszeniem", "mgliste plany"],
    essence: "Świat w jednej dłoni, mur zamku pod drugą.",
    description:
      "Postać trzyma glob, stojąc na murach bezpiecznego zamku i patrząc na odległe ziemie. Za plecami wygoda, przed oczami możliwość.",
    upright:
      "Obecne mury zrobiły się za ciasne i wiesz o tym. Zrób plan dalekiego zasięgu: rozrysuj teren, zważ trasy i zdecyduj, który horyzont zasługuje na twoje lata.",
    reversed:
      "Mapa narysowana i nigdy nieużyta. W odwróceniu ta karta oznacza ambicję przyciętą do rozmiarów wygody, albo planowanie używane jako zamiennik wyruszenia.",
    questions: [
      "Czego bym spróbował, gdyby zostanie w bezpiecznym miejscu nie wchodziło w grę?",
      "Który plan poleruję, zamiast go zacząć?",
    ],
    musicSku: "epic-mix",
  }),
  w(3, "Trójka", "Trójka Buław", {
    keywords: ["ekspansja", "dalekowzroczność", "statki w drodze", "rozpęd"],
    keywordsReversed: ["opóźnienia", "wąskie pole widzenia", "handel w zastoju"],
    essence: "Wypatrywanie na morzu statków, które miało się odwagę wysłać.",
    description:
      "Kupiec stoi na urwisku, patrząc, jak statki przecinają złote morze. Przedsięwzięcie wypłynęło; teraz pracują wizja i cierpliwość.",
    upright:
      "Twoje wcześniejsze wybory zaczynają się ruszać. Sprzyja ekspansja: szersze rynki, dalsze brzegi, współpraca spoza znajomego kręgu. Patrz dalej na horyzont i bądź gotów wyjść po to, co wraca.",
    reversed:
      "Statki opóźnione albo wysłane bez mapy. Sprawdź, czy przedsięwzięcie potrzebuje więcej cierpliwości, czy korekty kursu.",
    questions: [
      "Co puściłam, puściłem w ruch, co potrzebuje teraz zaufania, a nie poprawek?",
      "Gdzie mój świat mógłby być szerszy, niż mu obecnie pozwalam?",
    ],
    musicSku: "epic-mix",
  }),
  w(4, "Czwórka", "Czwórka Buław", {
    keywords: ["świętowanie", "powrót do domu", "kamień milowy", "wspólnota"],
    keywordsReversed: ["odkładana radość", "chwiejne fundamenty", "napięte powitanie"],
    essence: "Girlanda rozpięta między czterema buławami: pierwsze żniwo radości.",
    description:
      "Cztery buławy podtrzymują baldachim z kwiatów, a przed zamkiem świętują postaci. Moment progu: coś zbudowanego jest już warte zgromadzenia wokół.",
    upright:
      "Zatrzymaj się i uczcij prawdziwy kamień milowy: dom, więź, ukończony etap pracy. Radość dzielona teraz wzmacnia wszystko, co jeszcze w budowie.",
    reversed:
      "Przyjęcie odłożone, albo fundament pod nim się chwieje. Świętuj skromniej, albo wzmocnij to, na czym wisi girlanda.",
    questions: [
      "Obok jakiego kamienia milowego przebiegłam, przebiegłem bez zaznaczenia go?",
      "Kto należy do mojego stołu przy tym świętowaniu?",
    ],
    musicSku: "epic-mix",
  }),
  w(5, "Piątka", "Piątka Buław", {
    keywords: ["tarcia", "rywalizacja", "rozproszony konflikt", "sparing"],
    keywordsReversed: ["konflikt omijany", "napięcie puszczone", "bitwy wewnętrzne"],
    essence: "Pięć buław w górze i żadne dwie nie celują w tę samą stronę.",
    description:
      "Pięć postaci ściera się buławami w czymś, co może być bitwą albo ćwiczeniem. Nikt nie jest ranny; nic nie jest rozstrzygnięte. Energia płonie we wszystkich kierunkach naraz.",
    upright:
      "Tarcia, rywalizacja, głosy walczące o posłuch. Potraktuj to jak sparing: może cię wyostrzyć, jeśli przestaniesz musieć wygrywać każdą wymianę. Ustaw buławy w jednym kierunku, a chaos stanie się siłą.",
    reversed:
      "Konflikt stłumiony albo wreszcie stygnący. Upewnij się, że ten spokój to zgoda, a nie tylko wyczerpanie.",
    questions: [
      "Który konflikt w moim życiu jest ćwiczeniem, a który naprawdę bitwą?",
      "Jaki wspólny cel mógłby ustawić te rozproszone energie w jednym kierunku?",
    ],
    musicSku: "epic-mix",
  }),
  w(6, "Szóstka", "Szóstka Buław", {
    keywords: ["zwycięstwo", "uznanie", "duma", "dobre wieści"],
    keywordsReversed: ["niezauważony wysiłek", "łaska, która minęła", "pusty aplauz"],
    essence: "Laur na skroni jeźdźca i tłum, który go tam włożył.",
    description:
      "Jeździec w wieńcu laurowym paraduje na białym koniu przez wiwatujący tłum. Zwycięstwo upublicznione: sukces, który inni mogą wreszcie zobaczyć.",
    upright:
      "Nadchodzi wygrana, a z nią uznanie. Przyjmij oklaski uczciwie; pozwolić, by widziano twój sukces, to część pracy, nie zdrada skromności.",
    reversed:
      "Wysiłek nierozpoznany, albo aplauz, który brzmi pusto. Zapytaj, czyje uznanie naprawdę się liczy i czy przyznałaś, przyznałeś już własne.",
    questions: [
      "Jakie osiągnięcie odpycham, zamiast je przyjąć?",
      "Dla czyjego uznania pracuję i czy to właściwa widownia?",
    ],
    musicSku: "epic-mix",
  }),
  w(7, "Siódemka", "Siódemka Buław", {
    keywords: ["obrona", "wytrwałość", "przekonanie", "trzymanie pozycji"],
    keywordsReversed: ["przytłoczenie", "oddawanie pola", "obrona do wyczerpania"],
    essence: "Jedna buława przeciw sześciu, a wzniesienie i tak utrzymane.",
    description:
      "Postać na wzgórzu odpiera sześć buław wznoszących się z dołu. Grunt nierówny, lecz pozycja mocna: przekonanie bronione przed naporem.",
    upright:
      "Twoja pozycja jest testowana: konkurenci, krytycy, żądania. Trzymaj ten grunt, który ma znaczenie. Masz przewagę kogoś, kto dokładnie wie, czemu stoi tam, gdzie stoi.",
    reversed:
      "Oblężenie cię zużywa, albo bronisz terytorium, którego już nie chcesz. Wybieraj swoje wzgórze rozmyślnie.",
    questions: [
      "Której z moich pozycji warto bronić, a która jest tylko atakowanym przyzwyczajeniem?",
      "Gdzie powinienem wypowiedzieć swoje przekonanie wprost, a nie przepraszająco?",
    ],
    musicSku: "epic-mix",
  }),
  w(8, "Ósemka", "Ósemka Buław", {
    keywords: ["szybkość", "wieści", "rozpęd", "sprawy w locie"],
    keywordsReversed: ["opóźnienia", "skrzyżowane sygnały", "pośpiech nie trafia"],
    essence: "Osiem buław przecina niebo naraz: cisza się skończyła.",
    description:
      "Osiem buław leci przez czyste powietrze nad spokojną rzeką, bez żadnej postaci w kadrze. Czysty ruch: wiadomości lądują, wydarzenia przyspieszają, długie czekanie pęka.",
    upright:
      "Sprawy zaraz nabiorą tempa. Odpowiadaj na wiadomości, oczyść pas startowy, uderzaj, póki wszystko jest w powietrzu. Taki rozpęd nie trzyma szyku długo.",
    reversed:
      "Strzały w połowie lotu i w zastoju, albo pośpiech, który myli adresy. Zwolnij na tyle, by wycelować.",
    questions: [
      "Co w moim życiu przyspiesza i czy jestem gotów na lądowanie?",
      "Na jakiej wiadomości lub decyzji siedzę, choć prosi o szybkość?",
    ],
    musicSku: "epic-mix",
  }),
  w(9, "Dziewiątka", "Dziewiątka Buław", {
    keywords: ["odporność", "ostatnia warta", "czujność", "prawie u celu"],
    keywordsReversed: ["podejrzliwość", "wypalenie", "odmowa pomocy"],
    essence: "W bandażach, zmęczony, wyprostowany: mur na razie wytrzymał.",
    description:
      "Znużona, obandażowana postać opiera się o buławę przed płotem z ośmiu kolejnych. Poraniona, lecz stojąca, wypatruje następnej fali, która może nigdy nie nadejść.",
    upright:
      "Jesteś bliżej końca niż początku i bardziej zmęczona, zmęczony, niż przyznajesz. Ta karta honoruje odporność: utrzymaj linię jeszcze jedną rundę, ale zauważ, które umocnienia są ochroną, a które już tylko blizną.",
    reversed:
      "Wartowanie przeciw duchom, albo wypalenie o krok przed metą. Pozwól komuś przejąć wartę.",
    questions: [
      "Czego wciąż bronię, choć dawno przestało atakować?",
      "Co pomogłoby mi wytrzymać ostatni odcinek, gdybym o to poprosił?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(10, "Dziesiątka", "Dziesiątka Buław", {
    keywords: ["brzemię", "przeciążenie", "obowiązek", "niesienie wszystkiego"],
    keywordsReversed: ["zrzucenie ciężaru", "delegowanie", "upadek pod ładunkiem"],
    essence: "Dziesięć buław niesionych naraz, a miasto tak blisko.",
    description:
      "Postać dźwiga dziesięć ciężkich buław drogą ku miastu, pochylona tak nisko, że cel znika z oczu. Wszystko, co osiągnięte, stało się wszystkim, co niesione.",
    upright:
      "Ciężar jest prawdziwy, a większość z niego to własny przydział. Dokończ, co naprawdę trzeba dokończyć, potem odłóż resztę: sukces, który łamie niosącego, nigdy nie był celem.",
    reversed:
      "Wiązka się wysuwa, albo wreszcie zostaje odłożona. Deleguj, odmawiaj albo upuszczaj; miasto nigdzie się nie wybiera.",
    questions: [
      "Które z tych brzemion naprawdę należy do mnie?",
      "Co mogłabym, mógłbym dziś odłożyć bez żadnych skutków poza ulgą?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(11, "Paź", "Paź Buław", {
    keywords: ["entuzjazm", "odkrywanie", "iskra nowin", "wolny duch"],
    keywordsReversed: ["zapał, który zgasł", "niepokój ruchu", "same słowa"],
    essence: "Posłaniec, który zakochuje się w każdej drodze.",
    description:
      "Młoda postać na pustyni przygląda się pączkującej buławie jak pochodni. Paź niesie pierwszy dar ognia: czysty, niezwiązany jeszcze entuzjazm.",
    upright:
      "Idź za fascynacją. Paź Buław błogosławi odkrywaniu, śmiałym pytaniom i ogniowi początkującego. Może nadejść wieść o twórczym otwarciu; przyjmij ją ciekawością, a nie pięcioletnim planem.",
    reversed:
      "Entuzjazm, który nie przeżywa zderzenia z wysiłkiem. Wybierz jedną iskrę i zostań przy niej dłużej niż miesiąc miodowy.",
    questions: [
      "Czego jestem teraz naprawdę ciekawa, ciekaw?",
      "Gdzie mój zapał potrzebuje doprowadzenia do końca, by stać się czymś prawdziwym?",
    ],
    musicSku: "epic-mix",
  }),
  w(12, "Rycerz", "Rycerz Buław", {
    keywords: ["przygoda", "działanie z impulsu", "charyzma", "pełny galop"],
    keywordsReversed: ["brawura", "rozproszone pogonie", "sprinty do wypalenia"],
    essence: "Koń już biegnie; cel podróży to szczegół.",
    description:
      "Rycerz w zbroi zdobionej salamandrami szarżuje na wspiętym koniu. Maksimum prędkości, minimum planu podróży: pragnienie w siodle.",
    upright:
      "Działaj śmiało. Rycerz Buław sprzyja odważnemu ruchowi: podróży zarezerwowanej, propozycji złożonej, zanim zwątpienie zdąży z papierologią. Tylko potwierdź kierunek, zanim zajeździsz konia.",
    reversed:
      "Sam galop, żadnej mapy: projekty zaczynane w gorączce i porzucane na zimno. Zaprzęgnij ten ogień do czegoś, co zasługuje na całą podróż.",
    questions: [
      "Gdzie śmiałość jest brakującym składnikiem moich planów?",
      "Która pogoń zasługuje na mój pełny galop, a nie tylko przelotną ekscytację?",
    ],
    musicSku: "epic-mix",
  }),
  w(13, "Królowa", "Królowa Buław", {
    keywords: ["pewność siebie", "ciepło", "magnetyzm", "panowanie nad sobą"],
    keywordsReversed: ["przygaszony ogień", "zazdrość", "szukanie aprobaty"],
    essence: "Słonecznik w dłoni, czarny kot u stóp: ciepło z dobrze zaprzyjaźnionym cieniem.",
    description:
      "Królowa siedzi otwarcie na tronie z lwami i słonecznikami, przed nią czarny kot. Przyciąga uwagę, nie żądając jej: ogień, który stał się gościnny.",
    upright:
      "Zajmij całą swoją przestrzeń. Królowa Buław błogosławi pewnemu siebie ciepłu: przywództwu, które dodaje pokojowi energii, pragnieniu przyjętemu bez przepraszania i cieniowi uznanemu zamiast chowanego.",
    reversed:
      "Ogień zwraca się do środka jako zwątpienie albo na zewnątrz jako zawiść. Wróć do tego, co naprawdę cię rozświetla, a nie do tego, co dobrze wychodzi na zdjęciach.",
    questions: [
      "Gdzie się kurczę, żeby innym było wygodnie?",
      "Co zrobiłabym, zrobiłbym z pełną pewnością, co teraz robię nieśmiało?",
    ],
    musicSku: "epic-mix",
  }),
  w(14, "Król", "Król Buław", {
    keywords: ["wizja", "przywództwo", "mistrzostwo ognia", "śmiała strategia"],
    keywordsReversed: ["tyrania wizji", "rządy z impulsu", "obietnice bez pokrycia"],
    essence: "Płomień, który nauczył się budować, zamiast spalać.",
    description:
      "Król siedzi z kwitnącą buławą, a w jego szatę wplecione są salamandry gryzące własne ogony: ogień dojrzały w wizję, która domyka swoje kręgi.",
    upright:
      "Prowadź z wizji. Król Buław zamienia natchnienie w przedsięwzięcie: decyduje szybko, dobrze deleguje i trzyma płomień zwrócony ku przyszłości. Zajmij fotel przywódcy, którego wymaga twój pomysł.",
    reversed:
      "Wizja staje się głośnością: wielkie plany ogłaszane, fundamenty pomijane, ludzie przypalani. Dorównaj ogniowi wykonaniem.",
    questions: [
      "Która moja wizja dojrzała na tyle, by poprowadzić ku niej innych?",
      "Gdzie moje obietnice wyprzedzają moje systemy?",
    ],
    musicSku: "epic-mix",
  }),
];

const KIELICHY: KartaTarota[] = [
  w(1, "As", "As Kielichów", {
    keywords: ["nowa miłość", "otwarcie serca", "współczucie", "przepełnienie"],
    keywordsReversed: ["zablokowane uczucia", "pustka", "miłość wstrzymywana"],
    essence: "Kielich podany z obłoku, przelewający się, zanim ktokolwiek go dotknął.",
    description:
      "Dłoń podaje kielich, z którego płynie pięć strumieni, a nad nim zniża się gołębica. Rezerwuar serca, nagle rozpieczętowany.",
    upright:
      "Coś otwiera się w sercu: nowa miłość, nowe współczucie, twórcza czułość wobec świata. Przyjmij to bez racjonowania. Pełny kielich ma się przelewać.",
    reversed:
      "Kielich zakorkowany albo po cichu cieknący: uczucia tłumione, czułość wstrzymywana przed innymi albo przed sobą. Znajdź przeciek, zanim obwinisz suszę.",
    questions: [
      "Ku czemu próbuje otworzyć się moje serce?",
      "Gdzie racjonuję miłość, której jest pod dostatkiem?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(2, "Dwójka", "Dwójka Kielichów", {
    keywords: ["partnerstwo", "wzajemne przyciąganie", "sojusz", "pojednanie"],
    keywordsReversed: ["nierównowaga", "nadszarpnięte zaufanie", "więź jednostronna"],
    essence: "Dwa kielichy uniesione na wysokość oczu: spotkanie równych.",
    description:
      "Dwie postaci wymieniają kielichy pod kaduceuszem i uskrzydloną lwią głową. Nie tłum, nie wesele: dokładnie ta chwila, w której dwoje ludzi naprawdę się widzi.",
    upright:
      "Więź równych powstaje albo się pogłębia: miłość, przyjaźń albo sojusz zbudowany na wzajemnym rozpoznaniu. Uczcij tę wymianę, dbając, by płynęła w obie strony.",
    reversed:
      "Kielichy nierówne: jedno nalewa, drugie tylko pije. Przywróć równowagę, albo nazwij, co pękło.",
    questions: [
      "W której relacji czuję się naprawdę spotkana, spotkany jak równy z równym?",
      "Jaką nierównowagę znoszę w milczeniu?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(3, "Trójka", "Trójka Kielichów", {
    keywords: ["przyjaźń", "świętowanie", "wspólnota", "dzielona radość"],
    keywordsReversed: ["samotność w tłumie", "plotka", "trzecie koło"],
    essence: "Trzy kielichy wzniesione w tańcu starszym niż tancerki.",
    description:
      "Trzy postaci tańczą w kręgu z uniesionymi kielichami, u ich stóp owoce. Radość, która istnieje tylko w towarzystwie: dożynki serca.",
    upright:
      "Zbierz swoich ludzi. Trójka Kielichów błogosławi przyjaźni, współpracy i świętowaniu we wspólnocie. Niektóre lekarstwa podaje się wyłącznie w towarzystwie tych, którzy znali cię przed tytułami.",
    reversed:
      "Sam w tłumie, albo krąg skwaśniały od porównań. Szukaj przyjaciół, którzy dolewają do twojego kielicha, a nie go mierzą.",
    questions: [
      "Które przyjaźnie zasługują na bardziej rozmyślną pielęgnację?",
      "Kiedy ostatnio naprawdę świętowałam, świętowałem coś z innymi?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(4, "Czwórka", "Czwórka Kielichów", {
    keywords: ["apatia", "zamyślenie", "przegapione oferty", "niezadowolenie"],
    keywordsReversed: ["ponowne zaangażowanie", "nowa gotowość", "dostrzeżenie daru"],
    essence: "Czwarty kielich podany z obłoku i ramiona, które pozostają skrzyżowane.",
    description:
      "Postać siedzi pod drzewem z założonymi rękami przed trzema kielichami, a obłok podaje czwarty, którego nie widzi. Znudzenie jako opaska na oczy.",
    upright:
      "Niezadowolenie się rozgościło i może właśnie zasłania ofertę. Czwórka Kielichów pyta, czy odpoczywasz, czy odmawiasz: coś jest ci podawane, czego skrzyżowane ramiona nie mogą przyjąć.",
    reversed:
      "Trans mija; czwarty kielich wreszcie dociera do świadomości. Powiedz tak, zanim obłok go cofnie.",
    questions: [
      "Jakiej oferty lub szansy mogę nie widzieć przez własne znużenie?",
      "Czy moje wycofanie mnie odnawia, czy to tylko wygodne dąsy?",
    ],
    musicSku: "cosmic-soundscapes",
  }),
  w(5, "Piątka", "Piątka Kielichów", {
    keywords: ["żałoba", "strata", "żal", "to, co zostało"],
    keywordsReversed: ["akceptacja", "odwrócenie się", "wybaczenie"],
    essence: "Trzy kielichy rozlane, dwa wciąż stoją, a postać widzi tylko rozlane.",
    description:
      "Zakapturzony żałobnik wpatruje się w trzy przewrócone kielichy, podczas gdy dwa pełne czekają za jego plecami. Po drugiej stronie rzeki most prowadzi do domu. Żałoba jest prawdziwa; to, co zostało, też.",
    upright:
      "Strata zasługuje na swoją porę: opłacz, co się rozlało, nie udając, że to nic. Ale kiedy będziesz gotowa, gotowy, odwróć się. Dwa kielichy wciąż stoją, a most się nie ruszył.",
    reversed:
      "Zaczyna się zwrot: akceptacja, wybaczenie sobie, pierwszy suchy poranek. Zabierz lekcję, zostaw pelerynę.",
    questions: [
      "Jaka strata wciąż prosi o szczerą żałobę, a nie szybką naprawę?",
      "Które dwa kielichy stoją za moimi plecami?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(6, "Szóstka", "Szóstka Kielichów", {
    keywords: ["nostalgia", "niewinność", "starzy przyjaciele", "dary przeszłości"],
    keywordsReversed: ["mieszkanie w przeszłości", "różowe okulary", "uwolnienie historii"],
    essence: "Kielich kwiatów podawany między dziećmi w miasteczku bez zegarów.",
    description:
      "Na cichym dziedzińcu jedno dziecko podaje drugiemu kielich pełen białych kwiatów. Przeszłość wracająca w najsłodszej postaci: pamięć jako dar, nie kotwica.",
    upright:
      "Coś życzliwego wraca z twojej historii: stary przyjaciel, radość z dzieciństwa, wspomnienie z lekarstwem w środku. Przyjmij odwiedziny. Niech przeszłość podpowiada teraźniejszości, nie rządząc nią.",
    reversed: "Nostalgia stała się adresem zamieszkania. Zatrzymaj kwiaty, wypowiedz najem.",
    questions: [
      "Co z mojej przeszłości wciąż naprawdę mnie karmi?",
      "Gdzie czułe wspomnienie przechodzi w odmowę teraźniejszości?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(7, "Siódemka", "Siódemka Kielichów", {
    keywords: ["wybory", "fantazja", "pokusa", "rozsypane życzenia"],
    keywordsReversed: ["jasność", "zobowiązanie", "złudzenia topnieją"],
    essence: "Siedem kielichów w chmurach, w każdym inny sen, w żadnym grunt.",
    description:
      "Postać w sylwetce staje przed siedmioma kielichami unoszącymi się w obłoku, pełnymi zamków, klejnotów, laurów i smoków. Każda możliwość lśni; żadna jeszcze nie waży.",
    upright:
      "Mnożą się opcje, a wraz z nimi miraże. Siódemka Kielichów ostrzega przed buszowaniem wśród fantazji, podczas gdy prawdziwy dzień mija. Wybierz jeden kielich i nadaj mu ciężar.",
    reversed: "Mgła opcji przeciera się w decyzję. Mniej snów, więcej czynów.",
    questions: [
      "Która z moich opcji jest wizją, a która mirażem?",
      "Jaki jeden wybór, podjęty dziś, zakończyłby ten przyjemny paraliż?",
    ],
    musicSku: "cosmic-soundscapes",
  }),
  w(8, "Ósemka", "Ósemka Kielichów", {
    keywords: ["odejście", "szukanie głębi", "wymarsz", "cicha odwaga"],
    keywordsReversed: ["lęk przed odejściem", "jeszcze jedna próba", "dryf bez celu"],
    essence: "Osiem kielichów ustawionych równo i ślady stóp prowadzące w góry.",
    description:
      "Pod zaćmionym księżycem postać odchodzi od ośmiu starannie ułożonych kielichów w stronę gór. Nic nie jest zepsute. Po prostu to już nie wystarcza.",
    upright:
      "Wolno ci odejść od czegoś, co działa, lecz już nie znaczy. Ósemka Kielichów błogosławi cichemu wymarszowi ku głębi: bez dramatu, po prostu na prawdziwszy grunt.",
    reversed:
      "Zostawanie ze strachu, albo porzucanie wszystkiego z przyzwyczajenia. Odróżnij poszukiwanie głębi od ucieczki przed trudem.",
    questions: [
      "Z czego wyrosłam, wyrosłem, a wciąż to utrzymuję?",
      "Co głębszego mnie woła i ile kosztuje odpowiedź?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(9, "Dziewiątka", "Dziewiątka Kielichów", {
    keywords: ["zadowolenie", "spełnione życzenie", "satysfakcja", "przyjemność"],
    keywordsReversed: ["samozadowolenie", "pusty komfort", "głód na więcej"],
    essence: "Uśmiech gospodarza i dziewięć kielichów w łuku za jego plecami.",
    description:
      "Usatysfakcjonowana postać siedzi z założonymi rękami pod łukiem dziewięciu złotych kielichów. Tradycyjna karta życzeń: pragnienie spełnione, komfort zapracowany, dobry stół nakryty.",
    upright:
      "Życzenie właśnie się spełnia, albo już się spełniło i czeka, aż to zauważysz. Ciesz się nim w pełni i otwarcie: dobrze praktykowana satysfakcja to wdzięczność w ruchu.",
    reversed:
      "Kielichy pełne, a uśmiech cienki. Komfort bez znaczenia, albo apetyt, którego nic nie ucisza. Zapytaj, czego naprawdę sobie życzyłaś, życzyłeś.",
    questions: [
      "Którymi spełnionymi życzeniami zapomniałam, zapomniałem się ucieszyć?",
      "Jak wygląda dla mnie prawdziwa satysfakcja, poza gromadzeniem?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(10, "Dziesiątka", "Dziesiątka Kielichów", {
    keywords: ["trwała zgoda", "rodzina", "przynależność", "spełnienie uczuć"],
    keywordsReversed: ["napięty dom", "ideał kontra codzienność", "pęknięty krąg"],
    essence: "Tęcza z kielichów nad zwyczajnym domem: niezwykłość przebrana za dom.",
    description:
      "Para otwiera ramiona ku tęczy z dziesięciu kielichów, a obok skromnego domu tańczą dzieci. Nie luksus: zestrojenie. Miłość, która stała się miejscem do życia.",
    upright:
      "Życie uczuć wraca do domu: zgoda w rodzinie, bliscy z wyboru, głęboka przynależność, od której zwyczajne wieczory zaczynają świecić. Chroń ją obecnością, nie perfekcją.",
    reversed:
      "Pocztówka i gospodarstwo się nie zgadzają. Naprawiaj prawdziwe relacje, zamiast odgrywać idealne.",
    questions: [
      "Jak przynależność naprawdę czuje się w moim ciele i gdzie ją znajduję?",
      "Gdzie gonię obraz zgody zamiast jej treści?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(11, "Paź", "Paź Kielichów", {
    keywords: ["twórcze wieści", "uczeń intuicji", "zachwyt", "małe niespodzianki"],
    keywordsReversed: ["humorzastość", "ignorowana intuicja", "twórcza blokada"],
    essence: "Ryba wygląda z kielicha, a Paź odwzajemnia spojrzenie, zachwycony.",
    description:
      "Młoda postać w kwiecistej tunice przygląda się rybie wychylającej się z jej kielicha. Nieświadomość składa pierwsze drobne dary: zachcianki, sny, dziwne pomysły warte uhonorowania.",
    upright:
      "Weź tę dziwną małą wiadomość na poważnie: sen, impuls, pomysł wynurzający się w połowie spaceru. Paź Kielichów to intuicja na praktykach; rośnie, gdy się jej wierzy.",
    reversed: "Ryba ignorowana, albo nastroje przejmują ster. Czuj w pełni, potem wybieraj rozmyślnie.",
    questions: [
      "Jaki dziwny wewnętrzny trącający sygnał ostatnio zbywam?",
      "Jak mogłabym, mógłbym dawać wyobraźni dziesięć nieocenianych minut dziennie?",
    ],
    musicSku: "cosmic-soundscapes",
  }),
  w(12, "Rycerz", "Rycerz Kielichów", {
    keywords: ["romantyczne propozycje", "podążanie za sercem", "urok", "wyprawy uczuć"],
    keywordsReversed: ["humorzaste unikanie", "pusty urok", "wyprawy nierealne"],
    essence: "Rycerz, który jedzie w tempie wiersza.",
    description:
      "Rycerz na powolnym białym koniu niesie kielich jak graala, w lśniącym skrzydlatym hełmie. Nie szarżuje: zbliża się. Uczucie, któremu dano kierunek i konia.",
    upright:
      "Prowadź sercem, z powagą. Nadchodzi propozycja, albo czas ją złożyć: romantyczna, twórcza, ludzka. Piękno to prawowity kompas; idź za nim z otwartymi oczami.",
    reversed:
      "Urok bez pokrycia, albo wyprawa istniejąca tylko w opowiadaniu. Niech serce dotrzymuje swoich terminów.",
    questions: [
      "Co znaczyłoby zabiegać o to pragnienie otwarcie i z honorem?",
      "Gdzie moje romantyczne ideały zwalniają mnie z prawdziwych zobowiązań?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(13, "Królowa", "Królowa Kielichów", {
    keywords: ["współczucie", "głębia uczuć", "zaufana intuicja", "przestrzeń dla innych"],
    keywordsReversed: ["zalanie emocjami", "nieszczelne granice", "opieka do wyniszczenia"],
    essence: "Trzyma jedyny zamknięty kielich w talii i wie, co jest w środku.",
    description:
      "Na tronie nad brzegiem morza Królowa kontempluje zdobny kielich z wiekiem. Czuje wszystko i nic jej nie topi: dojrzałe serce.",
    upright:
      "Prowadź z głębi uczuć, dobrze obramowanych. Królowa Kielichów błogosławi współczuciu z granicami, intuicji traktowanej jak dane i rzadkiemu darowi prawdziwego słuchania. Rób miejsce dla innych, nie oddając kluczy.",
    reversed:
      "Morze wdziera się na tron: chłonięcie cudzych nastrojów, troska ponad własną pojemność. Wróć najpierw do własnego kielicha.",
    questions: [
      "Czyje emocje noszę, choć nie moje do noszenia?",
      "Jak uhonorować swoją wrażliwość jako siłę, a nie przeciek?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(14, "Król", "Król Kielichów", {
    keywords: ["panowanie nad emocjami", "spokojna rada", "dyplomacja", "równe morze"],
    keywordsReversed: ["uczucia stłumione", "współczucie jako dźwignia", "zimna pociecha"],
    essence: "Jego tron unosi się na wzburzonym morzu, a kielich się nie rozlewa.",
    description:
      "Król siedzi opanowany na tronie dryfującym wśród fal, za nim skaczą ryby. Nie pokonał morza; pogodził się z żeglugą po nim.",
    upright:
      "Stałość pośród silnych uczuć, twoich lub cudzych. Król Kielichów radzi dyplomatyczne słowo, spokojną obecność w rozkołysanym pokoju, emocję opanowaną bez wyciszenia.",
    reversed:
      "Spokój, który jest tłumieniem, albo współczucie używane jak dźwignia. Przeżyj własny sztorm uczciwie, zanim przeprowadzisz kogokolwiek przez jego.",
    questions: [
      "Gdzie mój spokój jest prawdziwym mistrzostwem, a gdzie zaspawanym włazem?",
      "Kto potrzebuje teraz mojej stałości i czy umiem ją dać, nie znikając?",
    ],
    musicSku: "bene-gesserit",
  }),
];

const MIECZE: KartaTarota[] = [
  w(1, "As", "As Mieczy", {
    keywords: ["przełom", "jasność", "prawda", "rozstrzygająca myśl"],
    keywordsReversed: ["zamęt", "stępione ostrze", "prawda nadużyta"],
    essence: "Jedno ostrze przez koronę: chwila, w której myśl tnie czysto.",
    description:
      "Dłoń z obłoku unosi miecz zwieńczony koroną z laurem i palmą. Pierwszy dar umysłu: prawda dość ostra, by zmienić wszystko, czego dotknie.",
    upright:
      "Jasność przychodzi jak przełamanie pogody: wgląd, szczere zdanie, decyzja przecinająca miesiące mgły. Używaj ostrza dla prawdy i spodziewaj się, że tnie w obie strony.",
    reversed:
      "Ostrze stępione: myśli splątane, prawda naginana do wygody. Ostrz przez upraszczanie; powiedz prawdziwą rzecz w jednym zdaniu.",
    questions: [
      "Jaką prawdę zobaczyłam, zobaczyłem ostatnio z nagłą jasnością?",
      "Gdzie jedno szczere zdanie zmieniłoby sytuację?",
    ],
    musicSku: "alien-ambient",
  }),
  w(2, "Dwójka", "Dwójka Mieczy", {
    keywords: ["pat", "unikanie", "decyzja zablokowana", "rozejm"],
    keywordsReversed: ["opaska opada", "wybór wymuszony", "napięcie puszczone"],
    essence: "Oczy zawiązane z wyboru, miecze skrzyżowane na sercu.",
    description:
      "Siedząca postać z zawiązanymi oczami balansuje dwa skrzyżowane miecze, a za nią podnosi się przypływ. Księżyc patrzy. Decyzja odroczona starannie utrzymywaną równowagą.",
    upright:
      "Trzymasz dwie opcje w równowadze, żeby nie wybrać żadnej. Ten rozejm kosztuje z każdym tygodniem więcej. Informacje tego nie rozstrzygną; opaska jest twoja do zdjęcia.",
    reversed:
      "Pat pęka, twoją ręką albo ręką wydarzeń. Lepiej opuścić miecze samemu, niż pozwolić, by zdecydował przypływ.",
    questions: [
      "Jaką decyzję przebieram za potrzebę dalszych informacji?",
      "Co chronię, odmawiając spojrzenia?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(3, "Trójka", "Trójka Mieczy", {
    keywords: ["złamane serce", "bolesna prawda", "żal", "czysta rana"],
    keywordsReversed: ["gojenie", "wybaczenie", "ból puszczony"],
    essence: "Trzy miecze przez jedno serce, pod deszczem, który kiedyś ustanie.",
    description:
      "Czerwone serce przebite trzema mieczami wisi na tle burzowych chmur i deszczu. Najbardziej jednoznaczny obraz talii: to boli, dokładnie i naprawdę.",
    upright:
      "Ląduje bolesna prawda: zdrada, strata, słowa, których nie da się odsłyszeć. Łaską tej karty jest precyzja. Nazwana rana może się goić; wypierana tylko ropieje. Niech popada.",
    reversed:
      "Miecze są właśnie wyciągane: wybaczenie, dystans, koniec burzy. Uważaj na bliznę; jest młodsza, niż się wydaje.",
    questions: [
      "Jakiego bólu odmawiam nazwać precyzyjnie?",
      "Czego potrzeba, by ta rana zamknęła się czysto?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(4, "Czwórka", "Czwórka Mieczy", {
    keywords: ["odpoczynek", "regeneracja", "odosobnienie", "cisza przed powrotem"],
    keywordsReversed: ["niepokój", "pauza wymuszona", "odmowa regeneracji"],
    essence: "Rycerz się kładzie, a wojna zgadza się poczekać.",
    description:
      "Rycerz leży jak nagrobna rzeźba w cichej kaplicy, trzy miecze wiszą na ścianie, jeden pod nim. Nie śmierć: dyscyplina prawdziwego odpoczynku.",
    upright:
      "Zatrzymaj się, zanim coś cię zatrzyma. Czwórka Mieczy przepisuje prawdziwy odpoczynek: ciszę, sen, sanktuarium, układ nerwowy, któremu wolno zejść z posterunku. Bitwa poczeka; ty też musisz przetrwać.",
    reversed:
      "Odpoczynek odpychany, aż zarządzi go ciało. Wybierz pauzę dobrowolnie, a będzie kosztować połowę.",
    questions: [
      "Jak wygląda mój prawdziwy odpoczynek, a nie tylko przerwa w pracy?",
      "Czego się boję, że stanie się, gdy się zatrzymam?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(5, "Piątka", "Piątka Mieczy", {
    keywords: ["puste zwycięstwo", "koszt konfliktu", "porażka", "łupy ego"],
    keywordsReversed: ["pojednanie", "urazy puszczone", "lekcje porażki"],
    essence: "On trzyma wszystkie miecze, a pole trzyma już tylko wiatr.",
    description:
      "Postać z krzywym uśmiechem zbiera miecze, podczas gdy dwie inne odchodzą pod rozdartym niebem. Ktoś wygrał. Przyjrzyj się, co ta wygrana kupiła.",
    upright:
      "Jakiś konflikt jest wygrywany za cenę, która może przewyższyć nagrodę: relacje, zaufanie, twój własny spokój. Zapytaj, czemu służy zwycięstwo. Niektóre bitwy najlepiej odpuścić, innych najlepiej nie zaczynać.",
    reversed:
      "Uraza puszcza; stare pola bitew można opuścić. Weź lekcję, zostaw miecze.",
    questions: [
      "Ile w moim obecnym konflikcie naprawdę kosztowałaby wygrana?",
      "Z której bitwy powinnam, powinienem odejść z nienaruszoną godnością?",
    ],
    musicSku: "alien-ambient",
  }),
  w(6, "Szóstka", "Szóstka Mieczy", {
    keywords: ["przeprawa", "przejście", "opuszczanie wzburzonych wód", "zmiana prowadzona"],
    keywordsReversed: ["przeprawa odpychana", "bagaż za burtę", "nigdzie nie czuć oddali"],
    essence: "Łódź siedzi nisko w wodzie, ale płynie.",
    description:
      "Przewoźnik pcha łódź z zakapturzoną postacią i dzieckiem ku dalekiemu brzegowi; na dziobie stoi sześć mieczy. Woda za rufą wzburzona, przed dziobem gładka. Wieziesz to, co cię pocięło, i mimo to płyniesz.",
    upright:
      "Trwa konieczna przeprawa: przeprowadzka, zmiana, ciche odejście z niespokojnych wód. To jeszcze nie przybycie i nie musi nim być. Wiosłuj dalej.",
    reversed:
      "Łódź zawraca, albo ładunek starych mieczy ją zatapia. Zdecyduj, co naprawdę musi odbyć tę przeprawę.",
    questions: [
      "Jaką wzburzoną wodę jestem wreszcie gotowa, gotowy opuścić?",
      "Które z wiezionych mieczy można zostawić na starym brzegu?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(7, "Siódemka", "Siódemka Mieczy", {
    keywords: ["strategia", "dyskrecja", "podstęp", "samotny gracz"],
    keywordsReversed: ["wyznanie", "zdemaskowanie", "wyjście na prostą"],
    essence: "Pięć mieczy niesionych na palcach, dwa zostawione lśniące w trawie.",
    description:
      "Postać wymyka się z obozu z pięcioma mieczami, oglądając się za siebie, dwa zostawia. Spryt w ruchu: strategia, kradzież albo oszukiwanie samego siebie, zależnie od tego, kto jest zwodzony.",
    upright:
      "Ktoś prowadzi grę nie wprost: może mądrze, może nieuczciwie, może ty. Strategia jest prawowita; skrytość procentuje ujemnie. Policz miecze, które niesiesz, i czyje są.",
    reversed:
      "Plan się pruje, albo sumienie składa raport. Wyjście na prostą kosztuje dziś mniej niż jutro.",
    questions: [
      "Gdzie jestem strategiczna, strategiczny, a gdzie po prostu ukryty?",
      "Na jakim podstępie, moim lub cudzym, opiera się ta sytuacja?",
    ],
    musicSku: "alien-ambient",
  }),
  w(8, "Ósemka", "Ósemka Mieczy", {
    keywords: ["własne ograniczenia", "poczucie uwięzienia", "pęta umysłu", "wyuczona bezradność"],
    keywordsReversed: ["samouwolnienie", "odzyskana perspektywa", "pierwszy krok na zewnątrz"],
    essence: "Związana i z zawiązanymi oczami w klatce z mieczy, której brama stoi otworem.",
    description:
      "Związana postać z przepaską na oczach stoi wśród ośmiu mieczy wbitych w mokrą ziemię, daleko za nią zamek. Pęta są luźne, stopy wolne, a miecze tworzą płot bez bramy, bo brama nie jest potrzebna.",
    upright:
      "Ta pułapka jest zrobiona głównie z myśli. Prawdziwe ograniczenia istnieją, ale opowieść, że nic się nie da zrobić, jest najciaśniejszym ze sznurów. Przetestuj dziś jedno pęto: zadzwoń, zrób krok, poproś.",
    reversed:
      "Przepaska się zsuwa; opcje wracają. Wolność przychodzi po jednym obalonym założeniu naraz.",
    questions: [
      "Które z moich ograniczeń są prawdziwe, a które dobrze wyćwiczone?",
      "Jakie jedno działanie obaliłoby moją ulubioną wersję utknięcia?",
    ],
    musicSku: "alien-ambient",
  }),
  w(9, "Dziewiątka", "Dziewiątka Mieczy", {
    keywords: ["niepokój", "bezsenne noce", "lęk", "umysł o trzeciej nad ranem"],
    keywordsReversed: ["świt po panice", "lęki wypowiedziane", "perspektywa wraca"],
    essence: "Dziewięć mieczy na ścianie i żaden się nie poruszył.",
    description:
      "Postać siada na łóżku z twarzą w dłoniach, a w ciemności wisi poziomo dziewięć mieczy. Na kołdrze róże i znaki zodiaku: prawdziwy świat, nietknięty, tuż poza zasięgiem wzroku.",
    upright:
      "Cierpienie jest prawdziwe; katastrofa to głównie próba generalna. Noc mnoży każdy miecz. Wypowiedz lęk na głos, zapisz go, pokaż światłu dziennemu i patrz, jak kurczy się do prawdziwych rozmiarów.",
    reversed:
      "Panika pęka: lęki wypowiedziane, pomoc przyjęta, nadchodzący poranek. Bądź łagodna, łagodny dla nocnej wersji siebie.",
    questions: [
      "Które zmartwienie rośnie tylko w ciemności i komu mogłabym, mógłbym je pokazać?",
      "Czego potrzebuje ten lęk: działania, otuchy czy po prostu wschodu słońca?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(10, "Dziesiątka", "Dziesiątka Mieczy", {
    keywords: ["bolesny koniec", "dno", "zdrada", "dokonało się"],
    keywordsReversed: ["przetrwanie", "powolne dochodzenie do siebie", "odmowa ostatniej lekcji"],
    essence: "Dziesięć mieczy, ciemne niebo i świt, który mimo wszystko wstaje.",
    description:
      "Postać leży twarzą do ziemi z dziesięcioma mieczami w plecach, a nad horyzontem wstaje złote światło. Najciemniejsza godzina talii, narysowana z jej najniezawodniejszym wschodem słońca.",
    upright:
      "Coś skończyło się w sposób niepozostawiający dwuznaczności. Jedyny pozostały kierunek to w górę, i to jest dziwny dar tej karty. Niech będzie skończone. Świt już jest w kadrze.",
    reversed:
      "Powolne wstawanie, albo odmowa przyznania, że koniec nastąpił. Dziesięć mieczy wystarczy; nie wracaj po jedenasty.",
    questions: [
      "Jaki koniec wciąż rozpamiętuję, zamiast go przetrwać?",
      "Jak wygląda świt tej sytuacji, choćby najbledszy?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(11, "Paź", "Paź Mieczy", {
    keywords: ["ciekawość", "czujność", "nowe idee", "uważny uczeń"],
    keywordsReversed: ["plotka", "rozbiegane myśli", "same pytania, zero nauki"],
    essence: "Miecz w górze, włosy na wietrze, oczy wszędzie naraz.",
    description:
      "Młoda postać stoi na wyniesieniu z uniesionym mieczem, odwracając się, by obserwować sam wiatr. Uczeń umysłu: czujny, szybki, głodny każdego sygnału.",
    upright:
      "Bądź ciekawa, ciekaw i sprawdzaj. Paź Mieczy błogosławi poszukiwaniom, pytaniom zadawanym wprost i energii umysłu świeżo zafascynowanego. Obserwuj wszystko; powtarzaj tylko to, co sprawdziłeś.",
    reversed:
      "Czujność kwaśnieje w plotkę albo niepokój; pomysły kiełkują i nic nie zapuszcza korzeni. Dokończ jedną linię dociekań.",
    questions: [
      "Co chcę zrozumieć głęboko, a nie tylko szybko?",
      "Gdzie moje słowa powinny być wolniejsze od moich myśli?",
    ],
    musicSku: "lofi-focus",
  }),
  w(12, "Rycerz", "Rycerz Mieczy", {
    keywords: ["zdecydowana szarża", "siła intelektu", "szybkość", "misja"],
    keywordsReversed: ["bezwzględność", "spory wygrane, ludzie straceni", "prędkość do wypalenia"],
    essence: "Pod wiatr w pełnym galopie, bo prawda nie może czekać.",
    description:
      "Rycerz szarżuje w burzę z mieczem wysuniętym naprzód, koń ledwie dotyka ziemi. Przekonanie na maksymalnej prędkości, na dobre i na złe.",
    upright:
      "Działaj na prawdzie zdecydowanie: przedstaw argument, wyślij zgłoszenie, przetnij zwłokę. Rycerz Mieczy wygrywa szybkością i skupieniem. Tylko sprawdź cel, zanim oddasz szarżę.",
    reversed:
      "Prędkość bez dyplomacji: debaty wygrywane, gdy sala pustoszeje. Zwolnij na tyle, by sojusznicy utrzymali się w siodłach.",
    questions: [
      "Jaka prawda wymaga ode mnie teraz szybkiego, zdecydowanego działania?",
      "Gdzie moja bezpośredniość przestała służyć celowi?",
    ],
    musicSku: "epic-mix",
  }),
  w(13, "Królowa", "Królowa Mieczy", {
    keywords: ["trzeźwa szczerość", "niezależność", "granice", "błyskotliwość"],
    keywordsReversed: ["chłód", "gorycz", "mury po terminie"],
    essence: "Dłoń ma otwartą; miecz pionowy. Jedno i drugie jest sednem.",
    description:
      "Królowa siedzi z profilu, miecz wyprostowany, wolna dłoń wyciągnięta: prawda bez okrucieństwa, gościnność bez naiwności. Przeżyła żałobę i przemyślała ją aż do jasności.",
    upright:
      "Mów wprost i oczekuj prostoty. Królowa Mieczy błogosławi granicom stawianym raz, ocenom na dowodach i współczuciu, które nigdy nie wymaga okłamywania siebie.",
    reversed:
      "Jasność twardnieje w cynizm, strzeżone serce w obmurowane. Zachowaj standardy; wpuść z powrotem ciepło.",
    questions: [
      "Gdzie zalegam z życzliwym, bezpośrednim zdaniem?",
      "Czy moja przenikliwość nie zmieniła się w pancerz?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(14, "Król", "Król Mieczy", {
    keywords: ["autorytet intelektu", "prawda jako prawo", "osąd", "systemy myśli"],
    keywordsReversed: ["zimne wyroki", "intelekt jako broń", "osąd stronniczy"],
    essence: "Miecz przechylony odrobinę: nawet ostateczny osąd zostawia miejsce na łaskę.",
    description:
      "Król patrzy wprost, miecz tuż obok pionu, za tronem wyrzeźbione motyle. Umysł dojrzały w prawo: analiza w służbie tego, co słuszne.",
    upright:
      "Decyduj z zasad. Król Mieczy wzywa do rygorystycznej szczerości, bezstronnego osądu i odwagi orzekania w trudnych sprawach. Autorytet zdobywa się tu konsekwencją.",
    reversed:
      "Logika bez pulsu: wyroki poprawne i żrące. Przekalibruj na ludzkie konsekwencje.",
    questions: [
      "Jaka decyzja potrzebuje mojego najbezstronniejszego, pryncypialnego myślenia?",
      "Gdzie mam rację w sposób, który nie pomaga?",
    ],
    musicSku: "alien-ambient",
  }),
];

const PENTAKLE: KartaTarota[] = [
  w(1, "As", "As Pentakli", {
    keywords: ["okazja", "ziarno dostatku", "nowa praca", "namacalne początki"],
    keywordsReversed: ["przegapiona szansa", "chwiejne fundamenty", "chciwość zamiast wzrostu"],
    essence: "Złota moneta podana nad otwartą furtką ogrodu.",
    description:
      "Dłoń z obłoku podaje wielki pentakl nad ogrodem, którego łuk otwiera się na dalekie góry. Nie wygrana: ziarno, z całą pracą i żniwem w domyśle.",
    upright:
      "Nadchodzi konkretna okazja: praca, pieniądze, zdrowie, dom. To ziarno, nie los na loterii. Zasiej je w prawdziwej glebie jeszcze w tym tygodniu: konto założone, oferta odebrana, pierwsza cegła położona.",
    reversed:
      "Ziarno upuszczone albo chomikowane bez siewu. Przejrzyj, czego ta okazja naprawdę wymaga, i czy nie czekasz na żniwo, którego nigdy nie zasiałaś, nie zasiałeś.",
    questions: [
      "Jaką namacalną okazję trzymam właśnie w dłoni?",
      "Jak konkretnie wyglądałoby zasianie jej w tym tygodniu?",
    ],
    musicSku: "lofi-focus",
  }),
  w(2, "Dwójka", "Dwójka Pentakli", {
    keywords: ["żonglerka", "zdolność adaptacji", "równowaga w ruchu", "priorytety"],
    keywordsReversed: ["upuszczone piłki", "przeciążenie", "sztywna równowaga"],
    essence: "Dwie monety w nieskończonej pętli i statki na falach w tle.",
    description:
      "Tancerz żongluje dwoma pentaklami związanymi lemniskatą, a za nim wysokie statki wspinają się na ciężkie fale. Równowaga nie jest tu bezruchem: jest rytmem.",
    upright:
      "Życie wymaga żonglerki, a idzie ci lepiej, niż czujesz. Trzymaj rytm, ale wiedz, która piłka jest ze szkła, a która z gumy. Oceniana umiejętność nazywa się adaptacja.",
    reversed:
      "Za dużo monet w powietrzu; coś szklanego się chwieje. Odłóż gumowe piłki rozmyślnie.",
    questions: [
      "Które z moich obecnych zobowiązań są ze szkła, a które z gumy?",
      "Jaki rytm, nie grafik, uczyniłby ten ładunek możliwym?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(3, "Trójka", "Trójka Pentakli", {
    keywords: ["praca zespołowa", "rzemiosło", "uznanie dla umiejętności", "wspólne budowanie"],
    keywordsReversed: ["kulawa współpraca", "zgoda na bylejakość", "spory o zasługi"],
    essence: "Kamieniarz, architekt i patron, wszyscy patrzą na ten sam łuk.",
    description:
      "W portalu katedry młody kamieniarz naradza się z dwiema postaciami trzymającymi plany. Umiejętność spotyka strukturę i wsparcie: tak naprawdę powstają rzeczy trwałe.",
    upright:
      "Twoje rzemiosło dojrzało do współpracy i uznania. Przynieś pracę do stołu, przy którym rysuje się plany; poproś o zasoby, na które zasługuje mistrzostwo. Wielkie budowle to rozmowy.",
    reversed:
      "Zespół się rozjeżdża, albo obsuwa się poprzeczka. Przywróć szacunek albo specyfikację, najlepiej jedno i drugie.",
    questions: [
      "Gdzie współpraca pomnożyłaby to, czego sama moja umiejętność nie zdoła?",
      "Czy poprzeczka jakości wisi tam, gdzie twierdzę?",
    ],
    musicSku: "lofi-focus",
  }),
  w(4, "Czwórka", "Czwórka Pentakli", {
    keywords: ["kurczowy uchwyt", "bezpieczeństwo", "kontrola", "myślenie niedoboru"],
    keywordsReversed: ["poluzowany uchwyt", "hojność", "lęk przed stratą wzięty pod światło"],
    essence: "Jedna moneta pod stopą, jedna w objęciach, jedna na koronie: nic nie zostaje dla rąk, które mogłyby przyjmować.",
    description:
      "Ukoronowana postać przyciska pentakl do piersi, stoi na dwóch kolejnych i balansuje czwarty na głowie, miasto daleko za plecami. Idealne bezpieczeństwo, idealny bezruch.",
    upright:
      "Trzymasz mocno: pieniądze, kontrolę, jakąś wersję bezpieczeństwa. Część tego trzymania jest mądra; aż tyle kosztuje majątek. Dłonie, które ściskają, nie mogą zarazem przyjmować. Rozluźniaj po jednym palcu.",
    reversed:
      "Uchwyt puszcza, z wyboru albo z konieczności. Uważaj na wahnięcie w drugą stronę: beztroskie wydawanie pieniędzy albo siebie.",
    questions: [
      "Co ściskam tak mocno, że teraz to ściska mnie?",
      "Z czego byłoby zbudowane prawdziwe bezpieczeństwo, nie to chomikowane?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(5, "Piątka", "Piątka Pentakli", {
    keywords: ["niedostatek", "wykluczenie", "zimna pora", "pomoc niezauważona"],
    keywordsReversed: ["dochodzenie do siebie", "drzwi się otwierają", "pomoc przyjęta"],
    essence: "Śnieg, dwie postaci na zewnątrz i rozświetlone okno, którego nie widzą.",
    description:
      "Dwie obdarte postaci brną przez śnieg pod jarzącym się witrażem. Niedola jest prawdziwa. Sanktuarium, na które nie podniosły oczu, też.",
    upright:
      "Pora braku: materialnego, cielesnego albo braku przynależności. Nie masz obowiązku znosić jej bez pomocy. Rozświetlone okno istnieje; duma i przyzwyczajenie trzymają wzrok na śniegu. Spójrz w górę, poproś, wejdź.",
    reversed:
      "Mróz puszcza: pomoc przyjęta, zdrowie wraca, drzwi otwarte. Zapamiętaj, czego śnieg nauczył o tym, kto się zjawił.",
    questions: [
      "Jaka pomoc jest dostępna, o którą byłam, byłem zbyt dumny lub zbyt zmęczony poprosić?",
      "Kto dzieli mój śnieg i czy moglibyśmy pójść ku oknu razem?",
    ],
    musicSku: "solastalgia-vol1",
  }),
  w(6, "Szóstka", "Szóstka Pentakli", {
    keywords: ["hojność", "dawanie i branie", "mecenat", "obieg zasobów"],
    keywordsReversed: ["dary z haczykiem", "nierównowaga władzy", "jałmużna jako kontrola"],
    essence: "Waga w jednej dłoni, monety sypiące się z drugiej.",
    description:
      "Kupiec odważa monety na szali, dając dwóm klęczącym postaciom. Zasoby w obiegu, z cichym pytaniem: kto decyduje i ile kosztuje dar?",
    upright:
      "Dawaj tam, gdzie masz pełno, przyjmuj tam, gdzie pusto, i trzymaj wagę na widoku. Hojność błogosławi obu kierunkom, gdy nie prowadzi tajnych ksiąg.",
    reversed:
      "Dar ma haczyki, albo przyjmowanie smakuje jak dług. Przyjrzyj się władzy wplecionej w tę wymianę.",
    questions: [
      "Gdzie teraz stoję: daję, przyjmuję czy ważę?",
      "Czy moje dary uwalniają ludzi, czy po cichu ich wiążą?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(7, "Siódemka", "Siódemka Pentakli", {
    keywords: ["cierpliwość", "ocena", "powolny wzrost", "długa gra"],
    keywordsReversed: ["niecierpliwość", "koszty utopione", "wysiłek źle skierowany"],
    essence: "Oparty o motykę, licząc, co winorośl naprawdę urodziła.",
    description:
      "Rolnik odpoczywa na narzędziu, przyglądając się siedmiu pentaklom dojrzewającym na winorośli. Pauza między pracą a żniwem, w której uczciwie przegląda się strategię.",
    upright:
      "Cofnij się i zrób remanent ogrodu: co rośnie, co nie, co zasługuje na kolejny sezon. Cierpliwość jest cnotą tylko wtedy, gdy towarzyszy jej uczciwa ocena.",
    reversed:
      "Albo rzucasz tuż przed żniwem, albo podlewasz martwą winorośl z sentymentu. Niech zagłosują dowody.",
    questions: [
      "Które z moich wysiłków pokazują prawdziwy wzrost, gdy mierzyć uczciwie?",
      "W co zainwestowałam, zainwestowałem, czego liczby już nie uzasadniają?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(8, "Ósemka", "Ósemka Pentakli", {
    keywords: ["pilność", "praktyka", "mistrzostwo w drodze", "oddanie rzemiosłu"],
    keywordsReversed: ["droga na skróty", "powtarzanie bez wzrostu", "perfekcjonizm"],
    essence: "Moneta za monetą, każda prawdziwsza od poprzedniej.",
    description:
      "Czeladnik rzeźbi pentakle przy warsztacie, gotowe sztuki wiszą w równej kolumnie, miasto w oddali. Mistrzostwo pokazane takim, jakie jest: powtarzanie z uwagą.",
    upright:
      "Głowa nisko, ręce przy pracy, poprzeczka wysoko. Ósemka Pentakli błogosławi rozmyślnej praktyce: dodatkowemu powtórzeniu, uszanowanemu szczegółowi, umiejętności cicho procentującej. Tak naprawdę robi się talent.",
    reversed:
      "Odbębnianie ruchów, albo polerowanie jednej monety w nieskończoność. Przywróć uwagę albo domykanie.",
    questions: [
      "Jaka umiejętność zasługuje w tym sezonie na moją oddaną, powtarzaną praktykę?",
      "Gdzie powtarzam bez poprawy i jakiej informacji zwrotnej brakuje?",
    ],
    musicSku: "lofi-focus",
  }),
  w(9, "Dziewiątka", "Dziewiątka Pentakli", {
    keywords: ["samowystarczalność", "zapracowany luksus", "wyrafinowanie", "niezależność"],
    keywordsReversed: ["złota klatka", "harówka za ogrodem", "wartość mierzona produkcją"],
    essence: "Sokół na jej rękawicy, winnica, którą sama zasadziła, popołudnie, którego nie jest nikomu winna.",
    description:
      "Elegancka postać przechadza się po dojrzałej winnicy z zakapturzonym sokołem na dłoni. Dyscyplina dojrzała w dostatek, smakowany samotnie i bez przepraszania.",
    upright:
      "Ciesz się tym, co zbudowałaś, zbudowałeś. Dziewiątka Pentakli honoruje samowystarczalność, wyrobiony smak i bezpieczeństwo zapracowane latami dyscypliny. Wolno ci odpocząć w winnicy; nie przestanie być twoja.",
    reversed:
      "Ogród jest piękny i czuje się jak klatka, albo żadne żniwo nie wydaje się dostatecznym dowodem wartości. Wróć do pytania, czemu ta niezależność miała służyć.",
    questions: [
      "Na co zapracowałam, zapracowałem, czym jeszcze nie pozwoliłem sobie nacieszyć?",
      "Czy moja niezależność służy mojemu życiu, czy zastępuje jego części?",
    ],
    musicSku: "bene-gesserit",
  }),
  w(10, "Dziesiątka", "Dziesiątka Pentakli", {
    keywords: ["dziedzictwo", "trwały majątek", "ciągłość rodziny", "korzenie"],
    keywordsReversed: ["spory o schedę", "chwiejność u korzenia", "myślenie na kwartał"],
    essence: "Dziesięć monet ułożonych na łuku bramy, przez którą przechodzą trzy pokolenia.",
    description:
      "Starzec przygląda się rodzinie i jej psom na zamożnym dziedzińcu, a dziesięć pentakli nakłada się na scenę jak ukryte drzewo życia. Majątek jako coś, co przeżywa swojego twórcę.",
    upright:
      "Myśl dekadami. Dziesiątka Pentakli dotyczy dziedzictwa: bezpieczeństwa rodziny, instytucji, tradycji i dóbr budowanych do przekazania. Dbaj o korzenie, a sad cię przetrwa.",
    reversed:
      "Fundament pokazuje rysy: tarcia w rodzinie o zasoby, albo zyski wyciskane na ten kwartał kosztem następnego pokolenia. Naprawiaj od korzenia.",
    questions: [
      "Co buduję, co powinno mnie przetrwać?",
      "Który rodzinny wzorzec wokół pieniędzy i bezpieczeństwa kontynuuję, i czy jest tego wart?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(11, "Paź", "Paź Pentakli", {
    keywords: ["pilne początki", "cel wzięty na serio", "nauka przez działanie", "sny z gruntem"],
    keywordsReversed: ["odkładanie", "dłubanie po łebkach", "plany bez gleby"],
    essence: "Moneta uniesiona pod światło jak pytanie warte lat.",
    description:
      "Młoda postać na zielonym polu studiuje pentakl trzymany na wysokości oczu, nie widząc nic innego. Ambicja w fazie ucznia: pokorna, pochłonięta, całkowicie szczera.",
    upright:
      "Zacznij terminowanie. Paź Pentakli błogosławi kursom rozpoczętym, umiejętnościom studiowanym, małym przedsięwzięciom prowadzonym dla nauki. Traktuj cel jak rzemiosło, a rzemiosło jak drogę.",
    reversed:
      "Kurs kupiony i nieotwarty, marzenie zbadane na śmierć. Zamień godzinę planowania na godzinę roboty.",
    questions: [
      "Czego jestem gotowa, gotów uczyć się na serio, zamiast podziwiać z daleka?",
      "Jaka jest najmniejsza prawdziwa wersja tego celu, którą mogę zacząć teraz?",
    ],
    musicSku: "lofi-focus",
  }),
  w(12, "Rycerz", "Rycerz Pentakli", {
    keywords: ["metodyczny postęp", "niezawodność", "rutyna", "wolny koń, który dociera"],
    keywordsReversed: ["stagnacja", "uparte rutyny", "nuda pomylona ze stabilnością"],
    essence: "Jedyny rycerz, którego koń stoi, i którego pola są wszystkie zaorane.",
    description:
      "Rycerz siedzi na ciężkim czarnym koniu z pentaklem w dłoni, przeglądając zaorane pola. Bez szarży, bez dramatu: całe królestwo doprowadzania do końca.",
    upright:
      "Wygrywaj rutyną. Rycerz Pentakli błogosławi nieefektownemu środkowi każdego długiego projektu: systemom dotrzymanym, obietnicom spełnionym, tej samej dobrej robocie zrobionej także dziś. Powoli: tak buduje się daleko.",
    reversed: "Rutyna stała się celem podróży. Zachowaj niezawodność; odśwież trasę.",
    questions: [
      "Która rutyna, dochowana wiernie, odmieniłaby ten rok?",
      "Gdzie moja stałość po cichu stała się utknięciem?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(13, "Królowa", "Królowa Pentakli", {
    keywords: ["praktyczna opieka", "ugruntowany dostatek", "zaradność", "sanktuarium z materii"],
    keywordsReversed: ["zaniedbanie siebie w służbie", "troska o byt", "dusząca praktyczność"],
    essence: "Tron w ogrodzie, zając w trawie i wszyscy nakarmieni.",
    description:
      "Królowa tuli pentakl na tronie rzeźbionym w owoce i kozły, nad nią łuk z róż, obok przemyka zając. Troska wyrażona ciepłym posiłkiem, zapłaconym rachunkiem i pokojem, który wita.",
    upright:
      "Opiekuj się praktycznie. Królowa Pentakli błogosławi opiekunce prawdziwych sanktuariów: budżetom, które się spinają, stołom, które karmią, ciałom otoczonym troską, z twoim włącznie. Dostatek ma tu ziemię za paznokciami.",
    reversed:
      "Wszyscy nakarmieni oprócz kucharki. Wpisz własne utrzymanie z powrotem na listę, którą tak dobrze prowadzisz.",
    questions: [
      "Kogo i co materialnie utrzymuję, i czy moje imię jest na tej liście?",
      "Co uczyniłoby mój dom bardziej sanktuarium w tym miesiącu?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
  w(14, "Król", "Król Pentakli", {
    keywords: ["mistrzostwo materii", "gospodarność", "dobrobyt", "budowniczy spełniony"],
    keywordsReversed: ["chciwość", "status ponad treść", "kontrola przez pieniądze"],
    essence: "Za nim wyrasta jego zamek; dłoń spoczywa na głowie byka, lekko.",
    description:
      "Król siedzi wśród winorośli w szacie tkanej w owoce, jedna dłoń na pentaklu, za nim zamek. Majątek jako skończone rzemiosło: zasoby opanowane i uczynione hojnymi.",
    upright:
      "Gospodaruj tym, co zbudowałaś, zbudowałeś. Król Pentakli oznacza mistrzostwo materii, które finansuje więcej niż siebie: przedsięwzięcia, rodziny, wspólnoty. Prowadź ze spokojem kogoś, kogo fundamenty są prawdziwe.",
    reversed:
      "Złoto zaczyna rządzić właścicielem: pogoń za statusem, hojność na liczniku, wartość odczytywana z sald. Zrób audyt tego, czemu majątek ma służyć.",
    questions: [
      "Czego wymaga teraz dojrzałe gospodarowanie moimi zasobami?",
      "Gdzie moje bezpieczeństwo może kupować moją stagnację?",
    ],
    musicSku: "neo-tokyo-ronin",
  }),
];

// Angielskie slugi rang w kolejności number 1-14, do slugEn.
const RANGI_EN = [
  "ace", "two", "three", "four", "five", "six", "seven",
  "eight", "nine", "ten", "page", "knight", "queen", "king",
];

function zKolorem(karty: KartaTarota[], suit: Kolor, element: KartaTarota["element"]): KartaTarota[] {
  return karty.map((k) => ({
    ...k,
    suit,
    element,
    slugEn: `${RANGI_EN[k.number - 1]}-of-${suit}`,
  }));
}

export const KARTY_MALE_PL: KartaTarota[] = [
  ...zKolorem(BULAWY, "wands", "fire"),
  ...zKolorem(KIELICHY, "cups", "water"),
  ...zKolorem(MIECZE, "swords", "air"),
  ...zKolorem(PENTAKLE, "pentacles", "earth"),
];
