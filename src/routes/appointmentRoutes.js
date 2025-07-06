const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
router.use(require("../middlewares/verifyJWT"));

router
  .route("/")
  .get(appointmentController.getAllAppointments)
  .post(appointmentController.createAppointment);

module.exports = router;
