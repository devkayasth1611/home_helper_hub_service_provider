const express = require('express');
const router = express.Router();
const plumberController = require("../controller/plumberController");
// const validate = require('../middleware/zodMiddleware');
// const paintingValidation = require('../util/paintingValidation');  

router.post('/plumber',plumberController.addPlumberDetails);
router.get("/plumber",plumberController.getAllPlumber);
router.get("/plumber/:id",plumberController.getPlumberById);
router.post("/plumber/:id",plumberController.updatePlumberById);
router.delete("/plumber/:id",plumberController.deletePlumberById);

module.exports = router;