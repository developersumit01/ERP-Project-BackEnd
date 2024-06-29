const fileS = require("fs");
const path = require("path");

const loginController = (req, res, user) => {
  try {
    const loginDetails = req.body;
    let auth = undefined;
    let authanticationPath = path.join(process.cwd(),'DataBase', 'Authantication.json');
    fileS.readFile(authanticationPath, "utf-8", (err, result) => {
      auth = JSON.parse(result)[user][loginDetails.userId];
      if (auth && auth.password === loginDetails.password) {
        res.send({ userId: loginDetails.userId, login: true, role: auth.role,name: auth.name});
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
