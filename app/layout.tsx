import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Figtree, Gochi_Hand } from 'next/font/google'
import { FAQS } from '@/lib/landing-data'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
  display: 'swap',
  preload: true,
})

/** Powers the handwritten annotations — Waalaxy uses Gochi Hand. */
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gochi-hand',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: 'DMDroid – Instagram Automation Tool for Agencies',
    template: '%s | DMDroid',
  },
  description:
    'DMDroid automates cold DM outreach on Instagram and books calls on autopilot. 500+ DMs a day across 10+ accounts. Start your 3-day free trial.',
  generator: 'DMDroid',
  metadataBase: new URL('https://dmdroid.app'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'DMDroid – Instagram Automation Tool for Agencies',
    description:
      'Reach 500+ people a day across 10+ accounts. DMDroid sends your openers, follows up until they reply, and routes booked calls straight to your pipeline.',
    url: 'https://dmdroid.app',
    siteName: 'DMDroid',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'DMDroid – Instagram DM outreach automation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMDroid – Instagram Automation Tool for Agencies',
    description:
      'Reach 500+ people a day across 10+ accounts. DMDroid sends, follows up, and fills your pipeline. 3-day free trial.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'DMDroid – Instagram DM outreach automation',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#315ae7',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://dmdroid.app/#organization',
      name: 'DMDroid',
      url: 'https://dmdroid.app/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dmdroid.app/dmdroid-logo.webp',
        width: 512,
        height: 512,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@dmdroid.app',
        contactType: 'customer service',
      },
      sameAs: [
        'https://x.com/dmdroid_app',
        'https://www.instagram.com/dmdroid.app/',
        'https://www.youtube.com/@dmdroid_app',
        'https://www.g2.com/products/dmdroid/reviews',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dmdroid.app/#website',
      url: 'https://dmdroid.app/',
      name: 'DMDroid',
      publisher: { '@id': 'https://dmdroid.app/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://dmdroid.app/#software',
      name: 'DMDroid',
      url: 'https://dmdroid.app/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      brand: { '@id': 'https://dmdroid.app/#organization' },
      description:
        'DMDroid automates cold DM outreach on Instagram and books calls on autopilot. 500+ DMs a day across 10+ accounts. Start your 3-day free trial.',
      offers: [
        {
          '@type': 'Offer',
          name: 'Solo Operator',
          price: 69,
          priceCurrency: 'USD',
          url: 'https://app.dmdroid.app/auth',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Agency',
          price: 106,
          priceCurrency: 'USD',
          description:
            'Starting price for 2 accounts; per-account price drops as you add up to 30 accounts.',
          url: 'https://app.dmdroid.app/auth',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://dmdroid.app/#video',
      name: 'How We Automate 500+ Cold Instagram DMs a Day Without Getting Banned With DMDroid',
      description:
        'Watch DMDroid automate cold outreach on Instagram across 10+ accounts with smart anti-ban pacing, automated follow-ups, and pipeline CRM sync.',
      thumbnailUrl: [
        'https://dmdroid.app/thumbnail-demo.jpg',
      ],
      uploadDate: '2026-10-04T00:00:00Z',
      embedUrl: 'https://www.youtube-nocookie.com/embed/skH46WFx-ic',
      contentUrl: 'https://youtu.be/skH46WFx-ic',
      publisher: { '@id': 'https://dmdroid.app/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://dmdroid.app/#faq',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${gochiHand.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white font-sans text-ink-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
