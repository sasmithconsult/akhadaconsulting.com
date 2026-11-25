import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";
export const metadata = {
  title: "Offshore Operations & Turnarounds",
  description:
    "Akhada helps companies fix underperforming outsourced operations, build high-performing offshore teams, and strengthen operational leadership.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "https://akhadaconsulting.com/",
    title: "Offshore Operations & Turnarounds | Akhada Consulting",
    description:
      "Get more value from your outsourced operations with experienced operational leadership.",
  },
};
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              Outsourcing strategy & operational turnarounds
            </p>
            <h1>
              Your offshore team should be making your business stronger.
            </h1>
            <p className="lede">
              We help companies fix underperforming outsourced operations, build high-performing teams, and strengthen operational leadership.
            </p>
            <a
              className="button"
              href="https://calendly.com/scott8smith/offshore-operations-consultation"
              target="_blank"
              rel="noreferrer"
            >
              Book a confidential consultation <span>↗</span>
            </a>
          </div>
        </section>
        <section className="section problem split">
          <div>
            <p className="eyebrow">When outsourcing falls short</p>
            <h2>You invested in capacity. Not more work for your managers.</h2>
          </div>
          <div>
            <p className="section-intro">
              The problem is not always the offshore team. Leadership, training, communication, and operating structure can all limit performance.
            </p>
            <div className="problem-list">
              <div>
                <span>01</span>Your managers spend too much time chasing work.
              </div>
              <div>
                <span>02</span>Quality and delivery are inconsistent.
              </div>
              <div>
                <span>03</span>Ownership and accountability are unclear.
              </div>
              <div>
                <span>04</span>The expected financial benefits have not materialized.
              </div>
            </div>
          </div>
        </section>
        <section className="section authority authority-with-portrait">
          <div>
            <p className="eyebrow">Experience under pressure</p>
            <h2>Advice grounded in operating reality.</h2>
            <p className="muted">
              Scott Smith has spent decades building, leading, and advising organizations, including 15 years working with teams in India, three years living there, and experience leading teams in the Philippines. He understands the challenges on both sides of an outsourcing relationship.
            </p>
          </div>
          <figure className="principal-portrait">
            <img
              src="/images/scott-smith-headshot.png"
              alt="Scott Smith, Principal Advisor at Akhada Consulting"
              width="1024"
              height="1024"
            />
            <figcaption>Scott Smith · Principal Advisor</figcaption>
          </figure>
          <blockquote className="quote">
            The goal is not simply lower labor costs. It is a stronger, more capable business.
          </blockquote>
        </section>
        <section className="section">
          <p className="eyebrow">How we help</p>
          <div className="split">
            <h2>Fix. Build. Lead.</h2>
            <p className="section-intro">
              Whether you have an existing offshore team or are building one, we focus on the business outcomes you need.
            </p>
          </div>
          <div className="cards">
            <Link className="card" href="/offshore">
              <span className="card-num">01 / FIX</span>
              <h3>Fix underperforming operations</h3>
              <p>
                Identify what is holding your offshore operation back and restore performance through practical changes to leadership, workflows, and accountability.
              </p>
              <span className="text-link">Explore operational turnarounds →</span>
            </Link>
            <Link className="card" href="/execution/global-teams">
              <span className="card-num">02 / BUILD</span>
              <h3>Build high-performing teams</h3>
              <p>
                Build offshore capacity with clear roles, training, management structure, and measurable expectations.
              </p>
              <span className="text-link">Explore global teams →</span>
            </Link>
            <Link className="card" href="/advisory">
              <span className="card-num">03 / LEAD</span>
              <h3>Lead distributed operations</h3>
              <p>
                Strengthen management, decision-making, and accountability with experienced operational leadership.
              </p>
              <span className="text-link">Explore advisory →</span>
            </Link>
          </div>
        </section>
        <section className="section process">
          <p className="eyebrow">How we work</p>
          <h2>Diagnose before prescribing.</h2>
          <div className="steps">
            <div>
              <span>01</span>
              <h3>See clearly</h3>
              <p>
                Surface the decisions, dependencies, and patterns beneath the
                presenting issue.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Design deliberately</h3>
              <p>
                Define practical ownership, authority, structure, and operating
                expectations.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Build capacity</h3>
              <p>
                Support leaders as new decisions and management practices become
                operating reality.
              </p>
            </div>
          </div>
        </section>
        <section className="section feature-row">
          <div className="podcast-cover-wrap">
            <img
              className="podcast-cover"
              src="/images/stoic-inner-strategy-cover.png"
              alt="The Stoic Inner Strategy with Scott Smith podcast cover"
              width="2048"
              height="2048"
            />
          </div>
          <div>
            <p className="eyebrow">Ideas for the internal work</p>
            <h2>Leadership begins with self-command.</h2>
            <p className="section-intro">
              The Stoic Inner Strategy explores responsibility, judgment,
              decision-making, and the discipline required to lead under
              pressure.
            </p>
            <div className="button-row">
              <Link className="button" href="/podcast">
                Explore the podcast →
              </Link>
              <a
                className="text-link"
                href="https://thestoicinnerstrategy.buzzsprout.com/"
                target="_blank"
                rel="noreferrer"
              >
                Buzzsprout ↗
              </a>
            </div>
          </div>
        </section>
        <CTA
          title="Get more from your outsourced operations."
          text="Book a confidential 30-minute conversation about your team, your expectations, and what needs to change. No obligation or preparation required."
          href="https://calendly.com/scott8smith/offshore-operations-consultation"
          label="Book an offshore operations consultation"
        />
      </main>
      <SiteFooter />
    </>
  );
}
