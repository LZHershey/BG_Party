"use strict";

const {
  db,
  models: { User, Game, Party },
} = require("../server/db");

const users = [
  {
    username: "laurenzh",
    password: "123",
    displayName: "LZ",
    durationPref: "30-60 min",
    playPref: ["deck-building", "strategy", "party"],
    complexityPref: "easy",
    friendUsernames: ["dmakian"],
  },
  {
    username: "dmakian",
    password: "123",
    displayName: "David",
    durationPref: "3+ hrs",
    playPref: ["drafting", "engine-building", "area-control"],
    complexityPref: "complex",
    friendUsernames: ["laurenzh"],
  },
  {
    username: "mred",
    password: "123",
    displayName: "Maria",
    durationPref: "1-2 hrs",
    playPref: ["campaign", "deck-building", "engine-building"],
    complexityPref: "moderate",
  },
  {
    username: "mikwa",
    password: "123",
    displayName: "Mikwa",
    durationPref: "3+ hrs",
    playPref: ["deck-building", "engine-building", "area-control"],
    complexityPref: "complex",
  },
];

const games = [
  {
    name: "Terraforming Mars",
    minPlayers: 1,
    maxPlayers: 5,
    duration: "3+ hrs",
    playStyle: ["engine-building", "area-control"],
    complexity: "complex",
  },
  {
    name: "Spirit Island",
    minPlayers: 1,
    maxPlayers: 4,
    duration: "1-2 hrs",
    playStyle: ["co-op", "strategy"],
    complexity: "complex",
  },
  {
    name: "Dumb Ass",
    minPlayers: 2,
    maxPlayers: 4,
    duration: "30-60 min",
    playStyle: ["party"],
    complexity: "easy",
  },
  {
    name: "Clank",
    minPlayers: 2,
    maxPlayers: 4,
    duration: "30-60 min",
    playStyle: ["deck-building", "strategy"],
    complexity: "moderate",
  },
  {
    name: "Wingspan",
    minPlayers: 1,
    maxPlayers: 5,
    duration: "30-60 min",
    playStyle: ["engine-building", "strategy"],
    complexity: "moderate",
  },
  {
    name: "Root",
    minPlayers: 2,
    maxPlayers: 4,
    duration: "1-2 hrs",
    playStyle: ["wargames", "strategy"],
    complexity: "complex",
  },
];

const parties = [
  {
    name: "Friday Game Night",
    location: "Mike & Maria's Apartment",
    date: new Date("June 10, 2022 18:00"),
    host: "mikwa",
  },
  {
    name: "Board Game Date Night",
    location: "Lauren & David's Home",
    date: new Date("June 12, 2022 19:00"),
    host: "dmakian",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [lauren, david, maria, mike] = await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    const [terraforming, spiritIsland, dumbAss, clank, wingspan, root] =
      await Promise.all(
        games.map((game) => {
          return Game.create(game);
        })
      );
    const [fridayNight, dateNight] = await Promise.all(
      parties.map((party) => {
        return Party.create(party);
      })
    );

    await lauren.addGames([terraforming, dumbAss]);
    await david.addGames([spiritIsland]);
    await maria.addGames([root, clank]);
    await mike.addGames([wingspan]);
    await fridayNight.addUsers([lauren, david, maria, mike]);
    await dateNight.addUsers([lauren, david]);
  } catch (error) {
    console.log(error);
  }
};

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
