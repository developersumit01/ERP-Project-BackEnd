const express = require("express");
const loginRouts = express.Router();

const { loginController } = require("../Controllers/LoginController");

loginRouts.post("/", function (req, res) {
  loginController(req, res, "students");
});
loginRouts.post("/admin", function (req, res) {
  loginController(req, res, "admins");
});
loginRouts.post("/teacher", function (req, res) {
  loginController(req, res, "teachers");
});

module.exports = loginRouts;
