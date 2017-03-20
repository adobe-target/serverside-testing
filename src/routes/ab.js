const Component = require("../components/catalog").AB;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "a1-serverside-ab"
  };

  render(Component, payload, req, res);
};
