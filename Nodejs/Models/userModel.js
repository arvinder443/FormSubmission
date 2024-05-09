
const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
 name:{type:String,default:""},
 email:{type:String,default:""},
 password:{type:String,default:""},
 userType:{type:Number,default:2},//1 is for admin and 2 is for customers
 status:{type:Boolean,default:false},
 createdAt:{type:Date,default:Date.now()}

})

module.exports=mongoose.model("User",userSchema)