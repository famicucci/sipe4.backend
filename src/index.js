import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("API functioning well");
});

app.listen(port, () => {
  console.log("server listening on port 3001");
});
