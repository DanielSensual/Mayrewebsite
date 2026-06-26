import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Maryelin Caldera",
  description:
    "Learn about Maryelin Caldera — a trusted Florida real estate expert dedicated to helping families buy, sell, and invest in Florida's finest communities.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          About Maryelin
        </h1>
        <p className="text-body text-muted-foreground">
          This page will be built in a future phase.
        </p>
      </div>
    </section>
  );
}
