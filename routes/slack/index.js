const express = require("express");
const router = express.Router();
const Slack = require("../../services/slack");
const { SLACK_TOKEN } = require("../../config");

const slack = new Slack({
  token: SLACK_TOKEN,
  interval: 5000,
  org: "diversidadmedia"
});

router.post("/invite", async (req, res) => {
  const { email } = req.body;
  try {
    await slack.invite({ email });
    res.send({
      msg: "Te enviamos la invitación :)"
    });
  } catch (err) {
    res.send({ err });
  }
});

module.exports = router;
