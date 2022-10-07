const express = require("express");
//controllers
const {
  createLeaderboard,
  getLeaderboard,
  updateLeaderbord,
} = require("../controllers/leaderboard");

const LeaderboardRouter = express.Router();
//GET ALL Leaderboard Entries
LeaderboardRouter.route("/")
  .get(getLeaderboard)
  .post(createLeaderboard)
  .put(updateLeaderbord);

module.exports = LeaderboardRouter;
