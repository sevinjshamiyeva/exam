const express = require("express");
const router = express.Router();

const Foods = require("./foods.js");
router.use("/foods", Foods);

module.exports = router;
