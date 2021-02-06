const express = require("express");

const contactController = require("../controllers/contact");

const router = express.Router();

router.post("/", contactController.sendForm);

module.exports = router;
