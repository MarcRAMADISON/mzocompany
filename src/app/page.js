import styles from "./page.module.css";
import MenuBar from "./components/menuBar/page";
import Welcome from "./components/welcome/page";
import Activity from "./components/activity/page";


export default function Home() {
  return (
    <div className={styles.page}>
      <MenuBar/>
      <Welcome/>
      <Activity/>
    </div>
  );
}
