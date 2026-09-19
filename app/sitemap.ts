import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dmdroid.app'

  const posts: MetadataRoute.Sitemap = getPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : undefined,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: `${base}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/blog`,
      changeFrequency: 'weekly',
      priority: 0.7,
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
    ...posts,
  ]
}
