const express = require('express');
const router = express.Router();
const masonController = require("../controller/masonController");
// const validate = require('../middleware/zodMiddleware');
// const paintingValidation = require('../util/paintingValidation');  

router.post('/mason',masonController.addMasonDetails);
router.get("/mason",masonController.getAllMason);
router.get("/mason/:id",masonController.getMasonById);
router.post("/mason/:id",masonController.updateMasonById);
router.delete("/mason/:id",masonController.deleteMasonById);

module.exports = router;