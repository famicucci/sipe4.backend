const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const productRoutes = require("./routes/product.routes")
const userRoutes = require("./routes/user.routes")
const priceRoutes = require("./routes/price.routes")
const errorHandler = require("./middlewares/errorHandler")

dotenv.config()

const app = express()

app.use(cors({ origin: "http://localhost:3000" }))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(productRoutes)
app.use(userRoutes)
app.use(priceRoutes)

app.use(errorHandler)

app.get("/", (req, res) => {
  res.send("API functioning well")
})

module.exports = app
