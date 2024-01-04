const express = require('express')
const {createNewCourse} = require('../controllers/course')
const authentication = require('../middleware/authentication')

const courseRouter = express.Router()



// function 1
courseRouter.post('/',authentication,createNewCourse);


module.exports = courseRouter;

