const CONFIG = require('../../config.json');
const CLIENT = CONFIG.client;
const HOST = CONFIG.host;
const SECURE = CONFIG.secure;
const LOG_PREFIX = 'Target React App:';
const createTargetNodeClient = require("@adobe/target-node-client");
const targetNodeClient = createTargetNodeClient({
  client: CLIENT,
  host: HOST,
  secure: SECURE,
  timeout: 10000,
  debug: true
});

function log(...params) {
  console.log.apply(console, [].concat.apply([LOG_PREFIX], params));
}

function getCustomization(data, req, res) {
  return targetNodeClient.execute(data, req, res)
    .then(response => {
      log('response', response);

      return {
        content: response.content
      };
    })
    .catch(error => {
      log('error', error);

      return null;
    });
}

module.exports = getCustomization;
