import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY || ''
  const baseId = process.env.AIRTABLE_BASE_ID || ''
  const tableName = process.env.AIRTABLE_TABLE_NAME || ''

  return NextResponse.json({
    env_check: {
      hasApiKey: !!apiKey,
      apiKeyPrefix: apiKey.substring(0, 6) + '...',
      apiKeyLength: apiKey.length,
      baseId: baseId,
      tableName: tableName
    },
    troubleshooting: "If the apiKeyPrefix doesn't match the very start of your newest Airtable token, Vercel is still using the old one. You MUST go to Deployments -> Redeploy."
  })
}
