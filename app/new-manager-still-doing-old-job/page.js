import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";
export const metadata = {
  "title": "New Manager, Same Old Workload?",
  "description": "Promoted someone to manager but kept their old workload? Decide what they keep, transfer, or stop so they have time to lead the team.",
  "alternates": {
    "canonical": "/new-manager-still-doing-old-job"
  },
  "openGraph": {
    "type": "article",
    "url": "https://akhadaconsulting.com/new-manager-still-doing-old-job",
    "title": "New Manager, Same Old Workload? | Akhada Consulting",
    "description": "Promoted someone to manager but kept their old workload? Decide what they keep, transfer, or stop so they have time to lead the team.",
    "publishedTime": "2026-11-02",
    "modifiedTime": "2026-11-02"
  }
};
const pageData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://akhadaconsulting.com/new-manager-still-doing-old-job#article",
      "url": "https://akhadaconsulting.com/new-manager-still-doing-old-job",
      "headline": "When a New Manager Is Still Doing Their Old Job",
      "description": "Promoted someone to manager but kept their old workload? Decide what they keep, transfer, or stop so they have time to lead the team.",
      "inLanguage": "en-US",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://akhadaconsulting.com/new-manager-still-doing-old-job"
      },
      "author": {
        "@id": "https://akhadaconsulting.com/#scott-smith"
      },
      "publisher": {
        "@id": "https://akhadaconsulting.com/#organization"
      },
      "isPartOf": {
        "@id": "https://akhadaconsulting.com/insights#collection"
      },
      "datePublished": "2026-11-02",
      "dateModified": "2026-11-02"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://akhadaconsulting.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Insights",
          "item": "https://akhadaconsulting.com/insights"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "New Manager, Old Workload",
          "item": "https://akhadaconsulting.com/new-manager-still-doing-old-job"
        }
      ]
    }
  ]
};
export default function NewManagerWorkloadPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData) }} />
    <PageHero kicker="Management capacity" title={"When a New Manager Is Still Doing Their Old Job"}>
      <p>{"When you promote someone to manager, decide which individual work they will retain, which work will move, and what the business will stop expecting from them. Management needs time in the role. It cannot depend on whatever remains after their previous workload is finished."}</p>
      <p>By <Link href="/scott-smith">Scott Smith</Link> · <time dateTime="2026-11-02">November 2, 2026</time></p>
    </PageHero>
    <main><article className={styles.article}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/insights">Insights</Link><span aria-hidden="true"> / </span><span>New Manager, Old Workload</span></nav>
<p>{"You promoted someone you trust. They know the work, care about the customer, and have been dependable when things get difficult."}</p>
<p>{"Now they have people to lead. They also have most of the work that made them valuable in the first place."}</p>
<p>{"Questions still come to you. Feedback is delayed. The new manager spends the day responding to other people and the evening catching up on their own assignments."}</p>
<p>{"Before deciding that they are struggling to become a leader, look at what you have asked the role to carry."}</p>
<h2>{"What changed besides the title?"}</h2>
<p>{"A promotion can change someone's responsibility without changing the way the business uses them."}</p>
<p>{"They are expected to set priorities, develop people, address performance, coordinate dependencies, and notice trouble early. Meanwhile, the company still counts on their old level of personal output."}</p>
<p>{"Something has to give. Often it is the management work, because a customer deadline is visible and a postponed coaching conversation is easier to overlook."}</p>
<p>{"Ask a concrete question: Which responsibilities ended when this person became a manager?"}</p>
<p>{"If the answer is none, examine whether you have created a role that can be performed within a reasonable working week."}</p>
<p>{"This can become another source of "}<Link className="text-link inline-link" href="/reducing-founder-dependency">{"founder dependency"}</Link>{". You have appointed a manager, but the business still depends on you for the management the person has no room to do."}</p>
<h2>{"Define the management work you actually need"}</h2>
<p>{"“Lead the team” does not tell either of you enough."}</p>
<p>{"Start with the result the team must produce. Then name the management work required to make that result dependable."}</p>
<p>{"That might include deciding the order of incoming work, balancing assignments, reviewing unfamiliar work before it reaches a customer, helping someone develop a missing skill, and addressing repeated performance gaps."}</p>
<p>{"Distinguish those responsibilities from work the founder will continue to own. A new manager cannot resolve a priority conflict if you reserve every decision about which customer commitment comes first."}</p>
<p>{"Where the authority is unclear, use the more detailed guidance on "}<Link className="text-link inline-link" href="/why-managers-escalate-decisions">{"why managers keep bringing decisions back to the founder"}</Link>{"."}</p>
<p>{"The purpose here is to make the workload visible. A recurring responsibility deserves room in the week, even when it does not produce a document or a billable hour."}</p>
<h2>{"Decide what they will keep, transfer, stop, or cover temporarily"}</h2>
<p>{"Review the person's current commitments together. Give each one an explicit destination."}</p>
<p><strong>{"Keep:"}</strong>{" Work the manager should continue to perform because it requires their expertise, serves an important relationship, or fits a deliberately combined management and delivery role."}</p>
<p><strong>{"Transfer:"}</strong>{" Work another person will own. Name that person, check their capacity, and agree on the context and practice they need before taking it over."}</p>
<p><strong>{"Stop:"}</strong>{" Work the business no longer needs, can simplify, or will consciously deprioritize. Every task does not deserve a replacement owner."}</p>
<p><strong>{"Cover temporarily:"}</strong>{" Work the new manager will retain during a transition. Give it a review date and a decision about what happens if the planned transfer is not ready."}</p>
<p>{"This is a conversation about the whole team, not just the promoted person. Moving a full workload onto two already-busy colleagues relocates the problem."}</p>
<p>{"You may need to reduce commitments, change service expectations, develop someone, or add capacity. Make that tradeoff explicitly. Do not hide it inside an expectation that everyone will somehow become more efficient."}</p>
<h2>{"A working manager still needs a workable role"}</h2>
<p>{"In a small company, a manager may reasonably continue doing substantial delivery work. There is no universal percentage of the week that should be reserved for management."}</p>
<p>{"The useful question is whether the combined responsibilities fit the conditions of this team."}</p>
<p>{"A stable team doing familiar work creates different management demands from a team with new hires, unclear handoffs, difficult customer commitments, or recurring performance concerns. Plan around the work in front of you."}</p>
<p>{"If you need a working manager, name the delivery work they retain and the management responsibilities that must still happen. Agree on what changes when those responsibilities conflict."}</p>
<p>{"Do not make personal heroics the standing answer. A role that only works when someone routinely catches up at night deserves another look."}</p>
<h2>{"Transfer ownership with enough support to make it real"}</h2>
<p>{"Consider an illustrative example, not a client account."}</p>
<p>{"A founder promotes a delivery specialist to manage a small team. The specialist still prepares every difficult client report. The team also needs their feedback, work allocation, and support."}</p>
<p>{"Simply passing the reports to a colleague may create rework and more questions. Keeping every report indefinitely leaves the manager unavailable."}</p>
<p>{"A more useful transition would name the reports the colleague will own, show examples of acceptable work, and arrange a review of the first unfamiliar cases. The manager's review time belongs in the plan too."}</p>
<p>{"Then define what ends. Once the colleague can produce the agreed work reliably, the manager should not remain its permanent second author."}</p>
<p>{"Some work will take longer while another person learns it. Decide what level of delay or rework is acceptable and which customer commitments need closer protection. If there is no room for any learning, the transition needs a different pace or additional support."}</p>
<h2>{"Change what you recognize as a good week"}</h2>
<p>{"If you continue praising the manager mainly for how much work they personally completed, pay attention to what you are reinforcing."}</p>
<p>{"Review the team's results and the manager's contribution to them. Were priorities clear? Did people receive useful feedback? Did a dependency get resolved before it threatened delivery? Can someone now handle work that previously required the manager?"}</p>
<p>{"Personal output still matters where it remains part of the role. It is only part of the assessment."}</p>
<p>{"A week spent clarifying an important handoff and helping a colleague become capable can be valuable, even if the manager produced fewer deliverables themselves. Examine whether the work improved the team's ability to perform, rather than judging it by busyness alone."}</p>
<h2>{"Review the transition before calling it a capability problem"}</h2>
<p>{"Set a near-term review date. Look at actual work rather than waiting for the person to say they feel settled."}</p>
<ul><li>{"Which former duties are still returning to the manager?"}</li><li>{"Which management responsibilities are being postponed?"}</li><li>{"Did the people receiving work have the capacity and support you agreed?"}</li><li>{"Are you still making decisions the manager was meant to own?"}</li><li>{"What needs to change before the next review?"}</li></ul>
<p>{"If the role is overloaded, redesign it. If the conditions are reasonable but the person needs help giving feedback or handling conflict, develop that skill. If management is not a good fit for the person, have an honest conversation about that too."}</p>
<p>{"Fair diagnosis does not guarantee that every promotion will work. It gives you a sounder basis for deciding what to do next. The broader guide to "}<Link className="text-link inline-link" href="/how-to-find-the-real-constraint">{"finding the real constraint"}</Link>{" can help separate those issues."}</p>
<h2>{"Start with one promotion"}</h2>
<p>{"Choose one manager whose title changed more clearly than their working week did."}</p>
<p>{"Write down the team outcome they own, the management responsibilities it requires, and the previous duties they will keep, transfer, stop, or cover temporarily. Check the effect on the people around them."}</p>
<p>{"Then keep the review you agree to hold."}</p>
<p>{"You are asking this person to make a different contribution to the business. Give that contribution a real place in the role."}</p>
<section className={styles.closing}><h2>{"Let's talk about the problem in front of you"}</h2>
<p>{"If you have promoted capable people but still find yourself managing around them, "}<Link className="text-link inline-link" href="/contact">{"let's talk about what is happening"}</Link>{". We can examine the work, expectations, and decisions involved, and work out what needs to change."}</p>
<Link className="button" href="/contact">Let&apos;s talk about your situation <span aria-hidden="true">→</span></Link></section>
    </article></main>
    <SiteFooter />
  </>;
}
