import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Aural Arcana handles your data: readings run entirely in your browser and are never stored, analytics are cookieless, and YouTube embeds load only after you press play.",
  alternates: {
    canonical: "/privacy/",
    languages: { en: "/privacy/", pl: "/pl/prywatnosc/", "x-default": "/privacy/" },
  },
};

// Treść do przeglądu przez właścicielkę przed startem komercyjnym.
export default function StronaPrywatnosci() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <div className="mb-12 text-center">
        <p className="etykieta mb-3">The small print, kept small</p>
        <h1 className="text-4xl">Privacy</h1>
      </div>

      <article className="tekst-artykulu space-y-8">
        <section>
          <h2 className="mb-3 text-2xl">Your readings stay with you</h2>
          <p>
            Tarot readings on this site run entirely in your browser. The cards are shuffled on
            your device, and anything you type as a question or intention never leaves the page:
            it is not transmitted, logged or stored anywhere. When you close the tab, the reading
            is gone. The one exception is the Inner Circle, described below, which you choose to
            join.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">The Inner Circle: account, journal and the reader</h2>
          {/* Do przeglądu przez właścicielkę: opis przetwarzania w strefie klienta. */}
          <p>
            If you create an account, we store your email address and the readings you choose to
            save to your Arcana Journal (spread, cards, question and notes) on Supabase, in a data
            centre in the European Union, protected so that only you can read your pages. When you
            talk with the reader, the cards on the table, your question, your messages and your
            last five journal entries are sent to Anthropic&rsquo;s Claude API to generate the reply;
            Anthropic does not use API data to train its models. We keep a log of each
            conversation turn (time, your account, length in tokens) to enforce the monthly limit
            and to run the service, but not the text of the conversation itself. You can delete
            journal pages at any time, and you can ask us to delete your account entirely.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">No tracking cookies</h2>
          <p>
            Apart from the optional Inner Circle account, this site stores nothing about you and
            sets no advertising or tracking cookies. We measure
            traffic with Cloudflare Web Analytics, which is cookieless and aggregate (page views,
            referrers, country, device type) and builds no profile of you as an individual. We
            also use Google Search Console, which reports how the site appears in Google search
            and places nothing in your browser.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">YouTube embeds</h2>
          <p>
            Music on this site is embedded from YouTube. Embedded players load only after you
            press play, and they use YouTube's privacy enhanced mode (youtube-nocookie.com). Once
            you start playback, YouTube (Google) processes data under its own privacy policy, the
            same as when you watch any video on YouTube itself. Before you press play, only a
            thumbnail image is fetched from YouTube's image servers.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Hosting</h2>
          <p>
            Like every website, our hosting provider processes technical server logs (such as IP
            addresses and requested pages) for security and operations. These are not used to
            identify or profile visitors.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Contact</h2>
          <p>
            Questions about privacy are welcome through the contact details on our YouTube
            channel's about page.
          </p>
        </section>
      </article>
    </div>
  );
}
