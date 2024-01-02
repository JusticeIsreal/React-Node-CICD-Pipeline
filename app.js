const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/names", (req, res) => {
  res.send("Hello, world!");
});

app.listen(1234, () => {
  console.log("server is running on port 5000");
});
