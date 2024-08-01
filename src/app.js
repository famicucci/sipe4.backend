import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API functioning well");
});

export default app;
