const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("API functioning well")
})

module.exports = app
