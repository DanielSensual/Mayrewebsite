'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const BULLET_POINTS = [
  'Comprehensive market analysis',
  'Professional photography & staging tips',
  'Strategic pricing to maximize your sale',
] as const;

/* -------------------------------------------------------------------------- */
/*  Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function SellerCta() {
  return (
    <section aria-labelledby="seller-cta-heading" className="overflow-hidden">
      <motion.div
        className="flex flex-col lg:flex-row"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* ============================================================
            LEFT — Copy & CTA
            ============================================================ */}
        <div className="flex flex-col justify-center bg-brand-navy-primary px-8 py-20 lg:w-1/2 lg:px-16">
          <motion.div variants={fadeUp}>
            {/* Gold eyebrow */}
            <span className="flex items-center gap-3 font-sans text-sm font-medium tracking-wide text-brand-gold">
              <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
              Thinking of Selling?
            </span>
          </motion.div>

          <motion.h2
            id="seller-cta-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
            variants={fadeUp}
          >
            Get Your Free Home Valuation
          </motion.h2>

          <motion.p
            className="mt-5 max-w-lg text-body leading-relaxed text-white/70"
            variants={fadeUp}
          >
            Discover what your Florida home is worth in today&apos;s market.
            Maryelin provides a comprehensive, no-obligation property analysis
            backed by local market expertise.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            className="mt-8 flex flex-col gap-4"
            variants={fadeUp}
            aria-label="Valuation benefits"
          >
            {BULLET_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15">
                  <Check
                    className="h-3.5 w-3.5 text-brand-gold"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm font-medium leading-relaxed text-white/90">
                  {point}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div className="mt-10" variants={fadeUp}>
            <Link
              href="/home-value"
              className="
                inline-flex items-center justify-center
                rounded-sm bg-brand-gold px-7 py-3.5
                font-sans text-sm font-semibold tracking-wide text-brand-charcoal
                transition-all duration-300
                hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/20
                active:scale-[0.97]
              "
            >
              Get My Free Valuation
            </Link>
          </motion.div>
        </div>

        {/* ============================================================
            RIGHT — Image
            ============================================================ */}
        <motion.div
          className="relative min-h-[400px] lg:w-1/2 lg:min-h-0"
          variants={imageReveal}
        >
          <Image
            src="/media/property-kitchen.jpg"
            alt="Luxury Florida kitchen interior showcasing the quality of homes Maryelin Caldera represents"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
