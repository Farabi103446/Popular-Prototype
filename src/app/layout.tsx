import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Popular Pharmaceuticals PLC, the pioneer manufacturer of Human Insulin in Bangladesh. WHO cGMP certified manufacturer exporting to 32 countries with 362 brands & 600 dosage forms.",
  keywords: [
    "Popular Pharmaceuticals",
    "pharmaceutical company Bangladesh",
    "Human Insulin manufacturer",
    "WHO cGMP",
    "pharma exports",
    "toll manufacturing",
  ],
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/app-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "Pioneer manufacturer of Human Insulin in Bangladesh. 362 brands, 600 dosage forms, 32 export destinations.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: "Pioneer manufacturer of Human Insulin in Bangladesh.",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  slogan: SITE.tagline,
  logo: `${SITE.url}/brand/logo-alt.webp`,
  foundingDate: "2002-12-08",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 Shukrabad, West Panthopath",
    addressLocality: "Dhaka",
    postalCode: "1207",
    addressCountry: "BD",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
