const express = require('express');
const router = express.Router()
const reviewController = require("../controller/reviewController");
const validate = require('../middleware/zodMiddleware');
const reviewValidation = require('../util/reviewValidation'); 


router.post('/review',validate(reviewValidation),reviewController.addReview);
router.get("/review",reviewController.getAllReview);
router.get("/review/:id",reviewController.getReviewById);
router.post("/review/:id",reviewController.updateReviewById);
router.delete("/review/:id",reviewController.deleteReviewById);

module.exports = router