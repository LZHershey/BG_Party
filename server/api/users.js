const router = require("express").Router();
const { Op } = require("sequelize");
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/username/:username", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/:username/friends", async (req, res, next) => {
  try {
    const friends = await User.findAll({
      attributes: ["id", "username", "displayName"],
      where: {
        friendUsernames: {
          [Op.contains]: [req.params.username],
        },
      },
    });
    res.json(friends);
  } catch (err) {
    next(err);
  }
});

router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.send(await user.update(req.body));
  } catch (error) {
    console.log(error);
  }
});
