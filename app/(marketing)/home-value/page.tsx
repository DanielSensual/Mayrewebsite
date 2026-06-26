import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Home Valuation",
  description:
    "Get a free, no-obligation home valuation from Maryelin Caldera. Find out what your Florida property is worth in today's market.",
};

export default function HomeValuePage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          What&apos;s Your Home Worth?
        </h1>
        <p className="text-body text-muted-foreground">
          Home valuation form will be built in Phase 4.
        </p>
      </div>
    </section>
  );
}
