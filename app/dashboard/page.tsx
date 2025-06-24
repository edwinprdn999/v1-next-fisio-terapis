// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Filter tanggal */}
      <div className="flex items-center gap-2 mb-6">
          <input type="date" className="border text-black border-gray-300 rounded-md px-3 py-1" />
          <span className="text-gray-500">
              →
          </span>
          <input type="date" className="border text-black border-gray-300 rounded-md px-3 py-1" />
        </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="text-sm text-gray-600">Total Pengunjung Hari Ini</div>
          <div className="text-2xl font-bold text-gray-900">11.812</div>
          <div className="text-green-600 text-sm mt-1">+2,5%</div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="text-sm text-gray-600">Total Pengunjung Minggu Ini</div>
          <div className="text-2xl font-bold text-gray-900">8.236.222</div>
          <div className="text-red-500 text-sm mt-1">-1,2%</div>
        </div>
      </div>

        {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md shadow-sm h-40">
          <h2 className="text-md font-semibold text-gray-800 mb-2">Total Pemasukan</h2>
          {/* Isi grafik atau angka bisa ditambahkan di sini */}
        </div>

        <div className="bg-white p-4 rounded-md shadow-sm h-40">
            <h2 className="text-md font-semibold text-gray-800 mb-2">Tagihan Belum Lunas</h2>
            {/* Isi tagihan atau grafik */}
        </div>
      </div>
    </main>
  )
}