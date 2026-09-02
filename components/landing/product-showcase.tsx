import { SequenceStepper, VariantEditor } from './mockups'
import { Bullet, Section, SectionHeading, Tokens } from './primitives'

/**
 * The two product panels, shown in the app's own dark UI so they read as
 * screenshots rather than illustrations.
 */
export function ProductShowcase() {
  return (
    <Section id="how-it-looks" tone="light">
      <div className="space-y-20">
        {/* Sequences with follow-ups */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Follow-ups that run on their own"
              tagline="Most replies come after the first message. Build a full sequence with timed delays between every step, and DMDroid keeps nudging each lead until they answer. The moment someone replies, their sequence stops automatically."
            />
            <ul className="mt-6 space-y-2">
              <Bullet>Up to 10 follow-up steps per campaign</Bullet>
              <Bullet>Custom delays between each message</Bullet>
              <Bullet>Auto-stops the instant a lead replies</Bullet>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <SequenceStepper />
          </div>
        </div>

        {/* A/B testing */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 mx-auto w-full max-w-md lg:order-1 lg:mx-0">
            <VariantEditor />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              title="Test every message, keep the winner"
              tagline="Write up to five variants for each step so your messages stay fresh and human. DMDroid rotates them across sends, tracks which lines earn the most replies, and shows you the numbers so you can double down on what actually books calls."
            />
            <ul className="mt-6 space-y-2">
              <Bullet>Up to 5 variants per step, rotated automatically</Bullet>
              <Bullet>
                <Tokens text="Personalize with {{FirstName}} and more" />
              </Bullet>
              <Bullet>Reply rate tracked per variant</Bullet>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
