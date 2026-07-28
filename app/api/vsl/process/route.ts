import { del } from '@vercel/blob'
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { blobUrl } = await request.json()

    if (!blobUrl) {
      return NextResponse.json({ error: 'Missing blobUrl' }, { status: 400 })
    }

    // Skip synchronous Meta upload (avoids the 8MB strict non-resumable limit)
    // We will just pass this URL directly to the /me/messages endpoint in the webhook
    // exactly like Maya-ai-main does!
    
    // 1. Insert row into vsl_deliveries with the blobUrl as the attachment_id
    const { data: row, error: dbError } = await supabase
      .from('vsl_deliveries')
      .insert([{ attachment_id: blobUrl, status: 'pending' }])
      .select('id')
      .single()

    if (dbError) {
      console.error('Supabase Insert Error:', dbError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    // 4. Return delivery_id
    return NextResponse.json({ delivery_id: row.id })
  } catch (error) {
    console.error('Process Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
