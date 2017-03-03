const React = require("react");
const Navigation = React.createFactory(require("./body/navigation.jsx"));
const Main = React.createFactory(require("./body/main.jsx"));

const Body = ({customizations}) => {

  return (
    <body>
      <div className="container">
        <Navigation/>
        <div className="jumbotron">
          <h1>Server side rendering</h1>
          <Main customizations={customizations}/>
        </div>
        <br className="clear"/>
      </div>

    </body>
  );
};

module.exports = Body;
