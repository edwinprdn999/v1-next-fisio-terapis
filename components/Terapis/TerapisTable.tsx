'use client'

import { Terapis } from '@/types/terapis'

interface Props {
  terapisList: Terapis[]
  onEditClick?: (terapis: Terapis) => void
  onDeleteClick?: (id: string) => void
}

export default function TerapisTable({ terapisList, onEditClick, onDeleteClick }: Props) {
  return (
    <div className="overflow-x-auto bg-white rounded-md shadow">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50 font-semibold">
          <tr>
            <th className="p-4">#</th>
            <th className="p-4">Nama</th>
            <th className="p-4">Jenis Kelamin</th>
            <th className="p-4">Nomor HP</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {terapisList.map((t, index) => (
            <tr key={t.id} className="border-t hover:bg-gray-50">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{t.nama}</td>
              <td className="p-4">{t.gender}</td>
              <td className="p-4">{t.noHp}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    t.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {t.status}
                </span>
              </td>
              <td className="p-4 space-x-2">
                <button
                  onClick={() => onEditClick?.(t)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteClick?.(t.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
