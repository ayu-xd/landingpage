import Link from 'next/link'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteNav } from '@/components/landing/site-nav'
import { getPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog',
  description:
    'Cold DM outreach guides for Instagram: how to DM, follow-up systems, and account safety.',
  alternates: {
    canonical: 'https://dmdroid.app/blog',
  },
}

export default function BlogIndexPage() {
  const posts = getPosts()

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-sm text-muted-foreground">
            Cold DM outreach guides for Instagram
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            Guides coming soon. Meanwhile, the{' '}
            <Link href="/#faq" className="text-primary hover:underline">
              homepage FAQ
            </Link>{' '}
            answers the most common questions.
          </p>
        ) : (
          <ul className="mt-10 space-y-3">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="p-5 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <Link href={`/blog/${post.slug}`}>
                  <p className="font-semibold text-foreground hover:text-primary">
                    {post.title}
                  </p>
                  {post.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  )}
                  {post.date && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {post.date}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-8">
          <Link href="/" className="text-sm text-primary hover:underline">
            &larr; Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
