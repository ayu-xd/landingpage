import { Avatar } from './avatar'

/** Avatar mark plus wordmark. 32px in the nav and footer, per the brief. */
export function Logo({
  size = 32,
  tone = 'dark',
}: {
  size?: number
  tone?: 'light' | 'dark'
}) {
  return (
    <span className="flex items-center gap-2.5">
      <Avatar pose="mark" size={size} priority />
      <span
        className={`text-lg font-bold tracking-[-0.02em] ${
          tone === 'dark' ? 'text-white' : 'text-ink'
        }`}
      >
        DMDroid
      </span>
    </span>
  )
}
