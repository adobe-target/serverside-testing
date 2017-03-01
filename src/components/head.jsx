const React = require("react");

const Head = ({ serverState }) => {
  return (
    <head>
      <title>Target React Sample App</title>
      <link href="css/styles.css" rel="stylesheet" type="text/css"/>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" />
      <script dangerouslySetInnerHTML={{__html: `var serverState = ` + JSON.stringify(serverState) + `;`}} />
      <script src="js/VisitorAPI.js" />
    </head>
  );
};

module.exports = Head;
