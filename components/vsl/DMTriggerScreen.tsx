'use client'

import { useState } from 'react'

interface DMTriggerScreenProps {
  deliveryId: string
  onSuccess: () => void
}

export function DMTriggerScreen({ deliveryId, onSuccess }: DMTriggerScreenProps) {
  const [igUsername, setIgUsername] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleHandle = process.env.NEXT_PUBLIC_DMDROID_IG_HANDLE || 'dmdroid_hq'

  const handleSubmit = async () => {
    if (!igUsername.trim()) {
      setError('Please enter your Instagram username')
      return
    }
    
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/vsl/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ delivery_id: deliveryId, ig_username: igUsername }),
      })

      if (!res.ok) {
        throw new Error('Failed to register username')
      }

      onSuccess()
    } catch (err: any) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Checkmark Animation */}
      <div className="w-16 h-16 rounded-full bg-[#7c3aed]/20 flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-[#7c3aed]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" className="animate-draw-check" style={{ strokeDasharray: 50, strokeDashoffset: 50, animation: 'drawCheck 0.5s ease-out forwards 0.2s' }} />
        </svg>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-white">Now send us a DM from your Instagram.</h2>
        <p className="text-gray-400">This is how we know where to send your video.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
        {/* Left Card */}
        <div className="bg-[#11111a] p-6 rounded-xl border border-[#7c3aed]/20">
          <p className="text-sm text-gray-400 mb-3">Step 1: Our Instagram handle</p>
          <div className="flex items-center justify-between">
            <code className="px-3 py-1.5 bg-[#1a1a2e] text-white rounded font-mono text-sm">@{handleHandle}</code>
            <CopyButton text={handleHandle} />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#11111a] p-6 rounded-xl border border-[#7c3aed]/20">
          <p className="text-sm text-gray-400 mb-3">Step 2: Message to send</p>
          <div className="flex items-center justify-between">
            <code className="px-3 py-1.5 bg-[#1a1a2e] text-white rounded font-mono text-sm">Hi</code>
            <CopyButton text="Hi" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm mb-4">
        <label className="block text-sm font-medium text-gray-400 mb-2">Your Instagram username</label>
        <input
          type="text"
          placeholder="@yourusername"
          value={igUsername}
          onChange={(e) => setIgUsername(e.target.value)}
          className="w-full bg-[#11111a] border border-[#7c3aed]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full max-w-sm bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
      >
        {isSubmitting ? 'Saving...' : "I've sent the DM →"}
      </button>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Open Instagram, search our handle, and send Hi. Takes 10 seconds.
      </p>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
        copied 
          ? 'bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 scale-105' 
          : 'bg-[#7c3aed]/15 text-[#a78bfa] border border-[#7c3aed]/30 hover:bg-[#7c3aed]/25'
      }`}
    >
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  )
}
