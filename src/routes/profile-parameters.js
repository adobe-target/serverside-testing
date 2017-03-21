const Component = require("../components/catalog").PROFILE_PARAMETERS;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "a1-serverside-profileparams",
    profileParameters : {
      "transformerType" : "autobot"
    }
  };

  render(Component, payload, req, res);
};
