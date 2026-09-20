'use client'

import { useState } from 'react'

/**
 * Brand-matched newsletter form. Posts to /api/subscribe (Kit), never
 * exposes the API key. Honeypot field included for bot protection.
 */
export function NewsletterForm({
  heading = 'Get the cold DM playbook',
  subhead = 'Openers, follow-up timing, and the safety rules. Free, in your inbox.',
  cta = 'Send it to me',
}: {
  heading?: string
  subhead?: string
  cta?: string
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(
          typeof data?.error === 'string'
            ? data.error
            : 'Something went wrong. Try again.'
        )
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setError('Something went wrong. Try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[16px] border border-hairline bg-surface p-6">
        <p className="font-bold text-ink">You&apos;re in.</p>
        <p className="mt-1 text-sm text-ink-soft">
          Check your inbox to confirm, then the playbook lands.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-[16px] border border-hairline bg-surface p-6">
      <p className="font-bold text-ink">{heading}</p>
      <p className="mt-1 text-sm text-ink-soft">{subhead}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          maxLength={254}
          disabled={status === 'loading'}
          className="h-12 flex-1 rounded-[12px] border border-hairline bg-white px-4 text-[15px] text-ink placeholder:text-whisper outline-none focus:border-brand"
        />
        {/* Honeypot: hidden from humans, bots fill it. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
          onChange={() => {}}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="lp-btn-primary flex h-12 items-center justify-center rounded-[12px] px-5 text-[15px] disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : cta}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
