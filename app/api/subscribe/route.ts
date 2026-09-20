const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Newsletter signup proxy. Keeps KIT_API_KEY server-side and adds a
 * honeypot so bots don't burn the Kit contact quota.
 */
export async function POST(request: Request) {
  let body: { email?: string; company?: string }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real users never fill this (hidden field).
  if (body.company) return Response.json({ success: true })

  const email = body.email?.trim() ?? ''
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  const apiKey = process.env.KIT_API_KEY
  const formId = process.env.KIT_FORM_ID
  if (!apiKey || !formId) {
    return Response.json({ error: 'Signup is not configured yet.' }, { status: 503 })
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Kit-Api-Key': apiKey,
  }

  // Step 1: create the subscriber (no-op if they already exist).
  // Kit's form endpoint only accepts pre-existing subscribers.
  try {
    await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email }),
    })
  } catch {
    return Response.json(
      { error: 'Something went wrong. Try again.' },
      { status: 502 }
    )
  }

  // Step 2: attach them to the form (triggers the confirmation email).
  const res = await fetch(
    `https://api.kit.com/v4/forms/${encodeURIComponent(formId)}/subscribers`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email }),
    }
  ).catch(() =>
    Response.json(
      { error: 'Something went wrong. Try again.' },
      { status: 502 }
    )
  )

  if (!res.ok) {
    let message = 'Something went wrong. Try again.'
    try {
      const data = await res.json()
      if (typeof data?.message === 'string') message = data.message
      else if (Array.isArray(data?.errors)) message = data.errors.join(' ')
    } catch {
      /* keep default */
    }
    return Response.json({ error: message }, { status: 502 })
  }

  return Response.json({ success: true })
}
