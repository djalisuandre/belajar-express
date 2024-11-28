const Mahasiswa = require("../models/mahasiswa");

const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find().populate("prodi_id", "nama");
    res.status(200).json(mahasiswa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMahasiswaById = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa)
      return res.status(404).json({ message: "Mahasiswa not found" });
    res.status(200).json(mahasiswa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMahasiswa = async (req, res) => {
  const mahasiswa = new Mahasiswa({
    nama: req.body.nama,
    prodi_id: req.body.prodi_id,
  });

  try {
    const newMahasiswa = await mahasiswa.save();
    res.status(201).json(newMahasiswa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa)
      return res.status(404).json({ message: "Mahasiswa not found" });

    if (req.body.nama != null) {
      mahasiswa.nama = req.body.nama;
    }

    if (req.body.prodi_id != null) {
      mahasiswa.prodi_id = req.body.prodi_id;
    }

    const updatedMahasiswa = await mahasiswa.save();
    res.status(200).json(updatedMahasiswa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa)
      return res.status(404).json({ message: "Mahasiswa not found" });

    await mahasiswa.remove();
    res.status(200).json({ message: "Mahasiswa deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
