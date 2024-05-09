
const routes=require("express").Router()

const userController=require("../Controllers/userController")

routes.post("/allUsers",userController.getAllUsers)
routes.post("/register",userController.register)
routes.post("/login",userController.login)

module.exports=routes