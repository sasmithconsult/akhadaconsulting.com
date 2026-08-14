import Link from "next/link";

export default function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Akhada Consulting home">
      <span className="brand-wordmark">
        AKHADA <small>CONSULTING</small>
      </span>
    </Link>
  );
}
