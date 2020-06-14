const router = require("express")();
const exercise = require("../model/exercise");
const { connection } = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const data = await exercise.find();
    res.json(data);
  } catch (err) {
    res.status(400).json("error:" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await exercise.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(400).json("error:" + err);
  }
});

router.post("/add", async (req, res) => {
  const data = req.body;
  data.duration = Number(req.body.duration);
  data.date = Date.parse(req.body.date);
  const newUser = new exercise(data);
  try {
    const save = await newUser.save();
    res.json("exercise added !");
  } catch (error) {
    res.status(400).json("err: " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await exercise.findById(req.params.id);
    const username = data.userName;
    await exercise.findByIdAndDelete(req.params.id);
    res.json("delete " + username + " exercise success !");
  } catch (error) {
    res.status(400).json("error: " + error);
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    const data = req.body;
    const userName = data.userName;
    if (data.duration) data.duration = Number(data.duration);
    if (data.date) data.date = Date.parse(data.date);
    await exercise.findByIdAndUpdate(req.params.id, data);
    res.json("update exercise" + " success !");
  } catch (e) {
    res.json("fail " + e);
  }
});

module.exports = router;
