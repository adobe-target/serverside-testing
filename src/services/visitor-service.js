const IMS_ORG_ID = require('../../config.json').imsOrgId;

const Cookies = require("cookies");
const Visitor = require("@adobe-mcid/visitor-js-server");

function getVisitorData(mbox, req, res) {
  const visitor = new Visitor(IMS_ORG_ID);
  const cookies = new Cookies(req, res);
  const amcvCookie = cookies.get(encodeURIComponent(visitor.getCookieName()));
  const payload = visitor.generatePayload({
    sdidConsumerID: mbox,
    amcvCookie: amcvCookie
  });

  const state = visitor.getState();

  return {payload, state};
}

module.exports = getVisitorData;
