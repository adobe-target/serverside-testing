const express = require("express");
const app = express();
const home = require("./src/routes/home");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.get("/", home);

app.listen(PORT, function () {
  console.log("Target Node Client React App is Running on Port", PORT);
});
