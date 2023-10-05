const { Schema, model } = require("mongoose");
const { link } = require("../routes/project.routes");

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  type: {
    type: String,
    required: [true, "Type is required."],
  },
  technologies: {
    type: [String],
    required: [true, "Technologies are required."],
  },
  link: {
    type: String,
    required: [true, "Link is required."],
  },
  image: {
    type: String,
  },
  tags: {
    type: [String],
  },
});

const Project = model("Project", projectSchema);
module.exports = Project;
