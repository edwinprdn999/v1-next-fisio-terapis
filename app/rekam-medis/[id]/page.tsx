'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getPasienById, getRekamMedisByPasien } from '@/lib/api/rekamMedis'
import { Pasien } from '@/types/pasien'
import { RekamMedis } from '@/types/rekamMedis'

export default function RekamMedisPage() {
  const { id } = useParams()
  const [pasien, setPasien] = useState<Pasien | null>(null)
  const [rekamList, setRekamList] = useState<RekamMedis[]>([])

  const router = useRouter()

  useEffect(() => {
    if (!id) return
    getPasienById(id as string).then(setPasien)
    getRekamMedisByPasien(id as string).then(setRekamList)
  }, [id])

  function hitungUmur(tanggalLahir: string) {
    const birth = new Date(tanggalLahir)
    const now = new Date()
    const age = now.getFullYear() - birth.getFullYear()
    return age
  }

  // Print PDF
  const ReactToPrint = require('react-to-print').default as React.ComponentType<any>
  const printRef = useRef<HTMLDivElement>(null)
  
  // Print PDF

  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50" >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Rekam Medis</h1>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => router.back()}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold"
        >
          ⬅️ Kembali
        </button>
        {/* <ReactToPrint
          trigger={() => (
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold">
              🖨️ Cetak Rekam Medis
            </button>
          )}
          content={() => printRef.current}
          ssr={false}
          documentTitle={`RekamMedis-${pasien?.nama ?? 'Pasien'}`}
        /> */}
      </div>
      {/* Header Data Pasien */}
      <div className="bg-white p-6 rounded shadow space-y-6" ref={printRef}>
        {pasien && (
          <div className="mb-6 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Data Pasien</h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <p><strong>NIK:</strong> {pasien.nik}</p>
              <p><strong>Nama:</strong> {pasien.nama}</p>
              <p><strong>Umur / TTL:</strong> {hitungUmur(pasien.tanggalLahir)} tahun / {pasien.tanggalLahir}</p>
              <p><strong>Alamat:</strong> {pasien.alamat}</p>
              <p><strong>Pekerjaan:</strong> {pasien.pekerjaan}</p>
              <p><strong>HP:</strong> {pasien.nomor_wa}</p>
              <p><strong>Riwayat Alergi:</strong> {/* Kosong sementara */} - </p>
            </div>
          </div>
        )}

        {/* Tabel Rekam Medis */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Riwayat Rekam Medis</h2>
          <table className="min-w-full text-sm text-left text-gray-800 border">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="p-2 border">TGL</th>
                <th className="p-2 border">Anamnesa</th>
                <th className="p-2 border">Pemeriksaan</th>
                <th className="p-2 border">Jenis Pemeriksaan</th>
                <th className="p-2 border">Hasil Pemeriksaan</th>
                <th className="p-2 border">Diagnosa / Terapi / Saran</th>
              </tr>
            </thead>
            <tbody>
              {rekamList.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center p-4 text-gray-500">
                    Belum ada data rekam medis.
                  </td>
                </tr>
              ) : (
                rekamList.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border">{row.tanggal}</td>
                    <td className="p-2 border">{row.anamnesa}</td>
                    <td className="p-2 border">{row.pemeriksaan}</td>
                    <td className="p-2 border">{row.jenis_pemeriksaan}</td>
                    <td className="p-2 border">{row.hasil_pemeriksaan}</td>
                    <td className="p-2 border">{row.diagnosa}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
