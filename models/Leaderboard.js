const mongoose = require("mongoose");

const { Schema } = mongoose;

const Leaderboard = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Leaderboard", Leaderboard);
