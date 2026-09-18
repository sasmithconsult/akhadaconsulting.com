export default function sitemap() {
  const base = "https://akhadaconsulting.com";
  const paths = [
    "",
    "/advisory",
    "/reducing-founder-dependency",
    "/execution",
    "/execution/global-teams",
    "/execution/global-teams/dedicated-operator",
    "/affordable-housing-advisory",
    "/podcast",
    "/scott-smith",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
  }));
}
