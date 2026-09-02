import { ArrowDown } from 'lucide-react'
import { HOW_WHISPERS, STEPS } from '@/lib/landing-data'
import {
  Annotation,
  Bullet,
  HandNote,
  Section,
  SectionHeading,
  SwooshArrow,
  Tokens,
  Whisper,
} from './primitives'

/**
 * Waalaxy's walkthrough: centered H2 "(in 4 simple steps)", handwritten
 * "Follow the arrows!" with a big curve flowing into the grid, then 4 equal
 * cards. Equal-height cards keep the grid inside the layout ratio; flowing
 * arrows connect step to step.
 */
export function HowItWorks() {
  return (
    <Section id="how" tone="light">
      <div className="relative flex flex-col items-center">
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

        {/* "Follow the arrows!" + the big curve that flows down into the
            first card, exactly like Waalaxy's annotation block. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-2 top-0 hidden rotate-[88deg] items-start md:flex lg:right-16"
        >
          <div className="flex -rotate-[13deg] flex-col items-center">
            <HandNote rotate={false} className="text-2xl">
              Follow the
              <br />
              arrows!
            </HandNote>
            <SwooshArrow className="mt-2 h-44 w-16 rotate-90" />
          </div>
        </div>
      </div>

      {/* 4 equal cards: 1 col mobile, 2x2 tablet, 4 across desktop. Every
          card is a flex column so the grid stays in ratio at every width. */}
      <ol className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="lp-card relative flex flex-col rounded-[20px] border border-hairline bg-surface p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold leading-snug tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              <Tokens text={step.body} />
            </p>

            <ul className="mt-4 flex-1 space-y-2 border-t border-hairline-soft pt-4">
              {step.bullets.map((b) => (
                <Bullet key={b}>
                  <Tokens text={b} />
                </Bullet>
              ))}
            </ul>

            {/* Flowing arrow at the card foot, guiding to the next step the
                way Waalaxy's curved connectors do. Hidden on the last card. */}
            {i < STEPS.length - 1 && (
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 text-brand/60 lg:block"
              >
                <ArrowDown className="h-6 w-6 rotate-[-35deg]" />
              </span>
            )}

            {i === 2 && (
              <Whisper className="mt-4 block">
                {HOW_WHISPERS.step3}
              </Whisper>
            )}
            {i === 3 && (
              <Whisper className="mt-4 block">
                {HOW_WHISPERS.step4}
              </Whisper>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
