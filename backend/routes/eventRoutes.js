const express = require('express');
const router = express.Router();
const eventController = require("../controller/eventController");
// const validate = require('../middleware/zodMiddleware');
// const paintingValidation = require('../util/paintingValidation');  

router.post('/event',eventController.addEventDetails);
router.get("/event",eventController.getAllEvent);
router.get("/event/:id",eventController.getEventById);
router.post("/event/:id",eventController.updateEventById);
router.delete("/event/:id",eventController.deleteEventById);

module.exports = router;