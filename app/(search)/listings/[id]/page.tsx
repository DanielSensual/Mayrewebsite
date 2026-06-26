import type { Metadata } from "next";

interface ListingDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ListingDetailProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Listing ${id} — Florida Property Details`,
    description: `View details for listing ${id}. Contact Maryelin Caldera for a private showing.`,
  };
}

export default async function ListingDetailPage({
  params,
}: ListingDetailProps) {
  const { id } = await params;

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          Listing {id}
        </h1>
        <p className="text-body text-muted-foreground">
          Listing detail layout will be built in Phase 5.
        </p>
      </div>
    </section>
  );
}
