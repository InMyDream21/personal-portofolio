import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { education, experiences, personalInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

const title = `${personalInfo.name} | ${personalInfo.jobTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: title,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.metaDescription,
  authors: [{ name: personalInfo.name, url: personalInfo.siteUrl }],
  creator: personalInfo.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: personalInfo.siteUrl,
    siteName: `${personalInfo.name} | Portfolio`,
    title,
    description: personalInfo.metaDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: personalInfo.metaDescription,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f0e8",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.jobTitle,
  email: `mailto:${personalInfo.email}`,
  url: personalInfo.siteUrl,
  address: { "@type": "PostalAddress", addressLocality: personalInfo.location },
  worksFor: {
    "@type": "Organization",
    name: experiences[0]?.company,
  },
  alumniOf: education.map((edu) => ({
    "@type": "CollegeOrUniversity",
    name: edu.institution,
  })),
  sameAs: [personalInfo.github, personalInfo.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
