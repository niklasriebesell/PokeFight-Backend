const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.envPORT || 8080;
const connect = require("./mongoDB");
const pokeRouter = require("./routes/pokemon");
const LeaderboardRouter = require("./routes/leaderboard");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
connect();

// STARTSEITE
app.get("/", (req, res) => {
  res.send("Willkommen auf PokeFight");
});
// GET ALLES POKEMONS
app.use("/pokemons", pokeRouter);
// GET POKEMON BY ID
app.use("/pokemons/:id", pokeRouter);
//GET ALL DATA FROM LEADERBOARD
app.use("/leaderboard", LeaderboardRouter);
//CREATE LEADERBOARD ENTRIES
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
