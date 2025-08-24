import styles from "./ServerStatus.module.css";
import clock from "../../images/clock.png";
import fabric from "../../images/fabric.png";
import getServerStatus from "../../actions/getRequests/getServerStatus";
import { useState, useEffect } from "react";

export default function ServerStatus() {
  const [serverStatus, setServerStatus] = useState({ time: "00:00 AM" });

  async function fetchServerStatus() {
    try {
      const response = await getServerStatus();

      if (!response.success) return setServerStatus("");
      setServerStatus(response);
      console.log(response);
    } catch (error) {
      console.log(error);
      setServerStatus("");
    }
  }

  useEffect(() => {
    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.serverStatus}>
      <div className={styles.signal}>
        <div className={`${styles.signalLight} ${!serverStatus ? styles.signalLightRed : ""}`}></div>
        <p className={`${styles.onlineText} ${!serverStatus ? styles.onlineTextRed : ""}`}>{serverStatus ? "Online" : "Offline"}</p>
      </div>
      <div className={styles.time}>
        <img src={clock} alt="clock" />
        <p>{serverStatus ? serverStatus.time : "00:00 AM"}</p>
      </div>
      <div className={styles.version}>
        <img src={fabric} alt="fabric" />
        <p>1.21</p>
      </div>
    </div>
  );
}
