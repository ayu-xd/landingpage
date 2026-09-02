import { FEATURES, FEATURE_HEADINGS } from '@/lib/landing-data'
import { Section, SectionHeading } from './primitives'

/**
 * Waalaxy's "Made for LinkedIn + email outreach" — a 2x2 feature card grid
 * with icon, title, description. Clean bordered cards on white.
 */
export function Features() {
  return (
    <Section id="features" tone="alt">
      <SectionHeading
        title={FEATURE_HEADINGS.title}
        tagline={FEATURE_HEADINGS.tagline}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="lp-card rounded-[20px] border border-hairline bg-surface p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand/10">
                <Icon className="h-5 w-5 stroke-[1.75] text-brand" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug tracking-[-0.01em] text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {f.body}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
