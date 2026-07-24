import { ArrowRight, Zap } from 'lucide-react'
import { AUTH_URL, STATS } from '@/lib/landing-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <Zap className="h-3.5 w-3.5 text-primary" />
          Now with AI reply detection
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Book more calls.{' '}
          <span className="text-gradient">DM less manually.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Scale your Instagram outbound without lifting a finger. DMDroid sends
          personalized DMs across all your accounts, follows up automatically,
          and turns replies into booked calls.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={AUTH_URL}
            className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Start 3-day free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how"
            className="flex h-11 w-full items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold transition-colors hover:bg-accent sm:w-auto"
          >
            See how it works
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          3-day free trial · Credit card required · Cancel anytime
        </p>

        {/* Product preview */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="glow-primary overflow-hidden rounded-2xl border border-border bg-card text-left">
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-chart-2/70" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-3 text-xs text-muted-foreground">
                app.dmdroid.app/dashboard
              </span>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-4 sm:p-6">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-secondary/30 p-4"
                >
                  <p className="text-2xl font-semibold tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
              <div className="sm:col-span-4">
                <div className="flex h-40 items-end gap-2 rounded-xl border border-border bg-secondary/30 p-4">
                  {[42, 58, 51, 70, 64, 82, 76, 90, 84, 96, 88, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-primary/70"
                        style={{ height: `${h}%` }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
