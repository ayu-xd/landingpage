import { del } from '@vercel/blob'
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { blobUrl } = await request.json()

    if (!blobUrl) {
      return NextResponse.json({ error: 'Missing blobUrl' }, { status: 400 })
    }

    // 1. Call Meta Attachment Upload API
    const metaToken = process.env.INSTAGRAM_ACCESS_TOKEN
    
    const metaResponse = await fetch(`https://graph.instagram.com/v25.0/me/message_attachments?access_token=${metaToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: {
          attachment: {
            type: 'video',
            payload: {
              url: blobUrl,
              is_reusable: true
            }
          }
        }
      })
    })

    const metaData = await metaResponse.json()

    if (!metaResponse.ok || !metaData.attachment_id) {
      console.error('Meta API Error:', metaData)
      // Clean up the blob even if Meta fails
      await del(blobUrl)
      return NextResponse.json({ error: 'Failed to upload to Meta' }, { status: 500 })
    }

    const attachmentId = metaData.attachment_id

    // 2. Delete the Vercel Blob immediately
    await del(blobUrl)

    // 3. Insert row into vsl_deliveries
    const { data: row, error: dbError } = await supabase
      .from('vsl_deliveries')
      .insert([{ attachment_id: attachmentId, status: 'pending' }])
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
