// // Cara 1
// const mahasiswa = {
//     nama : 'Kezya Anindita',
//     umur : 21,
//     jurusan : 'Kimia',
//     editUmur: function(umur) {
//         this.umur = umur;
//     },
//     editJurusan: function(jurusan) {
//         this.jurusan = jurusan;
//     }
// };

// mahasiswa.editUmur(24);
// mahasiswa.editJurusan('Pendidikan Dokter Gigi');

// console.log(mahasiswa.nama);
// console.log(mahasiswa.umur);
// console.log(mahasiswa.jurusan);

// // Cara 2
const mahasiswa = {
    nama : 'Kezya Anindita',
    umur : 21,
    jurusan : 'Kimia',
};

// pake spread
const mhs = {...mahasiswa};
mhs.umur = 24;
mhs.jurusan = 'Pendidikan Dokter Gigi';
console.log("mahasiswa (after changing):", mhs);

// // Fungsi untuk mengubah objek berdasarkan input pengguna
// function updateObject(umur, jurusan) {
//     mahasiswa.jurusan = jurusan;
//     mahasiswa.umur = umur;

//     return mahasiswa;
// }

// const targetNama = "Kezya Anindita";
// const newJurusan = "Pendidikan Dokter Gigi";
// const newUmur = "23";

// console.log(updateObject(targetNama, newJurusan, newUmur));


// // Array of Object
// const mahasiswa = [
//     {
//       nama : 'Rifdah Kamilah',
//       umur : 22,
//       jurusan : 'Matematika'
//     },
//     {
//       nama : 'Zahra Yasmine',
//       umur : 23,
//       jurusan : 'Teknik Industri'
//     },
// ]

// const mhs1 = mahasiswa[0];
// const mhs2 = mahasiswa[1];
// mhs1.umur = 23;
// mhs1.jurusan = 'Kimia';
// mhs2.umur = 24;
// mhs2.jurusan = 'Fisika';

// console.log(mahasiswa);

