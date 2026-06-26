import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IDX MLS Property Search",
  description:
    "Search the MLS for Florida homes, condos, and investment properties. Maryelin Caldera provides access to the latest real estate listings.",
};

export default function IdxMlsSearchPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          IDX MLS Search
        </h1>
        <p className="text-body text-muted-foreground">
          IDX integration explainer will be built in Phase 5.
        </p>
      </div>
    </section>
  );
}
