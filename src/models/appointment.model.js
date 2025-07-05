import { Schema } from "mongoose";

const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    date_and_time: {
      type: Date,
      required: true,
    },
    patient_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    reason: {
      type: String,
      trim: true,
      minlength: 3,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
