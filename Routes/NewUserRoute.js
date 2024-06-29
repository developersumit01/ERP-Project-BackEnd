const express=require("express");
const newUserRoute=express.Router();
const {newUserController,addNewUserController}=require("../Controllers/NewUserController")

newUserRoute.post("/student",(req,res)=>{
      console.log("student route is called")
      addNewUserController(req,res);
});
newUserRoute.get("/",(req,res)=>{
      console.log("/ route is called")
      newUserController(req,res);
});
newUserRoute.post("/teacher",(req,res)=>{
      console.log("Student Added");
      res.send("seccess");
})

module.exports=newUserRoute;