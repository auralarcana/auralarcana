// Polskie artykuły przewodnika. slugEn łączy z wersją angielską (hreflang).

import type { BlokTresci } from "../artykuly";

export interface ArtykulPl {
  slug: string;
  slugEn: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  blocks: BlokTresci[];
}

export const ARTYKULY_PL: ArtykulPl[] = [
  {
    slug: "jak-podejsc-do-czytania-tarota",
    slugEn: "how-to-approach-a-tarot-reading",
    title: "Jak podejść do czytania tarota",
    description:
      "Praktyczne wprowadzenie do czytania tarota: jak sformułować pytanie, jak dobierać karty i jak interpretować to, co widzisz, bez zabobonu i bez ani jednej przepowiedni.",
    date: "2026-10-18",
    readingTime: "6 min",
    blocks: [
      {
        t: "p",
        text: "Do czytania tarota nie trzeba zdolności parapsychicznych. Czytanie wymaga czegoś cichszego i rzadszego: uczciwego pytania, odrobiny ciszy i gotowości, by spojrzeć na własną sytuację pod kątem, którego się nie wybrało. Kąt dostarczają karty. Całą resztę dostarczasz ty.",
      },
      { t: "h2", text: "Czym naprawdę jest czytanie" },
      {
        t: "p",
        text: "Talia tarota to podręczna biblioteka 78 ludzkich sytuacji: początków, zdrad, żniw, bezsennych nocy, powrotów. Dobierając karty, nie odbierasz wiadomości z przyszłości. Losujesz z tej biblioteki trzy przypadkowe strony i pytasz: gdyby to było o mojej sytuacji, co by mówiło? Losowość jest tu sednem. Przerywa pętlę zwykłych myśli i wprowadza do pokoju naprawdę nową perspektywę.",
      },
      {
        t: "p",
        text: "Dlatego czytanie potrafi być niesamowicie celne bez niczego nadprzyrodzonego. Karty to lustra o znakomitych kątach. Cokolwiek w nich widzisz, i tak było już twoje.",
      },
      { t: "h2", text: "Formułowanie pytania" },
      {
        t: "p",
        text: "Słabe pytania dają słabe czytania. Pytanie w stylu: czy dostanę tę pracę, nie daje nic do roboty: karta nie odpowie tak ani nie, a czekanie nie jest praktyką. Mocne pytania są otwarte i własne: co powinnam zrozumieć o tej szansie, albo: co we mnie potrzebuje uwagi, gdy podejmuję tę decyzję. Pytaj o to, co możesz zobaczyć, poczuć lub zrobić. Przyszłość i tak zjawia się według własnego rozkładu.",
      },
      { t: "h2", text: "Dobieranie i czytanie kart" },
      {
        t: "p",
        text: "Usiądź gdzieś cicho. Włącz coś atmosferycznego i instrumentalnego, jeśli pomaga ci to zejść pod powierzchnię dnia; dokładnie po to istnieje nasza biblioteka muzyki. Trzymaj pytanie lekko w myślach, dobierz karty i zanim przeczytasz jakąkolwiek interpretację, przyjrzyj się każdemu obrazowi i zauważ pierwszą reakcję. Ten instynktowny błysk rozpoznania albo oporu to dane.",
      },
      {
        t: "p",
        text: "Potem przeczytaj znaczenie karty i zadaj jedyne pytanie, które się liczy: gdzie to jest teraz w moim życiu? Karta nigdy nie jest o karcie. Wieża nie jest o wieżach. Jest o tym, o czym już podejrzewasz, że długo nie postoi.",
      },
      { t: "h2", text: "Krótko o odwróceniach" },
      {
        t: "p",
        text: "Karta odwrócona to ta sama energia zwrócona do wewnątrz, zablokowana albo zaległa. Śmierć prosta to zakończenie w ruchu; odwrócona, zakończenie odpychane. Początkujący mogą pominąć odwrócenia całkowicie i niewiele stracą. Kiedy będziesz na nie gotowa, nasze czytanie pozwala je włączyć lub wyłączyć.",
      },
      { t: "h2", text: "Co zrobić potem" },
      {
        t: "p",
        text: "Zapisz karty i po jednym zdaniu o tym, czego każda zdawała się dotykać. Wróć za tydzień. Wartość tarota procentuje w przeglądzie: wzorce w twoich dobraniach to wzorce twojej uwagi, a patrzenie, jak się zmieniają, to patrzenie, jak zmieniasz się ty. To, a nie przepowiadanie, jest starą i uczciwą magią kart.",
      },
    ],
  },
  {
    slug: "wielkie-i-male-arkana",
    slugEn: "major-and-minor-arcana",
    title: "Wielkie i Małe Arkana: dwa języki talii",
    description:
      "Co naprawdę przedstawiają 22 karty Wielkich Arkanów i 56 kart Małych Arkanów, czym się różnią i jak je ważyć, gdy pojawiają się razem w rozkładzie.",
    date: "2026-10-18",
    readingTime: "5 min",
    blocks: [
      {
        t: "p",
        text: "Każda talia tarota mówi dwoma językami. Wielkie Arkana mówią gromem: 22 karty archetypu i przeznaczenia, wielkie rozdziały, którymi pisze się życie. Małe Arkana mówią pogodą: 56 kart nastrojów, dni roboczych, kłótni i małych zwycięstw, faktura tygodnia, który naprawdę przeżywasz. Dobre czytanie słucha obu.",
      },
      { t: "h2", text: "Wielkie Arkana: podróż Głupca" },
      {
        t: "p",
        text: "Wielkie Arkana biegną od 0, Głupca, do 21, Świata, i tradycyjnie czyta się je jako jedną ciągłą opowieść. Głupiec wyrusza, nic nie wiedząc; spotyka moc, Maga, i tajemnicę, Arcykapłankę; uczy się miłości, dyscypliny i straty; przeżywa zawalenie Wieży; zdrowieje pod Gwiazdą; aż wreszcie tańczy w domkniętym kręgu Świata. To nie jest niczyja biografia. To biografia każdego, i dlatego te karty lądują w czytaniach z takim ciężarem.",
      },
      {
        t: "p",
        text: "Gdy w twoim rozkładzie pojawia się Wielka Arkana, talia wskazuje coś strukturalnego: temat z korzeniami, lekcję, która będzie wracać, póki się nią nie zajmiesz, drzwi z gatunku tych raz na dekadę. Wielkich Arkanów się nie planuje. To one planują ciebie.",
      },
      { t: "h2", text: "Małe Arkana: cztery żywioły, cztery kolory" },
      {
        t: "p",
        text: "56 małych kart dzieli się na cztery kolory, a każdy włada jednym żywiołem i jedną dziedziną zwykłego życia. Buławy niosą ogień: wolę, twórczość, ambicję, projekty, przy których zapominasz jeść. Kielichy niosą wodę: uczucia, miłość, intuicję, żałobę, wszystko, co płynie. Miecze niosą powietrze: myśl, prawdę, konflikt, błogosławieństwo i przekleństwo ostrego umysłu. Pentakle niosą ziemię: pracę, pieniądze, zdrowie, dom, powolne królestwo materii.",
      },
      {
        t: "p",
        text: "Wewnątrz każdego koloru karty numerowane kreślą łuk od czystego daru asa po spełnienie dziesiątki, a karty dworskie, Paź, Rycerz, Królowa i Król, ucieleśniają żywioł w czterech stadiach dojrzałości: uczeń, ten, który rusza, ta, która strzeże, mistrz.",
      },
      { t: "h2", text: "Jak je ważyć razem" },
      {
        t: "p",
        text: "Rozkład ciężki od Wielkich Arkanów opisuje życie w przebudowie; weź go na serio i ruszaj się powoli. Rozkład z samych małych kart opisuje okoliczności w ruchu i zwykle dobrze reaguje na proste, praktyczne działanie. Jedna Wielka Arkana wśród małych bywa zawiasem: czytaj małe jako sytuację, a wielką jako to, o czym ta sytuacja naprawdę jest. Oba języki rzadko się kłócą, a kiedy już, ostatnie słowo mają Wielkie Arkana.",
      },
    ],
  },
  {
    slug: "jak-wybrac-rozklad-tarota",
    slugEn: "choosing-a-tarot-spread",
    title: "Jak wybrać rozkład tarota: od jednej karty po Kompas",
    description:
      "Jak działają rozkłady tarota, co znaczenia pozycji wnoszą do czytania i jak wybrać między kartą dnia, linią trzech kart a pełnym rozkładem pięciu kart.",
    date: "2026-10-18",
    readingTime: "5 min",
    blocks: [
      {
        t: "p",
        text: "Rozkład to zestaw nazwanych pozycji, na które rozdaje się karty: ta karta znaczy przeszłość, ta przeszkodę, ta kierunek. To pozycje wykonują cichą, ciężką robotę czytania. Ta sama karta, która na jednej pozycji znaczy twórczy ogień, na innej znaczy twórczą frustrację. Wybór rozkładu to wybór kształtu pytania.",
      },
      { t: "h2", text: "Jedna karta: praktyka codzienna" },
      {
        t: "p",
        text: "Pojedyncza karta to najbardziej niedoceniane czytanie w tarocie. Dobrana rano, daje dniowi temat do obserwacji; przejrzana wieczorem, uczy o kartach więcej niż jakakolwiek książka, bo przez cały dzień widzisz, gdzie pasowała, a gdzie nie. Jeśli zaczynasz, zacznij tutaj i zostań dłużej, niż się wydaje konieczne.",
      },
      { t: "h2", text: "Trzy karty: rozkłady robocze" },
      {
        t: "p",
        text: "Trzy pozycje wystarczą, by nadać sytuacji kształt. Przeszłość, teraźniejszość, przyszłość opowiada historię w czasie i pasuje do pytań o to, jak coś powstało i dokąd dryfuje. Sytuacja, przeszkoda, kierunek tnie inaczej: nazywa sprawę, nazywa przeszkodę i wskazuje przejście, co pasuje do decyzji. Karty czerpią znaczenie z siebie nawzajem: łagodna karta na pozycji przeszkody to zupełnie inna wiadomość niż ta sama karta na pozycji kierunku.",
      },
      { t: "h2", text: "Pięć kart: Kompas" },
      {
        t: "p",
        text: "Nasz najgłębszy rozkład ustawia kartę środkową, serce sprawy, wewnątrz czterech kierunków: co ci sprzyja, co się opiera, co płynie pod powierzchnią i dokąd to wszystko prowadzi. Używaj go do pytań z historią i stawką, i daj mu to, na co zasługuje: niespieszne pół godziny, świecę, jeśli lubisz, i długi kawałek atmosferycznej muzyki, żeby sesja miała wokół siebie ściany.",
      },
      { t: "h2", text: "Który wybrać" },
      {
        t: "p",
        text: "Dopasuj rozkład do ciężaru pytania, nie do apetytu na informacje. Codzienna pogoda chce jednej karty. Decyzja chce trzech. Węzeł, który zaciska się od lat, chce Kompasu, i być może notesu. Więcej kart nie znaczy więcej prawdy; znaczy więcej powierzchni, a to pomaga tylko wtedy, gdy zamierzasz przeczytać ją całą uczciwie.",
      },
    ],
  },
  {
    slug: "muzyka-do-tarota-i-rytualu",
    slugEn: "music-for-tarot-and-ritual",
    title: "Dźwięk i czytanie: dlaczego muzyka zmienia to, co mówią karty",
    description:
      "Jak atmosferyczna i ambientowa muzyka pogłębia czytania tarota, medytację i rytuał, i jak dobrać pejzaż dźwiękowy do praktyki, która jest przed tobą.",
    date: "2026-10-18",
    readingTime: "5 min",
    blocks: [
      {
        t: "p",
        text: "Każda praktykująca i każdy praktykujący uczy się tego prędzej czy później: czytanie zmienia się razem z pokojem. Te same karty rozłożone w świetle jarzeniówek, między mailami, mówią mniej niż przy uprzątniętym stole, w półmroku, z właściwym dźwiękiem w powietrzu. To nie mistycyzm, a przynajmniej nie tylko. To uwaga. Rytualna atmosfera to technologia zmiany jakości uwagi, a dźwięk jest jej najszybszą dźwignią.",
      },
      { t: "h2", text: "Co dźwięk robi z czytaniem" },
      {
        t: "p",
        text: "Wytrzymany pejzaż ambientowy robi trzy mierzalne rzeczy. Maskuje codzienne dźwięki, które wciąż odciągają uwagę z powrotem do zwykłego świata. Daje sesji granicę: gdy zaczyna się muzyka, zaczęło się czytanie, a gdy się kończy, czytanie jest zapieczętowane. I spowalnia. Długie tony bez bitu, za którym można podążać, zapraszają ten rozproszony, skojarzeniowy stan, w którym symbole naprawdę mówią, ten sam, który umożliwia pomysły spod prysznica i olśnienia na autostradzie.",
      },
      { t: "h2", text: "Dobieranie pejzażu do praktyki" },
      {
        t: "p",
        text: "Dopasuj muzykę do pracy. Głęboki rozkład o żałobie albo zakończeniach chce czegoś rozległego i melancholijnego, co daje uczuciom miejsce; nasze sesje Solastalgii skomponowano dokładnie w tym rejestrze. Zdyscyplinowanej pracy wewnętrznej, medytacji i przygotowaniu do czytania służą powolne, hipnotyczne drony w duchu naszej godziny Bene Gesserit. Pytania o to, co dziwne i nieznane, dobrze łączą się z nieziemskimi, obcymi fakturami. A gdy czytanie skończone i wraca zwykła praca, długa sesja lofi przeciąga nić atmosfery przez resztę dnia.",
      },
      { t: "h2", text: "Prosty rytuał dźwięku" },
      {
        t: "p",
        text: "Spróbuj tego przy następnym czytaniu. Wybierz jeden długi utwór, dłuższy niż sesja, żeby nigdy nie przerwał. Zacznij muzykę przed tasowaniem i pozwól pierwszej minucie minąć w ciszy po twojej stronie: po prostu oddychaj i przybądź. Dobieraj i czytaj jak zwykle. Gdy skończysz, zapisz notatki, póki muzyka jeszcze gra, a potem zakończ ją celowo. Utwór staje się naczyniem: następnym razem, gdy go włączysz, twoja uwaga będzie pamiętała drogę w dół.",
      },
      {
        t: "p",
        text: "Wszystko w naszej bibliotece muzyki powstało z myślą o takim użyciu i jest uporządkowane według przeznaczenia, nastroju i długości. Biblioteka mieszka na YouTube, za darmo, a nowe pejzaże dołączają, gdy tylko są gotowe.",
        {
    slug: "karta-dnia-tarot",
    slugEn: "daily-tarot-card-practice",
    title: "Karta dnia: jak ciągnąć jedną kartę tarota dziennie",
    description:
      "Prosta codzienna praktyka z tarotem: jak co rano wyciągnąć jedną kartę, o co pytać, jak odczytać ją w dwie minuty i jak dziennik kart zamienia nawyk w prawdziwy wgląd.",
    date: "2026-10-27",
    readingTime: "5 min",
    blocks: [
      {
        t: "p",
        text: "Karta dnia to najmniejsza praktyka tarota, jaka istnieje, i jedna z najbardziej użytecznych. Jedna karta, jedno pytanie, kilka minut przed początkiem dnia. Nie przepowie ci wtorku. Daje za to jeden obraz, który niesiesz przez kolejne godziny, i powód, żeby zauważyć, co dzieje się wokół niego.",
      },
      { t: "h2", text: "Dlaczego jedna karta wystarczy" },
      {
        t: "p",
        text: "Duże rozkłady są bogate, ale łatwo je przeczytać na siłę. Jedna karta wymusza skupienie. Nie da się schować w relacjach między pozycjami ani pominąć niewygodnej karty w rogu. Jest tylko ten symbol i twoja szczera reakcja na niego. Z tygodnia na tydzień karta dnia uczy też talii szybciej niż jakakolwiek książka, bo poznajesz każdą kartę w kontekście prawdziwych dni.",
      },
      { t: "h2", text: "O co pytać" },
      {
        t: "p",
        text: "Pytanie powinno być otwarte i dotyczyć ciebie. Dobre pytania na co dzień to: na co mam dziś zwrócić uwagę, jaką energię mogę wnieść w ten dzień, co teraz potrzebuje mojej troski. Unikaj pytań typu tak lub nie oraz pytań o cudze decyzje. Karta odpowiada najlepiej wtedy, gdy może być lustrem, a nie wyrokiem.",
      },
      { t: "h2", text: "Jak odczytać ją w dwie minuty" },
      {
        t: "p",
        text: "Najpierw spójrz na obraz, dopiero potem sprawdzaj znaczenie. Nazwij pierwszą rzecz, którą zauważasz: kolor, gest, przedmiot. Potem przeczytaj słowa kluczowe i znaczenie proste karty i zapytaj, gdzie ten motyw już jest w twoim życiu. Zapisz jedno zdanie. To całe czytanie. Jeśli karta wydaje się niejasna, zostaw ją taką i sprawdź, czy wieczór jej nie wyjaśni.",
      },
      { t: "h2", text: "Prowadź dziennik kart" },
      {
        t: "p",
        text: "Prawdziwa wartość pojawia się z czasem. Zapisz datę, kartę i swoje jedno zdanie. Wieczorem dopisz linijkę o tym, co naprawdę się wydarzyło. Po miesiącu zobaczysz wzory: karty, które wracają, kolory dominujące w niektórych tygodniach, tematy, wokół których krążysz. Taki zapis jest wart więcej niż jakakolwiek pojedyncza przepowiednia.",
      },
      { t: "h2", text: "Niech muzyka przytrzyma chwilę" },
      {
        t: "p",
        text: "Krótki rytuał pomaga utrzymać nawyk. Włącz spokojny utwór, oddychaj przez minutę, potem losuj. Nasze pejzaże dźwiękowe powstały właśnie dla takiej uwagi. Możesz też zacząć od Karty dnia na naszej stronie głównej, która każdego dnia pokazuje wszystkim tę samą kartę, a potem zrobić własne czytanie, gdy zechcesz pójść głębiej.",
      },
    ],
  },
  {
    slug: "tarot-na-milosc",
    slugEn: "love-tarot-reading",
    title: "Tarot na miłość: jak pytać karty o związek",
    description:
      "Jak czytać tarota o miłości bez strachu i bez fałszywych obietnic: lepsze pytania, prosty rozkład trzech kart na związek i co naprawdę znaczą najważniejsze karty miłosne.",
    date: "2026-10-27",
    readingTime: "6 min",
    blocks: [
      {
        t: "p",
        text: "Miłość to temat, z którym ludzie najczęściej przychodzą do tarota, i ten, w którym czytanie najłatwiej się psuje. Nadzieja i lęk chcą jasnej odpowiedzi, a karty rzadko są dobrym źródłem gwarancji. Czytany uczciwie tarot jest jednak świetnym narzędziem, by zrozumieć, co czujesz, czego chcesz i czego unikasz.",
      },
      { t: "h2", text: "Pytaj o siebie, nie o drugą osobę" },
      {
        t: "p",
        text: "Pytania w rodzaju czy on mnie kocha albo czy ona wróci oddają twoją moc kartom i drugiej osobie. Odwróć pytanie w stronę tego, co możesz zobaczyć i zmienić: co mam zrozumieć w tej relacji, co do niej wnoszę, co pomoże mi dobrze wybrać. Takie pytania dają czytania, z których naprawdę da się skorzystać.",
      },
      { t: "h2", text: "Prosty rozkład trzech kart na związek" },
      {
        t: "p",
        text: "Wyciągnij trzy karty i czytaj je jako: ty, więź między wami i to, czego związek potrzebuje teraz. Pierwsza karta opisuje twój stan i oczekiwania. Druga pokazuje jakość więzi taką, jaka jest dziś, a nie taką, jakiej byś chciała lub chciał. Trzecia wskazuje następny uczciwy krok: cierpliwość, rozmowę, granicę albo pożegnanie.",
      },
      { t: "h2", text: "Najważniejsze karty miłosne" },
      {
        t: "p",
        text: "Kochankowie mówią o wyborze i wartościach tak samo jak o romansie. Dwójka Kielichów to wzajemne rozpoznanie, spotkanie równych sobie. Dziesiątka Kielichów oznacza wspólne emocjonalne spełnienie. Trójka Mieczy wprost nazywa złamane serce i prosi, by żal płynął, a nie twardniał. Cesarzowa mówi o trosce i obfitości, Cesarz o zobowiązaniu i strukturze. Czytaj każdą z nich na tle prawdziwej sytuacji, nie bajki.",
      },
      { t: "h2", text: "Gdy karty są trudne" },
      {
        t: "p",
        text: "Trudna karta w czytaniu o miłości nie jest wyrokiem. Wieża może oznaczać złudzenie, które musiało upaść, Śmierć etap, który się kończy, żeby mógł zacząć się następny. Traktuj trudną kartę jak informację, która przyszła wcześnie, kiedy jeszcze masz czas, by coś z nią zrobić.",
      },
      { t: "h2", text: "Spróbuj teraz" },
      {
        t: "p",
        text: "Na Aura Arcana zrobisz darmowe czytanie w dowolnym rozkładzie, a w bibliotece kart sprawdzisz znaczenie proste i odwrócone każdej z 78 kart. Wybierz spokojną chwilę, włącz muzykę i zadaj pytanie, którego naprawdę boisz się zadać. Zwykle to na nie karty odpowiadają najlepiej.",
      },
    ],
  },
},
    ],
  },
];

export function znajdzArtykulPl(slug: string): ArtykulPl | undefined {
  return ARTYKULY_PL.find((a) => a.slug === slug);
}
