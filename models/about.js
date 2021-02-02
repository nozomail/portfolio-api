const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  tools: {
    type: [
      {
        category: {
          type: String,
          required: true,
        },
        names: {
          type: [String],
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("About", AboutSchema);
