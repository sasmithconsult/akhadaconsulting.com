import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "The Stoic Inner Strategy Podcast",
  description:
    "The Stoic Inner Strategy explores leadership, judgment, responsibility, decision-making, and self-command under pressure with Scott Smith.",
  alternates: { canonical: "/podcast" },
  openGraph: {
    url: "https://akhadaconsulting.com/podcast",
    title: "The Stoic Inner Strategy Podcast | Akhada Consulting",
    description:
      "Akhada thought leadership on judgment, responsibility, decision-making, and self-command under pressure.",
    images: [
      {
        url: "/images/stoic-inner-strategy-cover.png",
        width: 2048,
        height: 2048,
        alt: "The Stoic Inner Strategy with Scott Smith podcast cover",
      },
    ],
  },
};

export default function PodcastPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="podcast-hero">
          <div className="podcast-page-art">
            <img
              src="/images/stoic-inner-strategy-cover.png"
              alt="The Stoic Inner Strategy with Scott Smith podcast cover"
              width="2048"
              height="2048"
            />
          </div>
          <div className="podcast-page-copy">
            <p className="eyebrow">An Akhada Consulting podcast</p>
            <h1>The Stoic Inner Strategy</h1>
            <p className="lede">
              Practical reflections on leadership, judgment, responsibility,
              decision-making, and the self-command required to lead well under
              pressure.
            </p>
            <p className="muted">
              Hosted by Scott Smith, the show examines the internal work behind
              consequential leadership: seeing clearly, carrying what is yours,
              and acting deliberately when circumstances are difficult.
            </p>
            <div className="button-row">
              <a
                className="button"
                href="https://thestoicinnerstrategy.buzzsprout.com/"
                target="_blank"
                rel="noreferrer"
              >
                Listen to the Podcast ↗
              </a>
              <a
                className="button outline"
                href="https://calendly.com/scott8smith/founder-strategy-conversation"
                target="_blank"
                rel="noreferrer"
              >
                Start a Conversation ↗
              </a>
            </div>
            <p className="podcast-access-note">
              Browse the complete episode archive and listen on your preferred
              platform through the{" "}
              <a
                href="https://thestoicinnerstrategy.buzzsprout.com/"
                target="_blank"
                rel="noreferrer"
              >
                Buzzsprout show page
              </a>
              .
            </p>
          </div>
        </section>
        <section className="section podcast-themes">
          <p className="eyebrow">Themes of the show</p>
          <h2>The inner disciplines of practical leadership.</h2>
          <div className="steps">
            <div>
              <span>01</span>
              <h3>Judgment</h3>
              <p>Separating signal from noise and choosing deliberately.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Responsibility</h3>
              <p>Owning what is yours without being ruled by what is not.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Self-command</h3>
              <p>Maintaining clarity and agency when pressure rises.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
