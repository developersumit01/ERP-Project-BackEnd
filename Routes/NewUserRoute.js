const express=require("express");
const newUserRoute=express.Router();
const newUserController=require("../Controllers/NewUserController")

newUserRoute.post("/student",(req,res)=>{
      
});
newUserRoute.post("/teacher",(req,res)=>{
      console.log("Student Added");
      res.send("seccess");
})

module.exports=newUserRoute;