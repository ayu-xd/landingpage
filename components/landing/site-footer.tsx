import { CONTACT_EMAIL, FOOTER } from '@/lib/landing-data'
import { Logo } from './logo'

/**
 * Waalaxy's footer: light, generous, logo + tagline column, link columns,
 * copyright bar with the not-affiliated line.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-hairline-soft bg-white">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {FOOTER.tagline}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-bold text-ink">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-soft transition-colors hover:text-brand"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline-soft pt-6 text-xs text-whisper sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DMDroid</p>
          <p>Not affiliated with or endorsed by Instagram or Meta.</p>
        </div>
        <p className="mt-3 text-xs italic text-whisper">{FOOTER.footnote}</p>
      </div>
    </footer>
  )
}
