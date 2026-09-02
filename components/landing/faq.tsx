'use client'

import { ArrowDown } from 'lucide-react'
import { useState } from 'react'
import { CONTACT_EMAIL, FAQS } from '@/lib/landing-data'
import { HandNote, Section, SectionHeading, SwooshArrow } from './primitives'
/**
 * Waalaxy's FAQ: centered heading, chatty subline, accordion with plain
 * questions and a chevron that rotates on open. "Chat with us" gets the
 * handwritten "with real humans :)" with its arrow beside it.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" tone="alt">
      <SectionHeading
        title="Frequently Asked Questions"
        tagline={
          <>
            You have questions, we have answers. If you don’t find what
            you’re looking for here, our support team will be glad to help!{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
            >
              Chat with us
            </a>
          </>
        }
      />

      {/* Waalaxy's annotation: "With real humans :)" + arrow hanging right
          of the heading, tilted ~13deg, arrow curving down to the accordion. */}
      <div
        aria-hidden
        className="pointer-events-none relative mx-auto mt-2 hidden max-w-3xl md:block"
      >
        <div className="absolute -top-4 right-0 flex -rotate-[13deg] items-start gap-2">
          <HandNote rotate={false} className="whitespace-nowrap text-2xl">
            With real humans :)
          </HandNote>
          <SwooshArrow dir="down-left" className="h-20 w-20" />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className={`overflow-hidden rounded-[16px] border transition-colors ${
                isOpen
                  ? 'border-brand/40 bg-white'
                  : 'border-hairline bg-surface'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-semibold text-ink sm:text-base">
                  {item.q}
                </span>
                <ArrowDown
                  className={`h-4 w-4 shrink-0 text-brand transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6">
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
