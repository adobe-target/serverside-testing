const Component = require("../components/catalog").PROFILE_PARAMETERS;
const render = require("../services/rendering-service");

function chooseType() {
  const rand = Math.floor(Math.random() * 1000);

  return rand % 2 === 0 ? "autobot" : "decepticon";
}

module.exports = (req, res) => {
  const payload = {
    mbox: "a1-serverside-profileparams",
    profileParameters : {
      "transformerType" : chooseType()
    }
  };

  render(Component, payload, req, res);
};
