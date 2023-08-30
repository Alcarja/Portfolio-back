const router = require("express").Router();
const Project = require("../models/Project.model");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:projectId", async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    res.status(200).json(project);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
