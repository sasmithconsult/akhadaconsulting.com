import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";
import Link from "next/link";
export const metadata = {
  title: "Leadership & Management Advisory",
  description:
    "Principal advisory for founders and executives facing leadership pressure, unclear ownership, founder dependency, and management-capacity constraints.",
  alternates: { canonical: "/advisory" },
  openGraph: {
    url: "https://akhadaconsulting.com/advisory",
    title: "Leadership & Management Advisory | Akhada Consulting",
    description:
      "Strategic clarity, stronger judgment, and management capacity for leaders under pressure.",
  },
};
export default function Advisory() {
  return (
    <>
      <PageHero
        kicker="Leadership & Management Advisory"
        title="Better answers begin with a more accurate diagnosis."
      >
        <p>
          Principal advisory for founders and executives navigating
          consequential decisions, leadership strain, and businesses that still
          run too heavily through them.
        </p>
      </PageHero>
      <main>
        <section className="content-block split">
          <div>
            <p className="eyebrow">The advisory premise</p>
            <h2>Diagnose before prescribing.</h2>
          </div>
          <div>
            <p className="section-intro">
              Visible problems invite premature solutions. A missed target can
              look like a talent issue. Slow execution can look like a process
              issue. Founder overload can look like a time-management issue.
              Often, the real constraint sits deeper—in unclear authority,
              avoided decisions, weak ownership, or management that has not
              matured with the business.
            </p>
            <p className="principle">
              Akhada helps leaders see the system clearly enough to act with
              precision.
            </p>
          </div>
        </section>
        <section className="content-block light-section">
          <p className="eyebrow">Where we focus</p>
          <h2>Leadership that increases organizational capacity.</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Decision-making under pressure</h3>
              <p>
                Separate signal from noise, frame consequential choices, and
                make decisions consistent with the enterprise—not merely the
                urgency of the moment.
              </p>
            </div>
            <div className="service-item">
              <h3>Responsibility and ownership</h3>
              <p>
                Move beyond assigned tasks toward clear outcomes, real
                authority, and leaders who understand what is theirs to carry.
              </p>
            </div>
            <div className="service-item">
              <h3>Founder and executive dependency</h3>
              <p>
                Identify why decisions and exceptions keep returning to the top,
                then build the confidence and structure required to distribute
                judgment.
              </p>
            </div>
            <div className="service-item">
              <h3>Management judgment</h3>
              <p>
                Develop managers who can frame problems, make sound calls within
                their authority, and recognize when an issue truly requires
                escalation.
              </p>
            </div>
          </div>
        </section>
        <section className="content-block split">
          <h2>Advisory shaped around the decision in front of you.</h2>
          <div>
            <p className="section-intro">
              Engagements are shaped around the real issue. That may mean a
              focused decision process, ongoing principal counsel,
              leadership-team work, or an operating diagnosis that connects
              strategy with{" "}
              <Link className="text-link" href="/execution">
                execution clarity
              </Link>
              .
            </p>
            <p className="muted">
              Good advisory work should improve the quality and distribution of
              judgment inside the organization long after the conversation ends.
            </p>
          </div>
        </section>
        <CTA
          title="Strengthen the judgment behind the decisions your business now demands."
          text="When the issue is not obvious, a focused advisory conversation can clarify the decision, the leadership constraint, and the next move."
        />
      </main>
      <SiteFooter />
    </>
  );
}
