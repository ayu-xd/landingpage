import { ArrowDown } from 'lucide-react'
import { CONTACT_EMAIL, FAQS } from '@/lib/landing-data'
import { HandNote, Section, SwooshArrow } from './primitives'

/**
 * Waalaxy's FAQ — LEFT-aligned heading, 2-column accordion grid,
 * "With real humans :)" annotation on the top-right with a DOWN arrow.
 *
 * Server-rendered: every answer ships in the initial HTML via native
 * <details>/<summary> so crawlers and AI fetchers see all Q+As
 * (matches the FAQPage JSON-LD in app/layout.tsx).
 */
export function Faq() {

  return (
    <Section id="faq" tone="alt">
      {/* Header row: left-aligned heading + right-side annotation */}
      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.75rem]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">
            You have questions, we have answers. If you don&apos;t find what
            you&apos;re looking for here, our support team will be glad to help!{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
            >
              Chat with us
            </a>
          </p>
        </div>

        {/* "With real humans :)" — top-right, arrow pointing DOWN into accordion */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 hidden -rotate-[10deg] items-start gap-2 md:flex"
        >
          <HandNote rotate={false} className="whitespace-nowrap text-xl sm:text-2xl">
            with real humans :)
          </HandNote>
          <SwooshArrow dir="down" className="h-20 w-10" />
        </div>
      </div>

      {/* 2-column accordion grid — native <details> keeps all answers in the HTML */}
      <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2">
        {FAQS.map((item, i) => (
          <details
            key={item.q}
            id={`faq-${item.q
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')}`}
            open={i === 0}
            className="group overflow-hidden rounded-[16px] border border-hairline bg-surface transition-colors open:border-brand/40 open:bg-white"
          >
            <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
              <span className="text-[15px] font-semibold text-ink sm:text-base">
                {item.q}
              </span>
              <ArrowDown
                className="h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}
