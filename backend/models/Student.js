const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  s_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  t_id: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true }, // Foreign key to Teacher
  fees_paid: { type: Boolean, default: false }
});

// Create and export the model
const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;