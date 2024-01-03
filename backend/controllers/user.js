const userModel = require('../models/userSchema')



// register new user function 1
const register = (req,res) => {
   const {name , email,password,phoneNumber , age,role,country} = req.body;
}


module.exports = {
    register,
}