const fs = require("fs");
const CONFIG = require("../config.json");
const IMS_ORG_ID = CONFIG.imsOrgId;
const REPORT_SUITE_ID = CONFIG.reportSuiteId;
const TRACKING_SERVER = CONFIG.trackingServer;
const TRACKING_SERVER_SECURE = CONFIG.trackingServerSecure;
const TEMPLATE_PATH = __dirname + "/AppMeasurement-init.tpl.js";
const APP_MEASUREMENT_INIT_PATH = __dirname + "/../public/js/AppMeasurement-init.js";

function prepareAnalytics() {
  const content = fs.readFileSync(TEMPLATE_PATH).toString();
  const result = content.replace("${IMS_ORG_ID}", IMS_ORG_ID)
    .replace("${REPORT_SUITE_ID}", REPORT_SUITE_ID)
    .replace("${TRACKING_SERVER}", TRACKING_SERVER)
    .replace("${TRACKING_SERVER_SECURE}", TRACKING_SERVER_SECURE);

  fs.writeFileSync(APP_MEASUREMENT_INIT_PATH, result);
}

prepareAnalytics();
