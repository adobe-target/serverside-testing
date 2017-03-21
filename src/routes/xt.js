const Component = require("../components/catalog").XT;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "a1-serverside-xt",
    profileParameters: {
      country: "usa"
    }
  };

  render(Component, payload, req, res);
};
