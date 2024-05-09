
const express=require("express")
const index=express()
require("./config/db")
index.use(express.urlencoded({extended:true}))
const admin=require("./config/admin")
admin.admin()
const route=require("./Routes/route")
index.use("/user",route)

index.listen(6500,()=>{
    console.log("Port number is 6500");
})