const express = require('express');
const router = express.Router();
const cleaningController = require("../controller/cleaningController");
// const validate = require('../middleware/zodMiddleware');
// const paintingValidation = require('../util/paintingValidation');  

router.post('/cleaning',cleaningController.addCleaningDetails);
router.get("/cleaning",cleaningController.getAllCleaning);
router.get("/cleaning/:id",cleaningController.getCleaningById);
router.post("/cleaning/:id",cleaningController.updateCleaningById);
router.delete("/cleaning/:id",cleaningController.deleteCleaningById);

module.exports = router;