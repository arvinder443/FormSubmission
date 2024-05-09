
const User=require("../Models/userModel")
const bcrypt=require("bcrypt")

exports.admin=(req,res)=>{
User.findOne({email:"adminf9@gmail.com"})
.then(adminObj=>{
    if(adminObj==null){
        //insert
        let adminObj=new User()
        adminObj.name="admin"
        adminObj.email="adminf9@gmail.com"
        adminObj.password=bcrypt.hashSync("123",10)
        adminObj.userType=1
        adminObj.save()
        console.log("Admin registered");

    }
    else{
        console.log("Admin already exists");
    }
})
} 