const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const projectRoutes = require("./project.routes");
router.use("/projects", projectRoutes);

module.exports = router;
