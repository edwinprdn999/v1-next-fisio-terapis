'use client'

import { Pasien } from '@/types/pasien'
import PasienDropdown from './PasienDropdown'

interface Props {
  pasienList: Pasien[]
  openDropdownId?: string | null
  toggleDropdown?: (id: string) => void
  onEditClick?: (pasien: Pasien) => void
}

export default function PasienTable({ pasienList, openDropdownId, toggleDropdown,  onEditClick }: Props) {

  return (
    <div className="overflow-x-auto bg-white rounded-md shadow">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50 font-semibold">
          <tr>
            <th className="p-4">#</th>
            {/* <th className="p-4">NIK</th> */}
            <th className='p-4'>Nama Lengkap</th>
            <th className='p-4'>Nama Panggilan</th>
            <th className="p-4">Jenis Kelamin</th>
            <th className="p-4">Tanggal Lahir</th>
            <th className="p-4">Nomor WA</th>
            <th className="p-4">Pekerjaan</th>
            <th className="p-4">Provinsi</th>
            <th className="p-4">Kota</th>
            <th className="p-4">Agama</th>
            <th className="p-4">Status</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pasienList.map((pasien, index) => (
            <tr key={pasien.nik} className="border-t hover:bg-gray-50">
              <td className="p-4">{index + 1}</td>
              {/* <td className="p-4">{pasien.nik}</td> */}
              <td className="p-4">{pasien.nama}</td>
              <td className="p-4">{pasien.namaPanggilan}</td>
              <td className="p-4">{pasien.gender}</td>
              <td className="p-4">{pasien.tanggalLahir}</td>
              <td className="p-4">{pasien.nomor_wa}</td>
              <td className="p-4">{pasien.pekerjaan}</td>
              <td className="p-4">{pasien.provinsi}</td>
              <td className="p-4">{pasien.kota}</td>
              <td className="p-4">{pasien.agama}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    pasien.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {pasien.status}
                </span>
              </td>
              <td className="p-4 relative">
                <PasienDropdown
                  isOpen={openDropdownId === pasien.nik}
                  onToggle={() => toggleDropdown?.(pasien.nik)}
                  onEdit={() => onEditClick?.(pasien)}
                  pasienNik={pasien.nik}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
