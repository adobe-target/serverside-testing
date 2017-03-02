const React = require("react");
const Head = React.createFactory(require("./head.jsx"));
const Body = React.createFactory(require("./body.jsx"));

const App = ({visitorState, customizations}) => {
  return (
    <html>
      <Head visitorState={visitorState}/>

      <Body customizations={customizations}/>
    </html>
  );
};

module.exports = App;
