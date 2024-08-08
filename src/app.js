const express = require("express")
const dotenv = require("dotenv")
const product = require("./routes/productRoutes")

dotenv.config()

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: false }))

app.use(product)

app.get("/", (req, res) => {
  res.send("API functioning well")
})

module.exports = app
