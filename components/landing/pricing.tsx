import { Check } from 'lucide-react'
import { AUTH_URL, CONTACT_EMAIL, PLANS, PRICING } from '@/lib/landing-data'
import { AvatarWhisper } from './avatar'
import { Section, SectionHeading } from './primitives'

export function Pricing() {
  return (
    <Section id="pricing" tone="alt">
      <SectionHeading title={PRICING.heading} tagline={PRICING.tagline} />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => {
          const isCustom = p.price === 'Custom'
          return (
            <div
              key={p.name}
              className={`lp-card relative flex flex-col rounded-2xl border bg-surface p-6 ${
                p.featured
                  ? 'border-brand shadow-[0_18px_50px_-30px_oklch(0.45_0.19_260/60%)]'
                  : 'border-hairline'
              }`}
            >
              {p.featured && (
                // The single red element on the page. It's the headband.
                <span className="lp-pulse-twice absolute -top-3 left-6 rounded-full bg-headband px-3 py-1 text-xs font-bold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{p.desc}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-[-0.03em] text-ink">
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-sm text-ink-soft">{p.period}</span>
                )}
              </div>

              {!isCustom && (
                <span className="mt-3 inline-flex w-fit items-center rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
                  3-day free trial
                </span>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      aria-hidden
                    />
                    <span className="text-ink-soft">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={isCustom ? `mailto:${CONTACT_EMAIL}` : AUTH_URL}
                className={`mt-8 flex h-11 items-center justify-center rounded-[6px] text-sm font-semibold transition-colors ${
                  p.featured
                    ? 'bg-brand text-white hover:bg-brand-bright'
                    : 'border border-hairline text-ink hover:bg-surface-alt'
                }`}
              >
                {p.cta}
              </a>
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-ink-soft">
          {PRICING.riskReversal}
        </p>
        <AvatarWhisper
          pose="pricing"
          size={72}
          caption={PRICING.whisper}
          layout="column"
        />
      </div>
    </Section>
  )
}
