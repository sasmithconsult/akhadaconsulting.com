import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";
import Link from "next/link";

const bookingUrl = "https://calendly.com/scott8smith/dedicated-operator-conversation";

export const metadata = {
  title: "Dedicated Offshore Operators",
  description:
    "Add full-time operating capacity with a dedicated offshore operator for executive administration, CRM operations, project coordination, and back-office execution.",
  alternates: { canonical: "/execution/global-teams/dedicated-operator" },
  openGraph: {
    url: "https://akhadaconsulting.com/execution/global-teams/dedicated-operator",
    title: "Dedicated Offshore Operators | Akhada Consulting",
    description:
      "Add dedicated operating capacity without exporting ambiguity or assembling international hiring infrastructure on your own.",
  },
};

export default function DedicatedOperator() {
  return (
    <>
      <PageHero
        kicker="Dedicated Operators"
        title="Add full-time operating capacity without building another HR function."
      >
        <p>
          Akhada helps founder-led businesses add dedicated offshore operators
          for executive administration, CRM operations, project coordination,
          and back-office execution. We help define the role, source and screen
          candidates, support onboarding, and coordinate the international
          employment and payroll process through the appropriate structure.
        </p>
        <div className="button-row">
          <a
            className="button"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Discuss a dedicated operator <span>↗</span>
          </a>
          <Link className="text-link" href="/execution/global-teams">
            Explore global-team advisory →
          </Link>
        </div>
      </PageHero>

      <main>
        <section className="content-block split">
          <div>
            <p className="eyebrow">Capacity without exported ambiguity</p>
            <h2>A person will not fix unclear ownership.</h2>
          </div>
          <div>
            <p className="section-intro">
              Adding offshore capacity works when the role is clear, the work is
              ready to transfer, and someone inside the business remains
              accountable for outcomes. Akhada helps put those conditions in
              place before the operator is expected to perform.
            </p>
            <p className="principle">Do not export ambiguity.</p>
          </div>
        </section>

        <section className="content-block light-section">
          <p className="eyebrow">Typical roles</p>
          <h2>Dedicated capacity where the business needs execution.</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Executive &amp; Administrative Operator</h3>
              <p>
                Calendar, inbox, meeting coordination, follow-up, documentation,
                research, reporting, and the recurring administrative work that
                keeps pulling leadership back into the weeds.
              </p>
            </div>
            <div className="service-item">
              <h3>CRM &amp; GoHighLevel Operator</h3>
              <p>
                CRM hygiene, pipeline administration, campaign setup, workflow
                support, reporting, lead routing, follow-up coordination, and
                day-to-day system execution.
              </p>
            </div>
            <div className="service-item">
              <h3>Operations &amp; Project Operator</h3>
              <p>
                Project coordination, recurring process ownership, task and
                deadline management, cross-functional follow-up, documentation,
                and operating cadence support.
              </p>
            </div>
            <div className="service-item">
              <h3>Client &amp; Back-Office Operator</h3>
              <p>
                Client administration, onboarding coordination, reporting,
                records, internal support, and repeatable back-office work that
                needs a consistent owner.
              </p>
            </div>
          </div>
        </section>

        <section className="content-block">
          <p className="eyebrow">What Akhada provides</p>
          <h2>More than a candidate handoff.</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Role design &amp; ownership</h3>
              <p>
                Clarify what the operator should own, what success looks like,
                which decisions belong to them, and where escalation should occur.
              </p>
            </div>
            <div className="service-item">
              <h3>Candidate sourcing &amp; screening</h3>
              <p>
                Identify candidates against the actual role, systems, working
                style, communication requirements, and level of judgment the work
                requires.
              </p>
            </div>
            <div className="service-item">
              <h3>Onboarding &amp; payroll coordination</h3>
              <p>
                Support onboarding and coordinate international employment and
                payroll administration through the appropriate provider or
                structure for the engagement.
              </p>
            </div>
            <div className="service-item">
              <h3>Operating support</h3>
              <p>
                Reinforce expectations, communication rhythms, role clarity, and
                performance conversations so the relationship has a better chance
                to become durable capacity rather than another task queue.
              </p>
            </div>
          </div>
        </section>

        <section className="process section">
          <p className="eyebrow">How it works</p>
          <h2>Clarify. Match. Deploy.</h2>
          <div className="steps">
            <div>
              <span>01</span>
              <h3>Clarify the role</h3>
              <p>
                Identify the work that should move, the systems involved, the
                manager responsible, and the outcomes the operator needs to own.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Match the operator</h3>
              <p>
                Source and evaluate candidates for the role rather than dropping
                a generic assistant into a business and hoping the fit works.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Deploy &amp; reinforce</h3>
              <p>
                Support the handoff, establish working rhythms, and help the
                operator become genuine capacity inside the operating system.
              </p>
            </div>
          </div>
        </section>

        <section className="content-block authority">
          <div>
            <p className="eyebrow">Straightforward monthly pricing</p>
            <h2>Dedicated operators start at $3,000 per month.</h2>
            <p className="muted">
              Final pricing depends on the role, experience level, location, and
              employment structure. The model is built around dedicated capacity,
              not task-by-task freelancing or bargain hourly labor.
            </p>
          </div>
          <div>
            <p className="quote">You are not buying hours. You are adding owned capacity.</p>
            <p>
              Akhada’s role is to help make sure the person, the work, and the
              management system fit together.
            </p>
          </div>
        </section>

        <section className="content-block light-section">
          <p className="eyebrow">Who this is for</p>
          <div className="service-grid">
            <div className="service-item">
              <h3>A strong fit</h3>
              <ul>
                <li>You have enough recurring work for dedicated capacity.</li>
                <li>You know which function needs a real owner.</li>
                <li>You can provide context, access, and a responsible manager.</li>
                <li>You value reliability and fit more than the lowest hourly rate.</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Probably not a fit</h3>
              <ul>
                <li>You need a few disconnected tasks completed each month.</li>
                <li>You are shopping primarily for the cheapest available labor.</li>
                <li>You are not ready to delegate access, context, or authority.</li>
                <li>You want a person to compensate for a role nobody has defined.</li>
              </ul>
            </div>
          </div>
        </section>

        <CTA
          eyebrow="Ready to add capacity?"
          title="Define what the operator should own before you make the hire."
          text="A focused conversation can clarify the role, the work to transfer, the systems involved, and whether a dedicated offshore operator is the right next move."
          href={bookingUrl}
          label="Discuss a dedicated operator"
        />
      </main>

      <SiteFooter />
    </>
  );
}
