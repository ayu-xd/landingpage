import Airtable from 'airtable'

const apiKey = process.env.AIRTABLE_API_KEY
const baseId = process.env.AIRTABLE_BASE_ID
const tableName = process.env.AIRTABLE_TABLE_NAME

if (!apiKey || !baseId || !tableName) {
  console.error("Missing Airtable environment variables.")
}

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: apiKey
})

export const base = Airtable.base(baseId!)
export const vslTable = base(tableName!)
