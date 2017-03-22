const Component = require("../components/catalog").MBOX_PARAMETERS;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "a1-serverside-mboxparams",
    thirdPartyId : "customId-123",  
    mboxParameters : {
      cartValue: 130
    }
  };

  render(Component, payload, req, res);
};
