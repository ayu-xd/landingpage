import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { waitUntil } from '@vercel/functions'
import { del } from '@vercel/blob'
import crypto from 'crypto'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token === process.env.INSTAGRAM_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 })
  }
  return new Response('Forbidden', { status: 403 })
}

export async function POST(request: Request) {
  const signature = request.headers.get('x-hub-signature-256')
  const rawBody = await request.text()

  if (!signature) {
    return new Response('Forbidden', { status: 403 })
  }

  // 1. Verify Signature
  const expectedSignature = `sha256=${crypto
    .createHmac('sha256', process.env.INSTAGRAM_APP_SECRET!)
    .update(rawBody)
    .digest('hex')}`

  if (signature !== expectedSignature) {
    return new Response('Forbidden', { status: 403 })
  }

  // Use waitUntil so we return 200 immediately
  waitUntil(processWebhook(rawBody))

  return new Response('OK', { status: 200 })
}

async function processWebhook(rawBody: string) {
  try {
    const body = JSON.parse(rawBody)
    
    if (body.object === 'instagram' || body.object === 'page') {
      const entry = body.entry?.[0]
      const messaging = entry?.messaging?.[0]
      
      if (!messaging || !messaging.message || !messaging.message.text) return

      const text = messaging.message.text.trim().toLowerCase()
      if (!text.includes('hi')) return

      const senderId = messaging.sender.id

      // 4. Look up sender's username
      const metaToken = process.env.INSTAGRAM_ACCESS_TOKEN
      const userRes = await fetch(`https://graph.instagram.com/v25.0/${senderId}?fields=username&access_token=${metaToken}`)
      const userData = await userRes.json()
      
      if (!userData.username) return
      
      const username = userData.username.toLowerCase()

      // 5. Find matching row
      const { data: delivery, error: fetchError } = await supabase
        .from('vsl_deliveries')
        .select('*')
        .eq('ig_username', username)
        .eq('status', 'pending')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

      if (fetchError || !delivery) return

      // 6. Send video
      const sendRes = await fetch(`https://graph.instagram.com/v25.0/me/messages?access_token=${metaToken}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: { id: senderId },
          message: {
            attachment: {
              type: 'video',
              payload: { url: delivery.attachment_id, is_reusable: true }
            }
          }
        })
      })

      if (!sendRes.ok) {
        const errorData = await sendRes.json()
        console.error('Failed to send video:', errorData)
        
        await supabase
          .from('vsl_deliveries')
          .update({ status: 'failed', ig_user_id: senderId })
          .eq('id', delivery.id)
        
        return
      }

      // Update row
      await supabase
        .from('vsl_deliveries')
        .update({ status: 'delivered', ig_user_id: senderId })
        .eq('id', delivery.id)

      // Clean up the Vercel Blob since Meta has now fetched and sent it
      try {
        await del(delivery.attachment_id)
      } catch (delErr) {
        console.error('Failed to delete blob:', delErr)
      }
    }
  } catch (err) {
    console.error('Webhook processing error:', err)
  }
}
