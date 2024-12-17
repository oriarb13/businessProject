import express from "express";
import morgan from "morgan";
import logRequest from "./middleware/logger.js";
import jokesRoutes from "./routes/jokesRoute.js";
import namesRoutes from "./routes/usersRoute.js";
import productsRoutes from "./routes/productsRoute.js";
import mongoose from "mongoose";
// import authUser from "./middleware/auth.js";

//env
import dotenv from "dotenv"

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

console.log(process);  
dotenv.config()  //מושך את האיאנוי
const uri = process.env.DB_URI; //משתמש ב אי אן וי
mongoose.connect(uri).then(() => {
  console.log("connected");
});

// app.use(authUser);
// app.use(express.static("public"));

//check if the server work
app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

//use joke
app.use("/api/joke", jokesRoutes);

//use name
app.use("/api/name", namesRoutes);

//use product
app.use("/api/product", productsRoutes);

//
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
