// ALL POKEMONS
const Pokemons = require("../models/Pokemons");
const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemons.find();
    res.status(200).json(pokemons);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// POKEMON BY ID
const getSinglePokemon = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await Pokemons.findById(id);
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createPokemon = async (req, res) => {
  const { name, type, base, sp } = req.body;
  try {
    const newPokemon = await Pokemons.create({
      name,
      type,
      base,
      sp,
    });
    res.status(201).json(newPokemon);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = { getAllPokemons, getSinglePokemon, createPokemon };
