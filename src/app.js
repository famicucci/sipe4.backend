const express = require("express")
const dotenv = require("dotenv")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(productRoutes)
app.use(userRoutes)

app.get("/", (req, res) => {
  res.send("API functioning well")
})

module.exports = app
