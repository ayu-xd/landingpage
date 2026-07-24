'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AUTH_URL, NAV_LINKS, TRIAL_CTA } from '@/lib/landing-data'
import { Logo } from './logo'

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          ? 'border-border bg-background/70 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="DMDroid home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={AUTH_URL}
            className="flex h-9 items-center rounded-lg px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </a>
          <a
            href={AUTH_URL}
            className="flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start free trial
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={AUTH_URL}
                className="flex h-10 items-center justify-center rounded-lg border border-border text-sm font-medium"
              >
                Log in
              </a>
              <a
                href={AUTH_URL}
                className="flex h-10 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
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
