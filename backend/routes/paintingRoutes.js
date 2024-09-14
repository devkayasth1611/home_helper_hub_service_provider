const express = require('express');
const router = express.Router();
const paintingController = require("../controller/paintingController");
// const validate = require('../middleware/zodMiddleware');
// const paintingValidation = require('../util/paintingValidation');  

router.post('/painting',paintingController.addPainting);
router.get("/painting",paintingController.getAllPainting);
router.get("/painting/:id",paintingController.getPaintingById);
router.post("/painting/:id",paintingController.updatePaintingById);
router.delete("/painting/:id",paintingController.deletePaintingById);

module.exports = router;