const express = require('express');
const router = express.Router()
const serviceProviderController = require("../controller/serviceProviderController");
// const validate = require('../middleware/zodMiddleware');
// const serviceProviderValidation = require('../util/serviceProviderValidation'); 


router.post('/serviceprovider',serviceProviderController.addServiceProvider)
router.get("/serviceprovider",serviceProviderController.getAllServiceProvider)
router.get("/serviceprovider/:id",serviceProviderController.getServiceProviderById);
router.post("/serviceprovider/:id",serviceProviderController.updateServiceProviderById);
router.delete("/serviceprovider/:id",serviceProviderController.deleteServiceProviderById);

module.exports = router