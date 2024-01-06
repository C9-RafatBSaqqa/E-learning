const express = require('express')
const {createNewVideo, getAllVideoByCourseId } = require('../controllers/video')
const videoRouter = express.Router()
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
// this function 1 POST
videoRouter.post('/uploadNewVideo',authentication,authorization("UPLOAD_VIDEO"),createNewVideo)

// this function 2 GET
videoRouter.get('/getCourseVideos/:id',authentication,getAllVideoByCourseId)

// // this function 3 DELETE
// videoRouter.get('/getCourseVideos/:id',authentication,getAllVideoByCourseId)

module.exports = videoRouter;