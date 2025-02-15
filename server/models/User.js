const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Student", // Can be modified to fit roles like admin, etc.
  },
  grade: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  bloodGroup: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  imageUrl: {
    type: String,
    default: "/path/to/default-image.jpg",
  },
});

module.exports = mongoose.model("User", userSchema);
