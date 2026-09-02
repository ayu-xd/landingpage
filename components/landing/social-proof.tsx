import { SOCIAL_PROOF } from '@/lib/landing-data'
import { HandNote } from './primitives'

/**
 * Waalaxy's "Trusted by" strip: light band, centered line of copy, and the
 * handwritten annotation beside it. Niche pills instead of fake logos.
 */
export function SocialProof() {
  return (
    <section className="border-y border-hairline-soft bg-surface-alt">
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
          <HandNote className="rotate-[2deg]">{SOCIAL_PROOF.handNote}</HandNote>
        </div>
      </div>
    </section>
  )
}
