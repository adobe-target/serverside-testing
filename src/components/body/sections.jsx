const React = require("react");
const Education = React.createFactory(require("./sections/education.jsx"));
const Solutions = React.createFactory(require("./sections/solutions.jsx"));
const Lightroom = React.createFactory(require("./sections/lightroom.jsx"));
const Learning = React.createFactory(require("./sections/learning.jsx"));
const Help = React.createFactory(require("./sections/help.jsx"));
const Download = React.createFactory(require("./sections/download.jsx"));

const Sections = () => {
  return (
    <div id="content">

      <Education/>

      <Solutions/>

      <Lightroom/>

      <Learning/>

      <Help/>

      <Download/>

    </div>
  );
};

module.exports = Sections;
