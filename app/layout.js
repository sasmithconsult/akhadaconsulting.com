import "./globals.css";
import "./visual-fixes.css";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  metadataBase: new URL("https://akhadaconsulting.com"),
  title: {
    default: "Akhada Consulting | Leadership, Judgment & Execution",
    template: "%s | Akhada Consulting",
  },
  description:
    "Principal advisory for founders and executives building leadership capacity, operating clarity, and organizations that function beyond the founder.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Akhada Consulting",
    title: "Akhada Consulting | Leadership, Judgment & Execution",
    description:
      "Principal advisory for leaders building stronger management and operating capacity.",
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
      </body>
    </html>
  );
}
