import { ArrowDown } from 'lucide-react'
import { AUTH_URL, HERO } from '@/lib/landing-data'
import { DashboardMockup } from './mockups'
import { GradientButton, HandArrow, HandNote } from './primitives'

/**
 * Waalaxy's hero, 1:1: white background, centered H1 + subhead, single
 * gradient CTA with the trial line under it, product mockup below, and the
 * handwritten annotation pointing at the magic.
 */
export function Hero() {
  return (
    <section id="top" className="bg-white pt-32 md:pt-40">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-[2.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[3.5rem] md:text-[4rem]">
            {HERO.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
            {HERO.subhead}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <GradientButton href={AUTH_URL} size="lg" className="w-full sm:w-auto">
              {HERO.cta}
            </GradientButton>
            <a
              href="#how"
              className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand transition-colors hover:text-ink"
            >
              {HERO.ctaSecondary}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <p className="text-[13px] text-whisper">{HERO.trial}</p>
          </div>
        </div>

        {/* Product mockup with the handwritten annotation pointing at it. */}
        <div className="relative mx-auto mt-14 max-w-4xl md:mt-20">
          <DashboardMockup />

          <div className="pointer-events-none absolute -right-4 top-6 hidden flex-col items-center gap-1 md:flex lg:-right-10">
            <HandNote className="rotate-[8deg]">{HERO.handNote}</HandNote>
            <HandArrow className="rotate-[130deg]" />
          </div>
        </div>
      </div>
    </section>
  )
}
