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
    const parties = await Party.findAll({
      include: {
        model: User,
        where: {
          id: req.params.userId,
        },
      },
    });
    res.json(parties);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newParty = await Party.create(req.body);
    res.send(newParty);
  } catch (error) {
    next(error);
  }
});

router.put("/:partyId/:userId", async (req, res, next) => {
  try {
    const party = await Party.findByPk(req.params.partyId);
    const user = await User.findByPk(req.params.userId);
    await user.addParty(party);
    await party.addUser(user);
    res.send(party);
  } catch (error) {
    next(error);
  }
});
