import { ArrowRight } from 'lucide-react'
import { AUDIENCES, AUDIENCE_HAND } from '@/lib/landing-data'
import {
  Annotation,
  Section,
} from './primitives'

/**
 * Waalaxy's "Who's Waalaxy for?" — LEFT-aligned heading, vertical full-width
 * rows (emoji + title + body + → button), "Is this you?" annotation top-right
 * with the arrow curving straight DOWN into the row list.
 */
export function WhoItsFor() {
  return (
    <Section tone="light">
      <div className="relative mx-auto max-w-5xl">
        {/* Left-aligned heading — matches Waalaxy exactly */}
        <div className="max-w-xl">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.75rem]">
            Who&apos;s DMDroid for?
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-ink-soft">
            If this sounds like you, you&apos;re in the right place.
          </p>
        </div>

        {/* "Is this you?" annotation top-right, arrow pointing straight DOWN */}
        <Annotation
          note={AUDIENCE_HAND}
          className="-top-10 right-4 z-20 hidden md:flex lg:right-8"
          rotate="rotate-[10deg]"
          dir="down"
          arrowClass="h-24 w-12"
        />

        {/* Vertical rows — full-width, emoji badge + text + → arrow */}
        <div className="mt-12 flex flex-col gap-3">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="lp-card flex items-center gap-5 rounded-[20px] border border-hairline bg-surface px-6 py-5 transition-all hover:border-brand/30 hover:shadow-[0_8px_30px_-12px_rgba(49,90,231,0.2)]"
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-brand/[0.08] text-3xl"
                aria-hidden
              >
                {a.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold tracking-[-0.01em] text-ink sm:text-lg">
                  {a.title}
                </h3>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-hairline bg-white text-ink-soft">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
