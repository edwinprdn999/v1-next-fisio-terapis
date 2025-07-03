'use client'

import { useEffect, useMemo, useState } from 'react'
import { Paket } from '@/types/paket'
import {
  getPaketList,
  tambahPaket,
  updatePaket,
  deletePaket,
} from '@/lib/api/paket'
import PaketForm from '@/components/Paket/PaketForm'
import PaketTable from '@/components/Paket/PaketTable'
import { alertSuccess, confirmDelete } from '@/lib/utils/swal'
import { Search } from 'lucide-react'

export default function DaftarPaketPage() {
  const [paketList, setPaketList] = useState<Paket[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [paketEdit, setPaketEdit] = useState<Paket | null>(null)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    getPaketList().then(setPaketList)
  }, [])

  const filteredList = useMemo(() => {
    return paketList.filter((p) =>
      p.nama.toLowerCase().includes(search.toLowerCase())
    )
  }, [paketList, search])

  const totalPages = Math.ceil(filteredList.length / itemsPerPage)
  const paginatedList = filteredList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSubmit = async (data: Paket) => {
    if (paketEdit) {
      await updatePaket(data)
      setPaketList((prev) => prev.map((p) => (p.id === data.id ? data : p)))
      alertSuccess('Paket berhasil diubah!')
    } else {
      const newData = await tambahPaket({
        nama: data.nama,
        jenis: data.jenis,
      })
      setPaketList((prev) => [...prev, newData])
      alertSuccess('Paket berhasil ditambahkan!')
    }

    setIsModalOpen(false)
    setPaketEdit(null)
  }

  const handleDelete = async (id: string) => {
    const ok = await confirmDelete()
    if (!ok) return

    await deletePaket(id)
    setPaketList((prev) => prev.filter((p) => p.id !== id))
    alertSuccess('Paket berhasil dihapus!')
  }

  function getVisiblePages(current: number, total: number): (number | string)[] {
    const delta = 2
    const range: (number | string)[] = []
    const left = Math.max(2, current - delta)
    const right = Math.min(total - 1, current + delta)

    range.push(1)
    if (left > 2) range.push('...')
    for (let i = left; i <= right; i++) range.push(i)
    if (right < total - 1) range.push('...')
    if (total > 1) range.push(total)

    return range
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Daftar Paket</h1>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            setIsModalOpen(true)
            setPaketEdit(null)
          }}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold"
        >
          ➕ Tambah Paket
        </button>

        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-black" />
          <input
            type="text"
            placeholder="Cari nama paket..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="pl-8 pr-4 py-2 border rounded-md w-full bg-white text-sm"
          />
        </div>
      </div>

      <PaketTable
        paketList={paginatedList}
        onEditClick={(paket) => {
          setPaketEdit(paket)
          setIsModalOpen(true)
        }}
        onDeleteClick={handleDelete}
      />

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>
          Menampilkan {paginatedList.length} dari {filteredList.length} paket
        </p>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 gap-1 text-sm text-gray-600">
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-md p-6 rounded-md shadow-md relative">
            <h2 className="text-2xl font-bold text-center mb-2 text-black">
              {paketEdit ? 'Edit Paket' : 'Tambah Paket'}
            </h2>

            <PaketForm
              initialData={paketEdit || {}}
              onSubmit={handleSubmit}
              onCancel={() => {
                setIsModalOpen(false)
                setPaketEdit(null)
              }}
            />

            <button
              onClick={() => {
                setIsModalOpen(false)
                setPaketEdit(null)
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
