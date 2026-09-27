import type { Metadata } from 'next'
import { Contrast } from '@/components/landing/contrast'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Pricing } from '@/components/landing/pricing'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteNav } from '@/components/landing/site-nav'
import { SocialProof } from '@/components/landing/social-proof'
import { Testimonials } from '@/components/landing/testimonials'
import { WhoItsFor } from '@/components/landing/who-its-for'

/**
 * Section order:
 * hero → social proof → how it works → contrast →
 * who it's for → pricing → FAQ → final CTA → footer.
 * (Testimonials render only when real quotes exist. Features and
 * product-showcase components were removed; do not re-add without wiring.)
 */
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://dmdroid.app',
  },
}
export default function Page() {
  return (
    <div className="lp-root min-h-screen overflow-x-clip bg-white text-ink-body antialiased">
      <SiteNav />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Contrast />
        <WhoItsFor />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
