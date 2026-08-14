import SiteHeader from "./SiteHeader";

export default function PageHero({ kicker, title, children, light = false }) {
  return (
    <>
      <SiteHeader light={light} />
      <section className={`page-hero ${light ? "light-hero" : ""}`}>
        <div className="page-hero-inner">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <div className="lede">{children}</div>
        </div>
      </section>
    </>
  );
}
