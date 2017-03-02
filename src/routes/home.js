require("babel-register")({
    presets: ["react"]
});

const CONFIG = require('../../config.json');
const CLIENT = CONFIG.client;
const HOST = CONFIG.host;
const SECURE = CONFIG.secure;
const IMS_ORG_ID = CONFIG.imsOrgId;

const Cookies = require("cookies");
const React = require("react");
const ReactServer = require("react-dom/server");
const Visitor = require("@adobe-mcid/visitor-js-server");
const TargetClientFactory = require("@adobe/target-node-client");
const App = React.createFactory(require("../components/app.jsx"));

const targetClient = TargetClientFactory({
  client: CLIENT,
  host: HOST,
  secure: SECURE
});

const AuthState = Visitor.AuthState;

function getMboxContent(data) {
  return targetClient.execute(data)
    .then(response => {
      const result = {};

      console.log('Success', response);

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

  responses.filter(res => res !== null)
    .forEach(res => Object.keys(res).forEach(key => result[key] = res[key]));

  return result;
}

function executeMboxRequests(...requests) {
  return Promise.all(requests).then(collectResponses);
}

function renderPage(visitor, customizations) {
  const visitorState = visitor.getState();

  return ReactServer.renderToString(React.createElement(App, {visitorState, customizations}));
}

function sendResponse(res, content) {
  res.set({
    "Content-Type": "text/html",
    "Expires": new Date().toUTCString()
  });

  res.status(200).send(content);
}

module.exports = (req, res) => {
  const mbox = "hero-banner";
  const visitor = new Visitor(IMS_ORG_ID);
  const cookies = new Cookies(req, res);
  const amcvCookie = cookies.get(encodeURIComponent(visitor.getCookieName()));
  const visitorPayload = visitor.generatePayload({
    sdidConsumerID: mbox,
    amcvCookie: amcvCookie
  });

  const data = Object.assign({}, { mbox }, visitorPayload);
  const promise = executeMboxRequests(getMboxContent(data));

  console.log('Data sent to Target', data);

  promise.then(customizations => {
    const html = renderPage(visitor, customizations);

    sendResponse(res, html);
  })
  .catch(error => {
    console.log('Error', error);

    const html = renderPage(visitor, null);

    sendResponse(res, html);
  });
};
