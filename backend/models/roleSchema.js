const mongoose = require('mongoose')


const roleModel = new mongoose.Schema({
   role : {type: String, required : true },
   permissions : [{type: String, required : true}]
})


module.exports = mongoose.model('Role',roleModel)