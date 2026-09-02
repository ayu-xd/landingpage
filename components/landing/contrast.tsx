import { ArrowRight, Check, X } from 'lucide-react'
import { AUTH_URL, CONTRAST } from '@/lib/landing-data'
import { AvatarWhisper } from './avatar'
import { Section, SectionHeading } from './primitives'

function ColumnHeader({
  label,
  variant,
}: {
  label: string
  variant: 'old' | 'new'
}) {
  const old = variant === 'old'
  return (
    <p
      className={`hidden items-center gap-2 text-sm font-bold tracking-[-0.01em] md:flex ${
        old ? 'text-white/45' : 'text-brand-bright'
      }`}
    >
      {old ? (
        <X className="h-4 w-4" aria-hidden />
      ) : (
        <Check className="h-4 w-4" aria-hidden />
      )}
      {label}
    </p>
  )
}

export function Contrast() {
  return (
    <Section tone="ink">
      <SectionHeading
        tone="dark"
        title={CONTRAST.heading}
        tagline={CONTRAST.tagline}
      />

      <div className="mt-12 grid gap-x-6 gap-y-3 md:grid-cols-2">
        <ColumnHeader label="The Old Way" variant="old" />
        <ColumnHeader label="The DMDroid Way" variant="new" />

        {CONTRAST.rows.map((row) => (
          <div key={row.old} className="contents">
            <p className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/50">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-white/30" aria-hidden />
              {row.old}
            </p>
            <p className="lp-card flex items-start gap-3 rounded-xl border border-brand/30 bg-brand/10 p-4 text-sm font-medium leading-relaxed text-white">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright"
                aria-hidden
              />
              {row.now}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={AUTH_URL}
          className="group flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
        >
          {CONTRAST.cta}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>

        <AvatarWhisper
          pose="contrast"
          size={64}
          caption={CONTRAST.whisper}
          tone="dark"
          className="sm:max-w-[260px]"
        />
      </div>
    </Section>
  )
}
