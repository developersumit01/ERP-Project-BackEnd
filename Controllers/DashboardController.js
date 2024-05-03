const fileS = require("fs");
const path = require("path");
// { userId: '2113001', password: 'Sumit@S123' }
const studentDashboardController = (req, res) => {
  try {
    const loginDetails = req.query;
    const year = loginDetails.userId[0] + loginDetails.userId[1];
    const branch = loginDetails.userId[2] + loginDetails.userId[3];
    const session = year + (parseInt(year) + 1) + branch;
    let studentDataPath = path.join(
      process.cwd(),
      "DataBase",
      "Students",
      "StudentData.json"
    );
    fileS.readFile(studentDataPath, "utf-8", (err, result) => {
      res.send(JSON.parse(result)[session][loginDetails.userId]);
    });
  } catch (error) {
    res.send("Internal Server Error");
  }
};
const othersDashboardController = (req, res, role) => {
  const { userId } = req.query;
  let newUserId = undefined;
  let dataBaseFileName = undefined;
  if (role === "teacher") {
    newUserId = userId.replace("T", "");
    dataBaseFileName = path.join(
      process.cwd(),
      "DataBase",
      "Teachers",
      "TeachersData.json"
    );
  } else {
    newUserId = userId;
    dataBaseFileName = path.join(
      process.cwd(),
      "DataBase",
      "Admins",
      "Admin.json"
    );
  }
  try {
    fileS.readFile(dataBaseFileName, "utf-8", (err, result) => {
      console.log(result[newUserId])
      res.send(JSON.parse(result)[newUserId]);
    });
  } catch (error) {
    res.send("Internal Server Error");
  }
};
module.exports = { studentDashboardController, othersDashboardController };
