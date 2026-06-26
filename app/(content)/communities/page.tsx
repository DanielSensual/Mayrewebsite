import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florida Communities & Neighborhoods",
  description:
    "Explore Florida's best communities and neighborhoods. Local insights, lifestyle guides, and homes for sale from Maryelin Caldera.",
};

export default function CommunitiesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          Florida Communities
        </h1>
        <p className="text-body text-muted-foreground">
          Community hub will be built in Phase 3.
        </p>
      </div>
    </section>
  );
}
