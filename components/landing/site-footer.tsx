import { AUTH_URL, CONTACT_EMAIL, FOOTER, TRIAL_CTA } from '@/lib/landing-data'
import { Logo } from './logo'

const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    heading: 'Get started',
    links: [
      { label: 'Log in', href: AUTH_URL },
      { label: TRIAL_CTA, href: AUTH_URL },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Support', href: '/support' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm italic leading-relaxed text-whisper-dark">
              {FOOTER.tagline}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-bold text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 DMDroid. All rights reserved.</p>
          <p>Not affiliated with or endorsed by Instagram or Meta.</p>
        </div>
        <p className="mt-3 text-xs italic text-whisper-dark">
          {FOOTER.footnote}
        </p>
      </div>
    </footer>
  )
}
