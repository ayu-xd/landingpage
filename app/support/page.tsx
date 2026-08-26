import Link from 'next/link'
import { SiteNav } from '@/components/landing/site-nav'
import { SiteFooter } from '@/components/landing/site-footer'

export const metadata = {
  title: 'Support | DMDroid',
  description: 'Get help with DMDroid - Contact our support team or browse FAQs.',
}

const faqs = [
  {
    q: 'What is DMDroid?',
    a: 'DMDroid is a follow-up assistant for Instagram DMs. It helps you organize and schedule first touches and follow-up messages, track replies, and stay on top of your conversations — all from your own logged-in Instagram account.',
  },
  {
    q: 'How does DMDroid protect my account?',
    a: 'DMDroid includes built-in safety features like working-hours windows, daily send limits, and minimum spacing between messages. You stay in full control with pause and disconnect options at any time.',
  },
  {
    q: 'Do I need my own Instagram account?',
    a: 'Yes. DMDroid connects to your own logged-in Instagram account. Messages are sent from your account, not from any third-party system.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — every plan starts with a 3-day free trial. A credit card is required to start, but you can cancel anytime before day 3 and you won\'t be charged.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'You can cancel your subscription at any time through your account settings. Your access will continue until the end of your current billing period.',
  },
  {
    q: 'How do I get started?',
    a: 'Check out our How It Works section on the homepage, or reach out to our support team — we\'re happy to help you get set up.',
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
