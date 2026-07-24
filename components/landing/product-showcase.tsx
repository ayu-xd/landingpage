import { Check } from 'lucide-react'
import { SequenceStepper, VariantEditor } from './mockups'

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Check className="h-3 w-3" />
      </span>
      {children}
    </li>
  )
}

export function ProductShowcase() {
  return (
    <section
      id="how-it-looks"
      className="scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-20 sm:px-6 sm:py-24">
        {/* Block 1: Sequences with follow-ups */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-primary">
              Sequences with follow-ups
            </p>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Follow-ups that run on their own
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Most replies come after the first message. Build a full sequence
              with timed delays between every step, and DMDroid keeps nudging
              each lead until they answer. The moment someone replies, their
              sequence stops automatically.
            </p>
            <ul className="mt-6 space-y-3">
              <Bullet>Up to 10 follow-up steps per campaign</Bullet>
              <Bullet>Custom delays between each message</Bullet>
              <Bullet>Auto-stops the instant a lead replies</Bullet>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <SequenceStepper />
          </div>
        </div>

        {/* Block 2: A/B testing */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 mx-auto w-full max-w-md lg:order-1 lg:mx-0">
            <VariantEditor />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-primary">A/B testing</p>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Test every message, keep the winner
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Write up to five variants for each step so your messages stay
              fresh and human. DMDroid rotates them across sends, tracks which
              lines earn the most replies, and shows you the numbers so you can
              double down on what actually books calls.
            </p>
            <ul className="mt-6 space-y-3">
              <Bullet>Up to 5 variants per step, rotated automatically</Bullet>
              <Bullet>Personalize with {'{{FirstName}}'} and more</Bullet>
              <Bullet>Reply rate tracked per variant</Bullet>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
