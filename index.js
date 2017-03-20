const express = require("express");
const app = express();
const ab = require("./src/routes/ab");
const xt = require("./src/routes/xt");
const mboxParameters = require("./src/routes/mbox-parameters");
const profileParameters = require("./src/routes/profile-parameters");
const jsonOffer = require("./src/routes/json-offer");
const thirdPartyId = require("./src/routes/third-party-id");
const customerAttributes = require("./src/routes/customer-attributes");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.get("/", ab);
app.get("/ab", ab);
app.get("/xt", xt);
app.get("/mbox-parameters", mboxParameters);
app.get("/profile-parameters", profileParameters);
app.get("/json-offer", jsonOffer);
app.get("/third-party-id", thirdPartyId);
app.get("/customer-attributes", customerAttributes);

app.listen(PORT, function () {
  console.log("Target Node Client React App is Running on Port", PORT);
});
