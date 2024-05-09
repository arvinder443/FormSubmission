
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/formSubmission")
.then(dbConnect=>{
    console.log("Db connected succesfully");
})
.catch(err=>{
    console.log("Error connecting db",err)
})