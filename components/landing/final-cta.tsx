import { ArrowRight } from 'lucide-react'
import { AUTH_URL, CONTACT_EMAIL, FINAL_CTA } from '@/lib/landing-data'
import { Avatar } from './avatar'
import { Whisper } from './primitives'

export function FinalCta() {
  return (
    <section className="bg-brand-deep text-white">
      <div className="mx-auto max-w-content px-5 py-15 sm:px-6 md:py-25">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="text-center lg:text-left">
            <h2 className="text-balance text-[1.875rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
              {FINAL_CTA.heading}
              <span className="block text-white/70">{FINAL_CTA.tagline}</span>
            </h2>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={AUTH_URL}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-white px-6 text-sm font-bold text-brand-deep transition-colors hover:bg-white/90 sm:w-auto"
              >
                {FINAL_CTA.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <p className="text-sm text-white/70">
                Have questions?{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Largest avatar on the page. */}
          <div className="flex flex-col items-center gap-4 lg:shrink-0">
            <Avatar
              pose="finalCta"
              size={420}
              className="h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]"
            />
            <Whisper tone="deep" className="text-center text-base">
              {FINAL_CTA.whisper}
            </Whisper>
          </div>
        </div>
      </div>
    </section>
  )
}
