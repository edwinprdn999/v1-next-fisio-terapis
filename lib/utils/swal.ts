import  MySwal  from 'sweetalert2'

export function alertSuccess(text: string) {
  return MySwal.fire({
    icon: 'success',
    title: 'Berhasil',
    text,
    timer: 1500,
    showConfirmButton: false,
  })
}

export function alertError(text: string) {
  return MySwal.fire({
    icon: 'error',
    title: 'Gagal',
    text,
  })
}

export function alertConfirmDelete(): Promise<boolean> {
  return MySwal.fire({
    title: 'Yakin hapus?',
    text: 'Data tidak bisa dikembalikan!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e3342f',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Ya, hapus!',
  }).then((result) => result.isConfirmed)
}

export function confirmDelete(): Promise<boolean> {
  return MySwal.fire({
    title: 'Yakin hapus?',
    text: 'Data tidak bisa dikembalikan!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e3342f',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Ya, hapus!',
  }).then((result) => result.isConfirmed)
}
