import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility commitment and statement for Maryelin Caldera Real Estate. We are committed to providing an inclusive experience for all users.",
};

export default function AccessibilityPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-display text-4xl text-brand-charcoal mb-8">
          Accessibility Statement
        </h1>
        <div className="text-body text-muted-foreground space-y-4">
          <p>
            We are committed to ensuring that our website is accessible to
            everyone, including people with disabilities. We strive to meet WCAG
            2.2 Level AA standards.
          </p>
          <p>
            If you encounter any accessibility issues while using our website,
            please contact us so we can address them promptly.
          </p>
        </div>
      </div>
    </section>
  );
}
