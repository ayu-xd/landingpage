import { SUPPORT_STRIP } from '@/lib/landing-data'
import { Bullet, HandNote, Section, SectionHeading } from './primitives'

/** Waalaxy's "Stay guided at every step" strip, appended to the how-it-works flow. */
export function SupportStrip() {
  return (
    <Section tone="alt" className="md:py-20">
      <SectionHeading
        title={SUPPORT_STRIP.heading}
        tagline={SUPPORT_STRIP.body}
      />
      <div className="mt-10 flex flex-col items-center gap-4">
        <ul className="mx-auto flex max-w-3xl flex-col items-start gap-3 sm:flex-row sm:justify-center sm:gap-10">
          {SUPPORT_STRIP.items.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <HandNote className="rotate-[2deg]">{SUPPORT_STRIP.handNote}</HandNote>
      </div>
    </Section>
  )
}
