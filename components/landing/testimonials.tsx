import { TESTIMONIALS } from '@/lib/landing-data'
import { AvatarWhisper } from './avatar'
import { Section, SectionHeading } from './primitives'

export function Testimonials() {
  // The section disappears rather than inventing proof. See the warning on
  // TESTIMONIALS in lib/landing-data.ts before this ships.
  if (TESTIMONIALS.length === 0) return null

  return (
    <Section tone="light">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          title="Real operators. Real results."
          tagline="Most of our users had never run Instagram DM campaigns at scale before. Now they wake up to booked calls."
        />
        <AvatarWhisper
          pose="testimonials"
          size={64}
          caption="yep, these are real"
          className="lg:shrink-0 lg:pb-1"
        />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="lp-card flex flex-col rounded-2xl border border-hairline bg-surface-alt p-6 hover:border-brand/40"
          >
            <blockquote className="flex-1 text-pretty text-lg font-medium leading-relaxed text-ink">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-hairline pt-4 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{t.name}</span>
              {' — '}
              {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
