import styles from "./Whitelist.module.css";
import { useState } from "react";
import WhitelistContext from "../../context/WhitelistContext";
import minecraftLogo from "../../images/minecraft-logo.png";
import Form from "./Form";
import PlayerMenu from "./PlayerMenu";
import ServerStatus from "./ServerStatus";
import ActionButtons from "./ActionButtons";

export default function Whitelist() {
  const [playerMenuOpen, sePlayerMenuOpen] = useState(false);

  return (
    <WhitelistContext.Provider value={{ playerMenuOpen, sePlayerMenuOpen }}>
      <main className={styles.main}>
        <div className={styles.background}></div>
        <ServerStatus />
        <PlayerMenu />
        <div className={styles.logo}>
          <img src={minecraftLogo} alt="logo" />
        </div>
        <h1>VikingFjord</h1>
        <Form />
        <ActionButtons />
      </main>
    </WhitelistContext.Provider>
  );
}
