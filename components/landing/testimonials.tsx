import { TESTIMONIALS, TESTIMONIALS_META } from '@/lib/landing-data'
import { HandNote, Section, SectionHeading } from './primitives'

/**
 * Waalaxy's "This is why users love us" — meta-claim headline, handwritten
 * "Yup, those are real", and a two-row opposite-direction marquee of quotes.
 * Ours uses a single static row until real testimonials exist — the section
 * hides itself entirely if the array is emptied.
 */
export function Testimonials() {
  // Never ship invented proof. Empty array = no section.
  if (TESTIMONIALS.length === 0) return null

  return (
    <Section tone="alt">
      <div className="flex flex-col items-center gap-3">
        <SectionHeading
          title={TESTIMONIALS_META.heading}
          tagline={TESTIMONIALS_META.tagline}
        />
        <HandNote className="-rotate-[3deg]">
          {TESTIMONIALS_META.handNote}
        </HandNote>
      </div>

      <div className="lp-marquee-mask relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="lp-marquee" style={{ ['--lp-marquee-duration' as string]: '55s' }}>
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="mx-3 w-[320px] shrink-0 rounded-[20px] border border-hairline bg-surface p-6 sm:w-[360px]"
            >
              <blockquote className="text-pretty text-[15px] font-medium leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-whisper">
                <span className="font-semibold text-ink">{t.name}</span>
                {' — '}
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-[13px] italic text-whisper">
        Placeholder quotes — being replaced with real client results as they
        come in.
      </p>
    </Section>
  )
}
