import MenuBar from "../components/menuBar/page";
import styles from "./business.module.css";
import Image from "next/image";

function BusenessPage() {
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
            src="/assets/large_mzo_business.png"
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
        MZO Business est votre partenaire de confiance pour tous vos besoins en
        importation Chine-Madagascar et en services transitaires entre ces deux
        pays. Nous offrons des solutions sur mesure pour faciliter vos échanges
        commerciaux, en assurant une gestion efficace des démarches douanières,
        de la logistique et du transport. Grâce à notre expertise et à notre
        réseau, nous vous garantissons une gestion fluide et rapide de vos
        importations. Faites confiance à MZO Business pour optimiser vos
        opérations commerciales et garantir le succès de vos projets
        d’importation.{" "}
      </span>
      <div className={styles.valeursContainer}>
        <div className={styles.valeurItem}>
          <span className={styles.valeurTitle}>Sécurité</span>
          <span className={styles.valeur}>
            La protection optimale de vos marchandises durant toute la chaîne
            logistique.
          </span>
        </div>
        <div className={styles.valeurItem}>
          <span className={styles.valeurTitle}>Simplicité</span>
          <span className={styles.valeur}>
            Des solutions simples et pratiques pour un processus d’importation
            sans tracas.
          </span>
        </div>
        <div className={styles.valeurItem}>
          <span className={styles.valeurTitle}>Responsabilité</span>
          <span className={styles.valeur}>
            Une gestion des affaires qui respecte les normes et les régulations
            internationales.
          </span>
        </div>
      </div>
      <span className={styles.sectionTitle}>Nos formations</span>
      <div className={styles.formationContainer}>
            <div className={styles.formationItem}>
              <span className={styles.titleFormation}>
                Call Center
              </span>
              <div style={{position:'relative', width:"300px", height:"400px"}}>
                <Image src='/assets/carrousel14.jpg' alt='formation image' layout="fill" objectFit="contain"/>
              </div>
              <button className={styles.sendButton}>Demande d'inscrition</button>
            </div>
            <div className={styles.formationItem}>
              <span className={styles.titleFormation}>
                Business chine
              </span>
              <div style={{position:'relative', width:"300px", height:"400px"}}>
                <Image src='/assets/mzo_chine.jpg' alt='formation image' layout="fill" objectFit="contain"/>
              </div>
              <button className={styles.sendButton}>Demande d'inscrition</button>
            </div>
      </div>
    </div>
  );
}

export default BusenessPage;
