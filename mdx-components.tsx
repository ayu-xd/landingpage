import type { MDXComponents } from 'mdx/types'

/**
 * Brand-matched styling for blog MDX elements.
 * Used by `app/blog/[slug]/page.tsx` via next-mdx-remote.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-bold tracking-[-0.01em] text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-lg font-bold text-ink">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 leading-relaxed text-ink-soft">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-soft">{children}</ol>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-4 rounded-r-[12px] border-l-4 border-brand bg-surface px-5 py-3 text-ink">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="mt-4 overflow-x-auto rounded-[12px] border border-hairline">
        <table className="w-full border-collapse text-left text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-surface-alt">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="border-b border-hairline px-4 py-3 font-bold text-ink">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-hairline-soft px-4 py-3 text-ink-soft last:border-b-0">
        {children}
      </td>
    ),
    ...components,
  }
}
