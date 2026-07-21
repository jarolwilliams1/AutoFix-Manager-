const vehiculosController = require("../controllers/vehiculosController")
const express = require("express");
const router = express.Router();

router.get("/", vehiculosController.mostrar);

module.exports = router;