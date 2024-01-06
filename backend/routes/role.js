const express = require('express')
const {addNewRole } = require('../controllers/role')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const roleRouter = express.Router();

//  function 1 POST
roleRouter.post('/createNewRole',authentication,authorization("CREATE_ROLE"),addNewRole)





module.exports = roleRouter