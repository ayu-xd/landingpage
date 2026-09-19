import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/outstatic'],
      },
    ],
    sitemap: 'https://dmdroid.app/sitemap.xml',
  }
}
