const React = require("react");
const Head = React.createFactory(require("../head.jsx"));
const Body = React.createFactory(require("../body.jsx"));

const ThirdPartyId = ({customizations}) => {
  return (
    <html>
        <Head/>
        <Body customizations={customizations}/>
    </html>
  );
};

module.exports = ThirdPartyId;
