import "./globals.css";
import "./visual-fixes.css";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://akhadaconsulting.com"),
  title: {
    default: "Akhada Consulting | Offshore Operations & Turnarounds",
    template: "%s | Akhada Consulting",
  },
  description:
    "We help companies fix underperforming outsourced operations, build high-performing offshore teams, and strengthen operational leadership.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/images/akhada-favicon.png", type: "image/png" }],
    apple: "/images/akhada-favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Akhada Consulting",
    title: "Akhada Consulting | Offshore Operations & Turnarounds",
    description:
      "Experienced operational leadership for companies building or improving outsourced teams.",
    url: "https://akhadaconsulting.com",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
