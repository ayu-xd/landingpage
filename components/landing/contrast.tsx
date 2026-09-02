import { Check, X } from 'lucide-react'
import { AUTH_URL, CONTRAST } from '@/lib/landing-data'
import { GradientButton, HandArrow, HandNote, Section, SectionHeading } from './primitives'

/**
 * Waalaxy's strongest section: "Outreach shouldn't feel like a second job"
 * with The Old Way / The Waalaxy Way side by side — pain bullets on the
 * left, relief bullets on the right, CTA below.
 */
export function Contrast() {
  return (
    <Section tone="light">
      <SectionHeading
        title={CONTRAST.heading}
        tagline={CONTRAST.tagline}
      />

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        {/* The Old Way */}
        <div className="rounded-[24px] border border-hairline bg-surface p-6 sm:p-8">
          <h3 className="text-lg font-bold text-ink-soft">{CONTRAST.oldLabel}</h3>
          <ul className="mt-6 space-y-4">
            {CONTRAST.rows.map((row) => (
              <li
                key={row.old}
                className="flex items-start gap-3 text-sm leading-relaxed text-whisper"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-whisper/70" aria-hidden />
                {row.old}
              </li>
            ))}
          </ul>
        </div>

        {/* The DMDroid Way — the winner card */}
        <div className="relative rounded-[24px] border-2 border-brand bg-white p-6 shadow-[0_24px_60px_-30px_rgba(49,90,231,0.35)] sm:p-8">
          <h3 className="text-lg font-bold text-brand">{CONTRAST.newLabel}</h3>
          <ul className="mt-6 space-y-4">
            {CONTRAST.rows.map((row) => (
              <li
                key={row.now}
                className="flex items-start gap-3 text-sm font-medium leading-relaxed text-ink"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                {row.now}
              </li>
            ))}
          </ul>

          <div className="pointer-events-none absolute -right-3 -top-14 hidden flex-col items-center gap-1 md:flex">
            <HandNote className="-rotate-[6deg]">{CONTRAST.handNote}</HandNote>
            <HandArrow className="rotate-[75deg]" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <GradientButton href={AUTH_URL} size="lg">
          {CONTRAST.cta}
        </GradientButton>
      </div>
      <p className="mt-4 text-center text-[13px] text-whisper">3-day free trial</p>
    </Section>
  )
}
