import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteNav } from '@/components/landing/site-nav'
import { NewsletterForm } from '@/components/landing/newsletter-form'
import { getPost, getPosts } from '@/lib/blog'
import { useMDXComponents } from '@/mdx-components'

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://dmdroid.app/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://dmdroid.app/blog/${post.slug}`,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.dateISO || undefined,
    author: {
      '@type': 'Organization',
      name: 'DMDroid',
      url: 'https://dmdroid.app/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DMDroid',
      url: 'https://dmdroid.app/',
    },
    mainEntityOfPage: `https://dmdroid.app/blog/${post.slug}`,
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <p className="text-xs text-muted-foreground">{post.date}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{post.title}</h1>
        <article className="mt-6">
          <MDXRemote source={post.content} components={useMDXComponents({})} />
        </article>
        <div className="mt-10 space-y-4">
          <NewsletterForm />
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">
                Try DMDroid free for 3 days.
              </strong>{' '}
              <Link
                href="https://app.dmdroid.app/auth"
                className="text-primary hover:underline"
              >
                Start your free trial
              </Link>{' '}
              and put this guide on autopilot.
            </p>
          </div>
        </div>
        <div className="pt-6 flex gap-4">
          <Link href="/blog" className="text-sm text-primary hover:underline">
            &larr; All guides
          </Link>
          <Link href="/" className="text-sm text-primary hover:underline">
            Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
