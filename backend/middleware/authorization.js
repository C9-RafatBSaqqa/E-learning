const authorization = (text) => {
    return(req,res,next) => {
        if (req.token.role.permissions.includes(text)){
            next()
        } else {
            res.status(403).json({
                success:false,
                message: 'Unauthorized'
            })
        }
    }
}


module.exports = authorization