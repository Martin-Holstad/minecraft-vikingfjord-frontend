import styles from "./PlayerMenu.module.css";
import minecraftHead from "../../images/minecraft-head.png";
import getOnlinePlayers from "../../actions/getRequests/getOnlinePlayers";
import { useContext, useEffect, useState, useRef } from "react";
import useCloseOnClickOutside from "../../hooks/useCloseOnClickOutside";
import WhitelistContext from "../../context/WhitelistContext";

export default function PlayerMenu() {
  const { playerMenuOpen, sePlayerMenuOpen } = useContext(WhitelistContext);
  const [players, setPlayers] = useState(null);
  const playerMenuRef = useRef();

  async function fetchOnlinePlayers() {
    try {
      const response = await getOnlinePlayers();
      setPlayers(response.onlinePlayers);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOnlinePlayers();
    const interval = setInterval(fetchOnlinePlayers, 10000);
    return () => clearInterval(interval);
  }, []);

  useCloseOnClickOutside(playerMenuRef, sePlayerMenuOpen);

  return (
    <div className={`${styles.playerMenu} ${playerMenuOpen ? styles.active : ""}`} ref={playerMenuRef}>
      <div className={styles.headerContainer}>
        <p>Online players</p>
        <div>
          <span>{players ? players.currentOnline : 0}/</span>
          <span>{players ? players.maxPlayers : 20}</span>
        </div>
      </div>
      <div>
        {players?.playerList?.map((player, index) => {
          return (
            <div key={index} className={styles.player}>
              <img src={minecraftHead} alt="miecraft head steve" />
              <p> {player}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
