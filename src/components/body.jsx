const React = require("react");
const Navigation = React.createFactory(require("./body/navigation.jsx"));
const Main = React.createFactory(require("./body/main.jsx"));

const Body = ({customization}) => {

  return (
    <body>

      <div className="container">
        <Navigation/>

        <div className="jumbotron">
          <h4>This page was rendered on the server</h4>
          <Main customization={customization}/>

        </div>

      </div>

      <script src="js/jquery-3.1.1.min.js" />
      <script src="js/navigation.js" />
    </body>
  );
};

module.exports = Body;
