'use client'

import { Bot, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AUTH_URL, NAV_LINKS, TRIAL_CTA } from '@/lib/landing-data'
import { Logo } from './logo'

/**
 * Sticky nav. Transparent over the dark hero, then a blurred near-black bar
 * once you scroll — it stays dark on the light sections on purpose, so the
 * header reads the same on every route.
 *
 * Pass `announcement` to show the dismissible bar above the nav row.
 */
export function SiteNav({ announcement }: { announcement?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [barOpen, setBarOpen] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-ink/85 backdrop-blur-[12px]'
          : 'border-transparent bg-transparent'
      }`}
    >
      {announcement && barOpen && (
        <div className="relative bg-brand-deep text-white">
          <div className="mx-auto flex max-w-content items-center justify-center gap-2 px-10 py-2 sm:px-6">
            <Bot className="h-4 w-4 shrink-0 text-brand-bright" aria-hidden />
            <p className="text-center text-[13px] leading-snug">
              {announcement}
            </p>
          </div>
          <button
            onClick={() => setBarOpen(false)}
            aria-label="Dismiss announcement"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/60 transition-colors hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-6">
        <a href="#top" aria-label="DMDroid home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={AUTH_URL}
            className="flex h-9 items-center rounded-[6px] px-3.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Log in
          </a>
          <a
            href={AUTH_URL}
            className="flex h-9 items-center rounded-[6px] bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            {TRIAL_CTA}
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md p-2 text-white/70 hover:text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 backdrop-blur-xl sm:px-6 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[6px] px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={AUTH_URL}
                className="flex h-10 items-center justify-center rounded-[6px] border border-white/15 text-sm font-medium text-white"
              >
                Log in
              </a>
              <a
                href={AUTH_URL}
                className="flex h-10 items-center justify-center rounded-[6px] bg-brand text-sm font-semibold text-white"
              >
                {TRIAL_CTA}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
