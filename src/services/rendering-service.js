const getVisitorData = require("../services/visitor-service");
const getCustomization = require("../services/customization-service");
const renderPage = require("../services/http-service").renderPage;
const sendResponse = require("../services/http-service").sendResponse;

function render(component, payload, req, res) {
  const mbox = payload.mbox;
  const visitorData = getVisitorData(mbox, req, res);
  const visitorPayload = visitorData.payload;
  const visitorState = visitorData.state;
  const mboxParams = Object.assign({}, payload.mboxParameters || {}, visitorPayload.mboxParameters || {});
  const profileParams = Object.assign({}, payload.profileParameters || {}, visitorPayload.profileParameters || {});
  const data = Object.assign({}, payload, visitorPayload);
  data.mboxParameters = mboxParams;
  data.profileParameters = profileParams;
  const promise = getCustomization(data, req, res);

  promise.then(customization => {
    const html = renderPage(component, visitorState, customization);

    sendResponse(res, html);
  })
  .catch(error => {
    const html = renderPage(component, visitorState, null);

    sendResponse(res, html);
  });
}

module.exports = render;
