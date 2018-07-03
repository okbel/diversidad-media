const request = require("superagent");

class Slack {
  constructor({ token, interval, org: host }) {
    this.host = host;
    this.token = token;
    this.org = {};
    this.init();
  }

  init() {
    request
      .get(`https://${this.host}.slack.com/api/team.info`)
      .query({ token: this.token })
      .end((err, res) => {
        let team = res.body.team;
        if (!team) {
          throw new Error("Make sure the team name and API keys are correct");
        }
        this.org.name = team.name;
        if (!team.icon.image_default) {
          this.org.logo = team.icon.image_132;
        }
      });
  }

  invite({ email, channel }) {
    const token = this.token;
    const org = this.host;

    let data = { email, token };

    if (channel) {
      data.channels = channel;
      data.ultra_restricted = 1;
      data.set_active = true;
    }

    return new Promise((resolve, reject) => {
      request
        .post(`https://${org}.slack.com/api/users.admin.invite`)
        .type("form")
        .send(data)
        .end(function(err, res) {
          if (err) return reject(err);

          if (200 !== res.status) {
            reject(`Respuesta inválida ${res.status}.`);
            return;
          }

          let { ok, error: providedError, needed } = res.body;

          if (!ok) {
            if (providedError === "missing_scope" && needed === "admin") {
              reject(`Sin permisos de admin`);
            } else if (providedError === "already_invited") {
              reject(
                "Ya fuiste invitado a Slack. Fijate si tenés un email de feedback@slack.com."
              );
            } else if (providedError === "already_in_team") {
              reject(`Ya estás en el equipo`);
            } else if (providedError === "invalid_email") {
              reject("El email ingresado es inválido");
            } else {
              reject(providedError);
            }
            return;
          }

          resolve();
        });
    });
  }
}

module.exports = Slack;
