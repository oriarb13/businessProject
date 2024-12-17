import express from "express";
import morgan from "morgan";
import logRequest from "./server/middleware/logger.js";
import usersRoutes from "./server/routes/usersRoute.js";

import mongoose from "mongoose";

//env
import dotenv from "dotenv"

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

//connect to mongo db
dotenv.config()  
const uri = process.env.DB_URI;
mongoose.connect(uri)
.then(() => {
  console.log("connected");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:"+`${uri}`, err.message);
});;


//check if the server work
app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});


//use users
app.use("/api/users", usersRoutes);


//
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
