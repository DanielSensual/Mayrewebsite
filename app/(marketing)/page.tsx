import { SchemaMarkup } from "@/components/schema-markup";
import { HeroSection } from "@/components/hero-section";
import { TrustBand } from "@/components/trust-band";
import { FeaturedCommunities } from "@/components/featured-communities";
import { SellerCta } from "@/components/seller-cta";
import { VideoTeaser } from "@/components/video-teaser";

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          name: "Maryelin Caldera Real Estate",
          description:
            "Florida real estate expert specializing in residential sales, luxury homes, and investment properties across Central Florida.",
          url: "https://maryelincaldera.com",
          telephone: "+1-305-833-8623",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Orlando",
            addressRegion: "FL",
            addressCountry: "US",
          },
          priceRange: "$$$$",
          areaServed: [
            "Orlando",
            "Winter Park",
            "Lake Nona",
            "Dr. Phillips",
            "Windermere",
            "Celebration",
            "Central Florida",
          ],
        }}
      />

      {/* Hero — Full-viewport cinematic section with search */}
      <HeroSection />

      {/* Trust Band — Slim proof bar below hero */}
      <TrustBand />

      {/* Featured Communities — Interactive grid */}
      <FeaturedCommunities />

      {/* Seller CTA — Split layout valuation pitch */}
      <SellerCta />

      {/* Video Teaser — Property tours & market updates */}
      <VideoTeaser />
    </>
  );
}
