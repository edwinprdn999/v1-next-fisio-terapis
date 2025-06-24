import { Paket } from '@/types/paket'

let dummyData: Paket[] = [
  { id: '1', nama: 'Tes Awal Reguler', jenis: 'TA' },
  { id: '2', nama: 'Tes Anak Spesial', jenis: 'TA-Anak' },
  { id: '3', nama: 'Paket 5 Sesi', jenis: 'P5' },
  { id: '4', nama: 'Paket 10 Sesi', jenis: 'P10' },
]

export async function getPaketList(): Promise<Paket[]> {
  return dummyData
}

export async function tambahPaket(data: Omit<Paket, 'id'>): Promise<Paket> {
  const newData = { ...data, id: Date.now().toString() }
  dummyData.push(newData)
  return newData
}

export async function updatePaket(data: Paket): Promise<void> {
  dummyData = dummyData.map((p) => (p.id === data.id ? data : p))
}

export async function deletePaket(id: string): Promise<void> {
  dummyData = dummyData.filter((p) => p.id !== id)
}
