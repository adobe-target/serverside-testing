const Component = require("../components/catalog").CUSTOMER_ATTRIBUTES;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "hero-banner",
    tntId: "123456-a",
    mboxParameters : {
      "store" : "FR",
      "browserWidth" : "600"
    }
  };

  render(Component, payload, req, res);
};
