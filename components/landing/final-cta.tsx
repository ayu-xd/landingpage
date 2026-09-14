import { ArrowRight } from 'lucide-react'
import { AUTH_URL, CONTACT_EMAIL, FINAL_CTA } from '@/lib/landing-data'
import { HandNote, SwooshArrow } from './primitives'

/**
 * Waalaxy's end CTA: gradient band, centered heading, one big white CTA,
 * trial line. The handwritten "Seriously, try it yourself" hovers left of
 * the button, its swoosh arrow diving right into the button.
 */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      {/* Subtle radial glow, Waalaxy's hero-button vibe scaled up. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 120% at 50% 100%, rgba(32,161,255,0.45) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-content px-5 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[2.75rem]">
            {FINAL_CTA.heading}
            <span className="block mt-2 text-xl font-medium text-white/80 sm:text-2xl">{FINAL_CTA.tagline}</span>
          </h2>

          <div className="relative mt-10 flex flex-col items-center gap-3">
            {/* Button block (relative so annotation can hang off the left side) */}
            <div className="relative">
              {/* Handwritten callout (Absolute so it doesn't push the button off-center) */}
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-full mb-3 mr-6 hidden w-max flex-col items-start gap-1 sm:flex"
                style={{ transform: 'rotate(23deg)' }}
              >
                {/* Arrow on top, right-aligned, pointing ↗ toward button, white filter */}
                <img
                  src="/waalaxy-arrow.png"
                  alt=""
                  className="h-16 w-20 self-end object-contain brightness-0 invert"
                  style={{ transform: 'rotate(133deg)' }}
                />
                {/* Text below the arrow, left-aligned */}
                <p
                  className="lp-hand text-left text-xl leading-[1.1] text-white sm:text-2xl"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Seriously, try
                  <br />
                  it yourself
                </p>
              </div>

              {/* Button */}
              <a
                href={AUTH_URL}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[16px] bg-white px-8 text-lg font-bold text-brand shadow-[0_18px_40px_-12px_rgba(9,20,60,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-12px_rgba(9,20,60,0.55)]"
              >
                {FINAL_CTA.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            
            {/* Trial text below button */}
            <p className="text-[13px] text-white/80">{FINAL_CTA.trial}</p>
            <p className="mt-1 text-sm text-white/85">
              {FINAL_CTA.contact}{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Waalaxy's end CTA: gradient band, centered "Start booking calls today /
 * And get your first replies tomorrow", one big white CTA, trial line.
 * The handwritten "Seriously, try it yourself" hovers left of the button
 * with its swoosh arrow diving into it.
 */
