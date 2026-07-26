'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface EmailScreenProps {
  deliveryId: string
}

export function EmailScreen({ deliveryId }: EmailScreenProps) {
  const [email, setEmail] = useState('')
  const [step, setStep] = useState<'email' | 'waiting' | 'success'>('email')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/vsl/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ delivery_id: deliveryId, email }),
      })

      if (!res.ok) {
        throw new Error('Failed to register email')
      }

      setStep('waiting')
    } catch (err: any) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (step !== 'waiting') return

    const checkStatus = async () => {
      try {
        const res = await fetch(`/api/vsl/status?delivery_id=${deliveryId}`)
        if (res.ok) {
          const data = await res.json()
          if (data.status === 'delivered') {
            setStep('success')
          }
        }
      } catch (err) {
        console.error('Failed to poll status', err)
      }
    }

    const interval = setInterval(checkStatus, 3000)
    return () => clearInterval(interval)
  }, [step, deliveryId])

  if (step === 'success') {
    return (
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-5 duration-300">
        <div className="w-24 h-24 rounded-full bg-[#10b981]/10 flex items-center justify-center mb-8">
          <svg className="w-12 h-12 text-[#10b981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" className="animate-draw-check" style={{ strokeDasharray: 50, strokeDashoffset: 50, animation: 'drawCheck 0.5s ease-out forwards 0.2s' }} />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">Check your Instagram DMs.</h2>
        <p className="text-xl text-gray-400 mb-10">Your VSL just landed. No red Xs.</p>
        
        <Link 
          href="/" 
          className="w-full max-w-sm bg-white text-black hover:bg-gray-100 font-semibold py-4 px-6 rounded-xl transition-colors text-lg"
        >
          Want this for your own DMs? → Try DMDroid
        </Link>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes drawCheck {
            to { stroke-dashoffset: 0; }
          }
        `}} />
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-5 duration-300">
      {step === 'email' ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white">One last thing — where should we send updates?</h2>
          </div>

          <div className="w-full mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#11111a] border border-[#7c3aed]/30 rounded-lg px-4 py-4 text-white text-center text-lg focus:outline-none focus:border-[#7c3aed] transition-colors"
            />
            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium py-4 px-6 rounded-lg transition-colors text-lg disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send my video →'}
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse-scale" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse-scale" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 bg-[#7c3aed] rounded-full animate-pulse-scale" style={{ animationDelay: '300ms' }} />
          </div>
          <p className="text-xl text-gray-400 font-medium">Waiting for your DM...</p>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulseScale {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.4); }
            }
            .animate-pulse-scale {
              animation: pulseScale 1s infinite ease-in-out;
            }
          `}} />
        </div>
      )}
    </div>
  )
}
