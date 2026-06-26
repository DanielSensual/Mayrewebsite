import type { Metadata } from "next";
import { SchemaMarkup } from "@/components/schema-markup";

interface VideoWatchProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: VideoWatchProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} — Watch Video`,
    description: `Watch "${title}" — a Florida real estate video by Maryelin Caldera.`,
  };
}

export default async function VideoWatchPage({ params }: VideoWatchProps) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <SchemaMarkup
        type="VideoObject"
        data={{
          name: title,
          description: `Florida real estate video: ${title}`,
          thumbnailUrl: "https://maryelincaldera.com/placeholder-thumb.jpg",
          uploadDate: new Date().toISOString(),
          contentUrl: `https://maryelincaldera.com/videos/${slug}`,
        }}
      />
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="heading-display text-4xl md:text-5xl text-brand-charcoal mb-4">
            {title}
          </h1>
          <p className="text-body text-muted-foreground">
            Video watch page template will be built in Phase 3.
          </p>
        </div>
      </section>
    </>
  );
}
