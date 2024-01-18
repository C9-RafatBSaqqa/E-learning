const express = require('express')
const {createNewCategory , getAllCategory} = require('../controllers/category')
const categoryRouter = express.Router()
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

// function 1 POST
categoryRouter.post('/createNewCategory',authentication,authorization('CREATE_CATEGORY'),createNewCategory)

// function 2 GET
categoryRouter.get('/getAllCategory',authentication,getAllCategory)


module.exports = categoryRouter