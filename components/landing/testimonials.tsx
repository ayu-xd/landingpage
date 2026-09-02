import { TESTIMONIALS, TESTIMONIALS_META } from '@/lib/landing-data'
import { HandNote, Section, SectionHeading, SwooshArrow } from './primitives'

/**
 * Waalaxy's "This is why users love us": meta-claim headline, then the
 * handwritten "Yup, those are real" with its tall swoosh arrow hanging
 * beside the review row. Quote cards marquee below.
 * Ours hides itself entirely until real testimonials exist.
 */
export function Testimonials() {
  // Never ship invented proof. Empty array = no section.
  if (TESTIMONIALS.length === 0) return null

  return (
    <Section tone="alt">
      <div className="flex flex-col items-center">
        <SectionHeading
          title={TESTIMONIALS_META.heading}
          tagline={TESTIMONIALS_META.tagline}
        />
      </div>

      {/* The annotation + tall arrow sit to the right of the heading,
          pointing down at the row of quotes, exactly like Waalaxy's. */}
      <div
        aria-hidden
        className="pointer-events-none relative mx-auto mt-2 hidden max-w-6xl md:block"
      >
        <div className="absolute -top-2 right-8 flex -rotate-[13deg] items-start gap-1">
          <HandNote rotate={false} className="text-2xl">
            Yup, those
            <br />
            are real
          </HandNote>
          <SwooshArrow className="h-40 w-12" />
        </div>
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
                {', '}
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-[13px] italic text-whisper">
        Placeholder quotes, being replaced with real client results as they
        come in.
      </p>
    </Section>
  )
}
