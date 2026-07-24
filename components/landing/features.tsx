import { FEATURES } from '@/lib/landing-data'

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-16 border-t border-border bg-secondary/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">
            Everything you need
          </p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One platform for the entire outreach engine
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From the first follow to the booked call, DMDroid handles the
            busywork so you can focus on closing.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
