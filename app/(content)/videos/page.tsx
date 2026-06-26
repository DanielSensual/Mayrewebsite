import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Library",
  description:
    "Watch Maryelin Caldera's Florida real estate videos — community tours, market updates, home tours, and expert advice.",
};

export default function VideosPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          Video Library
        </h1>
        <p className="text-body text-muted-foreground">
          Video hub will be built in Phase 3.
        </p>
      </div>
    </section>
  );
}
