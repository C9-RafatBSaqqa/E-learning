const mongoose = require('mongoose')


const userModel = new mongoose.Schema({
   name : {type: String, required : true },
   email : {type: String, required : true ,unique:true},
   password : {type: String, required : true},
   phoneNumber : {type: Number},
   age : {type: Number},
   country : {type: String},
   role : {type:mongoose.Schema.Types.ObjectId,ref:'Role'},
})


module.exports = mongoose.model('User',userModel)