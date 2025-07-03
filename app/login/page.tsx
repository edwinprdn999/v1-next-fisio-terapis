'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validasi input
    if (!username || !password) {
      setMessage('Username dan password wajib diisi.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Login gagal.')
      }

      // Simpan token ke localStorage
      localStorage.setItem('token', data.token)
      setMessage('Login berhasil!')

      // Contoh: bisa redirect ke dashboard
      // router.push('/dashboard')

    } catch (error: any) {
      setMessage(error.message || 'Terjadi kesalahan.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-md shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900">Welcome to Health OS</h1>
        <p className="text-sm text-center text-gray-600 mb-8">Mohon Login Untuk Melanjutkan</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
          >
          </button>
            </div>
            {message && (
        <p className="text-xs mt-1 text-red-600">{message}</p>
      )}
          </div>
          <hr className="mt-6 border-t border-gray-200" />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md"
            disabled={loading}
          >
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </form>
        <hr className="mt-6 border-t border-gray-200" />
        {/* Footer */}
      <footer className="mt-6 text-center text-gray-500 text-sm">
        Develop by PT. Solusi Teknotama Nusantara
      </footer>
      </div>
    </main>
  )
}