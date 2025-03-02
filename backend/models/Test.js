const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  s_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }], // Array of student IDs (foreign keys)
  t_id: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true }, // Foreign key to Teacher
  c_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Foreign key to Course
  score: [{ type: Number }] // Array of scores corresponding to s_id
});

// Create and export the model
const Test = mongoose.model("Test", TestSchema);
module.exports = Test;