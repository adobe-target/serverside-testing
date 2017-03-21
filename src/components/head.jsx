const CONFIG = require("../../config.json");
const IMS_ORG_ID = CONFIG.imsOrgId;
const React = require("react");

const Head = ({ visitorState }) => {
  const visitorStateStr = JSON.stringify(visitorState);

  return (
    <head>
      <title>Target React Sample App</title>

      <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
      <link href="css/navbar.css" rel="stylesheet" type="text/css"/>

      <script src="js/VisitorAPI.js" />

      <script dangerouslySetInnerHTML={{__html: `
         var visitorState = ${visitorStateStr};
         var visitor = Visitor.getInstance('${IMS_ORG_ID}', {serverState: visitorState});
      `}} />

      <script src="js/AppMeasurement.js" />
      <script src="js/AppMeasurement-init.js" />
    </head>
  );
};

module.exports = Head;
