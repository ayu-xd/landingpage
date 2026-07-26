'use client'

import { useState, useRef, DragEvent, ChangeEvent } from 'react'
import { upload } from '@vercel/blob/client'

interface UploadScreenProps {
  onSuccess: (deliveryId: string) => void
}

export function UploadScreen({ onSuccess }: UploadScreenProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file: File) => {
    if (isUploading) return
    setError(null)

    if (file.size > 26214400) {
      setError('File is too large. Maximum size is 25MB.')
      return
    }

    const allowedTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm']
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload a video (MP4, MOV, AVI, WEBM).')
      return
    }

    setIsUploading(true)
    setProgress(0)

    try {
      const blob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/vsl/upload-token',
        onUploadProgress: ({ percentage }) => setProgress(percentage),
      })

      setProgress(100)

      const res = await fetch('/api/vsl/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blobUrl: blob.url }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to process video')
      }

      onSuccess(data.delivery_id)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'An error occurred during upload.')
      setIsUploading(false)
      setProgress(0)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Send your VSL straight to any DM — zero red Xs.</h1>
        <p className="text-gray-400">Upload your video. We handle the rest.</p>
      </div>

      <div
        onClick={() => !isUploading && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-pointer flex flex-col items-center justify-center transition-all duration-300 ${
          isDragging 
            ? 'bg-[#1a1a2e] shadow-[0_0_40px_rgba(124,58,237,0.3)] backdrop-brightness-110' 
            : 'bg-[#11111a] shadow-[0_0_40px_rgba(124,58,237,0.15)] hover:bg-[#151520]'
        }`}
      >
        {isUploading && (
          <div 
            className="absolute top-0 left-0 h-[2px] bg-[#7c3aed] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        )}

        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-xl" style={{ animation: 'rotateDash 20s linear infinite' }}>
          <rect
            x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)"
            rx="10" ry="10"
            fill="none"
            stroke={isDragging ? '#a78bfa' : '#7c3aed'}
            strokeWidth="2"
            strokeDasharray="15 15"
            className="transition-colors duration-300"
          />
        </svg>

        <div className={`flex flex-col items-center transition-transform duration-300 ${isDragging ? '-translate-y-2' : ''}`}>
          <svg className="w-16 h-16 text-[#7c3aed] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11v6m0-6l-3 3m3-3l3 3" />
          </svg>
          <p className="text-white font-medium">
            {isUploading ? 'Uploading...' : 'Drag & drop or click to browse'}
          </p>
          <p className="text-gray-500 text-sm mt-1">MP4, MOV, AVI, WEBM (Max 25MB)</p>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="video/mp4,video/quicktime,video/x-msvideo,video/webm"
        />
      </div>

      {error && (
        <p className="mt-4 text-red-500 text-sm">{error}</p>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotateDash {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 300; }
        }
      `}} />
    </div>
  )
}
