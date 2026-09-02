import { BarChart3, Check, Clock, MessageSquare, Plus, Send } from 'lucide-react'

const TOKENS = ['{{FirstName}}', '{{Username}}', '{{Niche}}']

/**
 * Hero mockup: a light browser window showing the DMDroid dashboard —
 * stat tiles, a mini pipeline board, and a live DM thread. Reads as a
 * product screenshot in Waalaxy's clean light style.
 */
export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-hairline bg-surface shadow-[0_40px_90px_-40px_rgba(20,20,43,0.25)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-hairline-soft bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" aria-hidden />
        <span className="ml-3 flex-1 rounded-full bg-surface-alt px-3 py-1 text-[11px] text-whisper">
          app.dmdroid.app/dashboard
        </span>
      </div>

      <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
        {/* Sidebar */}
        <div className="hidden border-r border-hairline-soft bg-surface-alt p-3 sm:block">
          <div className="mb-4 flex items-center gap-2 px-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[10px] font-bold text-white">
              DM
            </span>
            <span className="text-xs font-bold text-ink">DMDroid</span>
          </div>
          {[
            'Dashboard',
            'Campaigns',
            'Targets',
            'Inbox',
            'Pipeline',
            'Analytics',
          ].map((item, i) => (
            <div
              key={item}
              className={`mb-1 rounded-[8px] px-2.5 py-1.5 text-[11px] font-medium ${
                i === 0
                  ? 'bg-brand/10 text-brand'
                  : 'text-ink-soft'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-bold text-ink">Today</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-semibold text-brand">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Live
            </span>
          </div>

          {/* Stat tiles */}
          <div className="mb-4 grid grid-cols-3 gap-2.5">
            {[
              { icon: Send, label: 'Sent today', value: '42' },
              { icon: MessageSquare, label: 'Replies', value: '6' },
              { icon: Clock, label: 'Follow-ups', value: '18' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-[12px] border border-hairline-soft bg-white p-3"
              >
                <s.icon className="h-3.5 w-3.5 text-brand" aria-hidden />
                <p className="mt-2 text-lg font-bold leading-none text-ink">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] text-whisper">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Mini pipeline board */}
          <div className="grid grid-cols-5 gap-2">
            {[
              { label: "DM'd", count: 128, tone: 'bg-brand/10 text-brand' },
              { label: 'Initiated', count: 34, tone: 'bg-orange-500/10 text-orange-500' },
              { label: 'Engaged', count: 12, tone: 'bg-yellow-500/10 text-yellow-600' },
              { label: 'Calendly', count: 5, tone: 'bg-sky-500/10 text-sky-500' },
              { label: 'Booked', count: 3, tone: 'bg-emerald-500/10 text-emerald-600' },
            ].map((col) => (
              <div
                key={col.label}
                className="rounded-[10px] border border-hairline-soft bg-white p-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-ink-soft">
                    {col.label}
                  </span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${col.tone}`}
                  >
                    {col.count}
                  </span>
                </div>
                <div className="mt-1.5 space-y-1">
                  <div className="h-4 rounded-[4px] bg-surface-alt" />
                  <div className="h-4 rounded-[4px] bg-surface-alt" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StepCard({
  label,
  variants,
  active = false,
}: {
  label: string
  variants: string
  active?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
        active ? 'border-brand/50 bg-brand/10' : 'border-hairline bg-white'
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          active ? 'bg-brand text-white' : 'bg-surface-alt text-ink-soft'
        }`}
      >
        <MessageSquare className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-ink">{label}</span>
        <span className="block text-xs text-brand">{variants}</span>
      </span>
    </div>
  )
}

function DelayChip({ label }: { label: string }) {
  return (
    <div className="flex justify-center py-1.5">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface-alt px-2.5 py-1 text-[11px] text-whisper">
        <Clock className="h-3 w-3" />
        {label}
      </span>
    </div>
  )
}

/** Left panel: the multi-step sequence with follow-ups and delays. */
export function SequenceStepper() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-4 shadow-[0_24px_60px_-40px_rgba(20,20,43,0.3)] sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-bold text-ink">Message sequence</span>
        <span className="text-xs text-whisper">4 steps</span>
      </div>
      <div className="space-y-0.5">
        <StepCard label="First DM" variants="5/5 variants" />
        <DelayChip label="2d delay" />
        <StepCard label="Follow-up 1" variants="5/5 variants" />
        <DelayChip label="3d delay" />
        <StepCard label="Follow-up 2" variants="5/5 variants" />
        <DelayChip label="4d delay" />
        <StepCard label="Follow-up 3" variants="5/5 variants" active />
      </div>
      <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-hairline py-2.5 text-xs text-whisper">
        <Plus className="h-3.5 w-3.5" />
        Add follow-up
      </button>
    </div>
  )
}

/** Right panel: A/B variant editor with live preview. */
export function VariantEditor() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-4 shadow-[0_24px_60px_-40px_rgba(20,20,43,0.3)] sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-bold text-ink">Step 1 variants</span>
        <span className="text-xs text-whisper">A/B testing</span>
      </div>
      <div className="space-y-2">
        {['A', 'B'].map((v, i) => (
          <div
            key={v}
            className={`rounded-xl border p-3 ${
              i === 0 ? 'border-brand/50 bg-brand/5' : 'border-hairline bg-white'
            }`}
          >
            <div className="mb-1.5 flex items-center gap-2">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  i === 0 ? 'bg-brand text-white' : 'bg-surface-alt text-ink-soft'
                }`}
              >
                {v}
              </span>
              <span className="text-[11px] font-semibold text-ink-soft">
                Variant {v}
              </span>
              {i === 0 && (
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
                  <BarChart3 className="h-2.5 w-2.5" /> Best reply rate
                </span>
              )}
            </div>
            <p className="text-xs leading-relaxed text-ink-soft">
              hey {TOKENS[i]}! saw your {TOKENS[2]} content, mind if i share
              something quick?
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 rounded-xl border border-hairline-soft bg-white p-2.5">
        <Check className="h-3.5 w-3.5 text-brand" aria-hidden />
        <span className="text-[11px] text-whisper">
          Winner promoted automatically
        </span>
      </div>
    </div>
  )
}
