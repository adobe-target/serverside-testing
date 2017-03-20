require("babel-register")({
  presets: ["react"]
});

const React = require("react");
const Ab = React.createFactory(require("../components/examples/ab.jsx"));
const Xt = React.createFactory(require("../components/examples/xt.jsx"));
const MboxParameters = React.createFactory(require("../components/examples/mbox-parameters.jsx"));
const ProfileParameters = React.createFactory(require("../components/examples/profile-parameters.jsx"));
const JsonOffer = React.createFactory(require("../components/examples/json-offer.jsx"));
const ThirdPartyId = React.createFactory(require("../components/examples/third-party-id.jsx"));
const CustomerAttributes = React.createFactory(require("../components/examples/customer-attributes.jsx"));

module.exports.AB = Ab;
module.exports.XT = Xt;
module.exports.MBOX_PARAMETERS = MboxParameters;
module.exports.PROFILE_PARAMETERS = ProfileParameters;
module.exports.JSON_OFFER = JsonOffer;
module.exports.THIRD_PARTY_ID = ThirdPartyId;
module.exports.CUSTOMER_ATTRIBUTES = CustomerAttributes;
