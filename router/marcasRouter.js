const marcasController = require("../controllers/marcasController")
const express = require("express");
const router = express.Router();

router.get("/", marcasController.mostrar);

module.exports = router;