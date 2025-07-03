import { Pasien } from '@/types/pasien'
import { id } from 'date-fns/locale'

const rawData = [
  {
    nik: '2259245608716906',
    fullname: 'Rahman Sinaga',
    nickname: 'Taufan',
    gender: 'perempuan',
    birth_date: '1989-05-08',
    phone_wa: '62266382295101',
    occupation_name: 'Journalist, broadcasting',
    address: 'Jl. Suniaraja No. 643',
    city: 'Jakarta Selatan',
    state: 'Banten',
    religion: { id: 1, name: 'Islam' },
    deleted_at: 'Inactive',
  },
  {
    nik: '7510691894850405',
    fullname: 'Titi Nashiruddin',
    nickname: 'Galih',
    gender: 'laki-laki',
    birth_date: '1999-05-02',
    phone_wa: '62934255330160',
    occupation_name: 'Psychotherapist',
    address: 'Gang Indragiri No. 58',
    city: 'Padang Sidempuan',
    state: 'Jawa Timur',
    religion: { id: 2, name: 'Kristen' },
    deleted_at: null,
  },
  {
    nik: '4177641115026086',
    fullname: 'Ir. Ibrani Waluyo, S.H.',
    nickname: 'Jasmani',
    gender: 'perempuan',
    birth_date: '1994-10-19',
    phone_wa: '62764521228274',
    occupation_name: 'Research scientist (maths)',
    address: 'Jl. R.E Martadinata No. 332',
    city: 'Mataram',
    state: 'Kalimantan Selatan',
    religion: { id: 6, name: 'Konghucu' },
    deleted_at: null,
  },
  {
    nik: '4025821049408876',
    fullname: 'Desi Alamsyah',
    nickname: 'Siti',
    gender: 'perempuan',
    birth_date: '1982-02-22',
    phone_wa: '62893829910725',
    occupation_name: 'Doctor, general practice',
    address: 'Jalan Surya Kencana No. 5',
    city: 'Depok',
    state: 'Jawa Barat',
    religion: { id: 3, name: 'Katolik' },
    deleted_at: null,
  },
  {
    nik: '3076231952872010',
    fullname: 'Bambang Sutrisno',
    nickname: 'Bam',
    gender: 'laki-laki',
    birth_date: '1975-11-11',
    phone_wa: '62812233445566',
    occupation_name: 'Software Engineer',
    address: 'Jl. K.H. Ahmad Dahlan No. 10',
    city: 'Yogyakarta',
    state: 'DI Yogyakarta',
    religion: { id: 1, name: 'Islam' },
    deleted_at: null,
  },
  {
    nik: '4087325821937401',
    fullname: 'Citra Ayu Lestari',
    nickname: 'Citra',
    gender: 'perempuan',
    birth_date: '1993-07-18',
    phone_wa: '62895162387452',
    occupation_name: 'Teacher, primary school',
    address: 'Jl. Gatot Subroto No. 12',
    city: 'Bandung',
    state: 'Jawa Barat',
    religion: { id: 4, name: 'Hindu' },
    deleted_at: null,
  },
  {
    nik: '6283749401847629',
    fullname: 'Agus Prasetyo',
    nickname: 'Agus',
    gender: 'laki-laki',
    birth_date: '1988-03-04',
    phone_wa: '62857123984756',
    occupation_name: 'Engineer, electrical',
    address: 'Jl. Veteran No. 3',
    city: 'Semarang',
    state: 'Jawa Tengah',
    religion: { id: 5, name: 'Budha' },
    deleted_at: null,
  },
  {
    nik: '9283749187736481',
    fullname: 'Sri Rahayu',
    nickname: 'Yayu',
    gender: 'perempuan',
    birth_date: '1990-12-25',
    phone_wa: '6281234567891',
    occupation_name: 'Accountant',
    address: 'Jl. Diponegoro No. 7',
    city: 'Surabaya',
    state: 'Jawa Timur',
    religion: { id: 2, name: 'Kristen' },
    deleted_at: null,
  },
  {
    nik: '1357924689135792',
    fullname: 'Dedi Irawan',
    nickname: 'Dedi',
    gender: 'laki-laki',
    birth_date: '1985-06-15',
    phone_wa: '6289876543210',
    occupation_name: 'Mechanic',
    address: 'Jl. Pemuda No. 9',
    city: 'Pontianak',
    state: 'Kalimantan Barat',
    religion: { id: 1, name: 'Islam' },
    deleted_at: null,
  },
  {
    nik: '1029334756102938',
    fullname: 'Nur Aini',
    nickname: 'Aini',
    gender: 'perempuan',
    birth_date: '1996-09-21',
    phone_wa: '6281123456789',
    occupation_name: 'Nurse, registered',
    address: 'Jl. Kebon Jeruk No. 2',
    city: 'Medan',
    state: 'Sumatera Utara',
    religion: { id: 1, name: 'Islam' },
    deleted_at: null,
  },
  {
    nik: '1029384716102938',
    fullname: 'Nur Aini',
    nickname: 'Aini',
    gender: 'perempuan',
    birth_date: '1996-09-21',
    phone_wa: '6281123456789',
    occupation_name: 'Nurse, registered',
    address: 'Jl. Kebon Jeruk No. 2',
    city: 'Medan',
    state: 'Sumatera Utara',
    religion: { id: 1, name: 'Islam' },
    deleted_at: null,
  },
  {
    nik: '1229384756102938',
    fullname: 'Nur Aini',
    nickname: 'Aini',
    gender: 'perempuan',
    birth_date: '1996-09-21',
    phone_wa: '6281123456789',
    occupation_name: 'Nurse, registered',
    address: 'Jl. Kebon Jeruk No. 2',
    city: 'Medan',
    state: 'Sumatera Utara',
    religion: { id: 1, name: 'Islam' },
    deleted_at: null,
  },
  // lanjutkan sampai 25
]


let dummyData: Pasien[] = rawData.map((item) => ({
  id: item.nik,
  nik: item.nik,
  nama: item.fullname,
  namaPanggilan: item.nickname,
  gender: item.gender === 'laki-laki' ? 'Laki Laki' : 'Perempuan',
  tanggalLahir: item.birth_date,
  nomor_wa: item.phone_wa,
  pekerjaan: item.occupation_name,
  alamat: item.address,
  provinsi: item.state,
  kota: item.city,
  agama: item.religion?.name || '-',
  status: item.deleted_at ? 'Inactive' : 'Active',
}))


export async function getPasienList(): Promise<Pasien[]> {
  return dummyData
}

export async function getPasienById(nik: string): Promise<Pasien | undefined> {
  return dummyData.find((p) => p.nik === nik)
  // return dummyData.find((p) => p.id === nik)
}

export async function tambahPasien(pasienBaru: Omit<Pasien, 'id'>): Promise<Pasien> {
  const newPasien: Pasien = {
    ...pasienBaru,
    id: Date.now().toString(),
  }
  // dummyData.push(newPasien)
  return newPasien
}

export async function updatePasien(data: Pasien): Promise<void> {
  dummyData = dummyData.map((p) => (p.nik === data.nik ? data : p))
}

export async function deletePasien(nik: string): Promise<void> {
  dummyData = dummyData.filter((p) => p.nik !== nik)
}

export const dummyPasienList = dummyData;
