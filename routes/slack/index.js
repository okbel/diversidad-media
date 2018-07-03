const express = require("express");
const router = express.Router();
const dom = require("vd");
const Slack = require("../../services/slack");
const { SLACK_TOKEN } = require("../../config");

router.get("/", (req, res) => {
  let slack = new Slack({
    token: SLACK_TOKEN,
    interval: 5000,
    org: "diversidadmedia"
  });

  console.log(slack);

  // let { name, logo } = slack.org;
  // let { active, total } = slack.users;

  // if (!name) return res.send(404);

  // let page = dom(
  //   "html",
  //   dom(
  //     "head",
  //     dom("title", "Join ", name, " on Slack!"),
  //     dom("script src=https://www.google.com/recaptcha/api.js"),
  //     dom(
  //       'meta name=viewport content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no"'
  //     ),
  //     dom(
  //       'link rel="shortcut icon" href=https://slack.global.ssl.fastly.net/272a/img/icons/favicon-32.png'
  //     ),
  //     css && dom("link rel=stylesheet", { href: css })
  //   ),
  //   splash({
  //     coc,
  //     path,
  //     css,
  //     name,
  //     org,
  //     logo,
  //     channels,
  //     active,
  //     total,
  //     gcaptcha_sitekey
  //   })
  // );
  // res.type("html");
  // res.send(page.toHTML());
});

module.exports = router;
