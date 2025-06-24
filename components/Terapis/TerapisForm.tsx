'use client'

import { useState, useEffect } from 'react'
import { Terapis } from '@/types/terapis'

interface Props {
  initialData: Partial<Terapis>
  onSubmit: (data: Terapis) => void
  onCancel: () => void
}

export default function TerapisForm({ initialData, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<Terapis>({
    id: '',
    nama: '',
    gender: 'Laki Laki',
    noHp: '',
    status: 'Active',
    ...initialData,
  })

  useEffect(() => {
    setForm((prev) => ({ ...prev, ...initialData }))
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-black mb-1 font-medium">Nama Lengkap</label>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          required
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Jenis Kelamin</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md text-black bg-gray-100"
        >
          <option value="Laki Laki">Laki Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Nomor HP</label>
        <input
          type="text"
          name="noHp"
          value={form.noHp}
          onChange={handleChange}
          required
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md text-black bg-gray-100"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500"
        >
          {form.id ? 'Simpan Perubahan' : 'Tambah Terapis'}
        </button>
      </div>
    </form>
  )
}
