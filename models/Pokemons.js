const mongoose = require("mongoose");

const { Schema } = mongoose;

const Pokemon = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: Object,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  base: {
    type: Object,
    required: true,
    sp: {
      type: Object,
      required: true,
    },
  },
});

module.exports = mongoose.model("Pokemons", Pokemon);
