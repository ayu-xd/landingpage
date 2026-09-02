import { AUDIENCES, AUDIENCE_HAND } from '@/lib/landing-data'
import { Bullet, HandArrow, HandNote, Section, SectionHeading } from './primitives'

/**
 * Waalaxy's "Who's Waalaxy for?" — three persona cards with emoji, title,
 * one-line pain, and the handwritten "Is this you?" annotation.
 */
export function WhoItsFor() {
  return (
    <Section tone="light">
      <SectionHeading title="Who’s DMDroid for?" tagline="If this sounds like you, you’re in the right place." />

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-3">
        {AUDIENCES.map((a) => (
          <div
            key={a.title}
            className="lp-card flex flex-col rounded-[20px] border border-hairline bg-surface p-6"
          >
            <span className="text-3xl" aria-hidden>
              {a.emoji}
            </span>
            <h3 className="mt-3 text-lg font-bold tracking-[-0.01em] text-ink">
              {a.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.body}</p>
            <ul className="mt-5 space-y-2 border-t border-hairline-soft pt-5">
              {a.bullets.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
        ))}

        <div className="pointer-events-none absolute -top-10 right-4 hidden flex-col items-center gap-1 md:flex">
          <HandNote className="rotate-[6deg]">{AUDIENCE_HAND}</HandNote>
          <HandArrow className="rotate-[110deg]" />
        </div>
      </div>
    </Section>
  )
}
