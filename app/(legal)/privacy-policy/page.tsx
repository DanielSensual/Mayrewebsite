import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Maryelin Caldera Real Estate. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-display text-4xl text-brand-charcoal mb-8">
          Privacy Policy
        </h1>
        <div className="text-body text-muted-foreground space-y-4">
          <p>
            This privacy policy will be populated with the full legal text in a
            future update.
          </p>
        </div>
      </div>
    </section>
  );
}
