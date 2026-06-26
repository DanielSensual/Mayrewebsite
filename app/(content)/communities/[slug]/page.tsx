import type { Metadata } from "next";

interface CommunityDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CommunityDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} — Florida Community Guide`,
    description: `Explore ${title}, Florida. Local lifestyle, homes for sale, market data, and community videos from Maryelin Caldera.`,
  };
}

export default async function CommunityDetailPage({
  params,
}: CommunityDetailProps) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
          {title}
        </h1>
        <p className="text-body text-muted-foreground">
          Community detail template will be built in Phase 3.
        </p>
      </div>
    </section>
  );
}
