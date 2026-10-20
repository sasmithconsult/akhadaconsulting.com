import Link from "next/link";
import Brand from "@/components/Brand";
import styles from "./page.module.css";

export const metadata = {
  title: "Get More from Your Offshore Team",
  description: "You invested in an offshore team to get more done, not create more work. Akhada Consulting helps you identify what's holding performance back and what to do next.",
  alternates: { canonical: "/offshore" },
  openGraph: {
    title: "You invested in an offshore team to get more done. Not to create more work for yourself.",
    description: "Understand what's holding your offshore team back before replacing people or adding headcount.",
    url: "https://akhadaconsulting.com/offshore",
  },
};

const bookingUrl = "https://calendly.com/scott8smith/founder-strategy-conversation";

function BookingButton({ children }) {
  return (
    <a className={styles.button} href={bookingUrl} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function OffshorePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.masthead}>
          <Brand />
          <span className={styles.tagline}>Clarity under pressure</span>
        </div>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>For companies with an existing offshore team</p>
        <h1>You invested in an offshore team to get more done. <span className={styles.accent}>Not to create more work for yourself.</span></h1>
        <p className={styles.subhead}>When your offshore team isn&apos;t performing as expected, you don&apos;t necessarily need to replace people or hire more. You need to understand what&apos;s getting in the way and what to do about it.</p>

        {/* Replace this placeholder with your video embed once your VSL is recorded. */}
        <div className={styles.video} aria-label="Placeholder for introductory video from Scott Smith">
          <div className={styles.play} aria-hidden="true">▶</div>
          <strong>A message from Scott</strong>
          <small>90–120 second video coming soon</small>
        </div>

        <BookingButton>Schedule a Conversation</BookingButton>
        <p className={styles.note}>A straightforward conversation about your current team and what&apos;s not working.</p>

        <div className={styles.rule} />
        <h2>Imagine an offshore team that:</h2>
        <div className={styles.issues}>
          <div className={styles.issue}><span aria-hidden="true">✓</span> Takes ownership without requiring constant follow-up.</div>
          <div className={styles.issue}><span aria-hidden="true">✓</span> Communicates problems before they become emergencies.</div>
          <div className={styles.issue}><span aria-hidden="true">✓</span> Delivers the additional capacity you invested in.</div>
        </div>

        <p className={styles.about}><strong>I&apos;m Scott Smith, Principal Advisor at Akhada Consulting.</strong> I&apos;ve spent decades building and leading teams, including operations across India and the Philippines. I help companies identify what&apos;s limiting their offshore team&apos;s performance and determine what needs to change.</p>
        <div className={styles.bottom}>
          <h2>Let&apos;s find out what&apos;s keeping your team from delivering.</h2>
          <BookingButton>Schedule a Conversation</BookingButton>
          <p className={styles.note}>No obligation. We&apos;ll talk through your situation and whether I can help.</p>
        </div>
      </main>

      <footer className={styles.footer}>© 2026 Akhada Consulting · <Link href="/">Visit our main website</Link></footer>
    </div>
  );
}
