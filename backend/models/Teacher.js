
const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
{
    name: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  }
);


// Create and export the model
const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher; 