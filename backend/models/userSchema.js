const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userModel = new mongoose.Schema({
   name : {type: String, required : true },
   email : {type: String, required : true ,unique:true},
   password : {type: String, required : true},
   phoneNumber : {type: Number},
   age : {type: Number},
   country : {type: String},
   role : {type:mongoose.Schema.Types.ObjectId,ref:'Role'},
})

userModel.pre('save', async function() {
   this.email = this.email.toLowerCase()
   try {
      this.password = await bcrypt.hash(this.password,7)
   } catch (error) {
      console.log(error);
   }
  
})


module.exports = mongoose.model('User',userModel)