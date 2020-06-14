const router = require("express")();
const user = require("../model/user");
const { connection } = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const data = await user.find();
    res.json(data);
  } catch (err) {
    res.status(400).json("error:" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await user.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(400).json("error:" + err);
  }
});

router.post("/add", async (req, res) => {
  const data = req.body;

  const newUser = new user(data);
  try {
    const save = newUser.save();
    res.json("user added !");
  } catch (error) {
    res.status(400).json("err:" + err);
  }
});

module.exports = router;
