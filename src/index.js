const app = require("./app.js")
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`serv listening on port: ${PORT}`)
})
