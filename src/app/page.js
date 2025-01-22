import styles from "./page.module.css";
import MenuBar from "./components/menuBar/page";
import Welcome from "./components/welcome/page";
import Activity from "./components/activity/page";
import About from "./components/about/page";


export default function Home() {
  return (
    <div className={styles.page}>
      <MenuBar/>
      <Welcome/>
      <Activity/>
      <About/>
    </div>
  );
}
