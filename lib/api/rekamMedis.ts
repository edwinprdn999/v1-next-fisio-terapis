import { RekamMedis } from '@/types/rekamMedis'
import { Pasien } from '@/types/pasien'

import { dummyPasienList } from '@/lib/api/pasien'

// Dummy data
const dummyRekamMedis: RekamMedis[] = [
  {
    id: '1',
    pasienId: '7510691894850405',
    tanggal: '2025-06-01',
    anamnesa: 'Pasien mengeluhkan nyeri kepala',
    pemeriksaan: 'Fisik',
    jenis_pemeriksaan: 'Tekanan darah',
    hasil_pemeriksaan: '120/80',
    diagnosa: 'Migrain ringan, disarankan istirahat cukup'
  },
  {
    id: '2',
    pasienId: '7510691894850405',
    tanggal: '2025-06-15',
    anamnesa: 'Keluhan demam dan batuk',
    pemeriksaan: 'Fisik dan lab',
    jenis_pemeriksaan: 'Tes darah lengkap',
    hasil_pemeriksaan: 'Normal',
    diagnosa: 'ISPA ringan, diberikan obat penurun panas dan antibiotik'
  },
  {
    id: '3',
    pasienId: '1234567890100003',
    tanggal: '2025-06-20',
    anamnesa: 'Pusing berputar, mual',
    pemeriksaan: 'Vestibular',
    jenis_pemeriksaan: 'Rinne & Weber',
    hasil_pemeriksaan: 'Normal',
    diagnosa: 'Vertigo perifer'
  }
]

export async function getRekamMedisByPasien(pasienId: string): Promise<RekamMedis[]> {
  return dummyRekamMedis.filter((r) => r.pasienId === pasienId)
} 

export async function tambahRekamMedis(data: RekamMedis): Promise<void> {
  dummyRekamMedis.push(data)
} 

export async function getPasienById(nik: string): Promise<Pasien | null> {
  return dummyPasienList.find((p) => p.nik === nik) || null
}
