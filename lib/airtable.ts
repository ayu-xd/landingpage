import Airtable from 'airtable'

export function getVslTable() {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_NAME

  if (!apiKey || !baseId || !tableName) {
    throw new Error(`Missing Airtable Env Vars -> Key: ${!!apiKey}, Base: ${!!baseId}, Table: ${!!tableName}`)
  }

  const base = new Airtable({ apiKey }).base(baseId)
  return base(tableName)
}
