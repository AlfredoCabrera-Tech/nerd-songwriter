const express = require('express')

// controller functions
const userController = require('../controllers/user')

const router = express.Router()

// login route
router.post('/login', userController.loginUser)

// signup route
router.post('/signup', userController.signupUser)

module.exports = router