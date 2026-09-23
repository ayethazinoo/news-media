const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const { body } = require('express-validator');
const handleValidationRequest = require('../validations/HandleValidationRequest')
const Users = require('../models/Users')

router.post('/login',usersController.login)

router.post('/register',[
    body('name').notEmpty(),
    body('email').custom(async value =>{
        const userData = await Users.findOne({ email : value})     //check email already exist or not
        if(userData){
            throw new Error("Email is already exist. Please try again...")
        }
    }).notEmpty(),
    body('password').notEmpty()
], handleValidationRequest, usersController.register)

router.post('/logout',usersController.logout);

module.exports = router;