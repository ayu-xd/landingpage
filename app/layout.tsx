import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'DMDroid — Instagram DM automation for agencies & founders',
  description:
    'DMDroid runs personalized Instagram DM campaigns across all your accounts, follows up automatically, and drops hot leads into your pipeline. Start your 3-day free trial.',
  generator: 'DMDroid',
  metadataBase: new URL('https://dmdroid.app'),
  openGraph: {
    title: 'DMDroid — Book more calls. DM less manually.',
    description:
      'Automated Instagram outreach that books calls while you sleep. Multi-account, safe sending, real-time pipeline. Start your 3-day free trial.',
    url: 'https://dmdroid.app',
    siteName: 'DMDroid',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMDroid — Book more calls. DM less manually.',
    description:
      'Automated Instagram outreach that books calls while you sleep. Start your 3-day free trial.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
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
