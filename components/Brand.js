import Link from "next/link";

export default function Brand({ light = false }) {
  const markSrc = light
    ? "/images/akhada-mark-dark.png"
    : "/images/akhada-mark-light.png";

  return (
    <Link className="brand" href="/" aria-label="Akhada Consulting home">
      <span className="brand-mark" aria-hidden="true">
        <img src={markSrc} alt="" width="325" height="385" />
      </span>
      <span className="brand-wordmark">
        AKHADA <small>CONSULTING</small>
      </span>
    </Link>
  );
}
