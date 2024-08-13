const express = require('express');
const router = express.Router()
const paymentController = require("../controller/paymentController");
const validate = require('../middleware/zodMiddleware');
const paymentValidation = require('../util/paymentValidation'); 


router.post('/payment',validate(paymentValidation),paymentController.addPayment)
router.get("/payment",paymentController.getAllPayment)
router.get("/payment/:id",paymentController.getPaymentById);
router.post("/payment/:id",paymentController.updatePaymentById);
router.delete("/payment/:id",paymentController.deletePaymentById);

module.exports = router