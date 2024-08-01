import app from "./app.js";

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("serv listening on port 3001");
});
