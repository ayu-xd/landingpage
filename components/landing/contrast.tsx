import { Check, X } from 'lucide-react'
import { AUTH_URL, CONTRAST } from '@/lib/landing-data'
import {
  GradientButton,
  HandNote,
  Section,
  SectionHeading,
  SwooshArrow,
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
        <div className="rounded-[20px] bg-white p-6 shadow-[0_2px_20px_0_rgba(0,0,0,0.07)] sm:p-8">
          <h3 className="mb-5 text-center text-base font-semibold text-ink-soft">{CONTRAST.oldLabel}</h3>
          <ul className="space-y-2.5">
            {CONTRAST.rows.map((row) => (
              <li
                key={row.old}
                className="flex items-center gap-3 rounded-[10px] bg-rose-50 px-3.5 py-3 text-sm leading-snug text-ink"
              >
                {/* Red square badge with X icon — exact Waalaxy style */}
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-red-500">
                  <X className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                </span>
                {row.old}
              </li>
            ))}
          </ul>
        </div>

        {/* The DMDroid Way — winner card with handwritten annotation above */}
        <div className="relative rounded-[20px] bg-white p-6 shadow-[0_2px_20px_0_rgba(0,0,0,0.07)] sm:p-8">
          {/* Handwritten note floats above-right of the card, arrow angles cleanly down-left into it */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-14 right-4 hidden items-start gap-1 md:flex"
          >
            <HandNote rotate={false} className="-rotate-[4deg] text-lg sm:text-xl">
              {CONTRAST.handNote}
            </HandNote>
            <SwooshArrow dir="down-left" className="h-14 w-14 translate-y-2" />
          </div>

          <h3 className="mb-5 text-center text-base font-semibold text-brand">{CONTRAST.newLabel}</h3>
          <ul className="space-y-2.5">
            {CONTRAST.rows.map((row) => (
              <li
                key={row.now}
                className="flex items-center gap-3 rounded-[10px] bg-emerald-50 px-3.5 py-3 text-sm leading-snug text-ink"
              >
                {/* Green square badge with white check — exact Waalaxy style */}
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-emerald-500">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                </span>
                {row.now}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA — annotation to the LEFT in flow, button to the RIGHT, aligned at bottom */}
      <div className="mt-16 flex flex-col items-center">
        <div className="flex items-end gap-6">
          {/* Handwritten callout — Waalaxy style: whole group tilts +23deg CW, arrow above text */}
          <div
            aria-hidden
            className="pointer-events-none mb-3 hidden flex-col items-start gap-1 sm:flex"
            style={{ transform: 'rotate(23deg)' }}
          >
            {/* Arrow on top, right-aligned, pointing ↗ toward button */}
            <img
              src="/waalaxy-arrow.png"
              alt=""
              className="h-12 w-14 self-end object-contain"
              style={{ transform: 'rotate(133deg)' }}
            />
            {/* Text below the arrow, left-aligned */}
            <p
              className="lp-hand text-left text-xl leading-[1.1] text-ink sm:text-2xl"
              style={{ whiteSpace: 'nowrap' }}
            >
              Seriously, try
              <br />
              it yourself
            </p>
          </div>

          {/* Button + trial text */}
          <div className="flex flex-col items-center gap-2">
            <GradientButton href={AUTH_URL} size="md">
              {CONTRAST.cta}
            </GradientButton>
            <p className="text-[13px] text-whisper">3-day free trial</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
