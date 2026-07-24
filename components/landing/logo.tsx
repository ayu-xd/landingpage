import Image from 'next/image'

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/dmdroid-logo.png"
        alt="DMDroid"
        width={56}
        height={56}
        className="h-14 w-14 rounded-lg object-contain shrink-0"
        priority
      />
      <span className="text-xl font-semibold tracking-tight">DMDroid</span>
    </span>
  )
}
