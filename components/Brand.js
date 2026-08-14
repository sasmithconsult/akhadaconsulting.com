import Link from "next/link";

export default function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Akhada Consulting home">
      <span className="brand-mark" aria-hidden="true">
        <img
          src="/images/akhada-logo.png"
          alt=""
          width="325"
          height="385"
        />
      </span>
      <span className="brand-wordmark">
        AKHADA <small>CONSULTING</small>
      </span>
    </Link>
  );
}
