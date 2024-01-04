const courseSchema = require('../models/courseSchema')
const   {jwtDecode}  = require("jwt-decode");

// This function create new course
const createNewCourse = async (req,res) => {
     const {image,title,description,price,category,authorizedUsers,video} = req.body;
     const decoded = jwtDecode(req.headers.authorization)
     courseSchema({
        image,
        title,
        description,
        price,
        category,
        owner:decoded.id,
        authorizedUsers,
        video
     })
     .save()
     .then((result) => {
        res.status(200).json({
            success:true,
            message:"Course added successfuly",
            course : result
        })
     })
     .catch((err) => {
        res.status(404).json({
            success:false,
            message:"server error",
            error:err
        })
     })
}



module.exports = {
    createNewCourse
}