import Image from 'next/image'
import { HOW_WHISPERS, STEPS } from '@/lib/landing-data'
import {
  Annotation,
  Bullet,
  FlowArrow,
  Section,
  SectionHeading,
  Tokens,
  Whisper,
} from './primitives'

/**
 * Waalaxy's "How Waalaxy works (in 4 simple steps)" built the open way:
 * four alternating full-width rows, numbered circle + heading + description
 * + bullets on one side, a big product screenshot on the other, with
 * hand-drawn flow arrows guiding you from step to step.
 */
const STEP_IMAGES = [
  { src: '/steps/step-1-import.png', w: 1672, h: 941, alt: 'Import leads into DMDroid' },
  { src: '/steps/step-2-launch.png', w: 1536, h: 1024, alt: 'Build a message sequence with variants' },
  { src: '/steps/step-3-replies.png', w: 1536, h: 1024, alt: 'Reply analytics per campaign and variant' },
  { src: '/steps/step-4-crm.png', w: 1536, h: 1024, alt: 'Pipeline moving leads to booked calls' },
]

export function HowItWorks() {
  return (
    <Section id="how" tone="light">
      <div className="relative mx-auto max-w-6xl">
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

        {/* "Follow the arrows!" sits TOP-LEFT of the heading — Waalaxy places
            it at the left, arrow pointing straight DOWN into the steps. */}
        <Annotation
          note={
            <>
              Follow the
              <br />
              arrows!
            </>
          }
          className="-top-8 left-0 hidden lg:flex"
          rotate="-rotate-[8deg]"
          dir="down"
          arrowClass="h-28 w-14"
        />
      </div>

      {/* Four open rows. Text and image alternate sides so the page
          breathes like Waalaxy's walkthrough. */}
      <ol className="mx-auto mt-20 flex max-w-6xl flex-col gap-24 lg:gap-28">
        {STEPS.map((step, i) => {
          const img = STEP_IMAGES[i]
          const flip = i % 2 === 1
          return (
            <li key={step.title} className="relative">
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Text side (takes up 5/12 of the space so the image can be larger) */}
                <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">
                    <Tokens text={step.body} />
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-hairline-soft pt-6">
                    {step.bullets.map((b) => (
                      <Bullet key={b}>
                        <Tokens text={b} />
                      </Bullet>
                    ))}
                  </ul>

                  {i === 2 && (
                    <Whisper className="mt-5 block">
                      {HOW_WHISPERS.step3}
                    </Whisper>
                  )}
                  {i === 3 && (
                    <Whisper className="mt-5 block">
                      {HOW_WHISPERS.step4}
                    </Whisper>
                  )}
                </div>

                {/* Screenshot side: let the transparent image breathe naturally
                    without a restrictive white box around it. Takes 7/12 space to be HUGE. */}
                <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    priority={i === 0}
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="h-auto w-full scale-105 transform origin-center sm:scale-110 md:scale-125 lg:scale-[1.15]"
                  />
                </div>
              </div>

              {/* Hand-drawn flow arrow curving from this row into the next,
                  centered between rows. Hidden after the last step. */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 left-1/2 hidden -translate-x-1/2 lg:block"
                >
                <FlowArrow className="h-20 w-32" />
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
