import { SOCIAL_PROOF } from '@/lib/landing-data'
import { AvatarWhisper } from './avatar'

/**
 * Social proof without inflated numbers: who actually runs this, and the
 * niches they run it in. No fabricated logo wall.
 */
export function SocialProof() {
  return (
    <section className="border-b border-hairline bg-surface-alt">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-pretty text-base font-medium leading-relaxed text-ink">
              {SOCIAL_PROOF.line}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SOCIAL_PROOF.niches.map((niche) => (
                <li
                  key={niche}
                  className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-[13px] font-medium text-ink-soft"
                >
                  {niche}
                </li>
              ))}
            </ul>
          </div>

          <AvatarWhisper
            pose="socialProof"
            size={72}
            caption={SOCIAL_PROOF.whisper}
            className="lg:max-w-[220px] lg:shrink-0"
          />
        </div>
      </div>
    </section>
  )
}
