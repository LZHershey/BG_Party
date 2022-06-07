const Sequelize = require("sequelize");
const db = require("../db");

const Game = db.define("game", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  minPlayers: {
    type: Sequelize.INTEGER,
  },
  maxPlayers: {
    type: Sequelize.INTEGER,
  },
  imgUrl: {
    type: Sequelize.STRING,
    // cannot access - need to figure out
    // defaultValue: "../../public/board-game.png",
  },
  duration: {
    type: Sequelize.ENUM("30-60 min", "1-2 hrs", "2-3 hrs", "3+ hrs"),
  },
  playStyle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  complexity: {
    type: Sequelize.ENUM("easy", "moderate", "complex"),
  },
});

module.exports = Game;
