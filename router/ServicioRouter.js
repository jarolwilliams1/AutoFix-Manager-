const serviciosController = require("../controllers/serviciosController")
const express = require("express");
const router = express.Router();

router.get("/", serviciosController.mostrar);

module.exports = router;