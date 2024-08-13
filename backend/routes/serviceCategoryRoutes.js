const express = require('express');
const router = express.Router()
const categoryController = require("../controller/serviceCategoryController");
const validate = require('../middleware/zodMiddleware');
const serviceValidation = require('../util/serviceValidation'); 


router.post('/category',validate(serviceValidation),categoryController.addCategory);
router.get("/category",categoryController.getAllCategory);
router.get("/category/:id",categoryController.getCategoryById);
router.post("/category/:id",categoryController.updateCategoryById);
router.delete("/category/:id",categoryController.deleteCategoryById);

module.exports = router