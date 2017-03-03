const React = require("react");
const Head = React.createFactory(require("../head.jsx"));
const Body = React.createFactory(require("../body.jsx"));

const Ab = ({visitorState, customizations}) => {
  return (
    <html>
        <Head/>
		<Head visitorState={visitorState}/>
        <Body customizations={customizations}/>
    </html>
  );
};

module.exports = Ab;
