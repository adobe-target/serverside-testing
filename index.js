const express = require("express");
const app = express();
const ab = require("./src/routes/ab");
const xt = require("./src/routes/xt");
const mboxParameters = require("./src/routes/mbox-parameters");
const profileParameters = require("./src/routes/profile-parameters");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.get("/", ab);
app.get("/ab", ab);
app.get("/xt", xt);
app.get("/mbox-parameters", mboxParameters);
app.get("/profile-parameters", profileParameters);

app.listen(PORT, function () {
  console.log("Target React Sample App is running on port", PORT);
});
