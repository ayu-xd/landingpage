import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'DMDroid | Instagram Auto DM & Cold Outreach',
  description:
    'Make Instagram your #1 client acquisition channel. Reach 500+ prospects a month, auto-follow up until they reply, and turn replies into booked calls. Start your 3-day free trial.',
  generator: 'DMDroid',
  metadataBase: new URL('https://dmdroid.app'),
  openGraph: {
    title: 'DMDroid | Make Instagram Your #1 Client Channel',
    description:
      'Reach 500+ prospects every month on Instagram. Auto-follow up until they reply. No VA needed. No manual sending. No accounts getting flagged.',
    url: 'https://dmdroid.app',
    siteName: 'DMDroid',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMDroid | Make Instagram Your #1 Client Channel',
    description:
      'Reach 500+ prospects every month on Instagram. Auto-follow up until they reply. Start your 3-day free trial.',
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
  colorScheme: 'dark',
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
