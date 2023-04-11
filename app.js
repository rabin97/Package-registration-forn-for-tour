const express = require("express");
const app = express();

require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));


app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("listenning >>>>>>>>>>>");
});
