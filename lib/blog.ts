import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
}

export type Post = PostMeta & {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

/** All posts, newest first. Reads markdown files only, no code per article. */
export function getPosts(): PostMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ''),
        date: String(data.date ?? ''),
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** Single post with raw MDX body (frontmatter stripped). */
export function getPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    date: String(data.date ?? ''),
    content,
  }
}
