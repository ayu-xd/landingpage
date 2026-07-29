import { getVslTable } from '@/lib/airtable'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { blobUrl } = await request.json()

    if (!blobUrl) {
      return NextResponse.json({ error: 'Missing blobUrl' }, { status: 400 })
    }

    const vslTable = getVslTable()
    const records = await vslTable.create([
      { fields: { 'Blob URL': blobUrl, 'Status': 'Pending', 'Uploaded At': new Date().toISOString() } }
    ], { typecast: true })

    return NextResponse.json({ delivery_id: records[0].id })
  } catch (error) {
    console.error('Process Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
