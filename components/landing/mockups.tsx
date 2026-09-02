import { Clock, ImageIcon, MessageSquare, Plus } from 'lucide-react'

const TOKENS = ['{{FirstName}}', '{{Username}}', '{{Name}}']

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
        active
          ? 'border-primary/50 bg-primary/10'
          : 'border-border bg-secondary/40'
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          active
            ? 'bg-primary text-primary-foreground'
            : 'bg-background text-muted-foreground'
        }`}
      >
        <MessageSquare className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-foreground">
          {label}
        </span>
        <span className="block text-xs text-primary">{variants}</span>
      </span>
    </div>
  )
}

function DelayChip({ label }: { label: string }) {
  return (
    <div className="flex justify-center py-1.5">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground">
        <Clock className="h-3 w-3" />
        {label}
      </span>
    </div>
  )
}

/** Left column: the multi-step sequence with follow-ups and delays. */
export function SequenceStepper() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[0_24px_60px_-40px_oklch(0.2_0.03_258/70%)] sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold">Message sequence</span>
        <span className="text-xs text-muted-foreground">4 steps</span>
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
      <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-border py-2.5 text-xs text-muted-foreground">
        <Plus className="h-3.5 w-3.5" />
        Add follow-up
      </button>
    </div>
  )
}

/** Right panel: A/B variant editor with live preview. */
export function VariantEditor() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-[0_24px_60px_-40px_oklch(0.2_0.03_258/70%)] sm:p-5">
      <div>
        <h4 className="text-sm font-semibold">Follow-up 3</h4>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Sent 4 days after the previous step if no reply
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3 py-3">
        <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
        <div className="flex-1">
          <p className="text-[11px] text-muted-foreground">Wait before sending</p>
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-border">
            <div className="h-1.5 w-1/3 rounded-full bg-primary" />
          </div>
        </div>
        <span className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium">
          4 days
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-3 text-xs">
          {['V1', 'V2', 'V3', 'V4'].map((v) => (
            <span key={v} className="flex items-center gap-1 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {v}
            </span>
          ))}
          <span className="flex items-center gap-1 border-b-2 border-primary pb-2 font-medium text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            V5
          </span>
          <Plus className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <span className="text-xs font-medium text-primary">5/5 ready</span>
      </div>

      <div className="mt-3 rounded-xl border border-primary/50 bg-background p-3 font-mono text-sm text-foreground">
        hey {'{{FirstName}}'} just checking in
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground">Insert:</span>
        {TOKENS.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-secondary/50 px-2 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
        <span className="inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/10 px-2 py-1 text-[11px] text-primary">
          <ImageIcon className="h-3 w-3" />
          [IMAGE]
        </span>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-3">
        <p className="text-[11px] text-muted-foreground">Preview</p>
        <div className="mt-2 flex justify-end">
          <span className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
            hey {'{{FirstName}}'} just checking in
          </span>
        </div>
      </div>
    </div>
  )
}

/** Full campaign builder combining both panels — used in the hero. */
export function CampaignBuilder() {
  return (
    <div className="glow-primary overflow-hidden rounded-2xl border border-border bg-card text-left">
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/40 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/60" />
        <span className="h-3 w-3 rounded-full bg-chart-2/70" />
        <span className="h-3 w-3 rounded-full bg-primary/70" />
        <span className="ml-3 text-xs text-muted-foreground">
          app.dmdroid.app/campaigns/new
        </span>
      </div>
      <div className="border-b border-border px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Sequence</span>
          <span className="text-primary">61%</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-border">
          <div className="h-1.5 w-[61%] rounded-full bg-primary" />
        </div>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:p-5">
        <SequenceStepper />
        <VariantEditor />
      </div>
    </div>
  )
}
