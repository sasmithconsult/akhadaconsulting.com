"use client";

import Link from "next/link";
import { useState } from "react";

export default function Brand() {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <Link className="brand" href="/" aria-label="Akhada Consulting home">
      {showLogo && (
        <img
          className="brand-logo"
          src="/images/akhada-logo.png"
          alt=""
          width="325"
          height="385"
          onError={() => setShowLogo(false)}
        />
      )}
      <span className="brand-wordmark" aria-hidden="true">
        AKHADA <small>CONSULTING</small>
      </span>
    </Link>
  );
}
