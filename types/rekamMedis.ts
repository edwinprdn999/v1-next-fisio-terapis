export interface RekamMedis {
  id: string
  pasienId: string
  tanggal: string // format: YYYY-MM-DD
  anamnesa: string
  pemeriksaan: string
  jenis_pemeriksaan: string
  hasil_pemeriksaan: string
  diagnosa: string
}
