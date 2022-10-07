const Leaderboard = require("../models/Leaderboard");
const Pokemons = require("../models/Pokemons");

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find();
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createLeaderboard = async (req, res) => {
  const { id, name, wins } = req.body;
  // console.log(req.body);
  // NACH ID IN DB SUCHEN, WENN GEFUNDEN NUMBER + 1
  try {
    const newLeaderboard = await Leaderboard.create({
      id,
      name,
      wins: 1,
    });
    res.status(201).send("Pokemon wurde in Datenbank gespeichert");
    //console.log(newLeaderboard);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateLeaderbord = async (req, res) => {
  console.log(req.body);
  try {
    Leaderbord.findOneAndUpdate(
      { id: parseInt(req.body.id) },
      // { $set: { id: req.body.id, name: req.body.name } },
      { $inc: { wins: 1 } },
      { new: true },
      (err, Leaderboard) => {
        if (err) {
          res.send(err);
        }
        res.json(Leaderboard);
      }
    );

    // const pokemon = await Pokemons.findById(req.body.id);

    // console.log(pokemon);

    // if (pokemon) {
    //   Leaderboard.updateOne(
    //     { id: req.body.id },
    //     { wins: { $add: ["$wins", 1] } }
    //   );
    // }
  } catch (error) {
    res.send("Etwas lief schief");
  }
};
module.exports = { getLeaderboard, createLeaderboard, updateLeaderbord };
