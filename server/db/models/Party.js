const Sequelize = require("sequelize");
const db = require("../db");

const Party = db.define("party", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE,
  },
  recommendedGames: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Party;
