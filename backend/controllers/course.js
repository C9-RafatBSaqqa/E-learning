const courseModel = require('../models/courseSchema')


// This function create new course
const createNewCourse = async (req, res) => {
    const { image, title, description, price, category, authorizedUsers, video } = req.body;

    courseModel({
        image,
        title,
        description,
        price,
        category,
        owner: req.token.id,
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
        const found = await courseModel.find({ category: categoryId })
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
    courseModel.findOne({ _id: courseId })
        .then((owner) => {
            if (req.token.id == owner.owner) {
                courseModel.findByIdAndUpdate({ _id: courseId }, req.body, { new: true })
                    .then((result) => {
                        res.status(200).json({
                            success: true,
                            message: "Course updated successfuly",
                            done: result
                        })
                    })
                    .catch((err) => {
                        res.status(404).json({
                            success: false,
                            message: "Server error",
                            error: err
                        })
                    })
            } else {
                res.status(403).json({
                    success:false,
                    message: "unaothorized to this course"
                })
            }
        })
        .catch((err) => {
            res.status(404).json({
                success:false,
                message: "server error",
                error:err
            })
        })

}

// This function delete course by id
const deleteCourseById = async (req, res) => {
    const {courseId} = req.params
    courseModel.findOne({ _id: courseId }).then((owner) => {
        if (req.token.id == owner.owner) {
            courseModel.findOneAndDelete({ _id: courseId })
            .then((deleted) => {
               if (deleted) {
                   res.status(200).json({
                       success: true,
                       message: "Course deleted successfuly",
                       done: deleted
                   })
               } else {
                   res.status(404).json({
                       success: false,
                       message: "Not found",
                   })
               }
            })
            .catch((err) => {
               res.status(404).json({
                   success: false,
                   message: "server error",
                   error: err
               })
            })
        } else {
            res.status(403).json({
                success:false,
                message : "unauthorized to this course",
            })
        }
    })

        
        

   

}

module.exports = {
    createNewCourse,
    getAllCourseByCategoryId,
    updateCourseById,
    deleteCourseById
}