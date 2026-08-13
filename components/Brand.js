"use client";

import Link from "next/link";
import { useState } from "react";

export default function Brand() {
  const [logoAvailable, setLogoAvailable] = useState(false);

  return (
    <Link className="brand" href="/" aria-label="Akhada Consulting home">
      <img
        className={`brand-logo ${logoAvailable ? "is-loaded" : ""}`}
        src="/images/akhada-logo.png"
        alt=""
        onLoad={() => setLogoAvailable(true)}
        onError={() => setLogoAvailable(false)}
      />
      <span
        className={`brand-wordmark ${logoAvailable ? "has-logo" : ""}`}
        aria-hidden="true"
      >
        AKHADA <small>CONSULTING</small>
      </span>
    </Link>
  );
}
