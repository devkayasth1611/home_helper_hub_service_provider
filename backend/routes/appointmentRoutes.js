const express = require('express');
const router = express.Router()
const appointmentController = require("../controller/appointmentController");
const validate = require('../middleware/zodMiddleware');
const appointmentValidation = require('../util/appointmentValidation'); 


router.post('/appointment',validate(appointmentValidation),appointmentController.addAppointment);
router.get("/appointment",appointmentController.getAllAppointment);
router.get("/appointment/:id",appointmentController.getAppointmentById);
router.post("/appointment/:id",appointmentController.updateAppointmentById);
router.delete("/appointment/:id",appointmentController.deleteAppointmentById);

module.exports = router;