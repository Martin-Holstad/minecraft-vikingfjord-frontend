import styles from "./ActionButtons.module.css";
import mapIcon from "../../images/map.png";
import scrollIcon from "../../images/scroll-icon.png";
import headIcon from "../../images/minecraft-head.png";
import serverIcon from "../../images/server.png";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import WhitelistContext from "../../context/WhitelistContext";
import ModList from "./ModList";
import { Link } from "react-router-dom";

export default function ActionButtons() {
  const { modalOpen, setModalOpen, setModalContent } = useContext(AppContext);
  const { playerMenuOpen, sePlayerMenuOpen } = useContext(WhitelistContext);

  const [copied, setCopied] = useState(false);

  function openModal() {
    setModalOpen(!modalOpen);
    setModalContent(<ModList />);
  }

  function copy() {
    setCopied(true);
    const serverAddress = "15.204.68.163:24772";
    navigator.clipboard.writeText(serverAddress);
  }

  return (
    <div className={styles.actionButtons}>
      <div className={styles.button} onClick={openModal}>
        <img src={scrollIcon} alt="map" />
        <p>Mod list / Links</p>
      </div>
      <Link to="/dynmap" className={styles.button}>
        <img src={mapIcon} alt="map" />
        <p>Live map</p>
      </Link>
      <div className={`${styles.button} ${styles.mobileButton} ${playerMenuOpen ? styles.disable : ""}`} onClick={() => sePlayerMenuOpen(!playerMenuOpen)}>
        <img src={headIcon} alt="map" />
        <p>Online players</p>
      </div>
      <div className={styles.button} onClick={copy}>
        <img src={serverIcon} alt="map" />
        <p>Address- {!copied ? "click to copy" : "Copied"}</p>
      </div>
    </div>
  );
}
