import { SOCIAL_PROOF } from '@/lib/landing-data'
import { HandNote, SwooshArrow } from './primitives'

/**
 * Waalaxy's "Trusted by" strip: light band, centered line of copy, and the
 * handwritten annotation beside it. Niche pills instead of fake logos.
 */
export function SocialProof() {
  return (
    <section className="relative border-y border-hairline-soft bg-surface-alt">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <p className="text-pretty text-base font-semibold leading-relaxed text-ink sm:text-lg">
            {SOCIAL_PROOF.line}
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {SOCIAL_PROOF.niches.map((niche) => (
              <li
                key={niche}
                className="rounded-full border border-hairline bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink-soft"
              >
                {niche}
              </li>
            ))}
          </ul>
        </div>

        {/* Handwritten note floating right of the pill row, arrow curving
            back into the niches. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 right-6 hidden items-start gap-1 md:flex lg:right-24"
        >
          <HandNote rotate={false} className="rotate-[-13deg]">
            {SOCIAL_PROOF.handNote}
          </HandNote>
          <SwooshArrow className="h-24 w-8 rotate-[55deg] scale-x-[-1]" />
        </div>
      </div>
    </section>
  )
}
