const express = require("express");

const projectController = require("../controllers/project");

const router = express.Router();

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProject);
router.post("/create", projectController.createProject);
router.put("/:id/update", projectController.updateProject);
router.delete("/:id/delete", projectController.deleteProject);

module.exports = router;
