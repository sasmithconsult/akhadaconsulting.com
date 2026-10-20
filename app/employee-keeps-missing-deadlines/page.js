import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";
export const metadata = {
  "title": "Employee Keeps Missing Deadlines?",
  "description": "A practical guide to discussing repeated missed deadlines: clarify expectations, hear the employee, agree on support, and follow through on commitments.",
  "alternates": {
    "canonical": "/employee-keeps-missing-deadlines"
  },
  "openGraph": {
    "type": "article",
    "url": "https://akhadaconsulting.com/employee-keeps-missing-deadlines",
    "title": "Employee Keeps Missing Deadlines? | Akhada Consulting",
    "description": "A practical guide to discussing repeated missed deadlines: clarify expectations, hear the employee, agree on support, and follow through on commitments.",
    "publishedTime": "2026-10-19",
    "modifiedTime": "2026-10-19"
  }
};
const pageData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://akhadaconsulting.com/employee-keeps-missing-deadlines#article",
      "url": "https://akhadaconsulting.com/employee-keeps-missing-deadlines",
      "headline": "When an Employee Keeps Missing Deadlines: Have the Right Conversation",
      "description": "A practical guide to discussing repeated missed deadlines: clarify expectations, hear the employee, agree on support, and follow through on commitments.",
      "inLanguage": "en-US",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://akhadaconsulting.com/employee-keeps-missing-deadlines"
      },
      "author": {
        "@id": "https://akhadaconsulting.com/#scott-smith"
      },
      "publisher": {
        "@id": "https://akhadaconsulting.com/#organization"
      },
      "datePublished": "2026-10-19",
      "dateModified": "2026-10-19",
      "about": [
        {
          "@type": "Thing",
          "name": "Employee performance"
        },
        {
          "@type": "Thing",
          "name": "Management conversations"
        },
        {
          "@type": "Thing",
          "name": "Deadline reliability"
        }
      ]
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
          "name": "Employee Keeps Missing Deadlines",
          "item": "https://akhadaconsulting.com/employee-keeps-missing-deadlines"
        }
      ]
    }
  ]
};
export default function MissedDeadlinesPage() {
return <>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(pageData)}} />
<PageHero kicker="Management practice" title={"When an Employee Keeps Missing Deadlines: Have the Right Conversation"}>
<p>{"When an employee keeps missing deadlines, address the pattern directly. Establish what was agreed, understand what prevented delivery, and agree on the next result, the support required, and when a risk must be raised."}</p>
<p>{"You can take the person's circumstances seriously and still require reliable work. The conversation needs room for both."}</p><p>By <Link href="/scott-smith">Scott Smith</Link> · <time dateTime="2026-10-19">October 19, 2026</time></p>
</PageHero>
<main>
<article className={styles.article}>
<nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/insights">Insights</Link><span aria-hidden="true"> / </span><span>Employee Keeps Missing Deadlines</span></nav>
<h2>{"Prepare facts you can discuss"}</h2>
<p>{"Before the meeting, separate your frustration from the performance you need to address."}</p>
<p>{"“You never follow through” gives the employee a judgment to defend against. A specific example gives both of you something to examine."}</p>
<p>{"Write down the agreed result, the deadline, what was delivered, and what happened because the commitment was missed. Include relevant changes you made to the work or its priority. If you changed the assignment without changing the date, that belongs in the conversation too."}</p>
<p>{"Choose examples that establish the recurring pattern. You do not need to prosecute every disappointment since the person joined the company."}</p>
<p>{"Then check your own assumptions. Did the employee understand what finished meant? Did they have the time, access, training, and authority the work required? Were they depending on someone who did not deliver?"}</p>
<p>{"If you cannot answer those questions, begin there. "}<Link className="text-link inline-link" href="/how-to-find-the-real-constraint">{"Finding the real constraint"}</Link>{" matters before deciding what the employee needs to change."}</p>
<h2>{"Open with the gap and its consequence"}</h2>
<p>{"Be direct enough that the employee knows why you are meeting."}</p>
<p>{"For example:"}</p>
<blockquote><p>{"“We agreed that the client summary would be ready on Thursday. It arrived on Monday, after the review meeting. This is the second time we have reached the deadline without the work or an earlier warning. I want to understand what is getting in the way and agree on how we handle the next commitment.”"}</p></blockquote>
<p>{"This is an illustrative example, not a client account."}</p>
<p>{"The opening names the gap, explains why it matters, and makes the purpose clear. It does not presume that the person is careless or unwilling."}</p>
<p>{"Ask what happened, then listen long enough to hear the answer. Filling every pause with another example can turn a conversation into a lecture before you have learned anything useful."}</p>
<h2>{"Give the person room without requiring a personal explanation"}</h2>
<p>{"An employee may be dealing with something difficult. They may tell you about it. They may choose not to."}</p>
<p>{"You can make space without asking them to disclose private details:"}</p>
<blockquote><p>{"“You do not need to share anything personal you do not want to share. I do need us to understand what you can commit to and what support would help you meet it.”"}</p></blockquote>
<p>{"If the person becomes upset, pause. Give them time. You do not need to hurry them through the moment or turn yourself into their counselor."}</p>
<p>{"When they are ready, return to the work plainly:"}</p>
<blockquote><p>{"“As far as the project goes, let's look at what needs to be different for the next deadline to be reliable.”"}</p></blockquote>
<p>{"Sometimes the conversation reveals a need for a separate discussion about workload, leave, or support. Handle that through the appropriate company process. Do not make personal disclosure the price of being heard."}</p>
<h2>{"Decide what actually needs to change"}</h2>
<p>{"The explanation should help you choose an action."}</p>
<p>{"If the expected result was unclear, define it. If competing priorities made the deadline unrealistic, decide which work moves. If a dependency failed, establish who will resolve it and by when. If a skill is missing, identify the training or assistance required."}</p>
<p>{"Those are management responsibilities. Asking the employee to “try harder” leaves them untouched."}</p>
<p>{"The conversation changes when the outcome was clear, the conditions were reasonable, and the employee still did not meet the commitment. You then need to address the performance gap directly."}</p>
<p>{"Understanding the reason does not automatically settle what happens next. You still need an agreement about the work."}</p>
<h2>{"Agree on the next result and the first warning"}</h2>
<p>{"“I'll do better” is too vague to manage."}</p>
<p>{"Leave with five clear answers:"}</p>
<ol><li>{"What will be delivered, and what counts as complete?"}</li><li>{"When is it due?"}</li><li>{"What support or dependency must be resolved, and who owns that?"}</li><li>{"What signs of risk must be raised, and when?"}</li><li>{"When will you review progress together?"}</li></ol>
<p>{"Ask the employee to explain the agreement back in their own words. This is a check on whether you have reached the same understanding, not a test of obedience."}</p>
<p>{"The warning matters as much as the date. When a dependency slips or a task proves larger than expected, the manager needs enough notice to make a useful decision."}</p>
<p>{"For example, agree that the employee will flag a missing input at the point it threatens delivery, explain the likely effect, and recommend a next step. Waiting until the deadline removes choices that may have been available earlier."}</p>
<p>{"Early warning does not automatically extend the commitment. It gives both of you a chance to decide what to do while there is still time to act."}</p>
<h2>{"Keep ownership with the employee"}</h2>
<p>{"There is a familiar escape from an uncomfortable performance conversation: the manager takes the work back."}</p>
<p>{"That may protect an immediate client commitment. Sometimes it is necessary. It also needs to be recognized as a rescue, with a separate conversation about what failed and how responsibility will be restored."}</p>
<p>{"Otherwise, each missed deadline can quietly become another task the founder now owns. That is one way "}<Link className="text-link inline-link" href="/reducing-founder-dependency">{"founder dependency"}</Link>{" grows through ordinary management decisions."}</p>
<p>{"Offer the help the employee needs. Keep the responsibility explicit. A review meeting should let you see progress and remove an obstacle without making you the permanent author, checker, and finisher of the work."}</p>
<h2>{"Write down the agreement and follow through"}</h2>
<p>{"Send a short factual recap: the performance gap discussed, the next expected result, the support agreed, the risk-reporting expectation, and the review date. Give the employee a chance to correct a misunderstanding."}</p>
<p>{"Keep unnecessary personal information out of the recap. The purpose is a shared record of the work and the commitments."}</p>
<p>{"At the review, examine what happened. Did the work meet the agreed standard? Was risk raised while action was still possible? Did you provide the support you promised?"}</p>
<p>{"If performance improves, acknowledge the specific improvement. If it does not, make the next decision using the evidence. That may involve further development, a change in responsibilities, or formal performance management under the company's policies and applicable requirements."}</p>
<p>{"Do not keep repeating an informal conversation indefinitely while everyone waits for it to acquire consequences on its own."}</p>
<h2>{"Care and clear expectations belong in the same conversation"}</h2>
<p>{"A manager can listen carefully, make a reasonable adjustment, and still require the employee to meet a clear commitment."}</p>
<p>{"The employee should leave knowing what you heard, what is expected, what help is available, and what happens next. You should leave with something more useful than temporary relief from having finally said it."}</p>
<p>{"Start with one recurring gap. Understand it, agree on the next commitment, and keep the review you promised."}</p>
<section className={styles.closing}>
<h2>Have a conversation about the problem in front of you</h2>
<p>{"If you keep having the same performance conversation and the work is still not becoming more reliable, "}<Link className="text-link inline-link" href="/contact">{"let's talk about what is happening"}</Link>{". We can examine the expectations, working conditions, and management decisions involved, and work out what needs to change."}</p>
<Link className="button" href="/contact">Let's talk about your situation <span aria-hidden="true">→</span></Link>
</section>
</article>
</main><SiteFooter />
</>;
}
