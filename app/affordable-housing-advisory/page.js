import PageHero from "@/components/PageHero";
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
      <PageHero
        light
        kicker="Affordable Housing & Public Funding Advisory"
        title="Navigate Government. Advance Affordable Housing."
      >
        <p>
          Akhada Consulting helps affordable housing developers and
          organizations navigate public funding programs, government agencies,
          program requirements, and public-sector partnerships.
        </p>
      </PageHero>
      <main>
        <section className="content-block">
          <div className="split">
            <div>
              <p className="eyebrow">Who we serve</p>
              <h2>Housing work across public and private boundaries.</h2>
            </div>
            <p className="section-intro">
              Affordable housing requires more than a viable development
              concept. It requires alignment among capital, programs, agencies,
              communities, and implementation partners.
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
              <h3>01. Clarify Funding Paths</h3>
              <ul>
                <li>Public funding opportunity and eligibility assessment</li>
                <li>LIHTC agency, process, and public-sector navigation</li>
                <li>HUD, HOME, CDBG, and related programs</li>
                <li>State and local funding</li>
                <li>Application coordination and public-funding strategy</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>02. Navigate Government</h3>
              <ul>
                <li>Municipal, county, state, and federal agency engagement</li>
                <li>Interpretation of public processes</li>
                <li>Stakeholder coordination</li>
                <li>Communication strategy</li>
                <li>Navigation of agency priorities</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>03. Structure Partnerships</h3>
              <ul>
                <li>Early-stage opportunity assessment</li>
                <li>Public-private partnership strategy</li>
                <li>Government and community alignment</li>
                <li>Partner and resource identification</li>
                <li>Affordable and workforce housing strategy</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>04. Support Implementation</h3>
              <ul>
                <li>Housing program design and administration</li>
                <li>Implementation planning</li>
                <li>Reporting and documentation support</li>
                <li>Compliance-process coordination</li>
                <li>Cross-agency coordination</li>
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
            <p className="eyebrow">Current capability</p>
            <h3>ARPA Housing Implementation and Closeout Support</h3>
            <p>
              Support for organizations working through program implementation,
              coordination, documentation, reporting, and closeout requirements.
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
