import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO, COMPANY_INFO } from "@/constants";
import PerformanceMonitor from "@/components/performance-monitor";
import Analytics from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: SEO.DEFAULT_TITLE,
  description: SEO.DEFAULT_DESCRIPTION,
  keywords: SEO.KEYWORDS,
  authors: [{ name: COMPANY_INFO.NAME }],
  creator: COMPANY_INFO.NAME,
  publisher: COMPANY_INFO.NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.SITE_URL,
    siteName: SEO.SITE_NAME,
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    images: [
      {
        url: `${SEO.SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SEO.DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    images: [`${SEO.SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: SEO.SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg?v=6" />
        <link rel="icon" href="/favicon.png?v=6" />
        <link rel="shortcut icon" href="/favicon.jpg?v=6" />
        <link rel="apple-touch-icon" href="/favicon.png?v=6" />
        <meta name="theme-color" content="#CA8F52" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": COMPANY_INFO.NAME,
              "url": SEO.SITE_URL,
              "logo": `${SEO.SITE_URL}/Chronos Strategic Advisory LLP.jpg`,
              "description": SEO.DEFAULT_DESCRIPTION,
              "foundingDate": COMPANY_INFO.FOUNDING_YEAR,
              "founder": {
                "@type": "Person",
                "name": COMPANY_INFO.FOUNDER
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@ikigaii.in",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <PerformanceMonitor />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
