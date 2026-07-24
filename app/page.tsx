import { Faq } from '@/components/landing/faq'
import { Features } from '@/components/landing/features'
import { FinalCta } from '@/components/landing/final-cta'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Pricing } from '@/components/landing/pricing'
import { ProductShowcase } from '@/components/landing/product-showcase'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteNav } from '@/components/landing/site-nav'
import { StatsBar } from '@/components/landing/stats-bar'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <ProductShowcase />
        <Features />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
