import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Insights for Founder-Led Companies",
  description:
    "Practical guidance from Akhada Consulting on founder dependency, executive leadership, operating capacity, and global-team performance.",
  alternates: { canonical: "/insights" },
  openGraph: {
    url: "https://akhadaconsulting.com/insights",
    title: "Insights for Founder-Led Companies | Akhada Consulting",
    description:
      "Clear thinking for leaders navigating founder dependency, executive hiring, execution, and global teams.",
  },
};

const insights = [
  {
    category: "Founder Dependency",
    title: "How to Reduce Founder Dependency",
    description:
      "Why capable teams still rely too heavily on the founder, and how clearer ownership, authority, and management capacity begin to change it.",
    href: "/reducing-founder-dependency",
  },
  {
    category: "Executive Leadership",
    title: "When Should a Founder-Led Company Hire a COO?",
    description:
      "How to distinguish a true COO mandate from founder overload, weak functional leadership, unclear decisions, or a missing operating system.",
    href: "/when-to-hire-a-coo",
  },
  {
    category: "Global Teams",
    title: "Why Offshore Teams Fail Even When the People Are Capable",
    description:
      "How role design, context, authority, handoffs, and management conditions can undermine an otherwise capable offshore team.",
    href: "/why-offshore-teams-fail",
  },
];

const pageData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://akhadaconsulting.com/insights#collection",
      url: "https://akhadaconsulting.com/insights",
      name: "Insights for Founder-Led Companies",
      description:
        "Practical guidance from Akhada Consulting on leadership, execution, operating capacity, and global teams.",
      isPartOf: { "@id": "https://akhadaconsulting.com/#website" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: insights.map((insight, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://akhadaconsulting.com${insight.href}`,
          name: insight.title,
        })),
      },
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
          name: "Insights",
          item: "https://akhadaconsulting.com/insights",
        },
      ],
    },
  ],
};

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData) }}
      />
      <PageHero
        kicker="Akhada Insights"
        title="Clear thinking for the problems growth makes harder to ignore."
      >
        <p>
          Practical guidance for founders and executives navigating leadership,
          ownership, operating capacity, and the management consequences of
          growth.
        </p>
      </PageHero>

      <main>
        <section className="content-block split">
          <div>
            <p className="eyebrow">The purpose</p>
            <h2>Diagnose before prescribing.</h2>
          </div>
          <div>
            <p className="section-intro">
              Most business problems arrive wearing a convincing disguise.
              Founder overload looks like a time-management problem. Slow
              execution looks like a talent problem. Offshore friction looks
              like a geography problem.
            </p>
            <p>
              These guides examine the operating conditions beneath the visible
              symptom so leaders can act on the actual constraint.
            </p>
          </div>
        </section>

        <section className="content-block light-section">
          <p className="eyebrow">Latest guidance</p>
          <h2>Leadership, execution, and operating capacity.</h2>
          <div className="cards">
            {insights.map((insight, index) => (
              <Link className="card" href={insight.href} key={insight.href}>
                <span className="card-num">
                  {String(index + 1).padStart(2, "0")} / {insight.category.toUpperCase()}
                </span>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
                <span className="text-link">Read the guide →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-block split">
          <div>
            <p className="eyebrow">The throughline</p>
            <h2>More capacity begins with greater clarity.</h2>
          </div>
          <div>
            <p className="section-intro">
              More people, better software, a senior hire, or an offshore team
              can all create leverage. None of them can repair unclear
              ownership, weak judgment, or an operating system that sends every
              consequential decision back to the founder.
            </p>
            <p>
              Akhada works with leaders to understand the constraint first, then
              design the leadership and operating capacity the business
              actually needs.
            </p>
          </div>
        </section>

        <CTA
          title="Bring the actual problem into the conversation."
          text="A focused conversation can help separate the visible symptom from the leadership, ownership, or operating constraint beneath it."
        />
      </main>
      <SiteFooter />
    </>
  );
}
