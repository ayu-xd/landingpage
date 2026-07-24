import Image from 'next/image'

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/dmdroid-logo.png"
        alt="DMDroid"
        width={32}
        height={32}
        className="h-8 w-8 rounded-lg"
        priority
      />
      <span className="text-lg font-semibold tracking-tight">DMDroid</span>
    </span>
  )
}
