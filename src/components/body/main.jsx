const React = require("react");
const Hero = React.createFactory(require("./hero.jsx"));
const Sections = React.createFactory(require("./sections.jsx"));

const Main = ({customizations}) => {
  return (
    <div id="main">

      <Hero customizations={customizations}/>

      <Sections/>

    </div>
  );
};

module.exports = Main;
