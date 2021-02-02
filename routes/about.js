const express = require("express");

const projectController = require("../controllers/about");

const router = express.Router();

router.get("/", projectController.getAbout);
router.post("/update", projectController.updateAbout);

module.exports = router;
