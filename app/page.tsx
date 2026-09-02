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
import { Testimonials } from '@/components/landing/testimonials'
import { WhoItsFor } from '@/components/landing/who-its-for'

export default function Page() {
  return (
    <div className="lp-root min-h-screen bg-surface text-ink-body antialiased">
      <SiteNav announcement={ANNOUNCEMENT} />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
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
