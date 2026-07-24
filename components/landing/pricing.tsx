import { Check } from 'lucide-react'
import { AUTH_URL, CONTACT_EMAIL, PLANS } from '@/lib/landing-data'

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 border-t border-border bg-secondary/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Pricing</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Plans that scale with your outreach
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every paid plan starts with a 3-day free trial. Pick a tier and fine
            tune the exact account count inside the app.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => {
            const isEnterprise = p.name === 'Enterprise'
            return (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  p.featured
                    ? 'glow-primary border-primary/50 bg-card'
                    : 'border-border bg-card'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}

                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    {p.price}
                  </span>
                  {p.period && (
                    <span className="text-sm text-muted-foreground">
                      {p.period}
                    </span>
                  )}
                </div>

                {!isEnterprise && (
                  <span className="mt-3 inline-flex w-fit items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    3-day free trial
                  </span>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>

                {isEnterprise ? (
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-8 flex h-10 items-center justify-center rounded-xl border border-border text-sm font-semibold transition-colors hover:bg-accent"
                  >
                    {p.cta}
                  </a>
                ) : (
                  <a
                    href={AUTH_URL}
                    className={`mt-8 flex h-10 items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                      p.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-border hover:bg-accent'
                    }`}
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not happy? Cancel before day 3 and you won&apos;t be charged a cent.
        </p>
      </div>
    </section>
  )
}
