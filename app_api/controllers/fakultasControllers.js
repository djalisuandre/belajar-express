// mengimpor model fakultas untuk berinteraksi dengan koleksi fakultas di MONGODB
const Fakultas = require("../models/fakultas");

// fungsi untuk mendapatkan semua data fakultas
const getAllFakultas = async (res) => {
  try {
    // mencari semua data fakultas
    const fakultas = await Fakultas.find();
    // memberikan respon dengan data fakultas
    res.json(fakultas);
  } catch (err) {
    // jika terjadi error, respon dengan status 500 dan pesan error
    res.status(500).json({ message: err.message });
  }
};

// fungsi untuk membuat data fakultas baru
const createFakultas = async (req, res) => {
  // membuat instance fakultas baru
  const fakultas = new Fakultas({
    fakultas: req.body.fakultas,
    singkatan: req.body.singkatan,
  });

  try {
    // menyimpan data fakultas baru ke MongoDB
    const newFakultas = await fakultas.save();
    // memberikan respon dengan data fakultas baru
    res.status(201).json(newFakultas);
  } catch (err) {
    // jika terjadi error, respon dengan status 400 dan pesan error
    res.status(400).json({ message: err.message });
  }
};

// fungsi untuk mendapatkan data fakultas berdasarkan ID
const getFakultasById = async (req, res) => {
  try {
    // mencari data fakultas berdasarkan ID
    const fakultas = await Fakultas.findById(req.params.id);
    // jika data fakultas tidak ditemukan, respon dengan status 404
    if (fakultas == null) {
      return res.status(404).json({ message: "Data fakultas tidak ditemukan" });
    }
    // memberikan respon dengan data fakultas
    res.json(fakultas);
  } catch (err) {
    // jika terjadi error, respon dengan status 500 dan pesan error
    res.status(500).json({ message: err.message });
  }
};

// fungsi untuk memperbarui data fakultas berdasarkan ID
const updateFakultas = async (req, res) => {
  try {
    // mencari data fakultas berdasarkan ID dan memperbarui data tersebut
    const updatedFakultas = await Fakultas.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    // jika data fakultas tidak ditemukan, respon dengan status 404
    if (updatedFakultas == null) {
      return res.status(404).json({ message: "Data fakultas tidak ditemukan" });
    }
    // memberikan respon dengan data fakultas yang telah diperbarui
    res.json(updatedFakultas);
  } catch (err) {
    // jika terjadi error, respon dengan status 400 dan pesan error
    res.status(400).json({ message: err.message });
  }
};

// mengeksport fungsi-fungsi kontroler agar dapat digunakan di file lain
module.exports = {
  getAllFakultas,
  createFakultas,
  getFakultasById,
  updateFakultas,
};
