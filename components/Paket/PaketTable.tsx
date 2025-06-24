'use client'

import { Paket } from '@/types/paket'

interface Props {
  paketList: Paket[]
  onEditClick?: (paket: Paket) => void
  onDeleteClick?: (id: string) => void
}

export default function PaketTable({ paketList, onEditClick, onDeleteClick }: Props) {
  if (paketList.length === 0) {
    return (
      <div className="bg-white rounded-md shadow p-6 text-center text-gray-500">
        Tidak ada data paket.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto bg-white rounded-md shadow">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50 font-semibold">
          <tr>
            <th className="p-4">#</th>
            <th className="p-4">Nama Paket</th>
            <th className="p-4">Jenis Paket</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {paketList.map((paket, index) => (
            <tr key={paket.id} className="border-t hover:bg-gray-50">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{paket.nama}</td>
              <td className="p-4">{paket.jenis}</td>
              <td className="p-4 space-x-2">
                <button
                  onClick={() => onEditClick?.(paket)}
                  className="px-3 py-1 text-sm text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteClick?.(paket.id)}
                  className="px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
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
