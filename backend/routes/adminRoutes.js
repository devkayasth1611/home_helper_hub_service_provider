const express = require('express');
const router = express.Router()
const adminController = require("../controller/adminController");
// const validate = require('../middleware/zodMiddleware');
// const adminValidation = require('../util/adminvalidation'); 

router.post('/admin',adminController.addAdmin)
router.get("/admin",adminController.getAllAdmin)
router.get("/admin/:id",adminController.getAdminById);
router.post("/admin/:id",adminController.updateAdminById);
router.delete("/admin/:id",adminController.deleteAdminById);

module.exports = router
