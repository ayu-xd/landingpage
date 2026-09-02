import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { AUTH_URL, HERO } from '@/lib/landing-data'
import { DashboardMockup } from './mockups'
import { Annotation, GradientButton } from './primitives'

/**
 * Waalaxy's hero, 1:1: soft background image, centered H1 + subhead, single
 * gradient CTA with the trial line under it, product mockup below, and the
 * handwritten annotation swooping down into the mockup.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 md:pt-40">
      {/* The original page's background art, behind everything. */}
      <Image
        src="/hero-bg.avif"
        alt=""
        aria-hidden
        fill
        priority
        className="pointer-events-none select-none object-cover object-center opacity-100"
      />

      <div className="relative mx-auto max-w-content px-5 sm:px-6">
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

        {/* Product mockup. The handwritten annotation sits above-right and
            its big swoosh arrow curves down INTO the mockup, exactly like
            Waalaxy's "The magic's happening here". */}
        <div className="relative mx-auto mt-14 max-w-4xl md:mt-20">
          <DashboardMockup />

          <Annotation
            note={
              <>
                The magic's
                <br />
                happening here
              </>
            }
            className="-top-16 right-0 hidden md:flex lg:-right-14"
            rotate="rotate-[23deg]"
            arrowClass="h-36 w-12 rotate-[10deg]"
          />
        </div>
      </div>
    </section>
  )
}
