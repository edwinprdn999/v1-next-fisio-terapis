'use client'

import React from 'react'

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  event: {
    title: string
    start: Date
    end: Date
  } | null
}

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!isOpen || !event) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Detail Jadwal</h2>
        <p><span className="font-medium">Judul:</span> {event.title}</p>
        <p><span className="font-medium">Mulai:</span> {event.start.toLocaleString()}</p>
        <p><span className="font-medium">Selesai:</span> {event.end.toLocaleString()}</p>
        
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}