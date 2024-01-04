const express = require('express')
const {register ,login} = require('../controllers/user')
const userRouter = express.Router();

// register function 1
userRouter.post('/register',register)

// login function 2
userRouter.post('/login',login)





module.exports = userRouter