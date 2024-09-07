const express = require('express');
const router = express.Router()
const serviceController = require("../controller/serviceController");
// const validate = require('../middleware/zodMiddleware');
// const serviceValidation = require('../util/serviceValidation'); 

router.post('/service',serviceController.addService)
router.get("/service",serviceController.getAllService)
router.get("/service/:id",serviceController.getServiceById);
router.post("/service/:id",serviceController.updateServiceById);
router.delete("/service/:id",serviceController.deleteServiceById);

module.exports = router