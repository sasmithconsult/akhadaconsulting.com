import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";
import Link from "next/link";
export const metadata = {
  title: "Global & Offshore Team Advisory",
  description:
    "Design or improve offshore and outsourced teams through clear strategy, communication, authority, accountability, and experienced global-team management.",
  alternates: { canonical: "/execution/global-teams" },
  openGraph: {
    url: "https://akhadaconsulting.com/execution/global-teams",
    title: "Global & Offshore Team Advisory | Akhada Consulting",
    description:
      "Make global talent serve operating strategy—not substitute for it.",
  },
};
export default function GlobalTeams() {
  return (
    <>
      <PageHero
        kicker="Global Teams"
        title="Global talent is a tool. Clarity makes it work."
      >
        <p>
          Akhada helps leaders decide when global capacity is appropriate,
          improve existing offshore relationships, and create the management
          conditions in which distributed teams can perform.
        </p>
      </PageHero>
      <main>
        <section className="content-block split">
          <div>
            <p className="eyebrow">Strategy before labor arbitrage</p>
            <h2>Do not export ambiguity.</h2>
          </div>
          <div>
            <p className="section-intro">
              A lower hourly cost does not compensate for unclear work. Offshore
              and outsourced relationships struggle when decision rights are
              vague, context travels poorly, managers are unprepared, or
              accountability is delegated to the vendor.
            </p>
            <p className="principle">
              Design the work and management system first. Then choose the
              capacity that serves it.
            </p>
          </div>
        </section>
        <section className="content-block light-section">
          <p className="eyebrow">Where Akhada helps</p>
          <div className="service-grid">
            <div className="service-item">
              <h3>Assess the fit</h3>
              <p>
                Determine which work is ready for a global model, what should
                remain close to the business, and what must be clarified first.
              </p>
            </div>
            <div className="service-item">
              <h3>Improve existing relationships</h3>
              <p>
                Diagnose performance friction across internal leaders, offshore
                teams, outsourcing partners, and the operating design connecting
                them.
              </p>
            </div>
            <div className="service-item">
              <h3>Define authority &amp; accountability</h3>
              <p>
                Establish outcomes, decision rights, escalation paths, service
                expectations, and visible measures of performance.
              </p>
            </div>
            <div className="service-item">
              <h3>Build communication &amp; management</h3>
              <p>
                Create rhythms and context-sharing practices that respect
                distance, culture, time zones, and the realities of distributed
                work.
              </p>
            </div>
          </div>
        </section>
        <section className="content-block authority">
          <div>
            <p className="eyebrow">Operating experience</p>
            <h2>Built on deep India and global-team experience.</h2>
            <p className="muted">
              Scott Smith’s experience working across India and global delivery
              environments informs a pragmatic view: international teams can
              create significant capacity, but only when leaders remain
              accountable for the strategy, system, and relationship.
            </p>
          </div>
          <div>
            <p className="quote">
              The team is not the strategy. The team serves the strategy.
            </p>
            <p>
              Global-team support sits within Akhada’s broader{" "}
              <Link className="text-link" href="/execution">
                execution advisory
              </Link>
              —not as the identity of the firm.
            </p>
          </div>
        </section>
        <CTA title="Make global capacity work as part of a clear operating system." />
      </main>
      <SiteFooter />
    </>
  );
}
