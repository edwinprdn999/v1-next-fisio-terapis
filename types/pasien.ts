export interface Pasien {
  id: string
  nik : string
  nama: string
  namaPanggilan?: string
  gender: 'Laki Laki' | 'Perempuan'
  tanggalLahir: string
  nomor_wa: string
  pekerjaan?: string
  alamat?: string
  provinsi?: string
  kota?: string
  agama?: string
  status: 'Active' | 'Inactive'
}
