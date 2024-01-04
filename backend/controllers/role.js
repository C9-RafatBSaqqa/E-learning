const roleModel = require('../models/roleSchema')



// This function add New Role 
const addNewRole = (req, res) => {
    const { role, permissions } = req.body
    const newRole = roleModel({
        role,
        permissions
    })
        .save()
        .then(result =>
            res.status(200).json({
                success: true,
                message: "Role added",
                role: result,
            })
        ).catch(err =>
            res.status(404).json({
                success: false,
                message: "server error",
                error: err
            })
        )

}


module.exports = {
    addNewRole,
}