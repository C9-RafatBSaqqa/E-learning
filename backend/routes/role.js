const express = require('express')
const {addNewRole } = require('../controllers/role')

const roleRouter = express.Router();

//  function 1 POST
roleRouter.post('/createNewRole',addNewRole)





module.exports = roleRouter