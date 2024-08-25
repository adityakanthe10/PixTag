const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: String,
  tags: [String],
});

module.exports = mongoose.model("Image", imageSchema);
