/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  async redirects() {
    return [
      {
        source: "/global-teams",
        destination: "/execution/global-teams",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/consulting",
        destination: "/advisory",
        permanent: true,
      },
      {
        source: "/what-is-the-akhada-advantage",
        destination: "/advisory",
        permanent: true,
      },
      {
        source: "/category/effective-leadership",
        destination: "/advisory",
        permanent: true,
      },
      {
        source: "/tag/effective-team-building",
        destination: "/execution",
        permanent: true,
      },
      {
        source: "/the-art-of-team-building-and-management-proven-strategies-for-success",
        destination: "/execution",
        permanent: true,
      },
      {
        source: "/category/relationship-vs-transaction-in-outsourcing",
        destination: "/execution/global-teams",
        permanent: true,
      },
      {
        source: "/category/business-growth-through-outsourcing",
        destination: "/execution/global-teams",
        permanent: true,
      },
      {
        source: "/tailored-outsourcing-solutions",
        destination: "/execution/global-teams",
        permanent: true,
      },
      {
        source: "/akhada-your-outsourcing-partner",
        destination: "/execution/global-teams",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
