require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const uri = process.env.ATLAST_URI;
const port = process.env.PORT || 3000;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connect atlas !");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
const userRouter = require("./routes/user");
const exerciseRouter = require("./routes/exercise");

// use router
app.use("/users", userRouter);
app.use("/exercises", exerciseRouter);

app.use("/", (req, res) => {
  res.json("connect to server");
});
app.listen(port);
