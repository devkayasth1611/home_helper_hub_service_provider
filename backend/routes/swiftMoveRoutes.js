const express = require('express');
const router = express.Router();
const swiftMoveController = require("../controller/swiftmoveController");
// const validate = require('../middleware/zodMiddleware');
// const paintingValidation = require('../util/paintingValidation');  

router.post('/swiftmove',swiftMoveController.addSwiftMoveDetails);
router.get("/swiftmove",swiftMoveController.getAllSwiftMove);
router.get("/swiftmove/:id",swiftMoveController.getSwiftMoveById);
router.post("/swiftmove/:id",swiftMoveController.updateSwiftMoveById);
router.delete("/swiftmove/:id",swiftMoveController.deleteSwiftMoveById);

module.exports = router;