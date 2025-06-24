'use client'

import { FC, useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Header: FC<HeaderProps> = ({ isOpen, toggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false)
        }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6 sticky top-0 z-30">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="text-lg font-semibold">Fisio OS</div>
      {/* Profile Menu */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center focus:outline-none"
        >
          <Image
            src="/icon/avatar-default.png" // ganti dengan path avatar default kamu
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full border"
          />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
            <Link
              href="/profil"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profil
            </Link>
            <button
              onClick={() => {
                // logic logout di sini
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
