const express = require('express')
const {register ,login} = require('../controllers/user')
const userRouter = express.Router();

// register function 1 POST
userRouter.post('/register',register)

// login function 2 POST
userRouter.post('/login',login)





module.exports = userRouter