// Ensure environment variables are read.
require("./config/env");

module.exports = {
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost/dm",
  SLACK_TOKEN: process.env.SLACK_TOKEN,
  RECAPTCHA_SITEKEY: process.env.RECAPTCHA_SITEKEY,
  RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET
};
