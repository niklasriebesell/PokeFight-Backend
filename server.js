const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.envPORT || 8080;
const Pokemons = require("./pokeFight.json");
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

app.get("/Pokemon", (req, res) => {
  res.send({ Pokemons });
});

app.get("/Pokemon/:id", (req, res) => {
  res.send(req.params.id);
});
