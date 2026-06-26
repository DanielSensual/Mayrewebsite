import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { SchemaMarkup } from "@/components/schema-markup";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Maryelin Caldera — Florida Real Estate",
    default: "Maryelin Caldera — Florida Real Estate Expert | Buy, Sell & Invest",
  },
  description:
    "Work with Maryelin Caldera, your trusted Florida real estate expert. Browse luxury listings, explore local communities, and get personalized guidance for buying, selling, or investing in Florida real estate.",
  keywords: [
    "Florida real estate",
    "Florida homes for sale",
    "Maryelin Caldera realtor",
    "Florida luxury homes",
    "buy home Florida",
    "sell home Florida",
    "Florida real estate agent",
  ],
  authors: [{ name: "Maryelin Caldera" }],
  creator: "Maryelin Caldera",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maryelin Caldera Real Estate",
    title: "Maryelin Caldera — Florida Real Estate Expert",
    description:
      "Your trusted Florida real estate expert. Browse luxury listings, explore communities, and get personalized guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryelin Caldera — Florida Real Estate Expert",
    description:
      "Your trusted Florida real estate expert. Browse luxury listings, explore communities, and get personalized guidance.",
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
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-charcoal bg-background">
        <SchemaMarkup
          type="RealEstateAgent"
          data={{
            name: "Maryelin Caldera",
            description:
              "Trusted Florida real estate expert specializing in residential sales, luxury homes, and investment properties.",
            url: "https://maryelincaldera.com",
            telephone: "+1-305-833-8623",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Orlando",
              addressRegion: "FL",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "State",
              name: "Florida",
            },
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
