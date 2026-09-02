import { ArrowDown } from 'lucide-react'
import { STEPS } from '@/lib/landing-data'
import { AvatarWhisper } from './avatar'
import { Bullet, Section, SectionHeading, Tokens, Whisper } from './primitives'

export function HowItWorks() {
  return (
    <Section id="how" tone="light">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          title="How DMDroid works"
          tagline={<span className="italic">(in 4 steps)</span>}
        />
        <Whisper className="sm:pb-2">follow the arrows →</Whisper>
      </div>

      <ol className="mt-12">
        {STEPS.map((step, i) => {
          const last = i === STEPS.length - 1
          return (
            <li
              key={step.title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-5 sm:grid-cols-[3rem_1fr] sm:gap-x-8"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
                  {i + 1}
                </span>
                {!last && (
                  <span className="relative my-2 w-px flex-1 bg-hairline">
                    <ArrowDown
                      className="absolute -left-2 bottom-0 h-4 w-4 text-brand/60"
                      aria-hidden
                    />
                  </span>
                )}
              </div>

              <div className={last ? '' : 'pb-14'}>
                <h3 className="text-xl font-bold tracking-[-0.02em] text-ink sm:pt-1.5 sm:text-2xl">
                  {step.title}
                </h3>

                {step.avatar && (
                  <AvatarWhisper
                    pose={step.avatar.pose}
                    size={48}
                    caption={step.avatar.caption}
                    className="mt-3"
                  />
                )}

                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-soft">
                  <Tokens text={step.body} />
                </p>

                <ul className="mt-4 space-y-2">
                  {step.bullets.map((b) => (
                    <Bullet key={b}>
                      <Tokens text={b} />
                    </Bullet>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
