import { FEATURES } from '@/lib/landing-data'
import { Section, SectionHeading } from './primitives'

export function Features() {
  return (
    <Section id="features" tone="alt">
      <SectionHeading
        title="Everything the droid handles for you."
        tagline={<span className="italic">(so you can focus on closing)</span>}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="lp-card rounded-2xl border border-hairline bg-surface p-6 hover:border-brand/40"
            >
              <Icon
                className="h-5 w-5 stroke-[1.5] text-brand"
                aria-hidden
              />
              <h3 className="mt-4 text-lg font-bold leading-snug tracking-[-0.02em] text-ink">
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
