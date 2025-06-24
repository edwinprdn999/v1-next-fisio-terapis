// app/page.tsx
'use client'

import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-semibold">🩺 Fisio OS Logo</div>
        </div>
        <nav className="flex justify-start space-x-6 text-sm font-medium">
          <a href="#" className="text-gray-800 hover:text-yellow-600">Book Appointment</a>
          <a href="#" className="text-gray-800 hover:text-yellow-600">Rekam Medis</a>
        </nav>
        <div className="flex items-center justify-end space-x-4">
          <button className="bg-yellow-400 text-white font-medium px-4 py-1.5 rounded-full hover:bg-yellow-500">
            Masuk
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-40 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Lorem Ipsum</h1>
          <p className="text-gray-700 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md">
            Book Appointment →
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative bg-gray-200 rounded-lg shadow-md w-full max-w-md aspect-video flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14.752 11.168l-4.596-2.65A1 1 0 009 9.367v5.267a1 1 0 001.156.98l4.596-1.317a1 1 0 00.684-.949v-1.18a1 1 0 00-.684-.949z" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  )
}