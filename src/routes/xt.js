const Component = require("../components/catalog").XT;
const render = require("../services/rendering-service");

function chooseCountry() {
  const rand = Math.floor(Math.random() * 1000);

  switch (rand % 4) {
    case 0: return "usa";
    case 1: return "uk";
    case 2: return "france";
    case 3: return "australia";
  }
}

module.exports = (req, res) => {
  const payload = {
    mbox: "a1-serverside-xt",
    profileParameters: {
      country: chooseCountry()
    }
  };

  render(Component, payload, req, res);
};
