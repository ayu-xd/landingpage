import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dmdroid.app'

  return [
    {
      url: `${base}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/support`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${base}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${base}/terms`,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ]
}
