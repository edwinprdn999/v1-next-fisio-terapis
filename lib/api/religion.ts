import { Religion } from '@/types/religion'

const dummyReligion: Religion[] = [
  { id: 1, name: 'Katolik' },
  { id: 2, name: 'Islam' },
  { id: 3, name: 'Hindu' },
  { id: 4, name: 'Buddha' },
  { id: 5, name: 'Konghucu' },
  { id: 6, name: 'Kristen' },
]

export async function getReligionList(): Promise<Religion[]> {
  // Nanti tinggal ganti jadi fetch('https://api.example.com/religion')
  return dummyReligion
}

// export async function getReligionList(): Promise<Religion[]> {
//   const res = await fetch('https://api.example.com/religion')
//   const data = await res.json()
//   return data.data
// }