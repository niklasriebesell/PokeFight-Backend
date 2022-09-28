const express = require("express");
//controllers
const {
  getAllPokemons,
  getSinglePokemon,
  createPokemon,
} = require("../controllers/pokemons");

const pokeRouter = express.Router();
//GET ALL POKEMONS
pokeRouter.route("/").get(getAllPokemons).post(createPokemon);
// GET SINGLE POKEMON BY ID
pokeRouter.route("/:id").get(getSinglePokemon);

module.exports = pokeRouter;
