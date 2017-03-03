const React = require("react");
const Navigation = React.createFactory(require("./body/navigation.jsx"));
const Main = React.createFactory(require("./body/main.jsx"));

const Body = ({customization}) => {

  return (
    <body>

      <div className="container">
        <Navigation/>

        <div className="jumbotron">
          <h1>Server side rendering</h1>

          <Main customization={customization}/>

        </div>

      </div>

    </body>
  );
};

module.exports = Body;
