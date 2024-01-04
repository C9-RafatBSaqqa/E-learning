const mongoose = require('mongoose')


const categoryModel = new mongoose.Schema({
   image:{type:String,required:true},
   name : {type: String, required : true ,unique:true},

})

categoryModel.pre('save' , function()  {
  this.name = this.name.toLowerCase()
})


module.exports = mongoose.model('Category',categoryModel)