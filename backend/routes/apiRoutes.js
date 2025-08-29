const express = require("express");
const router = express.Router();

const { getTemperatureData } = require("../controllers/temperatureController");
const { getDoorData } = require("../controllers/doorController");
const { getLightData } = require("../controllers/lightController");

router.get("/temperature", getTemperatureData);
router.get("/door", getDoorData);
router.get("/light", getLightData);

module.exports = router;
