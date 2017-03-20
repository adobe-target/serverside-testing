const React = require("react");
const Hero = React.createFactory(require("./hero.jsx"));

const Main = ({customization}) => {
  return (
    <div id="main">
      <Hero customization={customization}/>
    </div>
  );
};

module.exports = Main;
