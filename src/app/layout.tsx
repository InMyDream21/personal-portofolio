import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";

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
    siteName: `${personalInfo.name} — Portfolio`,
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
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.jobTitle,
  email: `mailto:${personalInfo.email}`,
  url: personalInfo.siteUrl,
  address: { "@type": "PostalAddress", addressLocality: personalInfo.location },
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
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="bg-glow" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
