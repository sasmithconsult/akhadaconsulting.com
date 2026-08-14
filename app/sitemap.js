export default function sitemap() {
  const base = "https://akhadaconsulting.com";
  return [
    "",
    "/advisory",
    "/execution",
    "/execution/global-teams",
    "/affordable-housing-advisory",
    "/podcast",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path.includes("policy") || path.includes("terms") ? "yearly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
