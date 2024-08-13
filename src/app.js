const express = require("express");
const price = require("./routes/price.route.js");

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API functioning well");
});

app.use("/", price);

module.exports = app;
