const Component = require("../components/catalog").MBOX_PARAMETERS;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "a1-serverside-mboxparams",
    mboxParameters : {
      "currentCategory" : "shoes",
      "cartValue": 130
    }
  };

  render(Component, payload, req, res);
};
