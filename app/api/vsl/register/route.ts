import { vslTable } from '@/lib/airtable'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { delivery_id, ig_username } = await request.json()

    if (!delivery_id || !ig_username) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    // Normalise: lowercase, strip @
    const normalizedUsername = ig_username.replace(/^@/, '').toLowerCase()

    await vslTable.update(delivery_id, {
      'IG Username': normalizedUsername
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
