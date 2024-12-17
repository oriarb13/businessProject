import express from "express";
import morgan from "morgan";
import logRequest from "./middleware/logger.js";
import jokesRoutes from "./routes/jokesRoute.js";
import namesRoutes from "./routes/usersRoute.js";
import productsRoutes from "./routes/productsRoute.js";
// import authUser from "./middleware/auth.js";
import mongoose from "mongoose"
import Joke from './models/jokeModel.js';


//connect atlas
const uri = "mongodb+srv://oriarb13690:oriarb13690@cluster0.ys1qc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri).then(()=>{
    console.log("connected");
    
})


const app = express();
const PORT = 3000;
app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

// app.use(authUser);
// app.use(express.static('public'));

//check if the server work
app.get("/api/status", (req, res) => {
    res.send({ status: "server is running" });
});

//get random
app.use("/api/joke", jokesRoutes);

app.use("/api/name", namesRoutes);

app.use("/api/product", productsRoutes);

//general delete
function deleteById(id, db) {
  const dbIndex = db.findIndex((currentObg) => currentObg.id === id);
  if (dbIndex === -1) {
    return true;
  }
  db.splice(dbIndex, 1);
}




//
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export { deleteById };
