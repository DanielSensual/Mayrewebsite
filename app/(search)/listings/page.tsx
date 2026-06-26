import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florida Homes for Sale",
  description:
    "Browse Florida real estate listings. Search by location, price, beds, and more with Maryelin Caldera.",
};

export default function ListingsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          Search Listings
        </h1>
        <p className="text-body text-muted-foreground">
          Listing search grid will be built in Phase 5.
        </p>
      </div>
    </section>
  );
}
