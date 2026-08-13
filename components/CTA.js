export default function CTA({
  eyebrow = "A considered next step",
  title = "Build a business that does not depend on you for everything.",
  text = "A focused conversation can help clarify the pressure points, the decisions in front of you, and whether Akhada is the right partner.",
}) {
  return (
    <section className="cta section">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <a
        className="button light"
        href="https://calendly.com/scott8smith/founder-strategy-conversation"
        target="_blank"
        rel="noreferrer"
      >
        Schedule a strategy conversation <span>↗</span>
      </a>
    </section>
  );
}
