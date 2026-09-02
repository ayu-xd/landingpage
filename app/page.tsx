import { ANNOUNCEMENT } from '@/lib/landing-data'
import { Contrast } from '@/components/landing/contrast'
import { Faq } from '@/components/landing/faq'
import { Features } from '@/components/landing/features'
import { FinalCta } from '@/components/landing/final-cta'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Pricing } from '@/components/landing/pricing'
import { ProductShowcase } from '@/components/landing/product-showcase'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteNav } from '@/components/landing/site-nav'
import { SocialProof } from '@/components/landing/social-proof'
import { SupportStrip } from '@/components/landing/support-strip'
import { Testimonials } from '@/components/landing/testimonials'
import { WhoItsFor } from '@/components/landing/who-its-for'

/**
 * Waalaxy's exact section order, 1:1:
 * hero → social proof → how it works (+ support strip) → contrast →
 * features → product panels → who it's for → testimonials → pricing →
 * FAQ → final CTA → footer.
 */
export default function Page() {
  return (
    <div className="lp-root min-h-screen bg-white text-ink-body antialiased">
      <SiteNav />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <SupportStrip />
        <Contrast />
        <Features />
        <ProductShowcase />
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
