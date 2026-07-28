import { getVslTable } from '@/lib/airtable'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { delivery_id, email } = await request.json()

    if (!delivery_id || !email) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    const vslTable = getVslTable()
    await vslTable.update(delivery_id, { 'Email': email })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
