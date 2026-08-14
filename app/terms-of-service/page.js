import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export const metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Akhada Consulting website and its informational content and third-party services.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    url: "https://akhadaconsulting.com/terms-of-service",
    title: "Terms of Service | Akhada Consulting",
    description: "Terms governing use of the Akhada Consulting website.",
  },
};
export default function Terms() {
  return (
    <>
      <div className="header-light">
        <SiteHeader light />
      </div>
      <main className="legal">
        <article className="legal-inner">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="updated">Effective August 13, 2026</p>
          <p>
            These Terms of Service (“Terms”) govern your use of
            akhadaconsulting.com. By accessing or using the website, you accept
            these Terms. If you do not agree, do not use the website.
          </p>
          <h2>Website purpose and no client relationship</h2>
          <p>
            The website provides general information about Akhada Consulting and
            its services. Website use, sending an inquiry, or booking a call
            does not create an advisor-client, consultant-client, fiduciary, or
            other professional relationship. A client relationship arises only
            through a written agreement signed by Akhada and the client.
          </p>
          <h2>Informational content; no guaranteed results</h2>
          <p>
            Content is general information, not legal, tax, financial,
            investment, accounting, compliance, or other regulated professional
            advice. You remain responsible for obtaining appropriate
            professional advice and making your own decisions. Examples and
            discussions of services do not promise or guarantee any business,
            funding, housing, operational, financial, or other result.
          </p>
          <h2>Engagements and payment</h2>
          <p>
            The scope, deliverables, responsibilities, fees, expenses, payment
            terms, intellectual property treatment, confidentiality, and other
            conditions of consulting work are governed exclusively by a mutually
            signed engagement agreement, statement of work, or other written
            contract.
          </p>
          <h2>Intellectual property</h2>
          <p>
            The website and its original text, design, graphics, branding, and
            other content are owned by or licensed to Akhada and protected by
            applicable laws. You may view and make a reasonable personal or
            internal-business copy for evaluation. You may not reproduce,
            publish, sell, modify, scrape, or commercially exploit website
            content without written permission.
          </p>
          <h2>Acceptable use</h2>
          <p>
            You may not interfere with website operation; attempt unauthorized
            access; introduce malicious code; misrepresent your identity; use
            automated means that burden the site; violate law or third-party
            rights; or use the site to transmit unlawful, fraudulent,
            threatening, or harmful material.
          </p>
          <h2>Third-party services and AI tools</h2>
          <p>
            The website may link to scheduling, podcast, social-media,
            analytics, or other third-party services. Akhada does not control
            and is not responsible for their availability, content, terms, or
            privacy practices. Akhada may use AI-powered tools for intake,
            scheduling, note organization, research support, or administrative
            workflows. Such tools do not replace professional judgment, and
            information submitted through third-party tools may be processed
            under their applicable terms.
          </p>
          <h2>Disclaimer of warranties</h2>
          <p>
            To the maximum extent permitted by law, the website and its content
            are provided “as is” and “as available,” without express or implied
            warranties, including warranties of accuracy, completeness,
            merchantability, fitness for a particular purpose, title,
            non-infringement, availability, or security.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Akhada will not be liable
            for damages arising from or related to your use of, or inability to
            use, this website or reliance on its content.
          </p>
          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Akhada and its
            owners and personnel from claims, liabilities, damages, judgments,
            losses, and reasonable costs arising from your violation of these
            Terms, misuse of the website, or infringement of another person’s
            rights.
          </p>
          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Arizona,
            without regard to conflict-of-law principles.
          </p>
          <h2>Updates</h2>
          <p>
            We may update these Terms by posting a revised version and effective
            date. Continued use after an update constitutes acceptance.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these Terms may be directed to Scott Smith, Akhada
            Consulting, at{" "}
            <a href="mailto:scott.smith@akhadaconsulting.com">
              scott.smith@akhadaconsulting.com
            </a>{" "}
            or <a href="tel:+16024921333">+1 (602) 492-1333</a>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
