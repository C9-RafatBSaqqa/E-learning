const courseSchema = require('../models/courseSchema')
const { jwtDecode } = require("jwt-decode");

// This function create new course
const createNewCourse = async (req, res) => {
    const { image, title, description, price, category, authorizedUsers, video } = req.body;
    const decoded = jwtDecode(req.headers.authorization)
    courseSchema({
        image,
        title,
        description,
        price,
        category,
        owner: decoded.id,
        authorizedUsers,
        video
    })
        .save()
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "Course added successfuly",
                course: result
            })
        })
        .catch((err) => {
            res.status(404).json({
                success: false,
                message: "server error",
                error: err
            })
        })
}

// This function get all course by category id
const getAllCourseByCategoryId = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const found = await courseSchema.find({ category: categoryId })
        if (found) {
            res.status(200).json({
                success: true,
                message: "Al courses",
                result: found
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Not found"
            })
        }
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "server error",
            result: error
        })
    }

}

// this function update course by id 
const updateCourseById = (req, res) => {
    const { courseId } = req.params;
    // const decoded = jwtDecode(req.headers.authorization)
    // console.log(decoded.id);
        courseSchema.findByIdAndUpdate({ _id: courseId}, req.body, { new: true })
        .then((result) => {
            res.status(200).json({
                success:true,
                message:"Course updated successfuly",
                done:result
            })
        })
        .catch((err) => {
            res.status(404).json({
                success:false,
                message: "Server error",
                error:err
            })
        })
}

// This function delete course by id
const deleteCourseById = async (req,res) => {
    const courseId = req.params.courseId
    try {
        const deleted = await courseSchema.findOneAndDelete({_id:courseId})
        res.status(200).json({
            success:true,
            message : "Course deleted successfuly",
            done:deleted
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message : "server error",
            err:error
        })
    }
   
}

module.exports = {
    createNewCourse,
    getAllCourseByCategoryId,
    updateCourseById,
    deleteCourseById
}