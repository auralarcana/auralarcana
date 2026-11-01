import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prywatność",
  description:
    "Jak Aural Arcana obchodzi się z twoimi danymi: czytania działają w całości w przeglądarce i nigdy nie są zapisywane, analityka jest bezcookiesowa, a odtwarzacze YouTube ładują się dopiero po wciśnięciu play.",
  alternates: {
    canonical: "/pl/prywatnosc/",
    languages: { en: "/privacy/", pl: "/pl/prywatnosc/", "x-default": "/privacy/" },
  },
};

// Treść do przeglądu przez właścicielkę przed startem komercyjnym.
export default function StronaPrywatnosciPl() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">Drobny druk, który pozostał drobny</p>
        <h1 className="text-4xl">Prywatność</h1>
      </div>

      <article className="tekst-artykulu space-y-8">
        <section>
          <h2 className="mb-3 text-2xl">Twoje czytania zostają u ciebie</h2>
          <p>
            Czytania tarota na tej stronie działają w całości w twojej przeglądarce. Karty są
            tasowane na twoim urządzeniu, a wszystko, co wpiszesz jako pytanie lub intencję, nigdy
            nie opuszcza strony: nie jest przesyłane, logowane ani nigdzie zapisywane. Gdy
            zamykasz kartę przeglądarki, czytanie znika. Jedyny wyjątek to Inner Circle opisany niżej,
            do którego dołączasz z własnego wyboru.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Inner Circle: konto, dziennik i Wyrocznia</h2>
          {/* Do przeglądu przez właścicielkę: opis przetwarzania w strefie klienta. */}
          <p>
            Jeśli założysz konto, przechowujemy Twój adres e-mail oraz czytania, które sama
            zapiszesz w Arcana Journal (rozkład, karty, pytanie i notatki) na Supabase, w centrum
            danych w Unii Europejskiej, zabezpieczone tak, że tylko Ty możesz czytać swoje strony.
            Gdy rozmawiasz z Wyrocznią, karty na stole, Twoje pytanie, Twoje wiadomości i pięć
            ostatnich wpisów z dziennika są wysyłane do API Claude firmy Anthropic, aby wygenerować
            odpowiedź; Anthropic nie używa danych z API do trenowania modeli. Zapisujemy log każdej
            wymiany (czas, Twoje konto, długość w tokenach), żeby pilnować miesięcznego limitu i
            utrzymywać usługę, ale nie treść rozmowy. Strony dziennika możesz usunąć w każdej
            chwili, a na Twoją prośbę usuniemy całe konto.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Bez cookies śledzących</h2>
          <p>
            Poza opcjonalnym kontem Inner Circle ta strona niczego o tobie nie przechowuje i nie
            ustawia cookies reklamowych ani śledzących.
            Ruch mierzymy za pomocą Cloudflare Web Analytics: bez cookies i wyłącznie zbiorczo
            (odsłony, źródła wejść, kraj, typ urządzenia), bez tworzenia profilu ciebie jako osoby.
            Korzystamy też z Google Search Console, które pokazuje, jak strona wypada w wynikach
            Google, i niczego nie zapisuje w twojej przeglądarce.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Odtwarzacze YouTube</h2>
          <p>
            Muzyka na tej stronie jest osadzona z YouTube. Odtwarzacze ładują się dopiero po
            wciśnięciu play i używają trybu rozszerzonej prywatności YouTube
            (youtube-nocookie.com). Po rozpoczęciu odtwarzania YouTube (Google) przetwarza dane na
            zasadach własnej polityki prywatności, tak samo jak przy oglądaniu dowolnego filmu na
            samym YouTube. Zanim wciśniesz play, z serwerów graficznych YouTube pobierana jest
            wyłącznie miniatura.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Hosting</h2>
          <p>
            Jak każda strona internetowa, nasz dostawca hostingu przetwarza techniczne logi serwera
            (takie jak adresy IP i żądane strony) na potrzeby bezpieczeństwa i utrzymania. Nie są
            one używane do identyfikowania ani profilowania odwiedzających.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Kontakt</h2>
          <p>
            Pytania o prywatność są mile widziane przez dane kontaktowe na stronie informacyjnej
            naszego kanału YouTube.
          </p>
        </section>
      </article>
    </div>
  );
}
