import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Social SVG Icons (brand icons not available in lucide-react)               */
/* -------------------------------------------------------------------------- */

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const exploreLinks = [
  { label: "Search Homes", href: "/listings" },
  { label: "Communities", href: "/communities" },
  { label: "About Maryelin", href: "/about" },
  { label: "Videos", href: "/videos" },
  { label: "Blog", href: "/blog" },
] as const;

const sellerLinks = [
  { label: "Free Home Valuation", href: "/home-value" },
  { label: "Seller Guide", href: "/sell" },
  { label: "Why List With Me", href: "/about" },
  { label: "Market Reports", href: "/blog" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: IconInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: IconFacebook },
  { label: "YouTube", href: "https://youtube.com", icon: IconYouTube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: IconLinkedIn },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function SiteFooter() {
  return (
    <footer
      className="bg-brand-navy-primary text-white pb-[calc(var(--spacing-mobile-bar)+1rem)] lg:pb-8"
      role="contentinfo"
    >
      {/* ——— Main Grid ——— */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Maryelin Caldera — Home">
              <span className="font-serif text-xl tracking-tight text-white">
                MARYELIN CALDERA
              </span>
              <span className="mt-0.5 block text-xs font-sans uppercase tracking-widest text-brand-gold">
                Florida Real Estate
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-300">
              Your trusted Florida real estate expert. Dedicated to helping you
              find your perfect home.
            </p>

            {/* Social Icons */}
            <nav aria-label="Social media links" className="mt-6 flex gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-colors duration-200 hover:border-brand-gold hover:text-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Explore
            </h3>
            <nav aria-label="Explore links" className="mt-4 flex flex-col gap-3">
              {exploreLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-brand-gold"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Sellers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Sellers
            </h3>
            <nav aria-label="Seller links" className="mt-4 flex flex-col gap-3">
              {sellerLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-brand-gold"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </h3>

            <div className="mt-4 space-y-1">
              <p className="text-sm font-medium text-white">Maryelin Caldera</p>
              <p className="text-xs text-gray-400">Licensed Real Estate Agent</p>
            </div>

            <address className="mt-4 flex flex-col gap-3 not-italic">
              <span className="flex items-start gap-2.5 text-sm text-gray-300">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                  aria-hidden="true"
                />
                Orlando, FL
              </span>

              <a
                href="tel:+13058338623"
                className="flex items-center gap-2.5 text-sm text-gray-300 transition-colors duration-200 hover:text-brand-gold"
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-brand-gold"
                  aria-hidden="true"
                />
                (305) 833-8623
              </a>

              <a
                href="mailto:maryelin.caldera@exprealty.com"
                className="flex items-center gap-2.5 text-sm text-gray-300 transition-colors duration-200 hover:text-brand-gold"
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-brand-gold"
                  aria-hidden="true"
                />
                maryelin.caldera@exprealty.com
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* ——— Divider ——— */}
      <div className="border-t border-white/10" />

      {/* ——— Bottom Bar ——— */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        {/* Three-column bottom row */}
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          {/* Left — Copyright */}
          <p className="text-xs text-gray-400 lg:order-1">
            &copy; {new Date().getFullYear()} Maryelin Caldera. All rights
            reserved.
          </p>

          {/* Center — Fair Housing */}
          <div className="max-w-md lg:order-2">
            <p className="text-xs leading-relaxed text-gray-400">
              <span
                className="mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-sm border border-gray-500 text-[8px] font-bold leading-none text-gray-400"
                aria-hidden="true"
              >
                =
              </span>
              We are committed to Equal Housing Opportunity. Fair Housing Act
              compliance.
            </p>
          </div>

          {/* Right — Legal Links */}
          <nav
            aria-label="Legal"
            className="flex gap-4 lg:order-3"
          >
            {legalLinks.map(({ label, href }, i) => (
              <span key={href} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-white/20" aria-hidden="true">
                    ·
                  </span>
                )}
                <Link
                  href={href}
                  className="text-xs text-gray-400 transition-colors duration-200 hover:text-brand-gold"
                >
                  {label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        {/* MLS Disclaimer */}
        <p className="mt-6 text-center text-[11px] leading-relaxed text-gray-500">
          MLS data provided by the local Multiple Listing Service. Information
          deemed reliable but not guaranteed. All properties subject to prior
          sale, change, or withdrawal.
        </p>
      </div>
    </footer>
  );
}
