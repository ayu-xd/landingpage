import { AUDIENCES, AUDIENCE_WHISPER } from '@/lib/landing-data'
import { AvatarWhisper } from './avatar'
import { Bullet, Section, SectionHeading } from './primitives'

export function WhoItsFor() {
  return (
    <Section tone="alt">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading title="Built for people who live and die by Instagram DMs." />
        <AvatarWhisper
          pose="audience"
          size={64}
          caption={AUDIENCE_WHISPER}
          className="lg:max-w-[260px] lg:shrink-0 lg:pb-1"
        />
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {AUDIENCES.map((a) => (
          <div
            key={a.title}
            className="lp-card flex flex-col rounded-2xl border border-hairline bg-surface p-6 hover:border-brand/40"
          >
            <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
              {a.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {a.body}
            </p>
            <ul className="mt-5 space-y-2 border-t border-hairline pt-5">
              {a.bullets.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
