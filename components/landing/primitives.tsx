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
 * The handwritten annotation — Gochi Hand in ink, rotated a few degrees the
 * way Waalaxy's annotations sit. Optional arrow variant points at things.
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
      className={`lp-hand text-xl sm:text-2xl ${rotate ? '-rotate-[3deg]' : ''} ${className}`}
    >
      {children}
    </p>
  )
}

/** A hand-drawn curvy arrow in ink — SVG path, points down-left by default. */
export function HandArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 64"
      fill="none"
      className={`h-10 w-8 text-ink ${className}`}
    >
      <path
        d="M40 8c-14 6-24 18-28 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8 50l4.5-9M8 50l9.5-3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
