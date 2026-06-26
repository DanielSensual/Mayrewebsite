import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Florida Home",
  description:
    "Thinking of selling your Florida home? Maryelin Caldera provides expert guidance, market analysis, and proven strategies to maximize your sale price.",
};

export default function SellPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          Sell Your Home
        </h1>
        <p className="text-body text-muted-foreground">
          Seller guide content will be built in a future phase.
        </p>
      </div>
    </section>
  );
}
