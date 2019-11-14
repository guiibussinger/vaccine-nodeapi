const express = require("express");
const router = express.Router();

const vaccine = require("../controllers/vaccine");

router.get("/", vaccine.getVaccines);
module.exports = router;
