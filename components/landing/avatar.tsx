import Image from 'next/image'

/**
 * ── AVATAR POSE MANIFEST ────────────────────────────────────────────────────
 *
 * The mascot narrates the page: it appears at nearly every section, always
 * doing something contextual, and always captioned. Until the pose renders
 * exist, every slot falls back to the stock logo art.
 *
 * TO SHIP THE REAL POSES:
 *   1. Generate each render below at 1:1, transparent background, same 3D
 *      style as /public/dmdroid-logo.png (blue chat-bubble body, round black
 *      glasses, red headband tied to the side).
 *   2. Save them to /public/avatar/ under the exact filenames listed.
 *   3. Flip USE_GENERATED_POSES to true. Every slot switches over at once.
 *
 * No drop shadows baked into the art — these sit on flat white and flat
 * near-black, and shadows read as dirt on both.
 */
const USE_GENERATED_POSES = false

const FALLBACK = '/dmdroid-logo.png'

export const AVATAR_POSES = {
  /** Nav + footer lockup. Neutral, facing forward. */
  mark: { file: '/avatar/mark.png', brief: 'neutral, facing forward' },
  /** Hero, 300–350px. */
  hero: {
    file: '/avatar/hero.png',
    brief: 'holding a tall stack of DMs, or typing on a tiny keyboard',
  },
  /** Social proof bar, small. */
  socialProof: {
    file: '/avatar/social-proof.png',
    brief: 'pointing sideways at the niche list',
  },
  /** How it works, step 3. */
  stepRelax: {
    file: '/avatar/step-relax.png',
    brief: 'feet up, relaxed, work handled',
  },
  /** How it works, step 4. */
  stepCelebrate: {
    file: '/avatar/step-celebrate.png',
    brief: 'arms up celebrating, or ringing a bell',
  },
  /** Old Way vs DMDroid Way, on the DMDroid column. */
  contrast: { file: '/avatar/contrast.png', brief: 'thumbs up, confident' },
  /** Who it's for, small. */
  audience: {
    file: '/avatar/audience.png',
    brief: 'pointing at the reader, "is this you?"',
  },
  /** Testimonials header, small. */
  testimonials: {
    file: '/avatar/testimonials.png',
    brief: 'pointing down at the reviews',
  },
  /** Pricing footer. */
  pricing: {
    file: '/avatar/pricing.png',
    brief: 'holding a small sign reading "3 days free"',
  },
  /** FAQ header. */
  faq: { file: '/avatar/faq.png', brief: 'curious, head tilted' },
  /** Final CTA — the largest use on the page, 400px+. */
  finalCta: {
    file: '/avatar/final-cta.png',
    brief: 'full body, standing ready, confident',
  },
} as const

export type AvatarPose = keyof typeof AVATAR_POSES

function poseSrc(pose: AvatarPose) {
  return USE_GENERATED_POSES ? AVATAR_POSES[pose].file : FALLBACK
}

/**
 * The mascot on its own. Decorative by design — every placement pairs it
 * with a caption or a wordmark, so it stays out of the accessibility tree
 * instead of announcing itself twice.
 *
 * `size` sets the intrinsic dimensions; override the rendered size with
 * Tailwind classes (they win over the width/height attributes).
 */
export function Avatar({
  pose,
  size,
  className = '',
  priority = false,
}: {
  pose: AvatarPose
  size: number
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src={poseSrc(pose)}
      alt=""
      aria-hidden
      width={size}
      height={size}
      priority={priority}
      className={`shrink-0 select-none object-contain ${className}`}
    />
  )
}

/**
 * The whisper pattern: mascot plus a small italic aside in a human voice.
 * The brief's rule — never float the avatar without something for it to say.
 */
export function AvatarWhisper({
  pose,
  size = 56,
  caption,
  tone = 'light',
  layout = 'row',
  className = '',
  priority = false,
}: {
  pose: AvatarPose
  size?: number
  caption: string
  tone?: 'light' | 'dark'
  layout?: 'row' | 'column'
  className?: string
  priority?: boolean
}) {
  const captionColor = tone === 'dark' ? 'text-whisper-dark' : 'text-whisper'

  return (
    <div
      className={`flex ${
        layout === 'column'
          ? 'flex-col items-center gap-2 text-center'
          : 'items-center gap-3'
      } ${className}`}
    >
      <Avatar pose={pose} size={size} priority={priority} />
      <p className={`text-sm italic leading-snug ${captionColor}`}>{caption}</p>
    </div>
  )
}
