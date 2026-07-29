import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY || ''
  const baseId = process.env.AIRTABLE_BASE_ID || ''
  const tableName = process.env.AIRTABLE_TABLE_NAME || ''
  const metaSecret = process.env.META_APP_SECRET || ''
  const igToken = process.env.IG_ACCESS_TOKEN || ''
  const verifyToken = process.env.META_VERIFY_TOKEN || ''

  return NextResponse.json({
    env_check: {
      hasAirtableApiKey: !!apiKey,
      airtablePrefix: apiKey.substring(0, 6) + '...',
      airtableBaseId: baseId,
      airtableTableName: tableName,
      
      hasMetaSecret: !!metaSecret,
      metaSecretLength: metaSecret.length,
      
      hasIgToken: !!igToken,
      igTokenPrefix: igToken.substring(0, 10) + '...',
      
      hasVerifyToken: !!verifyToken,
      verifyTokenLength: verifyToken.length
    },
    troubleshooting: "If any of the Meta/IG tokens are missing (false), the webhook will instantly crash when a DM is received, which causes the page to buffer forever."
  })
}
