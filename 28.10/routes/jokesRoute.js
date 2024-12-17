import express from "express";
import { deleteById } from "../app.js";
import fs from "fs/promises";
// import authUser from "../middleware/auth.js";

//import schema
import  from './models/jokeModel.js';



// Dummy DB Import
import jokes from "../db/jokes.json" assert { type: "json" };
const router = express.Router();
// router.use(authUser);

// Jokes Routes
router.get("/", (req, res) => {
  res.send(jokes);
});

router.get("/random", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});Joke

router.get("/:id", (req, res) => {
  const id = +req.params["id"];
  const data = jokes.find((joke) => joke.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "error",
  });
});
////////////////////////////////////////
router.post("/",async (req, res) => {
//     const newJoke = new Joke({
//       joke: req.body.joke,
//     content: req.body.content,
//     })

//     await newJoke.save()

//     res.send({
//       msg: "Good Job!"
//     })
// })
///////////////////////////////////////////

  const newJoke = req.body;
  const { id, joke } = newJoke;

  if (!id || !joke) {
    return res.status(400).json({ error: "id and joke are required" });
  }
  jokes.push(newJoke);
  fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
  });
  res.status(201).json({ message: "joke added", jokes: jokes });
});

router.patch("/:id", (req, res) => {
  const id = +req.params["id"];
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);
  if (jokeIndex === -1) {
    return res.send({ error: "Joke not found" });
  }
  jokes[jokeIndex] = { ...req.body };
  fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2));
  res.send({ message: "Joke updated successfully", joke: jokes[jokeIndex] });
});

router.delete("/:id", (req, res) => {
  const id = +req.params["id"];
  if (deleteById(id, jokes)) {
    res.send({ error: "joke not found" });
  }
  fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2));
  res.send({ message: "removed successfully", remainJokes: jokes });
});

export default router;
