const express = require('express')
const {register } = require('../controllers/user')

const userRouter = express.Router();

// register new user function 1
userRouter.post('',register)





module.exports = userRouter