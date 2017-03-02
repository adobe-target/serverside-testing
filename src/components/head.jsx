const CONFIG = require("../../config.json");
const IMS_ORG_ID = CONFIG.imsOrgId;
const React = require("react");

const Head = ({ visitorState }) => {
  const visitorStateStr = JSON.stringify(visitorState);

  return (
    <head>
      <title>Target React Sample App</title>

      <link href="css/styles.css" rel="stylesheet" type="text/css"/>

      <script src="https://code.jquery.com/jquery-3.1.1.min.js" />

      <script src="js/VisitorAPI.js" />

      <script dangerouslySetInnerHTML={{__html: `
         var visitor = Visitor.getInstance('${IMS_ORG_ID}', {serverState: ${visitorStateStr}});
      `}} />
    </head>
  );
};

module.exports = Head;
