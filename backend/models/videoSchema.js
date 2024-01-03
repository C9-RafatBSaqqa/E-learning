const mongoose = require('mongoose')


const videoModel = new mongoose.Schema({
   name : {type: String, required : true },
   order : [{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
})


module.exports = mongoose.model('Video',videoModel)