'use client'

import { Praktisioner } from '@/types/praktisioner'
import PraktisionerDropdown from './PraktisionerDropdown'

interface Props {
  praktisionerList: Praktisioner[]
  openDropdownId?: string | null
  toggleDropdown?: (id: string) => void
  onEditClick?: (praktisioner: Praktisioner) => void
}

export default function PraktisionerTable({ praktisionerList, openDropdownId, toggleDropdown, onEditClick }: Props) {
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
          {praktisionerList.map((praktisioner, index) => (
            <tr key={praktisioner.id} className="border-t hover:bg-gray-50">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{praktisioner.nama}</td>
              <td className="p-4">{praktisioner.gender}</td>
              <td className="p-4">{praktisioner.noHp}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    praktisioner.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {praktisioner.status}
                </span>
              </td>
              <td className="p-4 relative">
                <PraktisionerDropdown
                  isOpen={openDropdownId === praktisioner.id}
                  onToggle={() => toggleDropdown?.(praktisioner.id)}
                  onEdit={() => onEditClick?.(praktisioner)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
