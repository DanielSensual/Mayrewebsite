'use client';

import { useState } from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Clock,
  MapPin,
  Star,
  Search,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const SEARCH_TABS = ['Buy', 'Sell', 'Rent', 'New Construction'] as const;
type SearchTab = (typeof SEARCH_TABS)[number];

const TRUST_METRICS = [
  {
    icon: Building2,
    label: 'eXp Realty',
    sublabel: 'Brokerage',
  },
  {
    icon: Clock,
    label: '10+ Years',
    sublabel: 'Experience',
  },
  {
    icon: MapPin,
    label: 'Central Florida',
    sublabel: 'Expert',
  },
  {
    icon: Star,
    label: '5-Star',
    sublabel: 'Reviews',
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const trustBarVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 1.0,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<SearchTab>('Buy');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section
      className="relative min-h-svh flex flex-col overflow-hidden"
      aria-label="Hero — Find your Florida home"
    >
      {/* ==============================================================
          BACKGROUND VIDEO
          ============================================================== */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/maryelin-portrait.jpg"
          aria-hidden="true"
        >
          <source
            src="https://pub-03f7bc79b2ab4f189f32839f34d6fd24.r2.dev/margy-film.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ==============================================================
          GRADIENT OVERLAY
          ============================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-brand-navy-primary/70 via-brand-navy-primary/60 to-brand-navy-primary/90"
      />

      {/* Subtle vignette for cinematic depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, transparent 40%, rgba(19,24,32,0.35) 100%)',
        }}
      />

      {/* ==============================================================
          CONTENT
          ============================================================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative z-10 flex-1 flex flex-col justify-end
          px-5 sm:px-8 xl:px-12
          pt-32 pb-12 sm:pb-14
          max-w-[1440px] mx-auto w-full
        "
      >
        <div className="max-w-3xl">
          {/* ---- Eyebrow ---- */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-3 mb-5"
          >
            <span
              aria-hidden="true"
              className="block w-8 h-px bg-brand-gold"
            />
            <span className="text-brand-gold text-xs font-sans font-medium uppercase tracking-[0.28em]">
              Florida Real Estate Expert
            </span>
          </motion.div>

          {/* ---- Heading ---- */}
          <motion.h1
            variants={fadeUpVariants}
            className="
              font-serif font-bold text-white
              text-[2.625rem] sm:text-5xl lg:text-6xl
              tracking-tight leading-[1.06]
              mb-5 sm:mb-6
            "
          >
            Buy, Sell, and Move
            <br className="hidden sm:block" /> Through Florida
            <br className="hidden sm:block" /> With{' '}
            <span className="text-brand-gold">Confidence.</span>
          </motion.h1>

          {/* ---- Subtitle ---- */}
          <motion.p
            variants={fadeUpVariants}
            className="
              text-white/75 font-sans
              text-base sm:text-lg
              leading-relaxed
              max-w-xl
              mb-8 sm:mb-10
            "
          >
            Maryelin Caldera — Licensed with eXp Realty. Helping families
            navigate Central Florida real estate with integrity and expertise.
          </motion.p>

          {/* ---- Search Box ---- */}
          <motion.div
            variants={fadeUpVariants}
            className="
              bg-white/10 backdrop-blur-md
              border border-white/15
              rounded-sm
              mb-6 sm:mb-8
            "
          >
            {/* Tab bar */}
            <div
              role="tablist"
              aria-label="Search type"
              className="flex gap-0 border-b border-white/10 px-4 sm:px-5"
            >
              {SEARCH_TABS.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  type="button"
                  aria-selected={activeTab === tab}
                  aria-controls="search-panel"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative py-3 px-3 sm:px-4
                    text-xs font-sans font-medium uppercase tracking-widest
                    transition-colors duration-300
                    ${
                      activeTab === tab
                        ? 'text-white border-b-2 border-brand-gold -mb-px'
                        : 'text-white/60 hover:text-white'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search input row */}
            <div
              id="search-panel"
              role="tabpanel"
              className="flex flex-col sm:flex-row gap-3 p-4 sm:p-5"
            >
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by city, neighborhood, or ZIP..."
                  aria-label={`Search properties to ${activeTab.toLowerCase()}`}
                  className="
                    w-full pl-10 pr-4 py-3
                    bg-white/10 border border-white/15 rounded-sm
                    text-white placeholder:text-white/40
                    text-sm font-sans
                    outline-none
                    transition-all duration-300
                    focus:border-brand-gold/60 focus:bg-white/15
                    focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-2
                  "
                />
              </div>
              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-sm
                  bg-brand-gold text-brand-charcoal
                  text-sm font-sans font-semibold
                  tracking-wide
                  transition-all duration-300
                  hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/20
                  active:scale-[0.97]
                  whitespace-nowrap
                "
              >
                Search Homes
              </button>
            </div>
          </motion.div>

          {/* ---- Dual CTAs ---- */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="/listings"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-sm
                bg-brand-gold text-brand-charcoal
                text-sm font-sans font-semibold
                uppercase tracking-wide
                transition-all duration-300
                hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/20
                active:scale-[0.97]
              "
            >
              Search All Homes
            </Link>
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-sm
                border border-white/30 text-white
                text-sm font-sans font-medium
                uppercase tracking-wide
                transition-all duration-300
                hover:bg-white hover:text-brand-navy-primary
                active:scale-[0.97]
              "
            >
              Book a Private Consultation
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ==============================================================
          TRUST METRICS BAR
          ============================================================== */}
      <motion.div
        variants={trustBarVariants}
        initial="hidden"
        animate="visible"
        className="
          relative z-10
          border-t border-white/15
          bg-brand-navy-primary/30 backdrop-blur-sm
        "
      >
        <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 xl:px-12">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 py-5 sm:py-6">
            {TRUST_METRICS.map(({ icon: Icon, label, sublabel }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex items-center justify-center h-9 w-9 rounded-sm bg-brand-gold/10">
                  <Icon
                    className="h-4 w-4 text-brand-gold"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-sans font-semibold uppercase tracking-widest leading-tight">
                    {label}
                  </span>
                  <span className="text-white/50 text-[0.65rem] font-sans uppercase tracking-wider">
                    {sublabel}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
