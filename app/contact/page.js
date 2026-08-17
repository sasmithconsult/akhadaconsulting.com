import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Akhada Consulting",
  description:
    "Contact Akhada Consulting about principal advisory, dedicated offshore operators, affordable housing advisory, or another business need.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "https://akhadaconsulting.com/contact",
    title: "Contact Akhada Consulting",
    description:
      "Start a conversation with Akhada Consulting about advisory, operating capacity, global teams, or affordable housing.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact Akhada"
        title="What would be useful to discuss?"
      >
        <p>
          Tell us what is in front of you. We will route the conversation to the
          right place and respond personally.
        </p>
      </PageHero>

      <main>
        <section className={styles.contactSection}>
          <div className={styles.intro}>
            <p className="eyebrow">A simple first step</p>
            <h2>Start with the actual situation.</h2>
            <p>
              You do not need a polished brief. A few useful details are enough
              for us to understand whether the conversation is about leadership
              and execution, additional operating capacity, affordable housing,
              or something else entirely.
            </p>
            <div className={styles.directContact}>
              <span>Email</span>
              <a href="mailto:scott.smith@akhadaconsulting.com">
                scott.smith@akhadaconsulting.com
              </a>
              <span>Phone</span>
              <a href="tel:+16024921333">+1 (602) 492-1333</a>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
