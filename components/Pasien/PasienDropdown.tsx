import Link from 'next/link'

interface Props {
  isOpen: boolean
  onToggle: () => void
  onEdit: () => void
  pasienNik: string
}

export default function PasienDropdown({ isOpen, onToggle, onEdit, pasienNik }: Props) {
  return (
    <>
      <button onClick={onToggle} className="text-gray-500 hover:text-gray-800">
        <p className="text-2xl">⋯</p>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-md z-10">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Booking</button>
          <button onClick={onEdit} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit Pasien</button>
          {/* <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Rekam Medis</button> */}
          <Link
            href={`/rekam-medis/${pasienNik}`}
            className="block px-4 py-2 text-left hover:bg-gray-100 w-full text-sm text-gray-700"
          >
            Rekam Medis
          </Link>
        </div>
      )}
    </>
  )
}
