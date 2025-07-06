import Appointment from "../models/appointment.model.js";

// POST  /appointments
export const createAppointment = async (req, res, next) => {
  const userId = req.userId;
  const { doctor, date, time, reason, notes } = req.body;

  console.log({
    doctor,
    date_and_time: `${date} ${time}`,
    reason,
    notes,
    pateient_id: userId,
  });
  try {
    const appointment = await Appointment.create({
      doctor,
      date_and_time: `${date} ${time}`,
      reason,
      notes,
      patient_id: userId,
    });

    res.status(201).json({ success: true, appointment });
  } catch (err) {
    // res.status(500).json({ error: "Failed to book appointment" });
    next(err);
  }
};

// GET  /appointments
export const getAllAppointments = async (req, res, next) => {
  try {
    // populate() pulls basic patient data; drop it if unnecessary
    const appointments = await Appointment.find().populate(
      "patient_id",
      "username email" // limit returned fields
    );

    res.json(appointments);
  } catch (err) {
    next(err);
  }
};
