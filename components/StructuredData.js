export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Akhada Consulting",
    url: "https://akhadaconsulting.com",
    email: "scott.smith@akhadaconsulting.com",
    telephone: "+1-602-492-1333",
    founder: { "@type": "Person", name: "Scott Smith" },
    sameAs: [
      "https://www.linkedin.com/in/scott8smith/",
      "https://x.com/Akhada_Consult",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
