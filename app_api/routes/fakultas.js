const express = require("express");

const router = express.Router();

const fakultasController = require("../controllers/fakultasController");
// import middleware auth and role
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", authMiddleware, fakultasController.getAllFakultas);

router.post("/", fakultasController.createFakultas);

router.get("/:id", fakultasController.getFakultasById);

router.put("/:id", fakultasController.updateFakultas);

router.delete("/:id", fakultasController.deleteFakultas);

module.exports = router;
