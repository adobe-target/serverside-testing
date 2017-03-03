require("babel-register")({
    presets: ["react"]
});

const CONFIG = require('../../config.json');
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const createTargetClient = require("@adobe/target-node-client");
const targetClient = createTargetClient({
  client: CONFIG.client,
  host: CONFIG.host,
  secure: CONFIG.secure
});

const JsonOffer = React.createFactory(require("../components/examples/jsonoffer.jsx"));

function getMboxContent(data) {
  return targetClient.execute(data)
    .then(response => {
      const result = {};

      console.log('Response from Target ---', response);

      result[data.mbox] = response.content;

      return result;
    })
    .catch(error => {
      console.log('Error', error);

      return null;
    });
}

function collectResponses(responses) {
  const result = {};

  responses.forEach(res => Object.keys(res).forEach(key => result[key] = res[key]));

  return result;
}

function executeMboxRequests(...requests) {
  return Promise.all(requests).then(collectResponses);
}

function renderPage(customizations) {
  return ReactDOMServer.renderToString(React.createElement(JsonOffer, {customizations}));
}

function sendResponse(res, content) {
  res.set({
    "Content-Type": "text/html",
    "Expires": new Date().toUTCString()
  });

  res.status(200).send(content);
}

module.exports = (req, res) => {
  const data = {
    mbox: "hero-banner", 
    tntId: "123456-a",
    mboxParameters : {
      "store" : "FR",
      "browserWidth" : "600"
    }
  };
  const promise = executeMboxRequests(getMboxContent(data));

  promise.then(customizations => {
    const html = renderPage(customizations);

    sendResponse(res, html);
  })
  .catch(error => {
    console.log('Error', error);

    const html = renderPage(null);

    sendResponse(res, html);
  });
};
