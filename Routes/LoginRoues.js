const express = require("express");
const loginRouts = express.Router();

const { loginController } = require("../Controllers/LoginController");

loginRouts.post("/", function (req, res) {
  loginController(req, res, "student");
});
loginRouts.post("/admin", function (req, res) {
  loginController(req, res, "admin");
});
loginRouts.post("/teacher", function (req, res) {
  loginController(req, res, "teacher");
});

module.exports = loginRouts;
