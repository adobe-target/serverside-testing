const CONFIG = require('../../config.json');
const CLIENT = CONFIG.client;
const HOST = CONFIG.host;
const SECURE = CONFIG.secure;
const TargetClientFactory = require("@adobe/target-node-client");
const targetClient = TargetClientFactory({
  client: CLIENT,
  host: HOST,
  secure: SECURE
});

function getCustomization(data, req, res) {
  return targetClient.execute(data, req, res)
    .then(response => {
      const result = {};

      console.log('Target request succeeded', response);

      result.content = response.content;

      return result;
    })
    .catch(error => {
      console.log('Target request failed', error);

      return null;
    });
}

module.exports = getCustomization;
