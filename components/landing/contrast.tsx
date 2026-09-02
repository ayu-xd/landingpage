import { Check, X } from 'lucide-react'
import { AUTH_URL, CONTRAST } from '@/lib/landing-data'
import {
  Annotation,
  GradientButton,
  Section,
  SectionHeading,
} from './primitives'

/**
 * Waalaxy's strongest section: "Outreach shouldn't feel like a second job"
 * with The Old Way / The DMDroid Way side by side. The handwritten note
 * sits above the right card with its swoosh arrow diving into the winner
 * column.
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

        {/* The DMDroid Way, the winner card, with the handwritten note
            floating above it, its swoosh diving into the card. */}
        <div className="relative rounded-[24px] border-2 border-brand bg-white p-6 pt-10 shadow-[0_24px_60px_-30px_rgba(49,90,231,0.35)] sm:p-8 sm:pt-12">
          <Annotation
            note={CONTRAST.handNote}
            className="-top-7 left-4 z-20 hidden md:flex"
            rotate="-rotate-[6deg]"
            dir="down"
            arrowClass="h-16 w-16"
          />

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
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <GradientButton href={AUTH_URL} size="lg">
          {CONTRAST.cta}
        </GradientButton>
        {/* Waalaxy's "Seriously, try it yourself" sits right beside the CTA
            at the bottom of this section. */}
        <p className="lp-hand rotate-[-2deg] text-xl sm:text-2xl">
          Seriously, try it yourself
        </p>
        <p className="text-[13px] text-whisper">3-day free trial</p>
      </div>
    </Section>
  )
}
