const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  t_id: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true }, // Foreign key to Teacher
  c_name: { type: String, required: true },
  semester: { type: String, required: true }
});

// Create and export the model
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;