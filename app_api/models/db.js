const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //menghubungkan ke MongoDB menggunakan koneksi
    await mongoose.connect("mongodb://localhost:27017/fakultas");
    // jika koneksi berhasil, log pesan ke konsol
    console.log("MongoDB Connected...");
  } catch (err) {
    // jika koneksi gagal, log pesan error ke konsol
    console.error(err.message);
    // Exit process dengan failure
    process.exit(1);
  }
};

module.exports = connectDB;
