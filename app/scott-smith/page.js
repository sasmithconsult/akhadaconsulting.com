import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Scott Smith | Principal Advisor",
  description:
    "Meet Scott Smith, founder and Principal Advisor at Akhada Consulting. Scott advises founders and executives on leadership, judgment, execution, and operating capacity.",
  alternates: { canonical: "/scott-smith" },
  openGraph: {
    url: "https://akhadaconsulting.com/scott-smith",
    title: "Scott Smith | Principal Advisor at Akhada Consulting",
    description:
      "Twenty-eight years of experience building, leading, and advising organizations through growth, complexity, and change.",
    images: [
      {
        url: "/images/scott-smith-headshot.png",
        width: 1024,
        height: 1024,
        alt: "Scott Smith, founder and Principal Advisor at Akhada Consulting",
      },
    ],
  },
};

const profileData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://akhadaconsulting.com/scott-smith#profile",
      url: "https://akhadaconsulting.com/scott-smith",
      name: "Scott Smith | Principal Advisor",
      mainEntity: { "@id": "https://akhadaconsulting.com/#scott-smith" },
      isPartOf: { "@id": "https://akhadaconsulting.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://akhadaconsulting.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Scott Smith",
          item: "https://akhadaconsulting.com/scott-smith",
        },
      ],
    },
  ],
};

export default function ScottSmithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
      />
      <PageHero
        kicker="Founder & Principal Advisor"
        title="Scott Smith"
      >
        <p>
          Scott advises founders and executives when growth, pressure, or
          complexity has outpaced the leadership and operating capacity around
          them.
        </p>
      </PageHero>

      <main>
        <section className="content-block authority authority-with-portrait">
          <div>
            <p className="eyebrow">Operating experience</p>
            <h2>Advice shaped by responsibility, not theory alone.</h2>
            <p className="muted">
              Scott has spent 28 years building, leading, and advising
              organizations through growth, M&amp;A, organizational change, and
              the practical strain that appears when a business becomes harder
              to lead than it was to build.
            </p>
            <p className="muted">
              His experience includes building and leading teams across the
              United States and India, working across global delivery
              environments, and helping leaders clarify decisions, ownership,
              management expectations, and execution.
            </p>
          </div>
          <figure className="principal-portrait">
            <img
              src="/images/scott-smith-headshot.png"
              alt="Scott Smith, founder and Principal Advisor at Akhada Consulting"
              width="1024"
              height="1024"
            />
            <figcaption>Scott Smith · Founder &amp; Principal Advisor</figcaption>
          </figure>
          <blockquote className="quote">
            The goal is not to make the leader less important. It is to make the
            organization more capable.
          </blockquote>
        </section>

        <section className="content-block light-section">
          <p className="eyebrow">Where Scott works</p>
          <h2>Judgment, leadership, and operating capacity.</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Founder and executive advisory</h3>
              <p>
                Clarifying consequential decisions, leadership constraints, and
                the issues that continue to return to the top.
              </p>
              <Link className="text-link" href="/advisory">
                Explore advisory →
              </Link>
            </div>
            <div className="service-item">
              <h3>Operating clarity and execution</h3>
              <p>
                Designing clearer ownership, authority, handoffs, management
                rhythms, and accountability.
              </p>
              <Link className="text-link" href="/execution">
                Explore execution →
              </Link>
            </div>
            <div className="service-item">
              <h3>Global and offshore teams</h3>
              <p>
                Applying deep experience across India and global delivery to
                help organizations use international capacity deliberately.
              </p>
              <Link className="text-link" href="/execution/global-teams">
                Explore global teams →
              </Link>
            </div>
            <div className="service-item">
              <h3>Affordable housing</h3>
              <p>
                Building a specialist practice with Robin Smith focused on the
                intersection of housing, public programs, partnerships, and
                implementation.
              </p>
              <Link className="text-link" href="/affordable-housing-advisory">
                Explore affordable housing →
              </Link>
            </div>
          </div>
        </section>

        <section className="content-block split">
          <div>
            <p className="eyebrow">Perspective</p>
            <h2>Stillness before strategy.</h2>
          </div>
          <div>
            <p className="section-intro">
              Scott&apos;s work is grounded in a simple premise: leaders make
              better decisions when they can separate signal from noise,
              distinguish responsibility from control, and act from judgment
              rather than agitation.
            </p>
            <p>
              He hosts{" "}
              <Link className="text-link inline-link" href="/podcast">
                The Stoic Inner Strategy
              </Link>
              , a leadership and strategy podcast exploring responsibility,
              decision-making, self-command, and the internal work required to
              lead well under pressure.
            </p>
          </div>
        </section>

        <section className="content-block light-section">
          <div className="split">
            <div>
              <p className="eyebrow">Background</p>
              <h2>A long-term orientation toward useful work.</h2>
            </div>
            <div>
              <p className="section-intro">
                Scott holds a Bachelor of General Studies degree from Brigham
                Young University. He is completing graduate-level coursework in
                affordable housing development through Harvard Extension School
                while continuing his advisory and operating work.
              </p>
              <p>
                He lives in Arizona with his wife, Robin. Their blended family
                includes twelve children. When he is not working, studying, or
                recording, football is usually nearby.
              </p>
              <p>
                Connect with Scott on{" "}
                <a
                  className="text-link inline-link"
                  href="https://www.linkedin.com/in/scott8smith/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <CTA
          title="Bring the real decision into the room."
          text="A focused conversation can clarify what is actually constraining the business, what belongs to leadership, and what should change next."
        />
      </main>
      <SiteFooter />
    </>
  );
}
