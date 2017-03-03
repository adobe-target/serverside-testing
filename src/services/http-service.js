require("babel-register")({
  presets: ["react"]
});

const React = require("react");
const ReactServer = require("react-dom/server");

function renderPage(component, visitorState, customization) {
  return ReactServer.renderToString(React.createElement(component, {visitorState, customization}));
}

function sendResponse(res, content) {
  res.set({
    "Content-Type": "text/html",
    "Expires": new Date().toUTCString()
  });

  res.status(200).send(content);
}

module.exports.renderPage = renderPage;
module.exports.sendResponse = sendResponse;
