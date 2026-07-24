import { STATS } from '@/lib/landing-data'

export function StatsBar() {
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-semibold tracking-tight text-primary">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
