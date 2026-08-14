import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";
import Link from "next/link";
export const metadata = {
  title: "Operating Clarity & Execution",
  description:
    "Clarify decision flow, ownership, handoffs, workflows, management systems, and the real source of execution friction.",
  alternates: { canonical: "/execution" },
  openGraph: {
    url: "https://akhadaconsulting.com/execution",
    title: "Operating Clarity & Execution | Akhada Consulting",
    description:
      "Build an operating system in which priorities become owned, coordinated action.",
  },
};
export default function Execution() {
  return (
    <>
      <PageHero
        kicker="Operating Clarity & Execution"
        title="Motion is not the same as execution."
      >
        <p>
          When priorities stall, the instinct is often to add people, software,
          automation, or outsourcing. None of them can repair an operating
          system that is not clear.
        </p>
      </PageHero>
      <main>
        <section className="content-block split">
          <div>
            <p className="eyebrow">Execution friction</p>
            <h2>Find the constraint beneath the symptom.</h2>
          </div>
          <div>
            <p className="section-intro">
              Work breaks down where decisions, ownership, and handoffs are
              ambiguous. Teams compensate with meetings, escalation, heroic
              effort, and new tools—while the underlying friction remains.
            </p>
            <div className="problem-list">
              <div>
                <span>01</span>Priorities lack a clearly accountable owner.
              </div>
              <div>
                <span>02</span>Decisions move upward because authority is
                uncertain.
              </div>
              <div>
                <span>03</span>Handoffs depend on memory and personal
                relationships.
              </div>
              <div>
                <span>04</span>Management rhythms track activity rather than
                outcomes.
              </div>
            </div>
          </div>
        </section>
        <section className="content-block light-section">
          <p className="eyebrow">What we clarify</p>
          <h2>An operating structure people can use.</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Decision flow &amp; authority</h3>
              <p>
                Define which decisions exist, who makes them, what inputs
                matter, and when escalation is appropriate.
              </p>
            </div>
            <div className="service-item">
              <h3>Ownership &amp; handoffs</h3>
              <p>
                Make outcomes and boundaries explicit so work moves across
                functions without falling into organizational gaps.
              </p>
            </div>
            <div className="service-item">
              <h3>Workflows &amp; SOPs</h3>
              <p>
                Document repeatable work where consistency creates value—without
                turning judgment into bureaucracy.
              </p>
            </div>
            <div className="service-item">
              <h3>Management systems</h3>
              <p>
                Install practical cadences for priorities, accountability,
                learning, and timely course correction.
              </p>
            </div>
          </div>
        </section>
        <section className="content-block">
          <p className="principle">
            People, platforms, automation, and global talent are multipliers.
            What they multiply depends on the clarity of the system they enter.
          </p>
          <p className="section-intro" style={{ marginTop: 40 }}>
            Once the operating logic is clear, the right execution capacity
            becomes easier to identify. Where global talent is appropriate,
            Akhada can help leaders{" "}
            <Link className="text-link" href="/execution/global-teams">
              design and improve global teams
            </Link>{" "}
            without confusing labor access for operating strategy.
          </p>
        </section>
        <CTA title="Turn priorities into owned, coordinated action." />
      </main>
      <SiteFooter />
    </>
  );
}
