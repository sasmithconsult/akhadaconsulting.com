export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://akhadaconsulting.com/#website",
        url: "https://akhadaconsulting.com",
        name: "Akhada Consulting",
        publisher: { "@id": "https://akhadaconsulting.com/#organization" },
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://akhadaconsulting.com/#organization",
        name: "Akhada Consulting",
        url: "https://akhadaconsulting.com",
        logo: {
          "@type": "ImageObject",
          url: "https://akhadaconsulting.com/images/akhada-favicon.png",
        },
        description:
          "Principal advisory for founders and executives building leadership capacity, operating clarity, and organizations that function beyond the founder.",
        email: "scott.smith@akhadaconsulting.com",
        telephone: "+1-602-492-1333",
        founder: { "@id": "https://akhadaconsulting.com/#scott-smith" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "business inquiries",
          email: "scott.smith@akhadaconsulting.com",
          telephone: "+1-602-492-1333",
          areaServed: "US",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.linkedin.com/in/scott8smith/",
          "https://x.com/Akhada_Consult",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://akhadaconsulting.com/#scott-smith",
        name: "Scott Smith",
        url: "https://akhadaconsulting.com/scott-smith",
        image:
          "https://akhadaconsulting.com/images/scott-smith-headshot.png",
        jobTitle: "Founder and Principal Advisor",
        worksFor: { "@id": "https://akhadaconsulting.com/#organization" },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Brigham Young University",
        },
        knowsAbout: [
          "Leadership advisory",
          "Management systems",
          "Founder dependency",
          "Operating clarity",
          "Organizational execution",
          "Global teams",
          "Offshore teams",
        ],
        sameAs: ["https://www.linkedin.com/in/scott8smith/"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
