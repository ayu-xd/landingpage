import { STEPS } from '@/lib/landing-data'

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">How it works</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Live in minutes, booking calls by tomorrow
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-mono text-sm font-semibold text-primary">
                {s.step}
              </span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
