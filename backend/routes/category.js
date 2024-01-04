const express = require('express')
const {createNewCategory} = require('../controllers/category')
const categoryRouter = express.Router()
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

// function 1
categoryRouter.post('',authentication,authorization('CREATE_CATEGORY'),createNewCategory)


module.exports = categoryRouter