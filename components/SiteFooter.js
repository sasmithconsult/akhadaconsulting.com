import Link from "next/link";
import Brand from "./Brand";
export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p>
            Principal advisory for judgment, leadership, and execution.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/advisory">Advisory</Link>
          <Link href="/execution">Execution</Link>
          <Link href="/execution/global-teams">Global Teams</Link>
          <Link href="/podcast">Podcast</Link>
          <h3>Specialist Practice</h3>
          <Link href="/affordable-housing-advisory">Affordable Housing</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <Link href="/contact">Contact Akhada</Link>
          <a href="mailto:scott.smith@akhadaconsulting.com">
            scott.smith@akhadaconsulting.com
          </a>
          <a href="tel:+16024921333">+1 (602) 492-1333</a>
          <a
            href="https://www.linkedin.com/in/scott8smith/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Akhada_Consult"
            target="_blank"
            rel="noreferrer"
          >
            X / Twitter
          </a>
        </div>
      </div>
      <div className="footer-base">
        <span>
          © {new Date().getFullYear()} Akhada Consulting. All rights reserved.
        </span>
        <span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
