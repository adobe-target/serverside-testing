const express = require("express");
const app = express();
const ab = require("./src/routes/ab");
const xt = require("./src/routes/xt");
const mboxparameters = require("./src/routes/mboxparameters");
const profileparameters = require("./src/routes/profileparameters");
const jsonoffer = require("./src/routes/jsonoffer");
const thirdpartyid = require("./src/routes/thirdpartyid");
const customerattributes = require("./src/routes/customerattributes");
const recommendations = require("./src/routes/recommendations");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.get("/", ab);
app.get("/ab", ab);
app.get("/xt", xt);
app.get("/mboxparameters", mboxparameters);
app.get("/profileparameters", profileparameters);
app.get("/jsonoffer", jsonoffer);
app.get("/thirdpartyid", thirdpartyid);
app.get("/customerattributes", customerattributes);
app.get("/recommendations", recommendations);



app.listen(PORT, function () {
  console.log("Target Node Client React App is Running on Port", PORT);
});
