import { ArrowRight } from 'lucide-react'
import { HOW_WHISPERS, STEPS } from '@/lib/landing-data'
import { Bullet, Section, SectionHeading, Tokens, Whisper } from './primitives'

/**
 * Waalaxy's walkthrough: centered H2 "(in 4 simple steps)", handwritten
 * "Follow the arrows!", then a 4-column grid (2x2 tablet) of numbered
 * circles, heading, description, and a check-bulleted list.
 */
export function HowItWorks() {
  return (
    <Section id="how" tone="light">
      <div className="flex flex-col items-center gap-2">
        <SectionHeading
          title={
            <>
              How DMDroid works
              <span className="block text-[0.62em] font-semibold text-ink-soft">
                (in 4 simple steps)
              </span>
            </>
          }
        />
        <Whisper className="-rotate-2 pt-1 font-semibold not-italic">
          {HOW_WHISPERS.header}
        </Whisper>
      </div>

      <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                {i + 1}
              </span>
              {/* Arrow connectors between steps, Waalaxy's flowing arrows. */}
              {i < STEPS.length - 1 && (
                <span
                  className="hidden text-brand/50 lg:block"
                  aria-hidden
                >
                  <ArrowRight className="h-5 w-5" />
                </span>
              )}
            </div>

            <h3 className="mt-4 text-lg font-bold leading-snug tracking-[-0.01em] text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              <Tokens text={step.body} />
            </p>

            <ul className="mt-4 space-y-2 border-t border-hairline-soft pt-4">
              {step.bullets.map((b) => (
                <Bullet key={b}>
                  <Tokens text={b} />
                </Bullet>
              ))}
            </ul>

            {i === 2 && (
              <Whisper className="mt-3 block max-w-[220px]">
                {HOW_WHISPERS.step3}
              </Whisper>
            )}
            {i === 3 && (
              <Whisper className="mt-3 block max-w-[220px]">
                {HOW_WHISPERS.step4}
              </Whisper>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
