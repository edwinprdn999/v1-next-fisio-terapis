'use client'

import { Pasien } from '@/types/pasien'
import { useState, useEffect } from 'react'
import { getReligionList } from '@/lib/api/religion'
import { Religion } from '@/types/religion'

interface Props {
  onSubmit: (data: Pasien) => void
  initialData?: Partial<Pasien>  // kalau form ini untuk edit
  onCancel?: () => void
}

export default function PasienForm({ onSubmit, initialData = {}, onCancel }: Props) {
  const [form, setForm] = useState<Partial<Pasien>>(initialData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, gender: e.target.value as 'Laki Laki' | 'Perempuan' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newPasien: Pasien = {
      id: form.nik  || crypto.randomUUID(),
      nik: form.nik || crypto.randomUUID(),
      nama: form.nama || '',
      namaPanggilan: form.namaPanggilan || '',
      tanggalLahir: form.tanggalLahir || '',
      nomor_wa: form.nomor_wa || '',
      gender: form.gender || 'Perempuan',
      alamat: form.alamat || '',
      agama: form.agama || '',
      pekerjaan: form.pekerjaan || '',
      status: form.status || 'Active',
    }
    onSubmit(newPasien)
  }

  const [religions, setReligions] = useState<Religion[]>([])

  useEffect(() => {
    getReligionList().then(setReligions)
  }, [])

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-black mb-1 font-medium">Nama Lengkap</label>
        <input
          type="text"
          name="nama"
          value={form.nama || ''}
          onChange={handleChange}
          placeholder="Nama Lengkap"
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Nama Panggilan</label>
        <input
          type="text"
          name="namaPanggilan"
          value={form.namaPanggilan || ''}
          onChange={handleChange}
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Tanggal Lahir</label>
        <input
          type="date"
          name="tanggalLahir"
          value={form.tanggalLahir || ''}
          onChange={handleChange}
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Nomor Whatsapp</label>
        <input
          type="text"
          name="nomor_wa"
          value={form.nomor_wa || ''}
          onChange={handleChange}
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Jenis Kelamin</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="Laki Laki"
              checked={form.gender === 'Laki Laki'}
              onChange={handleRadioChange}
              className="accent-yellow-400"
            />
            Laki Laki
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="Perempuan"
              checked={form.gender === 'Perempuan'}
              onChange={handleRadioChange}
              className="accent-yellow-400"
            />
            Perempuan
          </label>
        </div>
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Alamat</label>
        <input
          type="text"
          name="alamat"
          value={form.alamat || ''}
          onChange={handleChange}
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Agama</label>
        <select
          name="agama"
          value={form.agama || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md text-black bg-gray-100"
        >
          <option value="">Pilih Agama</option>
          {religions.map((r) => (
            <option key={r.id} value={r.name}>{r.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-black mb-1 font-medium">Pekerjaan</label>
        <input
          type="text"
          name="pekerjaan"
          value={form.pekerjaan || ''}
          onChange={handleChange}
          className="w-full text-black px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500 py-2 rounded-md font-semibold"
        >
          Simpan
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-md hover:bg-gray-100"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  )
}
