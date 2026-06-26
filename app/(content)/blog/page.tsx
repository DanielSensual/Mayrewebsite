import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florida Real Estate Blog",
  description:
    "Expert real estate insights, market updates, and homebuyer guides for Florida from Maryelin Caldera.",
};

export default function BlogPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          Blog
        </h1>
        <p className="text-body text-muted-foreground">
          Blog hub will be built in Phase 3.
        </p>
      </div>
    </section>
  );
}
