import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Get More from Your Offshore Team",
  description: "Already have an offshore team that isn't delivering what you expected? Akhada Consulting helps identify what's going wrong and improve performance.",
  alternates: { canonical: "/offshore" },
  openGraph: {
    title: "Your offshore team isn't delivering what you expected. Let's fix that.",
    description: "Get more value from the offshore team you already have, without immediately replacing people or adding headcount.",
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
          <Link className={styles.logo} href="/">AKHADA CONSULTING</Link>
          <span className={styles.tagline}>Clarity under pressure</span>
        </div>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>For companies with an existing offshore team</p>
        <h1>Your offshore team isn&apos;t delivering what you expected. <span className={styles.accent}>Let&apos;s fix that.</span></h1>
        <p className={styles.subhead}>Get more value from the team you already have, without immediately replacing people or adding headcount.</p>

        {/* Replace this placeholder with your video embed once your VSL is recorded. */}
        <div className={styles.video} aria-label="Placeholder for introductory video from Scott Smith">
          <div className={styles.play} aria-hidden="true">▶</div>
          <strong>A message from Scott</strong>
          <small>90–120 second video coming soon</small>
        </div>

        <BookingButton>Schedule a Conversation</BookingButton>
        <p className={styles.note}>A straightforward conversation about your current team and what&apos;s not working.</p>

        <div className={styles.rule} />
        <h2>Sound familiar?</h2>
        <div className={styles.issues}>
          <div className={styles.issue}><span aria-hidden="true">✓</span> You&apos;re spending too much time managing your offshore team.</div>
          <div className={styles.issue}><span aria-hidden="true">✓</span> Deadlines, quality, or communication are inconsistent.</div>
          <div className={styles.issue}><span aria-hidden="true">✓</span> You expected more capacity, but now you have more work.</div>
        </div>

        <p className={styles.about}><strong>I&apos;m Scott Smith, Principal Advisor at Akhada Consulting.</strong> I&apos;ve spent decades building and leading teams, including operations across India and the Philippines. I help companies identify what&apos;s preventing their offshore teams from performing and determine what needs to change.</p>
        <div className={styles.bottom}>
          <BookingButton>Let&apos;s Talk</BookingButton>
          <p className={styles.note}>No obligation. We&apos;ll talk through your situation and whether I can help.</p>
        </div>
      </main>

      <footer className={styles.footer}>© 2026 Akhada Consulting · <Link href="/">Visit our main website</Link></footer>
    </div>
  );
}
