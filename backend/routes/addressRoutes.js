const express = require('express');
const router = express.Router()
const addressController = require("../controller/addressController");
const validate = require('../middleware/zodMiddleware');
const addressValidation = require('../util/addressValidation'); 


router.post('/address',validate(addressValidation),addressController.addAddress);
router.get("/address",addressController.getAllAddress);
router.get("/address/:id",addressController.getAddressById);
router.post("/address/:id",addressController.updateAddressById);
router.delete("/address/:id",addressController.deleteAddressById);

module.exports = router;