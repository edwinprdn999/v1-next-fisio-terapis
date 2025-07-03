'use client'

import { useEffect, useMemo, useState } from 'react'
import { Praktisioner } from '@/types/praktisioner'
import {
  getPraktisionerList,
  tambahPraktisioner,
  updatePraktisioner,
  deletePraktisioner,
} from '@/lib/api/praktisioner'
import PraktisionerTable from '@/components/Praktisioner/PraktisionerTable'
import PraktisionerForm from '@/components/Praktisioner/PraktisionerForm'
import { alertSuccess, confirmDelete } from '@/lib/utils/swal'
import { Search } from 'lucide-react'

export default function DaftarPraktisionerPage() {
  const [praktiosionerList, setPraktisionerList] = useState<Praktisioner[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [praktisionerEdit, setPraktisionerEdit] = useState<Praktisioner | null>(null)

  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    getPraktisionerList().then(setPraktisionerList)
  }, [])

  const filteredList = useMemo(() => {
    return praktiosionerList.filter((t) =>
      t.nama.toLowerCase().includes(search.toLowerCase())
    )
  }, [praktiosionerList, search])

  const totalPages = Math.ceil(filteredList.length / itemsPerPage)
  const paginatedList = filteredList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSubmit = async (data: Praktisioner) => {
    if (praktisionerEdit) {
      await updatePraktisioner(data)
      setPraktisionerList((prev) => prev.map((t) => (t.id === data.id ? data : t)))
      alertSuccess('Praktisioner berhasil diubah!')
    } else {
      const newPraktisioner = await tambahPraktisioner({
        nama: data.nama,
        gender: data.gender,
        noHp: data.noHp,
        status: data.status,
      })
      setPraktisionerList((prev) => [...prev, newPraktisioner])
      alertSuccess('Praktisioner berhasil ditambahkan!')
    }

    setIsModalOpen(false)
    setPraktisionerEdit(null)
  }

  const handleDelete = async (id: string) => {
    const ok = await confirmDelete()
    if (!ok) return

    await deletePraktisioner(id)
    setPraktisionerList((prev) => prev.filter((t) => t.id !== id))
    alertSuccess('Praktisioner berhasil dihapus!')
  }

    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null)

  function getVisiblePages(current: number, total: number): (number | string)[] {
    const delta = 2
    const range: (number | string)[] = []
    const left = Math.max(2, current - delta)
    const right = Math.min(total - 1, current + delta)

    range.push(1)

    if (left > 2) range.push('...')

    for (let i = left; i <= right; i++) {
      range.push(i)
    }

    if (right < total - 1) range.push('...')

    if (total > 1) range.push(total)

    return range
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Daftar Praktisioner</h1>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            setIsModalOpen(true)
            setPraktisionerEdit(null)
          }}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold"
        >
          ➕ Tambah Praktisioner
        </button>

        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-black" />
          <input
            type="text"
            placeholder="Cari nama praktisioner..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="pl-8 pr-4 py-2 border rounded-md w-full bg-white text-sm"
          />
        </div>
      </div>
      
      {}
      {filteredList.length === 0 ? (
        <div className="bg-white rounded-md shadow p-6 text-center text-gray-500">
          Tidak ada data praktisioner yang ditemukan.
        </div>
      ) : (
        <>
          <PraktisionerTable
                      praktisionerList={paginatedList}
                      openDropdownId={openDropdownId}
                      toggleDropdown={(id) =>
                        setOpenDropdownId((prev) => (prev === id ? null : id))
                      }
                      onEditClick={(t) => {
                        setPraktisionerEdit(t)
                        setIsModalOpen(true)
                      }}
                    />

          <div className="flex justify-between items-center mb-2 mt-2">
            <p className="text-sm text-gray-600">
              Menampilkan {paginatedList.length} dari {filteredList.length} praktisioner
            </p>
          </div>
        </>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 gap-1 text-sm text-gray-600">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-200'
            }`}
          >
            ‹ Prev
          </button>

          {/* Dynamic Pages */}
          {getVisiblePages(currentPage, totalPages).map((page, idx) =>
            page === '...' ? (
              <span key={idx} className="px-2 py-1 text-gray-400">...</span>
            ) : (
              <button
                key={idx}
                onClick={() => setCurrentPage(page as number)}
                className={`px-3 py-1 rounded ${
                  page === currentPage
                    ? 'bg-yellow-400 text-white font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            )
          )}

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-200'
            }`}
          >
            Next ›
          </button>
        </div>
      )}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-md p-6 rounded-md shadow-md relative">
            <h2 className="text-2xl font-bold text-center mb-2 text-black">
              {praktisionerEdit ? 'Edit Praktisioner' : 'Tambah Praktisioner'}
            </h2>

            <PraktisionerForm
              initialData={praktisionerEdit || {}}
              onCancel={() => {
                setIsModalOpen(false)
                setPraktisionerEdit(null)
              }}
              onSubmit={handleSubmit}
            />

            <button
              onClick={() => {
                setIsModalOpen(false)
                setPraktisionerEdit(null)
              }}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
