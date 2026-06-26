import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Maryelin Caldera Real Estate website. Please review before using our services.",
};

export default function TermsPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-display text-4xl text-brand-charcoal mb-8">
          Terms of Service
        </h1>
        <div className="text-body text-muted-foreground space-y-4">
          <p>
            Terms of service will be populated with the full legal text in a
            future update.
          </p>
        </div>
      </div>
    </section>
  );
}
