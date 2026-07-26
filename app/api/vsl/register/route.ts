import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { delivery_id, ig_username } = await request.json()

    if (!delivery_id || !ig_username) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    // Normalise: lowercase, strip @
    const normalizedUsername = ig_username.replace(/^@/, '').toLowerCase()

    const { error } = await supabase
      .from('vsl_deliveries')
      .update({ ig_username: normalizedUsername })
      .eq('id', delivery_id)

    if (error) {
      console.error('Supabase Update Error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
