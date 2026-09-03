import { Check } from 'lucide-react'

/** Waalaxy's content well — wide, generous vertical rhythm. */
export function Section({
  id,
  tone = 'light',
  className = '',
  children,
}: {
  id?: string
  tone?: 'light' | 'alt' | 'ink'
  className?: string
  children: React.ReactNode
}) {
  const tones = {
    light: 'bg-white text-ink-body',
    alt: 'bg-surface-alt text-ink-body',
    ink: 'bg-ink text-white',
  }
  return (
    <section
      id={id}
      className={`${tones[tone]} ${id ? 'scroll-mt-24' : ''} ${className}`}
    >
      <div className="mx-auto max-w-content px-5 py-16 sm:px-6 md:py-24">
        {children}
      </div>
    </section>
  )
}

/**
 * Waalaxy's headings are CENTERED. Figtree 700/800, ink color, tight
 * leading. The tagline sits directly under in body grey.
 */
export function SectionHeading({
  title,
  tagline,
  align = 'center',
  className = '',
  children,
}: {
  title: React.ReactNode
  tagline?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      <h2 className="text-balance text-[1.875rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      {tagline && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">
          {tagline}
        </p>
      )}
      {children}
    </div>
  )
}

/**
 * The handwritten annotation — Gochi Hand in ink, tilted a few degrees the
 * way Waalaxy's annotations sit (theirs never exceed ~13deg).
 */
export function HandNote({
  children,
  className = '',
  rotate = true,
}: {
  children: React.ReactNode
  className?: string
  rotate?: boolean
}) {
  return (
    <p
      aria-hidden
      className={`lp-hand text-xl text-ink sm:text-2xl ${rotate ? '-rotate-[3deg]' : ''} ${className}`}
    >
      {children}
    </p>
  )
}

/**
 * Waalaxy ships each arrow as an image ALREADY pointing where it needs to
 * point, then tilts the whole annotation a few degrees. We mirror that:
 * pre-drawn swoosh paths per direction. Never rotate the arrow itself.
 */
export type SwooshDir =
  | 'down-left'
  | 'down-right'
  | 'down'
  | 'up-left'
  | 'left-down'

/**
 * Waalaxy-style swoosh paths: deep S-curve Béziers, thick stroke, fully
 * round caps and joins. Each path was hand-tuned to look drawn, not computed.
 *
 * Viewbox is kept at the original sizes so existing usages (arrowClass sizes)
 * stay identical — only the path geometry and stroke weight change.
 */
const SWOOSH_PATHS: Record<
  SwooshDir,
  { box: string; shaft: string; head: string }
> = {
  // Sweeps from top-right, bows out to the right, then curves hard
  // left to land at bottom-left — a proper S with a dramatic hook.
  'down-left': {
    box: '0 0 110 110',
    shaft: 'M98 10 C 90 10, 75 20, 70 40 C 60 68, 30 72, 14 96',
    head: 'M14 96 L 18 80 M 14 96 L 30 92',
  },
  // Mirror: sweeps from top-left, bows left, hooks right to bottom-right.
  'down-right': {
    box: '0 0 110 110',
    shaft: 'M12 10 C 20 10, 35 20, 40 40 C 50 68, 80 72, 96 96',
    head: 'M96 96 L 92 80 M 96 96 L 80 92',
  },
  // Tall near-vertical S: bows gently left then swings back right, landing
  // at the bottom with a clean angled arrowhead (Waalaxy's review-row arrow).
  down: {
    box: '0 0 100 270',
    shaft: 'M54 8 C 28 60, 76 110, 54 170 C 36 220, 52 240, 50 258',
    head: 'M50 258 L 38 244 M 50 258 L 64 246',
  },
  // Tip at the top-left — note sits below its target, arrow curves up-left.
  'up-left': {
    box: '0 0 110 110',
    shaft: 'M98 100 C 88 100, 72 88, 68 70 C 60 42, 28 28, 14 12',
    head: 'M14 12 L 16 28 M 14 12 L 30 18',
  },
  // Wide arc that sweeps left and dips down — "Follow the arrows" annotation.
  'left-down': {
    box: '0 0 170 110',
    shaft: 'M158 18 C 120 6, 70 8, 44 28 C 24 44, 14 60, 14 80',
    head: 'M14 80 L 4 66 M 14 80 L 28 70',
  },
}

export function SwooshArrow({
  dir = 'down-left',
  className = '',
  white = false,
}: {
  dir?: SwooshDir
  className?: string
  white?: boolean
}) {
  const p = SWOOSH_PATHS[dir]
  return (
    <svg
      aria-hidden
      viewBox={p.box}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={`shrink-0 ${white ? 'text-white' : 'text-ink'} ${className}`}
    >
      <path
        d={p.shaft}
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={p.head}
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Between-step flow arrow: organic, thin dashed curve that spans exactly between
 * the left and right text columns (25% to 75% width).
 */
export function FlowArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 250"
      fill="none"
      className={`shrink-0 ${className}`}
    >
      {/* Elegant, lazy S-curve going from x=250 (25%) to x=750 (75%) */}
      <path
        d="M 250 20 C 250 125, 750 125, 750 230"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 8"
      />
      {/* Solid arrowhead with a built-in stem to bridge any dashed gaps perfectly */}
      <path
        d="M 750 215 L 750 235 L 735 220 M 750 235 L 765 220"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Waalaxy's annotation unit: handwritten text + pre-aimed swoosh arrow in
 * one absolutely-positioned container, tilted a FEW degrees (never enough
 * to twist the text). `dir` aims the arrow at the target.
 */
export function Annotation({
  note,
  className = '',
  rotate = '-rotate-[8deg]',
  arrowClass = '',
  white = false,
  dir = 'down-left',
}: {
  note: React.ReactNode
  className?: string
  rotate?: string
  arrowClass?: string
  white?: boolean
  dir?: SwooshDir
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-10 flex items-start gap-2 ${rotate} ${className}`}
    >
      <HandNote rotate={false}>{note}</HandNote>
      <SwooshArrow dir={dir} white={white} className={arrowClass} />
    </div>
  )
}

/** Waalaxy's primary CTA — gradient pill, Figtree 700, white text. */
export function GradientButton({
  href,
  children,
  size = 'md',
  className = '',
}: {
  href: string
  children: React.ReactNode
  size?: 'md' | 'lg'
  className?: string
}) {
  const sizes = {
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  }
  return (
    <a
      href={href}
      className={`lp-btn-primary inline-flex items-center justify-center gap-2 rounded-[16px] font-bold tracking-[-0.01em] ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}

/** Small italic aside in a human voice — Waalaxy's grey captions. */
export function Whisper({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`text-sm italic leading-snug text-whisper ${className}`}>
      {children}
    </p>
  )
}

export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
      <span>{children}</span>
    </li>
  )
}

/** Renders {{MergeTags}} in mono — the only place mono is allowed. */
export function Tokens({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\{\{[A-Za-z0-9_]+\}\})/g).map((part, i) =>
        /^\{\{[A-Za-z0-9_]+\}\}$/.test(part) ? (
          <code
            key={i}
            className="rounded bg-brand/10 px-1 py-0.5 font-mono text-[0.85em] text-brand"
          >
            {part}
          </code>
        ) : (
          part
        ),
      )}
    </>
  )
}
