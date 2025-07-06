const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ["patient", "doctor", "admin"],
    default: "patient",
  },
  active: {
    required: false,
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
