import styles from "./Dynmap.module.css";

export default function Dynmap() {
  const dynmapUrl = process.env.REACT_APP_DYNMAP_URL;

  return (
    <main className={styles.main}>
      <iframe title="dynmap" src={dynmapUrl} width="100%" height="100%" frameBorder="0"></iframe>
    </main>
  );
}
