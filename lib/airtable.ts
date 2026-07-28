import Airtable from 'airtable'

const apiKey = process.env.AIRTABLE_API_KEY || 'dummy_api_key'
const baseId = process.env.AIRTABLE_BASE_ID || 'dummy_base_id'
const tableName = process.env.AIRTABLE_TABLE_NAME || 'dummy_table_name'

if (!process.env.AIRTABLE_API_KEY) {
  console.warn("⚠️ Missing Airtable environment variables (expected during Vercel build step).")
}

export const base = new Airtable({ apiKey }).base(baseId)
export const vslTable = base(tableName)
