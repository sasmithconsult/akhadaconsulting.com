import Link from "next/link";
import Brand from "@/components/Brand";
import styles from "./page.module.css";

export const metadata = {
  title: "Offshore Operations Turnaround & Consulting",
  description: "You invested in an offshore team to get more done, not create more work. Akhada Consulting helps you identify what's holding performance back and what to do next.",
  alternates: { canonical: "/offshore" },
  openGraph: {
    title: "You invested in an offshore team to get more done. Not to create more work for yourself.",
    description: "Understand what's holding your offshore team back before replacing people or adding headcount.",
    url: "https://akhadaconsulting.com/offshore",
  },
};

const bookingUrl = "https://calendly.com/scott8smith/offshore-operations-consultation";

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



        <div className={styles.rule} />
        <h2>How we help you turn performance around.</h2>
        <div className={styles.issues}>
          <div className={styles.issue}><strong>Diagnose:</strong> Review performance, leadership, workflows, training, and the financial outcomes you expect.</div>
          <div className={styles.issue}><strong>Stabilize:</strong> Clarify ownership, address immediate problems, and establish measurable expectations.</div>
          <div className={styles.issue}><strong>Improve:</strong> Work with your leaders and team to build effective management practices and sustain better performance.</div>
        </div>
        <p className={styles.subhead}>We can also help you build a new offshore team or provide ongoing operational leadership. We start with your business needs, not a staffing pitch.</p>
        <BookingButton>Book a Confidential Consultation</BookingButton>
        <p className={styles.about}><strong>I&apos;m Scott Smith, Principal Advisor at Akhada Consulting.</strong> I&apos;ve spent decades building and leading teams, including operations across India and the Philippines. I help companies identify what&apos;s limiting their offshore team&apos;s performance and determine what needs to change.</p>
        <div className={styles.bottom}>
          <h2>Let&apos;s find out what&apos;s keeping your team from delivering.</h2>
          <BookingButton>Book a Confidential Consultation</BookingButton>
          <p className={styles.note}>No obligation. We&apos;ll talk through your situation and whether I can help.</p>
        </div>
      </main>

      <footer className={styles.footer}>© 2026 Akhada Consulting · <Link href="/">Visit our main website</Link></footer>
    </div>
  );
}
