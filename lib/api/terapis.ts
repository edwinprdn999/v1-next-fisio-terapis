// lib/api/terapis.ts
import { Terapis } from '@/types/terapis'

// Simpan sementara di memori (dummy data)
let terapisData: Terapis[] = [
  {
    id: '1',
    nama: 'Siti Nurhaliza',
    gender: 'Perempuan',
    noHp: '081234567890',
    status: 'Active',
  },
  {
    id: '2',
    nama: 'Budi Santoso',
    gender: 'Laki Laki',
    noHp: '082345678901',
    status: 'Inactive',
  },
  {
    id: '3',
    nama: 'Rina Marlina',
    gender: 'Perempuan',
    noHp: '083456789012',
    status: 'Active',
  },
  {
    id: '4',
    nama: 'Dedi Supriadi',
    gender: 'Laki Laki',
    noHp: '084567890123',
    status: 'Inactive',
  },
  {
    id: '5',
    nama: 'Fitri Handayani',
    gender: 'Perempuan',
    noHp: '085678901234',
    status: 'Active',
  },
  {
    id: '6',
    nama: 'Agus Pranoto',
    gender: 'Laki Laki',
    noHp: '086789012345',
    status: 'Inactive',
  },
  {
    id: '7',
    nama: 'Lestari Widya',
    gender: 'Perempuan',
    noHp: '087890123456',
    status: 'Active',
  },
  {
    id: '8',
    nama: 'Rudi Hartono',
    gender: 'Laki Laki',
    noHp: '088901234567',
    status: 'Active',
  },
  {
    id: '9',
    nama: 'Sri Wahyuni',
    gender: 'Perempuan',
    noHp: '089012345678',
    status: 'Inactive',
  },
  {
    id: '10',
    nama: 'Teguh Santosa',
    gender: 'Laki Laki',
    noHp: '081122334455',
    status: 'Active',
  },
  {
    id: '11',
    nama: 'Mega Ayuningtyas',
    gender: 'Perempuan',
    noHp: '082233445566',
    status: 'Active',
  },
  {
    id: '12',
    nama: 'Bayu Saputra',
    gender: 'Laki Laki',
    noHp: '083344556677',
    status: 'Inactive',
  },
  {
    id: '13',
    nama: 'Indah Permatasari',
    gender: 'Perempuan',
    noHp: '084455667788',
    status: 'Active',
  },
  {
    id: '14',
    nama: 'Hendra Wijaya',
    gender: 'Laki Laki',
    noHp: '085566778899',
    status: 'Inactive',
  },
  {
    id: '15',
    nama: 'Nina Kartika',
    gender: 'Perempuan',
    noHp: '086677889900',
    status: 'Active',
  },
  {
    id: '16',
    nama: 'Ali Rahman',
    gender: 'Laki Laki',
    noHp: '087788990011',
    status: 'Inactive',
  },
  {
    id: '17',
    nama: 'Dewi Sartika',
    gender: 'Perempuan',
    noHp: '088899001122',
    status: 'Active',
  },
  {
    id: '18',
    nama: 'Zulkifli Hasan',
    gender: 'Laki Laki',
    noHp: '089900112233',
    status: 'Inactive',
  },
  {
    id: '19',
    nama: 'Maya Sari',
    gender: 'Perempuan',
    noHp: '081100223344',
    status: 'Active',
  },
  {
    id: '20',
    nama: 'Fajar Ramadhan',
    gender: 'Laki Laki',
    noHp: '082211334455',
    status: 'Inactive',
  },
  {
    id: '21',
    nama: 'Rosa Meilani',
    gender: 'Perempuan',
    noHp: '083322445566',
    status: 'Active',
  },
  {
    id: '22',
    nama: 'Imam Syafi’i',
    gender: 'Laki Laki',
    noHp: '084433556677',
    status: 'Inactive',
  },
  {
    id: '23',
    nama: 'Ayu Puspita',
    gender: 'Perempuan',
    noHp: '085544667788',
    status: 'Active',
  },
  {
    id: '24',
    nama: 'Rangga Pratama',
    gender: 'Laki Laki',
    noHp: '086655778899',
    status: 'Inactive',
  },
  {
    id: '25',
    nama: 'Murniati Hasanah',
    gender: 'Perempuan',
    noHp: '087766889900',
    status: 'Active',
  },
]

// Ambil seluruh daftar terapis
export async function getTerapisList(): Promise<Terapis[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(terapisData)
    }, 300)
  })
}

// Tambah terapis baru
export async function tambahTerapis(data: Omit<Terapis, 'id'>): Promise<Terapis> {
  const newTerapis: Terapis = {
    id: Date.now().toString(),
    ...data,
  }
//   terapisData.push(newTerapis)
  return newTerapis
}

// Perbarui terapis
export async function updateTerapis(updated: Terapis): Promise<Terapis> {
  terapisData = terapisData.map((t) =>
    t.id === updated.id ? updated : t
  )
  return updated
}

// Hapus terapis
export async function deleteTerapis(id: string): Promise<void> {
  terapisData = terapisData.filter((t) => t.id !== id)
}
