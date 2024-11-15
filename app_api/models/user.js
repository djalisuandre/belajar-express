// Mengimpor modul mongoose
const e = require("express");
const mongoose = require("mongoose");
const { create } = require("./prodi");

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

module.exports = mongoose.model("User", userSchema);
