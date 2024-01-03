const express = require('express')
const {addNewRole } = require('../controllers/role')

const roleRouter = express.Router();

// add New Role function 1
roleRouter.post('',addNewRole)





module.exports = roleRouter