import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  dateISO: string
}

export type Post = PostMeta & {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

/** ISO date (YYYY-MM-DD) for sitemap + schema. Empty when unparseable. */
function formatISO(value: unknown): string {
  if (value instanceof Date && !isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10)
  }
  return ''
}
function formatDate(value: unknown): string {
  if (value instanceof Date && !isNaN(value.getTime())) {
    const y = value.getUTCFullYear()
    const m = MONTHS[value.getUTCMonth()]
    const d = value.getUTCDate()
    return `${m} ${d}, ${y}`
  }
  return String(value ?? '')
}

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
        date: formatDate(data.date),
        dateISO: formatISO(data.date),
      }
    })
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))
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
    date: formatDate(data.date),
    dateISO: formatISO(data.date),
    content,
  }
}
