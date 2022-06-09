const router = require("express").Router();
const {
  models: { Game, User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const games = await Game.findAll({
      include: {
        model: User,
        where: {
          id: req.params.userId,
        },
      },
    });
    res.json(games);
  } catch (err) {
    next(err);
  }
});

router.post("/addGame/:userId", async (req, res, next) => {
  try {
    const newGame = await Game.create(req.body);
    const user = await User.findByPk(req.params.userId);
    await user.addGame(newGame);
    await newGame.addUser(user);
    res.send(newGame);
  } catch (err) {
    next(err);
  }
});

router.put("/add/:userId/:gameId", async (req, res, next) => {
  try {
    const game = await Game.findByPk(req.params.gameId);
    const user = await User.findByPk(req.params.userId);
    await game.addUser(user);
    await user.addGame(game);
    res.send(game);
  } catch (error) {
    next(error);
  }
});

router.put("/remove/:userId/:gameId", async (req, res, next) => {
  try {
    const game = await Game.findByPk(req.params.gameId);
    const user = await User.findByPk(req.params.userId);
    await game.removeUser(user);
    await user.removeGame(game);
    res.send(game);
  } catch (error) {
    next(error);
  }
});
