const slackin = require("slackin");
const {
  RECAPTCHA_SECRET,
  RECAPTCHA_SITEKEY,
  SLACK_TOKEN
} = require("./config");

slackin
  .default({
    token: SLACK_TOKEN,
    interval: 1000,
    org: "diversidadmedia",
    silent: false
  })
  .listen(3000);
