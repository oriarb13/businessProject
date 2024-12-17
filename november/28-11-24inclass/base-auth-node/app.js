const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();

const userModel = require("./models/User.js");

const PORT = 3000;
const saltRounds = 10;
const hashKey = "PeogG3lBZpSErxuBgrAA0Y6ermcD04XGGeTn7uUYfLvOFEvdaW";

// Middle
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend's origin
    credentials: true, // Enable credentials (cookies, etc.)
  })
);

console.log(userModel);

// Connect To mongoDB
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("Succefully Connected to DB");
});

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello from the server!",
  });
});

app.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(userPassword);

    const hashedPassword = await bcrypt.hash(password + hashKey, saltRounds);

    // Add New User to the DB:
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // console.log("Success Save");

    return res.status(201).send({
      message: "your are one of us",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;

    // You task to first find the user in the DB
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "no such a user",
      });
    }

    const isCorrectPassword = await bcrypt.compare(
      password + hashKey,
      user.password
    );

    if (isCorrectPassword) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;

      const token = jwt.sign(
        {
          email: user.email,
          username: user.username,
        },
        jwtSecretKey,
        { expiresIn: "1h" }
      );

      res.cookie("jwt", token, {
        httpOnly: false, // Prevents JavaScript access to the cookie
        secure: true,
        sameSite: "strict", // Protects against CSRF
        maxAge: 3600000, // 1 hour in milliseconds
      });
      res.json({ message: "Logged in successfully" });
    } else {
      return res.status(401).send({
        error: "Error",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users/get-self", async (req, res) => {
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    const token = req.headers.authorization.split(" ")[1];
    // verify a token symmetric
    const decoded = await jwt.verify(token, jwtSecretKey);
    res.send(decoded)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    // Get Params:
    const { id } = req.params;
    res.send({
      id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
