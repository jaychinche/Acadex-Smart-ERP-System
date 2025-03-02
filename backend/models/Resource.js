const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  res_title: { type: String, required: true },
  drive_link: { type: String, required: true },
  c_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true } // Foreign key to Course
});

// Create and export the model
const Resource = mongoose.model("Resource", ResourceSchema);
module.exports = Resource;