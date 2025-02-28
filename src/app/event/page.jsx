import MenuBar from "../components/menuBar/page";
import styles from "./event.module.css";
import Image from "next/image";

function EventPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <MenuBar />
      <div className={styles.firstContainer}>
        <Image
          src="/assets/background_welcome_page.png"
          alt="welcome mzo"
          width={1080}
          height={920}
          className={styles.filigrane}
        />
        <div className={styles.logoMzo}>
          <Image
            src="/assets/large_mzo_event.png"
            alt="logo mzo starlink provider"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="pageDoteContainer">
          <div className="pageDote"></div>
          <div className="pageDote"></div>
          <div className="pageDote"></div>
        </div>
      </div>
      <span className={styles.titleDescription}>
        Avec plus de 7 ans d'expérience, MZO Event est votre partenaire de
        confiance pour organiser des événements inoubliables : mariages,
        anniversaires, team building, communions, et bien plus. Nous proposons
        des solutions clé en main avec la location de sonorisation, de lumières,
        de musique orchestrale, ainsi que la tête de cortège pour des entrées
        spectaculaires. Pour sublimer votre événement, nous offrons également
        des services tels que les effets spéciaux, l’installation d’estrades et
        de scènes, l’animation par un DJ renommé, ainsi que la présence de
        photographes, de vidéastes et de prises de vue par drone. Faites
        confiance à MZO Event pour créer des souvenirs uniques et transformer
        chaque célébration en un moment mémorable.
      </span>
    </div>
  );
}

export default EventPage;
