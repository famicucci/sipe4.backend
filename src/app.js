const express = require("express")
const dotenv = require("dotenv")
const productRoutes = require("./routes/product.routes")
const userRoutes = require("./routes/user.routes")

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
