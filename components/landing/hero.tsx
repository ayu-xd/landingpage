import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { AUTH_URL, HERO } from '@/lib/landing-data'
import { Annotation, GradientButton } from './primitives'

/**
 * Waalaxy's hero, 1:1: soft background image, centered H1 + subhead, single
 * gradient CTA with the trial line under it, product mockup below, and the
 * handwritten annotation swooping down into the mockup.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-16 pt-32 md:pb-24 md:pt-40">
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
              href="/#how"
              className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand transition-colors hover:text-ink"
            >
              {HERO.ctaSecondary}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <p className="text-[13px] text-whisper">{HERO.trial}</p>
          </div>
        </div>

        {/* Product demo video. The handwritten annotation sits above-right and
            its swoosh arrow curves down INTO the video. */}
        <div className="relative mx-auto mt-14 max-w-4xl md:mt-20">
          <div className="relative aspect-video w-full overflow-hidden rounded-[24px] border border-hairline bg-black shadow-[0_40px_90px_-40px_rgba(20,20,43,0.25)]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/skH46WFx-ic?rel=0&modestbranding=1"
              title="DMDroid Instagram Outreach Automation Demo"
              aria-label="DMDroid Instagram Outreach Automation Demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          <Annotation
            note={
              <>
                The magic's
                <br />
                happening here
              </>
            }
            className="-top-20 right-6 z-20 hidden md:flex lg:-right-4"
            rotate="-rotate-[2deg]"
            dir="down-left"
            arrowClass="h-16 w-16"
          />
        </div>
      </div>
    </section>
  )
}
