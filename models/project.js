const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
  tools: {
    type: [String],
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
