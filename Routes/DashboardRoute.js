const express = require("express");
const {
  studentDashboardController,
  othersDashboardController,
} = require("../Controllers/DashboardController");
const deshboardRoute = express.Router();

deshboardRoute.get("/", (req, res) => {
      const {role}=req.query;
  if (req.query.role === "admin") {
        othersDashboardController(req, res, role);
} else if (req.query.role === "teacher") {
      othersDashboardController(req, res, role);
} else if (req.query.role === "student") {
        studentDashboardController(req, res);
  } else {
    res.send({ message: "Invalid User" });
  }
});

module.exports = deshboardRoute;
