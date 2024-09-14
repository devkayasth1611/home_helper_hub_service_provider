const express = require('express');
const router = express.Router();
const carpenterController = require("../controller/carpenterController");
// const validate = require('../middleware/zodMiddleware');
// const carpenterValidation = require('../util/carpenterValidation');  

router.post('/carpenter',carpenterController.addCarpenterDetails);  
router.get("/carpenter",carpenterController.getAllCarpenter);
router.get("/carpenter/:id",carpenterController.getCarpenterById);
router.post("/carpenter/:id",carpenterController.updateCarpenterById);
router.delete("/carpenter/:id",carpenterController.deleteCarpenterById);

module.exports = router;