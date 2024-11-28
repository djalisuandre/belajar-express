const mongoose = require("mongoose");

// definisakn schema untuk mahasiswa
const mahasiswaSchema = new mongoose.Schema({
  // field untuk nama mahasiswa
  nama: {
    type: String,
    required: true,
    trim: true,
  },
  // field untuk singkatan prodi
  prodi_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prodi",
    required: true,
  },
  // field untuk menyimpan tanggal pembuatan data fakultas
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// buat modul mahasiswa dari skema yang telah didefinisikan
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);

module.exports = Mahasiswa;
