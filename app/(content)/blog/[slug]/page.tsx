import type { Metadata } from "next";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} — Florida Real Estate Blog`,
    description: `Read "${title}" — expert real estate insights from Maryelin Caldera.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
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
          Blog article template will be built in Phase 3.
        </p>
      </div>
    </section>
  );
}
