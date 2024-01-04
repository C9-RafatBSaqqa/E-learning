const categoryModel = require('../models/categorySchema')


// This function to create new category
const createNewCategory = (req, res) => {
  
    const {name, image} = req.body;
    categoryModel({
        name,
        image
    })
        .save()
        .then((result) =>
            res.status(200).json({
                success: true,
                message: "Category added successfuly",
                cate: result
            })
        )
        .catch((err) =>
            res.status(404).json({
                success: true,
                message: "server error",
                error: err
            }))
}

// this function get all category
const getAllCategory = async (req,res) => {
    try {
        const found = await categoryModel.find({})
        res.status(200).json({
            success:true,
            message:"All categorys",
            result: found
        })
    } catch (error) {
        res.status(403).json({
            success:false,
            message:"Server error",
            result: error
        })
    }
    
}

module.exports = {
    createNewCategory,
    getAllCategory
}