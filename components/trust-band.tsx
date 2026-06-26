import { Shield, MapPin, Star } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Trust Band — Social proof strip beneath the hero                           */
/* -------------------------------------------------------------------------- */

const STARS = 5;

export function TrustBand() {
  return (
    <section
      aria-label="Credentials and testimonial"
      className="bg-brand-ivory py-6"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {/* ---- eXp Realty Branding ---- */}
          <span className="font-sans text-lg font-semibold tracking-tight text-brand-navy-primary">
            eXp Realty
          </span>

          {/* ---- Divider ---- */}
          <span
            className="hidden sm:block h-8 w-px bg-brand-navy-primary/20"
            aria-hidden="true"
          />

          {/* ---- Years in Market ---- */}
          <span className="flex items-center gap-2 text-sm text-brand-navy-primary">
            <Shield
              className="h-4 w-4 shrink-0 text-brand-navy-primary"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            10+ Years in Market
          </span>

          {/* ---- Divider ---- */}
          <span
            className="hidden sm:block h-8 w-px bg-brand-navy-primary/20"
            aria-hidden="true"
          />

          {/* ---- Communities Covered ---- */}
          <span className="flex items-center gap-2 text-sm text-brand-navy-primary">
            <MapPin
              className="h-4 w-4 shrink-0 text-brand-navy-primary"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            Top Florida Communities Covered
          </span>

          {/* ---- Divider (hidden below lg) ---- */}
          <span
            className="hidden lg:block h-8 w-px bg-brand-navy-primary/20"
            aria-hidden="true"
          />

          {/* ---- Pull-quote with Stars (hidden below lg) ---- */}
          <figure className="hidden lg:flex items-center gap-3">
            {/* Stars */}
            <span className="flex gap-0.5" aria-label={`${STARS} out of 5 stars`}>
              {Array.from({ length: STARS }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 text-brand-gold fill-brand-gold"
                  aria-hidden="true"
                />
              ))}
            </span>

            <blockquote className="text-sm italic text-brand-navy-secondary">
              &ldquo;Maryelin made our home buying process so smooth!&rdquo;
              <span className="not-italic"> — Recent Client</span>
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
