const db = require("./db");
const User = require("./models/User");
const Game = require("./models/Game");
const Party = require("./models/Party");

User.belongsToMany(Game, { through: "userGames" });
Game.belongsToMany(User, { through: "userGames" });
User.belongsToMany(Party, { through: "partyUsers" });
Party.belongsToMany(User, { through: "partyUsers" });

module.exports = {
  db,
  models: {
    User,
    Game,
    Party,
  },
};
