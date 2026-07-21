const OrdenesController = require("../controllers/OrdenesController")
const express = require("express");
const router = express.Router();

router.get("/", OrdenesController.mostrar);

module.exports = router;