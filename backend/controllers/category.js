const categorySchema = require('../models/categorySchema')


// This function to create new category
const createNewCategory = (req, res) => {
    const name = req.body.name
     categorySchema({
        name
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


module.exports = {
    createNewCategory
}