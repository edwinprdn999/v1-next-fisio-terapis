export interface Pasien {
  id: string
  nama: string
  namaPanggilan?: string
  tanggalLahir: string
  gender: 'Laki Laki' | 'Perempuan'
  alamat: string
  agama?: string
  pekerjaan?: string
  status: 'Active' | 'Inactive'
}
