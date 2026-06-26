'use client'

import Link from 'next/link'
import { Phone, Search, Home, MessageCircle } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ActionItem {
  /** Accessible label for the button */
  label: string
  /** Lucide icon rendered at size-20 */
  icon: ReactNode
  /** URL or tel: link */
  href: string
  /** When true, render an <a> instead of <Link> (tel:, mailto:, etc.) */
  external?: boolean
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const actions: ActionItem[] = [
  {
    label: 'Call',
    icon: <Phone size={20} aria-hidden="true" />,
    href: 'tel:+13058338623',
    external: true,
  },
  {
    label: 'Search',
    icon: <Search size={20} aria-hidden="true" />,
    href: '/listings',
  },
  {
    label: 'My Home Value',
    icon: <Home size={20} aria-hidden="true" />,
    href: '/home-value',
  },
  {
    label: 'Contact',
    icon: <MessageCircle size={20} aria-hidden="true" />,
    href: '/contact',
  },
]

/* ------------------------------------------------------------------ */
/*  Shared button styles                                               */
/* ------------------------------------------------------------------ */

const buttonClasses = [
  'flex flex-col items-center justify-center',
  'text-brand-gold transition-colors duration-200',
  'hover:text-brand-gold/80 active:scale-95',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold',
].join(' ')

const labelClasses =
  'mt-1 text-[10px] font-medium uppercase tracking-wider text-white/80 transition-colors duration-200 group-hover:text-brand-gold'

/* ------------------------------------------------------------------ */
/*  ActionButton                                                       */
/* ------------------------------------------------------------------ */

function ActionButton({ item }: { item: ActionItem }) {
  const inner = (
    <>
      {item.icon}
      <span className={labelClasses}>{item.label}</span>
    </>
  )

  if (item.external) {
    return (
      <a
        href={item.href}
        className={`group ${buttonClasses}`}
        aria-label={item.label}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      className={`group ${buttonClasses}`}
      aria-label={item.label}
    >
      {inner}
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  MobileActionBar                                                    */
/* ------------------------------------------------------------------ */

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div
        className={[
          'grid h-[4.5rem] grid-cols-4',
          'border-t border-white/10',
          'bg-brand-navy-primary/95 backdrop-blur-sm',
          'shadow-[0_-2px_10px_rgba(0,0,0,0.3)]',
        ].join(' ')}
      >
        {actions.map((item) => (
          <ActionButton key={item.label} item={item} />
        ))}
      </div>
    </nav>
  )
}
