const express = require('express')
const newsController = require("../controllers/newsController")
const { body } = require('express-validator');
const handleValidationRequest = require('../validations/HandleValidationRequest');


let router = express.Router();

router.get("", newsController.index)
router.post("",[
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('author').notEmpty(),
    body('type').notEmpty()
], handleValidationRequest,newsController.store)
router.get("/:id", newsController.show)
router.delete("/:id", newsController.delete)
router.patch("/:id",[
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('author').notEmpty(),
    body('type').notEmpty()
], handleValidationRequest,newsController.update)

module.exports = router;