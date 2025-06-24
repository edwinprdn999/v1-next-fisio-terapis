'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC } from 'react'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const navItems = [
  { label: '🏠 Dashboard', href: '/dashboard' },
  { label: '📅 Jadwal', href: '/jadwal' },
  { label: '📋 Daftar Pasien', href: '/daftar-pasien' },
  { label: '🧑‍⚕️ Terapis', href: '/terapis' },
  { label: '🎁 Paket & TA', href: '/paket' },
]

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          bg-white shadow-md overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="p-4 font-bold text-xl border-b">Fisio OS Logo</div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-md transition ${
                  isActive
                    ? 'bg-yellow-400 text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
