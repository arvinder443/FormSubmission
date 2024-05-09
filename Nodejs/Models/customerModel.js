
const mongoose=require("mongoose")
const customerSchema=new mongoose.Schema({
 name:{type:String,default:""},
 email:{type:String,default:""},
 password:{type:String,default:""},
 city:{type:String,default:""},
 number:{type:Number,default:""},
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",default:null},
 status:{type:Boolean,default:false},
 createdAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model("Customer",customerSchema)