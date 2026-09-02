'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ANNOUNCEMENT, AUTH_URL, NAV_LINKS, TRIAL_CTA } from '@/lib/landing-data'
import { Logo } from './logo'
import { GradientButton } from './primitives'

/**
 * Waalaxy's nav: white bar, hairline border once scrolled, centered links,
 * text "Log in" + gradient trial button. Dismissible announcement above.
 */
export function SiteNav() {
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
    <header className="fixed inset-x-0 top-0 z-50">
      {ANNOUNCEMENT && barOpen && (
        <div className="relative bg-ink text-white">
          <div className="mx-auto flex max-w-content items-center justify-center gap-2 px-10 py-2 sm:px-6">
            <p className="text-center text-[13px] leading-snug">
              {ANNOUNCEMENT}
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

      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? 'border-hairline-soft bg-white/85 backdrop-blur-[12px]'
            : 'border-transparent bg-white'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-6">
          <a href="#top" aria-label="DMDroid home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={AUTH_URL}
              className="flex h-9 items-center rounded-[10px] px-3 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Log in
            </a>
            <GradientButton href={AUTH_URL} className="h-11 px-5 text-[15px]">
              {TRIAL_CTA}
            </GradientButton>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md p-2 text-ink-soft hover:text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-hairline-soft bg-white px-5 py-4 sm:px-6 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[10px] px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-surface-alt hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={AUTH_URL}
                className="flex h-11 items-center justify-center rounded-[12px] border border-hairline text-[15px] font-semibold text-ink"
              >
                Log in
              </a>
              <GradientButton href={AUTH_URL} className="w-full">
                {TRIAL_CTA}
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
