'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: 'Communities', href: '/communities' },
  { label: 'About', href: '/about' },
  { label: 'Sell', href: '/sell' },
  { label: 'Videos', href: '/videos' },
  { label: 'Blog', href: '/blog' },
] as const;

const PHONE_NUMBER = '(305) 833-8623';
const PHONE_HREF = 'tel:+13058338623';
const SCROLL_THRESHOLD = 50;

/* ------------------------------------------------------------------ */
/*  Mobile Overlay Variants                                            */
/* ------------------------------------------------------------------ */

const overlayVariants = {
  closed: { x: '100%' },
  open: {
    x: 0,
    transition: { type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] },
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.3, ease: [0.32, 0.72, 0, 1] },
  },
} as const;

const linkStagger = {
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
  closed: {},
} as const;

const linkItem = {
  closed: { opacity: 0, x: 30 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 0.35, ease: 'easeOut' },
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---- Scroll listener ---- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    /* Check on mount in case of refresh mid-page */
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${
          scrolled
            ? 'bg-brand-navy-primary/[0.97] shadow-[0_2px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm'
            : 'bg-transparent'
        }
      `}
    >
      {/* ============================================================
          DESKTOP HEADER
          ============================================================ */}
      <div className="hidden lg:flex items-center justify-between h-20 px-8 xl:px-12 max-w-[1440px] mx-auto">
        {/* ---- Logo / Brand ---- */}
        <Link href="/" className="group flex flex-col" aria-label="Maryelin Caldera — Home">
          <span className="font-serif text-white text-lg font-semibold tracking-wider leading-tight">
            MARYELIN CALDERA
          </span>
          <span className="font-sans text-xs text-brand-gold uppercase tracking-[0.2em] mt-0.5">
            Florida Real Estate
          </span>
        </Link>

        {/* ---- Navigation ---- */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="
                    relative font-sans text-sm font-medium text-white/90
                    transition-colors duration-300
                    hover:text-brand-gold
                    focus-visible:text-brand-gold
                    after:absolute after:left-0 after:-bottom-1
                    after:h-px after:w-0 after:bg-brand-gold
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---- Right actions ---- */}
        <div className="flex items-center gap-6">
          {/* Phone */}
          <a
            href={PHONE_HREF}
            className="
              flex items-center gap-2 text-white/80
              transition-colors duration-300 hover:text-brand-gold
            "
            aria-label={`Call Maryelin Caldera at ${PHONE_NUMBER}`}
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            <span className="font-sans text-sm font-medium">{PHONE_NUMBER}</span>
          </a>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              px-5 py-2.5 rounded-sm
              bg-brand-gold text-brand-charcoal
              font-sans text-sm font-semibold
              tracking-wide
              transition-all duration-300
              hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/20
              active:scale-[0.97]
            "
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* ============================================================
          MOBILE HEADER BAR
          ============================================================ */}
      <div className="flex lg:hidden items-center justify-between h-16 px-5">
        {/* ---- Monogram ---- */}
        <Link href="/" className="flex items-center" aria-label="Maryelin Caldera — Home">
          <span className="font-serif text-brand-gold text-xl font-bold tracking-wide">MC</span>
        </Link>

        {/* ---- Hamburger ---- */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="
            flex items-center justify-center
            h-10 w-10 -mr-1
            text-white
            transition-colors duration-200
            hover:text-brand-gold
          "
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-overlay"
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* ============================================================
          MOBILE FULL-SCREEN OVERLAY
          ============================================================ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="
              fixed inset-0 z-[60]
              bg-brand-navy-primary
              flex flex-col
              lg:hidden
            "
          >
            {/* ---- Overlay top bar ---- */}
            <div className="flex items-center justify-between h-16 px-5">
              <Link
                href="/"
                onClick={closeMobile}
                className="flex items-center"
                aria-label="Maryelin Caldera — Home"
              >
                <span className="font-serif text-brand-gold text-xl font-bold tracking-wide">
                  MC
                </span>
              </Link>

              <button
                type="button"
                onClick={closeMobile}
                className="
                  flex items-center justify-center
                  h-10 w-10 -mr-1
                  text-white
                  transition-colors duration-200
                  hover:text-brand-gold
                "
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* ---- Divider ---- */}
            <div className="mx-5 h-px bg-white/10" />

            {/* ---- Nav links ---- */}
            <motion.nav
              aria-label="Mobile navigation"
              className="flex-1 flex flex-col justify-center px-8"
              variants={linkStagger}
              initial="closed"
              animate="open"
            >
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map(({ label, href }) => (
                  <motion.li key={href} variants={linkItem}>
                    <Link
                      href={href}
                      onClick={closeMobile}
                      className="
                        block py-3
                        font-serif text-2xl text-white/90
                        tracking-wide
                        transition-colors duration-300
                        hover:text-brand-gold
                      "
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* ---- Bottom section ---- */}
            <motion.div
              className="px-8 pb-10 space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
            >
              {/* Phone */}
              <a
                href={PHONE_HREF}
                className="
                  flex items-center gap-3 text-white/70
                  transition-colors duration-300 hover:text-brand-gold
                "
                aria-label={`Call Maryelin Caldera at ${PHONE_NUMBER}`}
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                <span className="font-sans text-sm font-medium">{PHONE_NUMBER}</span>
              </a>

              {/* CTA */}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="
                  flex items-center justify-center
                  w-full py-3.5 rounded-sm
                  bg-brand-gold text-brand-charcoal
                  font-sans text-sm font-semibold
                  tracking-wide
                  transition-all duration-300
                  hover:bg-brand-gold/90
                  active:scale-[0.98]
                "
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
