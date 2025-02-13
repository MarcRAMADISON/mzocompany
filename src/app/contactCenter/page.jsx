import MenuBar from "../components/menuBar/page";
import styles from "./contactCenter.module.css";
import Image from "next/image";
import CustomCarousel from "../components/carousel/page";
import { imagesContactCenter } from "../utils";

function ContactCenterPage() {
  return (
    <div>
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
            src="/assets/large_mzo_contact_logo.png"
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
        <span className={styles.titleDescription}>
          MZO Contact Center est un acteur clé de l'offshoring et de
          l'externalisation, avec des solutions solutions personnalisées pour
          améliorer la productivité, réduire les coûts et optimiser les
          performances. Forts de plus de 10 ans d'expertise, nous construisons
          des partenariats durables pour permettre à nos clients de se recentrer
          sur leur coeur de métier en toute confiance;
        </span>
      </div>
      <div>
        <div className={styles.video_container}>
          <video controls>
            <source
              src="/assets/videos/mzo_call_1.mp4"
              type="video/mp4"
            ></source>
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <CustomCarousel rows={imagesContactCenter} disposition="contain"/>
      </div>
    </div>
  );
}

export default ContactCenterPage;
