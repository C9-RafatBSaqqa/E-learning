const mongoose = require('mongoose')


const courseModel = new mongoose.Schema({
   image : {type: String, required : true },
   title : {type: String, required : true ,unique:true},
   description : {type: String, required : true},
   price : {type: Number,required:true},
   category : {type:mongoose.Schema.Types.ObjectId,ref:'Category'},
   owner : {type:mongoose.Schema.Types.ObjectId,ref:'User'},
   authorizationUser : [{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
   video : [{type:mongoose.Schema.Types.ObjectId,ref:'Video'}]
})


module.exports = mongoose.model('Course',courseModel);
