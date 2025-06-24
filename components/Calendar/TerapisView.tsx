'use client'

import React from 'react'

type Jadwal = {
  tanggal: string
  waktu: string
  pasien: string | null
}

type Terapis = {
  nama: string
  jadwal: Jadwal[]
}

const terapistData: Terapis[] = [
  {
    nama: 'Dr Abc',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '08:00 - 09:00', pasien: null },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '08:00 - 09:00', pasien: 'Amanda' },
      { tanggal: 'Sabtu, 14 Januari 2025', waktu: '08:00 - 09:00', pasien: 'Amanda' },
    ],
  },
  {
    nama: 'Dr Def',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '09:00 - 10:00', pasien: 'Amanda' },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '10:00 - 11:00', pasien: null },
    ],
  },
  {
    nama: 'Dr Def',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '09:00 - 10:00', pasien: 'Amanda' },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '10:00 - 11:00', pasien: null },
    ],
  },
  {
    nama: 'Dr Def',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '09:00 - 10:00', pasien: 'Amanda' },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '10:00 - 11:00', pasien: null },
    ],
  },
  {
    nama: 'Dr Def',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '09:00 - 10:00', pasien: 'Amanda' },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '10:00 - 11:00', pasien: null },
    ],
  },
  {
    nama: 'Dr Def',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '09:00 - 10:00', pasien: 'Amanda' },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '10:00 - 11:00', pasien: null },
    ],
  },
  {
    nama: 'Dr Def',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '09:00 - 10:00', pasien: 'Amanda' },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '10:00 - 11:00', pasien: null },
    ],
  },
  {
    nama: 'Dr Def',
    jadwal: [
      { tanggal: 'Kamis, 12 Januari 2025', waktu: '09:00 - 10:00', pasien: 'Amanda' },
      { tanggal: 'Jumat, 13 Januari 2025', waktu: '10:00 - 11:00', pasien: null },
    ],
  },
  
]

export default function TerapisTab() {
  return (
    <div className="space-y-2">
      {terapistData.map((terapis, index) => (
        <div key={index} className="border p-4 rounded-md bg-white shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{terapis.nama}</h2>
            <button className="px-3 py-1 text-sm border rounded bg-blue-100 text-blue-800 hover:bg-blue-200">
              Tambah Jadwal
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {terapis.jadwal.map((jadwal, i) => (
              <div
                key={i}
                className={`border rounded p-3 w-60 ${
                  jadwal.pasien
                    ? 'border-yellow-500 bg-yellow-50 text-yellow-900'
                    : 'border-gray-300 bg-gray-100 text-gray-600'
                }`}
              >
                <p className="text-sm font-semibold">{jadwal.tanggal}</p>
                <p className="text-sm">{jadwal.waktu}</p>
                <p className="text-sm">
                  Pasien:{' '}
                  {jadwal.pasien ? (
                    <span className="font-medium">{jadwal.pasien}</span>
                  ) : (
                    'None'
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}