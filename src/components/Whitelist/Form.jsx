import styles from "./Form.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import validate from "./validate";

export default function Form() {
  const [playerNameError, setPlayerNameError] = useState(false);
  const [passwordError, SetPasswordError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form className={styles.form} onSubmit={(event) => validate(event, { setPlayerNameError, SetPasswordError, setMessage, setLoading })}>
      <h2>Whitelist</h2>
      {!message ? "" : <div className={styles.message}>{message}</div>}
      <label htmlFor="playerName">Player name</label>
      {playerNameError ? <p className={styles.error}>Player name required</p> : ""}
      <input name="playerName" id="playerName" placeholder="Name" type="text" autoComplete="off" />
      <label htmlFor="password">Server password</label>
      {passwordError ? <p className={styles.error}>Server password required</p> : ""}
      <input name="password" id="password" placeholder="Password" type="password" autoComplete="new-password" />

      <button disabled={loading}>{loading ? <FontAwesomeIcon icon={faGear} /> : "Login"}</button>
    </form>
  );
}
