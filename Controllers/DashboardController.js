const fileS = require("fs");
// { userId: '2113001', password: 'Sumit@S123' }
const dashboardController = (req, res) => {
  try {
    console.log(req);
    const loginDetails = req.query;
    const year = loginDetails.userId[0] + loginDetails.userId[1];
    const branch = loginDetails.userId[2] + loginDetails.userId[3];
    const session = year + (parseInt(year) + 1) + branch;
    fileS.readFile(
      "./DataBase/Students/StudentData.json",
      "utf-8",
      (err, result) => {
        res.send(JSON.parse(result)[session][loginDetails.userId]);
      }
    );
  } catch (error) {
    res.send("Internal Server Error");
  }
};

module.exports = dashboardController;
