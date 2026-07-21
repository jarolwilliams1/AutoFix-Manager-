const piezas_repuestosController = require("../controllers/piezas-repuestosController")
const express = require("express");
const router = express.Router();

router.get("/", piezas_repuestosController.mostrar);

module.exports = router;