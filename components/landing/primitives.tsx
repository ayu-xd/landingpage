import { Check } from 'lucide-react'

type Tone = 'light' | 'dark'

const SECTION_TONES = {
  light: 'bg-surface text-ink-body',
  alt: 'bg-surface-alt text-ink-body',
  ink: 'bg-ink text-white',
  deep: 'bg-brand-deep text-white',
}

/** 1100px content well, 60px / 100px vertical rhythm, one background tone. */
export function Section({
  id,
  tone = 'light',
  className = '',
  children,
}: {
  id?: string
  tone?: keyof typeof SECTION_TONES
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`${SECTION_TONES[tone]} ${id ? 'scroll-mt-24' : ''} ${className}`}
    >
      <div className="mx-auto max-w-content px-5 py-15 sm:px-6 md:py-25">
        {children}
      </div>
    </section>
  )
}

/**
 * h2 plus the line that completes it. No all-caps eyebrow label above it —
 * the headline does that work.
 */
export function SectionHeading({
  title,
  tagline,
  tone = 'light',
  align = 'left',
  className = '',
  children,
}: {
  title: React.ReactNode
  tagline?: React.ReactNode
  tone?: Tone
  align?: 'left' | 'center'
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <h2
        className={`text-balance text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] ${
          tone === 'dark' ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {tagline && (
        <p
          className={`mt-3 text-pretty text-lg leading-relaxed ${
            tone === 'dark' ? 'text-white/70' : 'text-ink-soft'
          }`}
        >
          {tagline}
        </p>
      )}
      {children}
    </div>
  )
}

/** Small italic aside in a human voice. */
export function Whisper({
  children,
  tone = 'light',
  className = '',
}: {
  children: React.ReactNode
  /** `deep` = on the blue CTA panel, where grey loses too much contrast. */
  tone?: Tone | 'deep'
  className?: string
}) {
  const color = {
    light: 'text-whisper',
    dark: 'text-whisper-dark',
    deep: 'text-white/75',
  }[tone]

  return (
    <p className={`text-sm italic leading-snug ${color} ${className}`}>
      {children}
    </p>
  )
}

export function Bullet({
  children,
  tone = 'light',
}: {
  children: React.ReactNode
  tone?: Tone
}) {
  return (
    <li
      className={`flex items-start gap-2.5 text-sm leading-relaxed ${
        tone === 'dark' ? 'text-white/75' : 'text-ink-soft'
      }`}
    >
      <Check
        className={`mt-0.5 h-4 w-4 shrink-0 ${
          tone === 'dark' ? 'text-brand-bright' : 'text-brand'
        }`}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  )
}

/**
 * Renders {{MergeTags}} in mono — the only place mono is allowed on the page.
 */
export function Tokens({ text, tone = 'light' }: { text: string; tone?: Tone }) {
  return (
    <>
      {text.split(/(\{\{[A-Za-z0-9_]+\}\})/g).map((part, i) =>
        /^\{\{[A-Za-z0-9_]+\}\}$/.test(part) ? (
          <code
            key={i}
            className={`rounded px-1 py-0.5 font-mono text-[0.85em] ${
              tone === 'dark'
                ? 'bg-white/10 text-brand-bright'
                : 'bg-brand/8 text-brand'
            }`}
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
