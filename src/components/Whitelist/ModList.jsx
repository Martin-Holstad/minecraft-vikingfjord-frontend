import styles from "./ModList.module.css";
import scrollBackground from "../../images/scroll-background.png";

export default function ModList() {
  return (
    <div className={styles.modList}>
      <img src={scrollBackground} alt="scroll background"></img>
      <div className={styles.list}>
        <h2>Mod List</h2>
        <li>
          <a href="https://www.curseforge.com/minecraft/mc-mods/universal-graves">Universal Graves</a>
        </li>
        <li>
          <a href="https://www.curseforge.com/minecraft/mc-mods/trashslot-fabric-edition">Trash slot</a>
        </li>
        <li>
          <a href="https://www.curseforge.com/minecraft/mc-mods/jei">Jei</a>
        </li>
        <li>
          <a href="https://www.curseforge.com/minecraft/mc-mods/journeymap">Journey map</a>
        </li>
      </div>
    </div>
  );
}
