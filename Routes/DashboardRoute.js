const express=require("express");
const dashboardController = require("../Controllers/DashboardController");
const deshboardRoute=express.Router();

deshboardRoute.get("/",(req,res)=>{
      dashboardController(req,res);
})

module.exports=deshboardRoute;