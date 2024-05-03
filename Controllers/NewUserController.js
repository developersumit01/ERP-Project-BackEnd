const fileS = require("fs");
const path = require("path");
// { userId: '2113001', password: 'Sumit@S123' }
const newUserController = (req, res) => {
  try {
    let studentDataPath = path.join(
      process.cwd(),
      "DataBase",
      "Students",
      "StudentData.json"
    );
    fileS.readFile(studentDataPath, "utf-8", (err, result) => {
      // res.send(JSON.parse(result)[option.toLowerCase()]);
      let data=JSON.parse(result);
      fileS.writeFile(studentDataPath,data,err=>{
        if(err){
          res.send(err);
        }else{
          res.send({message:"Data Success fully updated"});
        }
      })
    });
  } catch (error) {
    res.send("Internal Server Error");
  }
};

module.exports=newUserController;