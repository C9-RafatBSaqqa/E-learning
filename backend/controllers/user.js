const userModel = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// This function register new user
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

// This function login the user
const login = async (req,res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  try {
    const found = await userModel.findOne({email})
    .populate('role')
    .populate({path:'role',select:'role',select:'permissions'})
    .populate('role')
    if(found) {
        const validUser = await bcrypt.compare(password,found.password)
        if(validUser) {
            const options = {
                expiresIn:'60m'
            }
            
            const payload = {
                id:found.id,
                country:found.country,
                role:{
                    role:found.role.role,
                    permissions:found.role.permissions
                }
            }
            
          const token = jwt.sign(payload,process.env.SECRET,options)
          res.status(200).json({
            success:true,
            message:"Login successful",
            userToken : token,
            user:found._id
          })    
        }else {
            res.status(404).json({
                success:false,
                message: "Email or password not found"
            })
        }
        // console.log(req); // test
    } else {
        res.status(404).json({
            success:false,
            message: "Email not found"
        })
    }
    
  } catch (error) {
    res.status(403).json({
        success:false,
        message: "forbidden",
        err:error
    })
  }
  
}

module.exports = {
    register,
    login
}