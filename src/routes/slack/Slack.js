import React from "react";
import axios from "axios";
import styles from "./Slack.css";
import Spinner from "../../components/Spinner";

class Slack extends React.Component {
  state = {
    email: "",
    message: "",
    err: ""
  };

  onChange = e => {
    const { value: email } = e.currentTarget;
    this.setState({ email }, () => {
      console.log(this.state);
    });
  };

  onSubmit = async () => {
    this.setState({ loading: true });

    try {
      const {
        data: { msg = "", err = "" }
      } = await axios.post("/slack/invite", {
        email: this.state.email
      });
      this.setState({
        msg,
        err,
        loading: false
      });
    } catch (err) {
      this.setState({
        err: `Hubo un error ${err}`,
        loading: false
      });
    }
  };

  render() {
    return (
      <div>
        <h2 className={styles.title}>Unite al Slack de Diversidad Media</h2>
        <p>Dejanos tu email y te mandamos una invitación</p>
        <div>
          {this.state.msg && (
            <span className={styles.message}>{this.state.msg}</span>
          )}

          {this.state.err && (
            <span className={styles.error}>{this.state.err}</span>
          )}

          <div className={styles.formField}>
            <label className={styles.label}>Ingresá tu email:</label>
            <input className={styles.input} onChange={this.onChange} />
          </div>

          <button
            className={styles.button}
            onClick={this.onSubmit}
            disabled={this.state.loading}
          >
            Enviar invitación
            {this.state.loading && <Spinner className={styles.loading} />}
          </button>
        </div>
      </div>
    );
  }
}

export default Slack;
