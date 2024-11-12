// mengimpor modul express untuk membuat router
const express = require("express");
// membuat instance router dari express
const router = express.Router();
// mengimpor controller fakultas untuk menangani logika bisnis
const fakultasController = require("../controllers/fakultasControllers");

// definisi rute untuk fakultas
// mengatur rute GET untuk mendapatkan semua data fakultas
router.get("/", fakultasController.getAllFakultas);
// mengatur rute POST untuk membuat data fakultas baru
router.post("/", fakultasController.createFakultas);
// mengatur rute GET untuk mendapatkan data fakultas berdasarkan ID
router.get("/:id", fakultasController.getFakultasById);
// mengatur rute PUT untuk memperbarui data fakultas berdasarkan ID
router.put("/:id", fakultasController.updateFakultas);

// mengeksport router agar dapat digunakan di file lain(misalnya,di app.js)
module.exports = router;
