import { ArrowRight } from 'lucide-react'
import { AUTH_URL } from '@/lib/landing-data'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center">
        <div className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Your next client is one DM away.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">
            Set up in 5 minutes. First results in 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={AUTH_URL}
              className="group flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start 3-day free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
