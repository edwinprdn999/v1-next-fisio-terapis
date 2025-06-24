'use client'

import { useState } from 'react'
import { Paket } from '@/types/paket'

interface Props {
  initialData?: Partial<Paket>
  onSubmit: (data: Paket) => void
  onCancel: () => void
}

export default function PaketForm({ initialData = {}, onSubmit, onCancel }: Props) {
  const [nama, setNama] = useState(initialData.nama || '')
  const [jenis, setJenis] = useState<Paket['jenis']>(initialData.jenis || 'TA')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const finalData: Paket = {
      id: initialData.id || Date.now().toString(),
      nama,
      jenis,
    }

    onSubmit(finalData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Nama Paket</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Jenis Paket</label>
        <select
          value={jenis}
          onChange={(e) => setJenis(e.target.value as Paket['jenis'])}
          className="w-full px-4 py-2 border rounded-md bg-gray-100"
        >
          <option value="TA">TA</option>
          <option value="TA-Anak">TA-Anak</option>
          <option value="P5">P5</option>
          <option value="P10">P10</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-400 text-white rounded-md font-semibold"
        >
          Simpan
        </button>
      </div>
    </form>
  )
}
