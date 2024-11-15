// Mengimpor modul mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Definisikan skema untuk fakultas
const userSchema = new mongoose.Schema({
  // Field untuk nama fakultas
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  // Jika password tidak diubah, lanjutkan tanpa enkripsi
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // enkripsi password
  next();
});

module.exports = mongoose.model("User", userSchema);
