import { AUDIENCES, AUDIENCE_HAND } from '@/lib/landing-data'
import {
  Annotation,
  Bullet,
  Section,
  SectionHeading,
} from './primitives'

/**
 * Waalaxy's "Who's Waalaxy for?" with three persona cards. The handwritten
 * "Is this you?" annotation sweeps from the heading down over the whole
 * row, so it refers to ALL three personas, not one card.
 */
export function WhoItsFor() {
  return (
    <Section tone="light">
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Who’s DMDroid for?"
          tagline="If this sounds like you, you’re in the right place."
        />

        {/* The annotation hangs off the heading and its big swoosh curve
            reaches across the top of the full card row: all 3 personas. */}
        <Annotation
          note={AUDIENCE_HAND}
          className="-top-10 right-2 hidden md:flex lg:right-8"
          rotate="rotate-[16deg]"
          arrowClass="h-44 w-16 rotate-[24deg]"
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
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
              <ul className="mt-5 flex-1 space-y-2 border-t border-hairline-soft pt-5">
                {a.bullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
