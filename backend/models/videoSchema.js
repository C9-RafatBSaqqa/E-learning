const mongoose = require('mongoose')


const videoModel = new mongoose.Schema({
   url : {type: String, required : true },
   order : [{type:Number,required:true}],
   createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
   courseId:{type:mongoose.Schema.Types.ObjectId,ref:'Course'}
})


module.exports = mongoose.model('Video',videoModel)