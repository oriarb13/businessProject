import express from "express";
import fs from "fs/promises";
import { deleteById } from "../app.js";

// import authUser from "../middleware/auth.js";

import names from "../db/names.json" assert { type: "json" };
const router = express.Router();
// router.use(authUser);

router.get("/", (req, res) => {
  res.send(names);
});

router.get("/random", (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  res.status(201).send(randomName);
});

router.get("/:id", (req, res) => {
  const id = +req.params["id"];
  const data = names.find((name) => name.id === id);
  if (data) {
    res.status(201).send(data);
  }
  res.status(404).send({
    error: "id not found",
  });
});

router.post("/", (req, res) => {
  const newName = req.body;
  const { id, name } = newName;

  if (!id || !name) {
    return res.status(400).json({ error: "id and name are required" });
  }
  names.push(newName);
  fs.writeFile("db/names.json", JSON.stringify(names, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
  });
  res
    .status(201)
    .send({ message: "name added", newName: newName, names: names });
});

router.patch("/:id", (req, res) => {
  const idPar = +req.params["id"];
  const nameIndex = names.findIndex((name) => name.id === idPar);
  if (nameIndex === -1) {
    return res.status(401).send({ error: "id not found" });
  }
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: "id and name are required" });
  }
  names[nameIndex] = { ...req.body };
  fs.writeFile("db/names.json", JSON.stringify(names, null, 2));
  res
    .status(201)
    .send({ message: "name updated successfully", name: names[nameIndex] });
});

router.delete("/api/name/:id", (req, res) => {
  const id = +req.params["id"];
  if (deleteById(id, names)) {
    res.send({ error: "name not found" });
  }
  fs.writeFile("db/names.json", JSON.stringify(names, null, 2));
  res.send({ message: "removed successfully", remainNames: names });
});

export default router;
