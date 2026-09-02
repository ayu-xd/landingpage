import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Figtree, Gochi_Hand, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

/** Powers the handwritten annotations — Waalaxy uses Gochi Hand. */
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gochi-hand',
})

export const metadata: Metadata = {
  title: 'DMDroid – The Perfect Tool for Instagram DM Outreach',
  description:
    'Automate your Instagram DM outreach with DMDroid. Launch campaigns in minutes and get more replies. No technical skills required. Start your 3-day free trial.',
  generator: 'DMDroid',
  metadataBase: new URL('https://dmdroid.app'),
  openGraph: {
    title: 'DMDroid – The Perfect Tool for Instagram DM Outreach',
    description:
      'Make Instagram your #1 client acquisition channel. Reach 500+ prospects a month, auto-follow up until they reply, and turn replies into booked calls.',
    url: 'https://dmdroid.app',
    siteName: 'DMDroid',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMDroid – The Perfect Tool for Instagram DM Outreach',
    description:
      'Make Instagram your #1 client acquisition channel. Reach 500+ prospects a month, auto-follow up until they reply. Start your 3-day free trial.',
    images: ['/og.png'],
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
  colorScheme: 'light',
  themeColor: '#315ae7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${inter.variable} ${geistMono.variable} ${gochiHand.variable}`}
    >
      <body className="bg-white font-sans text-ink-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
