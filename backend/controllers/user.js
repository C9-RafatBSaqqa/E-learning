const userModel = require('../models/userSchema')



// register new user function 1
const register = (req,res) => {
   const {name , email,password,phoneNumber , age,role,country} = req.body;
   const newUser = userModel({
    name,
    email, 
    password,
    phoneNumber,
    age,
    role ,
    country
   })
   .save()
   .then(result => {
    res.status(200).json({
        success:true,
        message:"User Created",
        information : result
    })
   })
   .catch(err => {
    res.status(404).json({
        success:false,
        message:"Server error",
        error : err
    })
   })
}

// login user function 2
const login = (req,res) => {

}

module.exports = {
    register,
    login
}