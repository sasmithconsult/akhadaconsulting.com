"use client";
import Link from "next/link";
import Brand from "./Brand";
import { useState } from "react";

const primaryLinks = [
  ["Advisory", "/advisory"],
  ["Insights", "/insights"],
  ["Affordable Housing", "/affordable-housing-advisory"],
  ["Podcast", "/podcast"],
  ["About", "/scott-smith"],
];

const howWeHelpLinks = [
  ["Leadership & Management", "/advisory"],
  ["Execution & Operating Clarity", "/execution"],
  ["Global Teams & Capacity", "/execution/global-teams"],
];

export default function SiteHeader({ light = false }) {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const closeNavigation = () => {
    setOpen(false);
    setHelpOpen(false);
  };

  return (
    <header className={`site-header ${light ? "header-light" : ""}`}>
      <div className="nav-wrap">
        <Brand light={light} />
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          <i />
          <i />
        </button>
        <nav
          id="main-nav"
          className={open ? "open" : ""}
          aria-label="Primary navigation"
        >
          <Link href="/advisory" onClick={closeNavigation}>
            Advisory
          </Link>
          <div className={`nav-group ${helpOpen ? "open" : ""}`}>
            <button
              className="nav-group-toggle"
              type="button"
              aria-expanded={helpOpen}
              aria-controls="how-we-help-menu"
              onClick={() => setHelpOpen(!helpOpen)}
            >
              How We Help <span aria-hidden="true">⌄</span>
            </button>
            <div
              id="how-we-help-menu"
              className="nav-dropdown"
              aria-label="How we help"
            >
              {howWeHelpLinks.map(([name, href]) => (
                <Link key={href} href={href} onClick={closeNavigation}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
          {primaryLinks.slice(1).map(([name, href]) => (
            <Link key={href} href={href} onClick={closeNavigation}>
              {name}
            </Link>
          ))}
          <a
            className="nav-cta"
            href="https://calendly.com/scott8smith/founder-strategy-conversation"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
