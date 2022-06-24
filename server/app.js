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

//3001
const port = process.env.PORT;

//Require Model
const Users = require("./models/userShema");
const Message = require("./models/msgShema");

//This method is used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Reqistration
app.post("/register", async (req, res) => {
  try {
    //Get body or data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const createUser = new Users({
      username: username,
      email: email,
      password: password,
    });
    //save method is used to create user or insert user
    //but before savig or inserting, pass will hash
    //after hash, it till save to db
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

//Login
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Find user if exist
    const user = await Users.findOne({ email: email });
    if (user) {
      // Verify password
      const isMatch = await bcryptjs.compare(password, user.password);

      if (isMatch) {
        // Generate token which is define in user schema
        const token = await user.generateToken();
        res.cookie("jwt", token, {
          // Expires token in 24 h
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
        res.status(200).send("LoggedIn");
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//Message
app.post("/message", async (req, res) => {
  try {
    //Get body or data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      message: message,
    });
    //save method is used to create user or insert user
    //but before savig or inserting, pass will hash
    //after hash, it till save to db
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Message sent");
  } catch (error) {
    res.status(400).send(error);
  }
});

//Run server

app.listen(port, () => {
  console.log("Server is listening");
});
