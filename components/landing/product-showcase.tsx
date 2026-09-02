import { PIPELINE_FEATURE, SHOWCASE } from '@/lib/landing-data'
import { SequenceStepper, VariantEditor } from './mockups'
import { Bullet, Section, SectionHeading, Tokens } from './primitives'

/**
 * The two product panels in Waalaxy's light style — sequence builder and
 * A/B variant editor, alternating copy-left/right.
 */
export function ProductShowcase() {
  return (
    <Section id="how-it-looks" tone="light">
      <div className="space-y-24">
        {SHOWCASE.map((panel, i) => {
          const isSequence = i === 0
          return (
            <div
              key={panel.title}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={isSequence ? '' : 'lg:order-2'}>
                <h3 className="text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
                  {panel.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                  {panel.body}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {panel.bullets.map((b) => (
                    <Bullet key={b}>
                      <Tokens text={b} />
                    </Bullet>
                  ))}
                </ul>
              </div>
              <div
                className={`mx-auto w-full max-w-md lg:mx-0 ${isSequence ? 'lg:ml-auto' : 'lg:order-1 lg:mr-auto lg:ml-0'}`}
              >
                {isSequence ? <SequenceStepper /> : <VariantEditor />}
              </div>
            </div>
          )
        })}
      </div>

      {/* Pipeline feature tile, Waalaxy's bottom-right card style */}
      <div className="mx-auto mt-24 max-w-3xl">
        <div className="lp-card flex items-start gap-5 rounded-[24px] border border-hairline bg-surface p-7 sm:p-8">
          <span className="text-4xl" aria-hidden>
            {PIPELINE_FEATURE.emoji}
          </span>
          <div>
            <h3 className="text-lg font-bold tracking-[-0.01em] text-ink">
              {PIPELINE_FEATURE.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {PIPELINE_FEATURE.body}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
