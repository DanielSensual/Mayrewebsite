import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Maryelin Caldera",
  description:
    "Get in touch with Maryelin Caldera for personalized real estate guidance in Florida. Schedule a consultation today.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          Contact
        </h1>
        <p className="text-body text-muted-foreground">
          Lead capture form will be built in Phase 4.
        </p>
      </div>
    </section>
  );
}
