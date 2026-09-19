import 'outstatic/outstatic.css'
import { OstClient } from 'outstatic/client'
import { Outstatic } from 'outstatic'

export default async function OutstaticPage({
  params,
}: {
  params: Promise<{ ost?: string[] }>
}) {
  const ostData = await Outstatic()
  const resolvedParams = await params
  return (
    <OstClient ostData={ostData} params={{ ost: resolvedParams.ost ?? [] }} />
  )
}
