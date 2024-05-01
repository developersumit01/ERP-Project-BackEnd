const fileS = require("fs");

const loginController = (req, res, user) => {
  try {
    const loginDetails = req.body;
    let auth = undefined;
    fileS.readFile("./DataBase/Authantication.json", "utf-8", (err, result) => {
      auth = JSON.parse(result)[user][loginDetails.userId];
      if (auth && auth.password === loginDetails.password) {
        res.send({ userId: loginDetails.userId, login: true, role: auth.role });
      } else if (auth && auth.password != loginDetails.password) {
        res.send({ login: false, message: "Incorrect password" });
      } else {
        res.send({ login: false, message: "Incorrect user Id and Password" });
      }
    });
  } catch (error) {
    res.send("Internal Server Error");
  }
};

module.exports = { loginController };
