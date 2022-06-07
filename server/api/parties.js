const router = require("express").Router();
const {
  models: { Party, Game, User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const games = await Party.findAll();
    res.json(games);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const games = await Party.findAll({
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
