const mahasiswa = [
  {
    nama : 'Rifdah Kamilah',
    umur : 22,
    jurusan : 'Matematika'
  },
  {
    nama : 'Zahra Yasmine',
    umur : 23,
    jurusan : 'Teknik Industri'
  },
  {
    nama : 'Chintya Paradita',
    umur : 24,
    jurusan : 'Pendidikan Dokter'
  },
  {
    nama : 'Indah Puspita',
    umur : 21,
    jurusan : 'Teknik Sipil'
  },
  {
    nama : 'Alifia Putri',
    umur : 22,
    jurusan : 'Fisika'
  },
  {
    nama : 'Kezya Anindita',
    umur : 21,
    jurusan : 'Kimia'
  },
  {
    nama : 'Esa Autia',
    umur : 23,
    jurusan : 'Ilmu Hukum'
  }
]

// Filter data mahasiswa yang berusia lebih dari 21 tahun 
// const filteredMahasiswa = mahasiswa.filter(mahasiswa => mahasiswa.umur > 21);

// Filter data mahasiswa yang berusia lebih dari atau sama dengan 23 tahun 
// const filteredMahasiswa = mahasiswa.filter(mahasiswa => mahasiswa.umur >= 23);

// // Filter data mahasiswa yang berkuliah di jurusan Kimia
const filteredMahasiswa = mahasiswa.filter(mahasiswa => mahasiswa.jurusan === 'Kimia');

// Ambil nama-nama mahasiswa yang sesuai kriteria
const result = filteredMahasiswa.map(mahasiswa => mahasiswa.nama);

// Tampilkan hasil filter di console
// console.log(result);

mahasiswa.forEach((mahasiswa) => {
  mahasiswa["jurusan"] = "Kimia";
  if(mahasiswa.umur <= 23) {
    mahasiswa["jurusan"] = "Matematika";
  }
  if(mahasiswa.umur <= 22) {
    mahasiswa["jurusan"] = "Fisika";
  }
});

console.log(mahasiswa);