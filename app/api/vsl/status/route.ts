import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const delivery_id = searchParams.get('delivery_id')

  if (!delivery_id) {
    return NextResponse.json({ error: 'Missing delivery_id' }, { status: 400 })
  }

  try {
    const { data, error } = await supabase
      .from('vsl_deliveries')
      .select('status')
      .eq('id', delivery_id)
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Delivery not found' }, { status: 404 })
    }

    return NextResponse.json({ status: data.status })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
