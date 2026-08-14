import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";
export const metadata = {
  title: "Founder & Executive Advisory",
  description:
    "Akhada helps founders and executives strengthen leadership, clarify ownership, improve decisions, and build operating capacity beyond the founder.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "https://akhadaconsulting.com/",
    title: "Founder & Executive Advisory | Akhada Consulting",
    description:
      "Build the leadership and operating capacity your business needs to function without everything returning to you.",
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
              Principal advisory for consequential growth
            </p>
            <h1>
              You built a successful business. It shouldn’t still require you
              for everything.
            </h1>
            <p className="lede">
              Akhada works with founders and executives whose companies have
              grown faster than their management structure. We clarify
              ownership, strengthen leadership, improve decision-making, and
              build the operating capacity the business needs to function
              without everything coming back to the leader.
            </p>
            <a
              className="button"
              href="https://calendly.com/scott8smith/founder-strategy-conversation"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <span>↗</span>
            </a>
          </div>
        </section>
        <section className="section problem split">
          <div>
            <p className="eyebrow">The hidden constraint</p>
            <h2>Growth exposes what effort once concealed.</h2>
          </div>
          <div>
            <p className="section-intro">
              The problem is rarely a lack of commitment. It is that decisions,
              relationships, and operating knowledge still converge on one
              person.
            </p>
            <div className="problem-list">
              <div>
                <span>01</span>Important decisions wait for the founder.
              </div>
              <div>
                <span>02</span>Responsibility exists, but authority remains
                unclear.
              </div>
              <div>
                <span>03</span>Managers report activity without truly owning
                outcomes.
              </div>
              <div>
                <span>04</span>More people and tools create motion—not capacity.
              </div>
            </div>
          </div>
        </section>
        <section className="section authority authority-with-portrait">
          <div>
            <p className="eyebrow">Experience under pressure</p>
            <h2>Advice grounded in operating reality.</h2>
            <p className="muted">
              Scott Smith brings decades of founder, executive, global-team, and
              advisory experience to the work. Akhada’s perspective is
              practical: leadership is demonstrated through judgment,
              responsibility, and the systems that allow others to act well.
            </p>
          </div>
          <figure className="principal-portrait">
            <img
              src="/images/scott-smith-headshot.png"
              alt="Scott Smith, principal of Akhada Consulting"
              width="1024"
              height="1024"
            />
            <figcaption>Scott Smith · Principal</figcaption>
          </figure>
          <blockquote className="quote">
            The goal is not to make the leader less important. It is to make the
            organization more capable.
          </blockquote>
        </section>
        <section className="section">
          <p className="eyebrow">Core advisory areas</p>
          <div className="split">
            <h2>Clarity before complexity.</h2>
            <p className="section-intro">
              The work begins by identifying the actual constraint—not applying
              a fashionable answer to the visible symptom.
            </p>
          </div>
          <div className="cards">
            <Link className="card" href="/advisory">
              <span className="card-num">01 / ADVISORY</span>
              <h3>Leadership &amp; Management Advisory</h3>
              <p>
                Sharper judgment, stronger ownership, and management capacity
                for organizations that have outgrown founder-led coordination.
              </p>
              <span className="text-link">Explore advisory →</span>
            </Link>
            <Link className="card" href="/execution">
              <span className="card-num">02 / EXECUTION</span>
              <h3>Operating Clarity &amp; Execution</h3>
              <p>
                Clarify decisions, responsibilities, handoffs, and management
                rhythms so priorities reliably become outcomes.
              </p>
              <span className="text-link">Explore execution →</span>
            </Link>
            <Link className="card" href="/execution/global-teams">
              <span className="card-num">03 / GLOBAL TEAMS</span>
              <h3>Global Teams</h3>
              <p>
                Make offshore and outsourced capacity serve a clear
                strategy—with authority and accountability designed first.
              </p>
              <span className="text-link">Explore global teams →</span>
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
        <section className="section housing-teaser">
          <div className="teaser-box">
            <p className="eyebrow">Specialist practice</p>
            <h2>Affordable Housing &amp; Public Funding Advisory</h2>
            <p>
              A focused practice helping developers, organizations, and public
              partners navigate government, clarify funding paths, structure
              partnerships, and advance affordable housing.
            </p>
            <Link className="button" href="/affordable-housing-advisory">
              Explore the practice →
            </Link>
          </div>
        </section>
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
