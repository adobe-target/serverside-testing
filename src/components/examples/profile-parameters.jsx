const React = require("react");
const Head = React.createFactory(require("../head.jsx"));
const Body = React.createFactory(require("../body.jsx"));

const ProfileParameters = ({visitorState, customization}) => {
  return (
    <html>
      <Head visitorState={visitorState}/>
      <Body customization={customization}/>
    </html>
  );
};

module.exports = ProfileParameters;
