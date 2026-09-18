export default function sitemap() {
  const base = "https://akhadaconsulting.com";
  const paths = [
    "",
    "/advisory",
    "/insights",
    "/reducing-founder-dependency",
    "/when-to-hire-a-coo",
    "/execution",
    "/execution/global-teams",
    "/why-offshore-teams-fail",
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
