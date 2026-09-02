'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import { FAQS } from '@/lib/landing-data'
import { AvatarWhisper } from './avatar'
import { Section, SectionHeading } from './primitives'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section tone="light">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading title="Questions the droid gets asked a lot." />
        <AvatarWhisper
          pose="faq"
          size={64}
          caption="good question, let me check my circuits"
          className="sm:max-w-[260px] sm:shrink-0 sm:pb-1"
        />
      </div>

      <div className="mt-10 max-w-3xl divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-surface-alt">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-semibold text-ink">
                  {item.q}
                </span>
                <Plus
                  className={`h-4 w-4 shrink-0 text-brand transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
