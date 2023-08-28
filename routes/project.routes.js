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

module.exports = router;
