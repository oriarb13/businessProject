import express from "express";
import morgan from "morgan";
import logRequest from "./server/middleware/logger.js";
import projectsRoutes from "./server/routes/projectsRoute.js";
import usersRoutes from "./server/routes/usersRoute.js";
import tasksRoutes from "./server/routes/tasksRoute.js";
import mongoose from "mongoose";
// import authUser from "./middleware/auth.js";

//env
import dotenv from "dotenv"

import cors from 'cors';

// הוסף את CORS אחרי הגדרת האפליקציה

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

app.use(cors());
// console.log(process);  
dotenv.config()  
const uri = process.env.DB_URI;
mongoose.connect(uri)
.then(() => {
  console.log("connected");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:"+`${uri}`, err.message);
});;

// app.use(authUser);
// app.use(express.static("public"));

//check if the server work
app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

//use projects
app.use("/api/projects", projectsRoutes);

//use users
app.use("/api/users", usersRoutes);

//use tasks
app.use("/api/tasks", tasksRoutes);

//
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
