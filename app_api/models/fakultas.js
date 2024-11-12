const mongoose = require("mongoose");

const fakultasSchema = new mongoose.Schema({
  //field untuk nama fakultas
  fakultas: {
    type: String, //Tipe data string
    required: true, //field ini wajib diisi
  },
  singkatan: {
    type: String, //Tipe data string
    required: true, //field ini wajib diisi
  },
  createdAt: {
    type: Date, //Tipe data tanggal
    default: Date.now, //default adalah tanggal dan waktu saat ini
  },
});

const Fakultas = mongoose.model("Fakultas", fakultasSchema);

module.exports = Fakultas;
