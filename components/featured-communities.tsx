'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

interface Community {
  name: string;
  slug: string;
  image: string;
}

const COMMUNITIES: Community[] = [
  {
    name: 'Winter Park',
    slug: 'winter-park',
    image: '/media/property-kitchen.jpg',
  },
  {
    name: 'Lake Nona',
    slug: 'lake-nona',
    image: '/media/property-dining.jpg',
  },
  {
    name: 'Dr. Phillips',
    slug: 'dr-phillips',
    image: '/media/property-winebar.jpg',
  },
  {
    name: 'Windermere',
    slug: 'windermere',
    image: '/media/property-entryway.jpg',
  },
  {
    name: 'Celebration',
    slug: 'celebration',
    image: '/media/community-lakefront.png',
  },
  {
    name: 'Downtown Orlando',
    slug: 'downtown-orlando',
    image: '/media/community-downtown.png',
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

export function FeaturedCommunities() {
  return (
    <section className="bg-white py-24" aria-labelledby="communities-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---- Section Header ---- */}
        <div className="mb-14 max-w-2xl">
          {/* Gold eyebrow */}
          <span className="flex items-center gap-3 font-sans text-sm font-medium tracking-wide text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
            Explore Florida Communities
          </span>

          <h2
            id="communities-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-4xl"
          >
            Find Your Perfect Neighborhood
          </h2>

          <p className="mt-4 text-body text-muted-foreground">
            From lakefront living to urban luxury, discover the most sought-after
            communities in Central Florida — each with its own distinct character
            and lifestyle.
          </p>
        </div>

        {/* ---- Grid ---- */}
        <motion.div
          className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {COMMUNITIES.map(({ name, slug, image }) => (
            <motion.div key={slug} variants={cardVariants}>
              <Link
                href={`/communities/${slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-sm focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                aria-label={`Explore ${name}`}
              >
                {/* Background Image */}
                <Image
                  src={image}
                  alt={`${name} community`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <span
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy-primary/80 via-transparent to-transparent transition-colors duration-500 group-hover:from-brand-navy-primary/90"
                  aria-hidden="true"
                />

                {/* Content */}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                  <span className="flex flex-col gap-1">
                    <span className="font-serif text-lg leading-snug text-white">
                      {name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Explore
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- View All CTA ---- */}
        <div className="mt-10 text-center">
          <Link
            href="/communities"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-gold transition-colors duration-300 hover:text-brand-gold/80"
          >
            View All Communities
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
