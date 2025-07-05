import Appointment from "../models/appointment.model";

// POST  /appointments
export const createAppointment = async (req, res, next) => {
  try {
    const { date_and_time, patient_id, reason } = req.body;

    const appointment = await Appointment.create({
      date_and_time,
      patient_id,
      reason,
    });

    res.status(201).json(appointment);
  } catch (err) {
    next(err);
  }
};

// GET  /appointments
export const getAllAppointments = async (req, res, next) => {
  try {
    // populate() pulls basic patient data; drop it if unnecessary
    const appointments = await Appointment.find().populate(
      "patient_id",
      "name email" // limit returned fields
    );

    res.json(appointments);
  } catch (err) {
    next(err);
  }
};
