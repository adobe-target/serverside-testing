const Component = require("../components/catalog").AB;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "hero-banner"
  };

  render(Component, payload, req, res);
};
