'use client'

import { useState } from 'react'
import { UploadScreen } from '@/components/vsl/UploadScreen'
import { DMTriggerScreen } from '@/components/vsl/DMTriggerScreen'
import { EmailScreen } from '@/components/vsl/EmailScreen'
import { SiteNav } from '@/components/landing/site-nav'
import { SiteFooter } from '@/components/landing/site-footer'

export default function VslPage() {
  const [step, setStep] = useState<'upload' | 'dm' | 'email'>('upload')
  const [deliveryId, setDeliveryId] = useState<string | null>(null)

  const handleUploadSuccess = (id: string) => {
    setDeliveryId(id)
    setStep('dm')
  }

  const handleDmSuccess = () => {
    setStep('email')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col font-sans selection:bg-[#7c3aed]/30">
      <SiteNav />
      
      <main className="flex-grow flex items-center justify-center p-6 pt-24 pb-24">
        <div className="w-full max-w-4xl mx-auto">
          {step === 'upload' && <UploadScreen onSuccess={handleUploadSuccess} />}
          {step === 'dm' && deliveryId && <DMTriggerScreen deliveryId={deliveryId} onSuccess={handleDmSuccess} />}
          {step === 'email' && deliveryId && <EmailScreen deliveryId={deliveryId} />}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
