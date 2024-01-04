const express = require('express')
const {addNewRole } = require('../controllers/role')

const roleRouter = express.Router();

//  function 1
roleRouter.post('',addNewRole)





module.exports = roleRouter