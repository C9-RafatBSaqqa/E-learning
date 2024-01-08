const express = require('express')
const {createNewCourse , getAllCourseByCategoryId , updateCourseById , deleteCourseById} = require('../controllers/course')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const courseRouter = express.Router()



// function 1 POST
courseRouter.post('/createNewCourse',authentication,authorization("CREATE_COURSE"),createNewCourse);

// function 2 GET
courseRouter.get('/getAllCourseByCategory/:categoryId',authentication,getAllCourseByCategoryId);

// function 3 UPDATE
courseRouter.put('/updateCourse/:courseId',authentication,authorization("UPADTE_COURSE"),updateCourseById)

// function 3 DELETE
courseRouter.delete('/deleteById/:courseId',authentication,authorization("DELETE_COURSE"),deleteCourseById)

module.exports = courseRouter;

