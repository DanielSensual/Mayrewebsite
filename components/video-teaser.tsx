'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

interface VideoCard {
  title: string;
  slug: string;
  poster: string;
  category: string;
  duration: string;
}

const VIDEOS: VideoCard[] = [
  {
    title: 'Winter Park New Build — Full Tour',
    slug: 'winter-park-new-build',
    poster: '/media/poster-margy.jpg',
    category: 'YOUTUBE PROPERTY TOUR',
    duration: '4:45',
  },
  {
    title: 'Agent-Led Home Tour',
    slug: 'agent-led-home-tour',
    poster: '/media/poster-reel-1.jpg',
    category: 'VERTICAL LISTING REEL',
    duration: '0:14',
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function VideoTeaser() {
  return (
    <section className="bg-white py-24" aria-labelledby="video-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---- Section Header ---- */}
        <div className="mb-14 max-w-2xl">
          {/* Gold eyebrow */}
          <span className="flex items-center gap-3 font-sans text-sm font-medium tracking-wide text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
            See Florida Through My Eyes
          </span>

          <h2
            id="video-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-4xl"
          >
            Property Tours & Market Updates
          </h2>

          <p className="mt-4 text-body text-muted-foreground">
            Take a virtual walk through Florida&apos;s finest properties and stay
            informed with the latest market insights — all from the comfort of
            your screen.
          </p>
        </div>

        {/* ---- Video Cards ---- */}
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {VIDEOS.map(({ title, slug, poster, category, duration }) => (
            <motion.div key={slug} variants={cardVariants}>
              <Link
                href={`/videos/${slug}`}
                className="group relative block aspect-video overflow-hidden rounded-sm focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                aria-label={`Watch: ${title} (${duration})`}
              >
                {/* Poster Image */}
                <Image
                  src={poster}
                  alt={`Video thumbnail for ${title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <span
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy-primary/80 via-brand-navy-primary/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Center Play Button */}
                <span
                  className="
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    flex h-16 w-16 items-center justify-center
                    rounded-full border border-white/40
                    bg-white/10 backdrop-blur-sm
                    transition-all duration-300
                    group-hover:scale-110 group-hover:bg-white group-hover:border-white
                  "
                  aria-hidden="true"
                >
                  <Play
                    className="h-6 w-6 translate-x-0.5 text-white transition-colors duration-300 group-hover:text-brand-navy-primary fill-current"
                    strokeWidth={0}
                  />
                </span>

                {/* Bottom Content */}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                  {/* Left — Category + Title */}
                  <span className="flex flex-col gap-1.5">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-brand-gold">
                      {category}
                    </span>
                    <span className="font-serif text-xl leading-snug text-white sm:text-2xl">
                      {title}
                    </span>
                  </span>

                  {/* Right — Duration Badge */}
                  <span className="shrink-0 rounded-sm border border-white/25 px-2.5 py-1 font-sans text-xs font-medium text-white/90">
                    {duration}
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- View All CTA ---- */}
        <div className="mt-10 text-center">
          <Link
            href="/videos"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-gold transition-colors duration-300 hover:text-brand-gold/80"
          >
            Watch All Videos
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
