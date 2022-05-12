const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const cors = require("cors");

const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 9000);

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password@123",
  database: "library",
};

//Middleware
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());

//Routes
app.use("/", routes);
app.use("/api", routes);

//Server Running
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
