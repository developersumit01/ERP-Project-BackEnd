const fileS = require("fs");
const path = require("path");
// { userId: '2113001', password: 'Sumit@S123' }
const addNewUserController = (req, res) => {
  const { userRole, recordId, personalInformation, acadmicInformation } =
    req.body;
  console.log("req",req)
  try {
    let studentDataPath = undefined;
    if (userRole === "student") {
      studentDataPath = path.join(
        process.cwd(),
        "DataBase",
        "Students",
        "StudentData.json"
      );
    } else {
      studentDataPath = path.join(
        process.cwd(),
        "DataBase",
        "Teachers",
        "Teacher.json"
      );
    }
    fileS.readFile(studentDataPath, "utf-8", (err, result) => {
      // res.send(JSON.parse(result)[option.toLowerCase()]);
      let data = JSON.parse(result);
      const allRecordOfBranch = data[recordId];
      if (!allRecordOfBranch) {
        console.log(data);
        let tempData = Object.create({});
        tempData[personalInformation["Roll No."].value] = {
          personalInformation: personalInformation,
          acadmicInformation: acadmicInformation,
        };
        data[recordId] = tempData;
        data = JSON.stringify(data);
      }else{
        let tempData = Object.create({});
        tempData = {
          personalInformation: personalInformation,
          acadmicInformation: acadmicInformation,
        };
        data[recordId][personalInformation["Roll No."].value] = tempData;
        data = JSON.stringify(data);
      }
      // fileS.writeFile(studentDataPath, data, (err) => {
      //   if (err) {
      //     res.send(err);
      //   } else {
      //     res.send({ message: "Data Success fully updated" });
      //   }
      // });
    });
    res.send("Data successfuly submited")
  } catch (error) {
    res.send("Internal Server Error");
  }
};

const newUserController = (req, res) => {
  const { option, recordId, branch } = req.query;
  console.log(branch)
  let rollNo;
  const today = new Date();
  const formattedToday = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  try {
    let studentDataPath = path.join(
      process.cwd(),
      "DataBase",
      "Students",
      "StudentData.json"
    );

    fileS.readFile(studentDataPath, "utf-8", (err, result) => {
      let student = JSON.parse(result)[recordId];
      let tempId = "" + recordId;
      if (student) {
        let totalStudents = Object.keys(student).length;

        rollNo =
          tempId[0] +
          tempId[1] +
          (parseInt(tempId[4] + tempId[5]) * 1000 + totalStudents + 1);
      } else {
        rollNo =
          tempId[0] + tempId[1] + (parseInt(tempId[4] + tempId[5]) * 1000 + 1);
      }

      let uewUserDataPath = path.join(
        process.cwd(),
        "DataBase",
        "Admins",
        "NewUser.json"
      );
      fileS.readFile(uewUserDataPath, "utf-8", (err, result) => {
        let responseRollNo = JSON.parse(result)[option.toLowerCase()];
        responseRollNo["personalInformation"]["Roll No."].value = rollNo;
        responseRollNo["personalInformation"]["Branch"].value = branch;
        responseRollNo["acadmicInformation"]["Date of Admission"].value =
          formattedToday;
        let response = responseRollNo;
        // console.log(response);
        res.send(response);
      });
    });
  } catch (error) {
    res.send("Internal Server Error");
  }
};

module.exports = { newUserController, addNewUserController };
