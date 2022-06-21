//import all dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

//Configure ENV File & Require Connection File

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//run server on :3001

app.listen(3001, () => {
  console.log("Server is listening");
});
