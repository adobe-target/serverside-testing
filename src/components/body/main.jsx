const React = require("react");
const Hero = React.createFactory(require("./hero.jsx"));

const Main = ({customizations}) => {
  return (
    <div id="main">

      <Hero customizations={customizations}/>
    </div>
  );
};

module.exports = Main;
