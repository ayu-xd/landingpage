import Link from 'next/link'
import { SiteNav } from '@/components/landing/site-nav'
import { SiteFooter } from '@/components/landing/site-footer'

export const metadata = {
  title: 'Support | DMDroid',
  description: 'Get help with DMDroid - Contact our support team or browse FAQs.',
}

const faqs = [
  {
    q: 'Will my Instagram account get banned?',
    a: 'DMDroid is built around account safety. Every account runs in its own isolated browser session with warmup schedules, human-like sending limits, and heartbeat monitoring. We stay well within Instagram\u2019s activity thresholds so your accounts stay healthy.',
  },
  {
    q: 'Do I need to keep my computer on?',
    a: 'No. DMDroid runs in the cloud 24/7. Campaigns keep sending, following up, and collecting replies whether your laptop is open or closed.',
  },
  {
    q: 'How many messages can I send per day?',
    a: 'Message volume is unlimited on every paid plan, but DMDroid automatically paces sending within safe, human-like daily caps per account to protect your deliverability.',
  },
  {
    q: 'Do I need my own Instagram account?',
    a: 'Yes. You connect your own Instagram account(s) to DMDroid. Depending on your plan you can connect anywhere from 1 to 30 accounts.',
  },
  {
    q: 'Is there really a free trial? Do I need a card?',
    a: 'Yes \u2014 every plan starts with a 3-day free trial. A credit card is required to start, but you can cancel anytime before day 3 and you won\u2019t be charged.',
  },
  {
    q: 'Can I run multiple accounts?',
    a: 'Absolutely. The Scale plan supports 2 to 30 accounts with per-account volume discounts, and Enterprise unlocks unlimited accounts.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'You can cancel your subscription at any time through your account settings. Your access will continue until the end of your current billing period.',
  },
  {
    q: 'I need help setting up my campaign. Where do I start?',
    a: 'Check out our How It Works section on the homepage, or reach out to our support team \u2014 we\u2019re happy to help you get started.',
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Support</h1>
            <p className="text-sm text-muted-foreground">We&apos;re here to help</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:hello@dmdroid.app"
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-2 bg-primary/15 rounded-lg text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">hello@dmdroid.app</p>
                </div>
              </a>
              <a
                href="https://dmdroid.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-2 bg-primary/15 rounded-lg text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Live Chat</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl border border-border">
                  <p className="font-medium text-foreground">{faq.q}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Response Time:</strong> We aim to respond to all support inquiries within 24 hours. For urgent matters, please email us directly at{' '}
              <a href="mailto:hello@dmdroid.app" className="text-primary hover:underline">
                hello@dmdroid.app
              </a>.
            </p>
          </section>

          <div className="pt-4">
            <Link href="/" className="text-sm text-primary hover:underline">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
