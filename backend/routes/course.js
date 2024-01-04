const express = require('express')
const {createNewCourse} = require('../controllers/course')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const courseRouter = express.Router()



// function 1
courseRouter.post('/',authentication,authorization("CREATE_COURSE"),createNewCourse);

// function 2
courseRouter.delete()
module.exports = courseRouter;

