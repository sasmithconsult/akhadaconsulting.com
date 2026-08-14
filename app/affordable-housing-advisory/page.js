import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Affordable Housing & Public Funding Advisory",
  description:
    "Advisory for affordable housing developers, public agencies, nonprofits, and partnerships navigating public funding, government, and implementation.",
  alternates: { canonical: "/affordable-housing-advisory" },
  openGraph: {
    url: "https://akhadaconsulting.com/affordable-housing-advisory",
    title: "Affordable Housing & Public Funding Advisory | Akhada Consulting",
    description:
      "Navigate government. Clarify funding paths. Advance affordable housing.",
  },
};

const serve = [
  "Affordable housing developers",
  "Multifamily developers exploring affordable or workforce housing",
  "Nonprofit housing organizations",
  "Municipalities, counties, and housing authorities",
  "Public-private housing partnerships",
  "Professional-services organizations needing public-sector housing expertise",
];

export default function Housing() {
  return (
    <div className="housing-page">
      <SiteHeader light />

      <section className="housing-hero">
        <img
          className="housing-hero-image"
          src="/images/housing-hero.jpg"
          alt="Modern multifamily affordable housing development"
        />
        <div className="housing-hero-overlay" />
        <div className="housing-hero-inner">
          <p className="eyebrow">Public-Sector Partnership</p>
          <h1>Affordable Housing &amp; Public Funding Advisory</h1>
          <p className="housing-hero-lede">
            Affordable housing development requires more than a viable property
            and a strong financial plan. Developers must navigate public funding
            programs, government priorities, agency requirements, and community
            interests.
          </p>
          <p className="housing-hero-copy">
            Akhada Consulting helps affordable housing developers and
            organizations understand the public-sector landscape, identify viable
            funding and partnership opportunities, and move complex housing
            initiatives forward.
          </p>
          <a
            className="button housing-hero-cta"
            href="https://calendly.com/scott8smith/housing-strategy-conversation"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a housing strategy conversation →
          </a>
        </div>
      </section>

      <main>
        <section className="content-block split">
          <div>
            <p className="eyebrow">The hidden friction</p>
            <h2>Good housing projects can still stall for reasons that have little to do with the property.</h2>
          </div>
          <div>
            <p className="section-intro">
              Funding sources do not always align. Agency priorities and
              requirements shift. Public and private partners bring different
              incentives, timelines, and definitions of success. Coordination
              breaks down when everyone assumes someone else owns the next move.
            </p>
            <p className="principle">
              Akhada helps clarify that operating landscape so viable housing
              initiatives can move forward.
            </p>
          </div>
        </section>

        <section className="content-block">
          <div className="split">
            <div>
              <p className="eyebrow">Who we serve</p>
              <h2>Housing work across public and private boundaries.</h2>
            </div>
            <p className="section-intro">
              We work where development, public programs, government processes,
              community interests, and implementation responsibilities intersect.
            </p>
          </div>
          <div className="serve-list">
            {serve.map((x) => (
              <div key={x}>{x}</div>
            ))}
          </div>
        </section>

        <section className="content-block light-section">
          <p className="eyebrow">How we help</p>
          <h2>From opportunity to implementation.</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Funding Strategy</h3>
              <p>
                Identify viable public funding paths, eligibility requirements,
                and the agencies and programs that shape the opportunity.
              </p>
              <ul>
                <li>LIHTC and public-funding navigation</li>
                <li>HUD, HOME, CDBG, state, and local resources</li>
                <li>Funding strategy and application coordination</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Government Navigation</h3>
              <p>
                Understand how agency requirements, public priorities, approvals,
                and stakeholders affect the path from concept to implementation.
              </p>
              <ul>
                <li>Municipal, county, state, and federal engagement</li>
                <li>Public-process navigation</li>
                <li>Stakeholder and agency coordination</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Partnership Strategy</h3>
              <p>
                Structure the relationships required when public, private,
                nonprofit, and community interests must move together.
              </p>
              <ul>
                <li>Public-private partnership strategy</li>
                <li>Partner and resource identification</li>
                <li>Government and community alignment</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Implementation Support</h3>
              <p>
                Keep complex public-sector work moving once the strategy becomes
                an operating responsibility.
              </p>
              <ul>
                <li>Implementation planning and coordination</li>
                <li>Reporting, documentation, and compliance processes</li>
                <li>Cross-agency and program-administration support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-block approach">
          <p className="eyebrow">Our approach</p>
          <h2>Move complex work forward with discipline.</h2>
          <div className="approach-flow">
            <div>
              <span>01</span>
              <br />
              <strong>Assess</strong>
              <p>
                Understand the opportunity, eligibility, stakeholders,
                constraints, and implementation realities.
              </p>
            </div>
            <div>
              <span>02</span>
              <br />
              <strong>Align</strong>
              <p>
                Connect program requirements, public priorities, partners,
                resources, and a credible path forward.
              </p>
            </div>
            <div>
              <span>03</span>
              <br />
              <strong>Advance</strong>
              <p>
                Coordinate the work required to move from strategy through
                public process and implementation.
              </p>
            </div>
          </div>
          <div className="capability">
            <p className="eyebrow">Time-sensitive implementation support</p>
            <h3>ARPA Housing Implementation and Closeout Support</h3>
            <p>
              For organizations already carrying ARPA-funded housing work,
              Akhada can assist with the coordination, documentation, reporting,
              implementation, and closeout work required to bring the program
              through completion.
            </p>
          </div>
        </section>

        <CTA
          eyebrow="Discuss a housing opportunity"
          title="Bring public-sector clarity to the work ahead."
          text="Connect with Scott Smith and Akhada Consulting to discuss the program, partnership, funding path, or implementation challenge in front of you."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
