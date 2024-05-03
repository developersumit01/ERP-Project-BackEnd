let express = require("express");
const fileS = require("fs");
let app = express();
let cors = require("cors");
const loginRouts=require("./Routes/LoginRoues");
const dashboardRoute=require("./Routes/DashboardRoute")
const newUserRoute=require("./Routes/NewUserRoute")
app.use(cors());
app.use(express.json());

app.use("/login",loginRouts)
app.use("/:user/dashboard",dashboardRoute)
app.use("/new",newUserRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
