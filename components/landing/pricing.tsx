import { Check } from 'lucide-react'
import { AUTH_URL, CONTACT_EMAIL, PLANS, PRICING } from '@/lib/landing-data'
import {
  GradientButton,
  HandNote,
  Section,
  SectionHeading,
  SwooshArrow,
} from './primitives'

/** Waalaxy's pricing: centered heading, three cards, the popular one elevated. */
export function Pricing() {
  return (
    <Section id="pricing" tone="light">
      <SectionHeading title={PRICING.heading} tagline={PRICING.tagline} />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => {
          const isCustom = p.price === 'Custom'
          return (
            <div
              key={p.name}
              className={`lp-card relative flex flex-col rounded-[24px] border bg-surface p-7 ${
                p.featured
                  ? 'border-2 border-brand shadow-[0_24px_60px_-30px_rgba(49,90,231,0.4)] lg:-my-4 lg:py-11'
                  : 'border-hairline'
              }`}
            >
              {p.featured && (
                <span className="lp-pulse-twice absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3.5 py-1 text-xs font-bold text-white">
                  {PRICING.badge}
                </span>
              )}

              <h3 className="text-lg font-bold tracking-[-0.01em] text-ink">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{p.desc}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-[-0.03em] text-ink">
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-sm text-ink-soft">{p.period}</span>
                )}
              </div>

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

              {isCustom ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-8 flex h-12 items-center justify-center rounded-[16px] border border-hairline text-[15px] font-bold text-ink transition-colors hover:bg-white"
                >
                  {p.cta}
                </a>
              ) : (
                <GradientButton
                  href={AUTH_URL}
                  className={`mt-8 w-full ${p.featured ? '' : 'border !bg-none text-brand shadow-none hover:!bg-brand/5'}`}
                >
                  {p.cta}
                </GradientButton>
              )}
            </div>
          )
        })}
      </div>

      <div className="relative mx-auto mt-14 flex max-w-xl flex-col items-center gap-5 text-center">
        <p className="text-pretty text-sm leading-relaxed text-ink-soft">
          {PRICING.riskReversal}
        </p>

        {/* Waalaxy's annotation pattern: the handwritten note hovers right
            of the line, swoosh arrow curving down into it. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-8 right-0 hidden items-start gap-1 sm:flex"
        >
          <HandNote rotate={false} className="rotate-[19deg]">
            {PRICING.handNote}
          </HandNote>
          <SwooshArrow className="h-24 w-8 rotate-[10deg]" />
        </div>
      </div>
    </Section>
  )
}
