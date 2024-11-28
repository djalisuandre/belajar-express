const express = require("express");

const router = express.Router();

const mahasiswaController = require("../controllers/mahasiswaController");
// import middleware auth and role
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", authMiddleware, mahasiswaController.getAllMahasiswa);

router.post("/", mahasiswaController.createMahasiswa);

router.get("/:id", mahasiswaController.getMahasiswaById);

router.put("/:id", mahasiswaController.updateMahasiswa);

router.delete("/:id", mahasiswaController.deleteMahasiswa);

module.exports = router;
