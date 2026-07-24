'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import { FAQS } from '@/lib/landing-data'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-primary">FAQ</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium">{item.q}</span>
                <Plus
                  className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
