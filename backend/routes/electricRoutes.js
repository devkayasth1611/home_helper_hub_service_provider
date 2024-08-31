const express = require('express');
const router = express.Router();
const electricController = require("../controller/electricController");
// const validate = require('../middleware/zodMiddleware');
// const paintingValidation = require('../util/paintingValidation');  

router.post('/electric',electricController.addElectricDetails);
router.get("/electric",electricController.getAllElectric);
router.get("/electric/:id",electricController.getElectricById);
router.post("/electric/:id",electricController.updateElectricById);
router.delete("/electric/:id",electricController.deleteElectricById);

module.exports = router;