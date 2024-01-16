const jwt = require("jsonwebtoken");
const authentication = (req,res,next) => {
  try {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(" ").pop();
         jwt.verify(token,process.env.SECRET , (error,pass) => {
            if(pass) {
                req.token = pass;
                next();
            } else {
                res.status().json({
                    success:false,
                    message:error
                })
            }
         })

    }else {
        res.status(404).json({
            success:false,
            message: "Token Not found"
        })
    }
  } catch (error) {
    res.status(404).json({
        success:false,
        message: "server error",
        err: error.message
    })
  }
    
}

module.exports = authentication;