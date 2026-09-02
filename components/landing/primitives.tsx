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

const SWOOSH_PATHS: Record<
  SwooshDir,
  { box: string; shaft: string; head: string }
> = {
  // Curves from top-right down to a bottom-left tip.
  'down-left': {
    box: '0 0 100 100',
    shaft: 'M92 8C50 18 20 48 12 90',
    head: 'M12 90l2-16M12 90l16-2',
  },
  // Mirrored: top-left down to a bottom-right tip.
  'down-right': {
    box: '0 0 100 100',
    shaft: 'M8 8C50 18 80 48 88 90',
    head: 'M88 90l-2-16M88 90l-16-2',
  },
  // Near-vertical lazy S, tip at the bottom. Tall box matches the tall
  // usages (Waalaxy's tall review-row arrow).
  down: {
    box: '0 0 100 260',
    shaft: 'M58 8C34 80 70 160 48 250',
    head: 'M48 250l-4-20M48 250l20-10',
  },
  // Mirrored vertically: tip at the top-left (for notes below their target).
  'up-left': {
    box: '0 0 100 100',
    shaft: 'M92 92C50 82 20 52 12 10',
    head: 'M12 10l-2 16M12 10l16 2',
  },
  // Wide horizontal sweep that dips down to a left tip ("Follow the arrows").
  'left-down': {
    box: '0 0 160 100',
    shaft: 'M150 20C100 2 40 14 12 58',
    head: 'M12 58l3-17M12 58l18 3',
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
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d={p.head}
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Small hand-drawn right-pointing arrow, for step-to-step flow. */
export function FlowArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 60"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={`shrink-0 text-ink ${className}`}
    >
      <path
        d="M8 34C40 18 80 22 112 30"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M112 30l-16-8M112 30l-15 11"
        stroke="currentColor"
        strokeWidth="5"
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
