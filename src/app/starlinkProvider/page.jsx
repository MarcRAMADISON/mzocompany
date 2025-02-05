import MenuBar from "../components/menuBar/page";
import Image from "next/image";
import styles from "./startlinkProvider.module.css";

function StarlinkProviderPage() {
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
            src="/assets/logo_provider.png"
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
          FOURNISSEUR D'ACCÈS INTERNET SATELLITAIRES EN PARTENARIAT AVEC TELERYS
          COMMUNICATION FRANCE.
        </span>
      </div>
      <div className={styles.secondContainer}>
        <span className={styles.title}>Qui nous sommes ?</span>
        <span className={styles.aproposDescription}>
          Distributeur Starlink <br />
          Solution télécom sur mesure
        </span>
        <div
          style={{
            position: "relative",
            width: "200px",
            height: "200px",
            margin: "50px 0px -50px 0px",
          }}
        >
          <Image
            src="/assets/logo_provider.png"
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

        <span
          style={{ color: "#ff8c00", margin: "120px 0px 30px 0px" }}
          className={styles.serviceTitle}
        >
          SERVICES PROPOSES
        </span>
        <ul className={styles.list_dash}>
          <li>Audit et installation à domicile ou sur site</li>
          <li>Internet haut débit et fiable</li>
          <li>Prix imbattable avec garantie pour tout nos matériaux</li>
          <li>Kit entièrement au nom du client</li>
          <li>Support personnalisé avec assistances</li>
          <li>
            <span style={{ color: "#e10b1a" }}>
              Offre de location temporaire{" "}
            </span>
            <span style={{ fontSize: "1rem" }}>
              ( offre soumise sous conditions )
            </span>
          </li>
        </ul>
        <ul className={styles.list_arrow}>
          <li>
            <span style={{ marginBottom: "20px", fontSize: "1.3rem" }}>
              OBJECTIFS
            </span>
            <br />
            <span
              style={{ color: "#000", marginLeft: "1rem", fontSize: "1.1rem" }}
            >
              Prospecter de nouveaux clients et planifier des rendez-vous.
            </span>
            <br />
            <span
              style={{ color: "#000", marginLeft: "1rem", fontSize: "1.1rem" }}
            >
              Garantir une porte d'entrer pour les commerciaux
            </span>
          </li>
          <li>
            <span style={{ marginBottom: "20px", fontSize: "1.3rem" }}>
              NOS CIBLES
            </span>
            <br />
            <span
              style={{ color: "#000", marginLeft: "1rem", fontSize: "1.1rem" }}
            >
              Particuliers, Entreprises privées, Entités publiques,
              Organisations et associations, Universités et Grandes écoles
            </span>
          </li>
          <li>
            <span style={{ marginBottom: "20px", fontSize: "1.3rem" }}>
              INTERLOCUTEURS
            </span>
            <br />
            <span
              style={{ color: "#000", marginLeft: "1rem", fontSize: "1.1rem" }}
            >
              Particulier, Responsable communication, Directeur technique,
              Résponsable technique, Gérant, Décisionnaire...
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.thirdContainer}>
        <span
          style={{ color: "#ff8c00", margin: "50px 0px 10px 0px" }}
          className={styles.serviceTitle}
        >
          OFFRE STARLINK PARTICULIER
        </span>
        <div className="pageDoteContainer">
          <div className="pageDote"></div>
          <div className="pageDote"></div>
          <div className="pageDote"></div>
        </div>
        <span className={styles.titleDescription}>RESIDENTIEL</span>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: "0px",
          }}
        >
          <span className={styles.price}>226.000 AR</span>
          <span
            style={{
              color: "#ff8c00",
              fontSize: "1.1rem",
              fontWeight: "400",
              marginTop: "0px",
            }}
            className={styles.titleDescription}
          >
            /MOIS
          </span>
        </div>
        <span
          style={{
            color: "#000",
            fontSize: "1.1rem",
            fontWeight: "400",
            marginTop: "0px",
          }}
          className={styles.titleDescription}
        >
          Données illimitées / Sans engagement
        </span>
        <div className={styles.offreContainer}>
          <div>
            <div
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
                marginBottom: "-80px",
              }}
            >
              <Image
                src="/assets/starlink-v4.png"
                layout="fill"
                objectFit="contain"
                alt="starlink v4"
              />
            </div>
            <div className={styles.offreDescription}>
              <span className={styles.offreTitle}>STARLINK STANDARD V4</span>
              <ul className={styles.list_dash2}>
                <li>WI-FI 6</li>
                <li>Débit ultra rapide 250 à 450 mbits/s</li>
                <li>Connectez jusqu'à 235 appareils</li>
                <li>Orientation manuelle</li>
                <li>Deux (2) ports LAN Ethernet</li>
              </ul>
            </div>
          </div>
          <div>
            <div
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
                marginBottom: "-80px",
              }}
            >
              <Image
                src="/assets/starlink-v4.png"
                layout="fill"
                objectFit="contain"
                alt="starlink v4"
              />
            </div>
            <div className={styles.offreDescription}>
              <span className={styles.offreTitle}>STARLINK STANDARD V4</span>
              <ul className={styles.list_dash2}>
                <li>WI-FI 6</li>
                <li>Débit ultra rapide 250 à 450 mbits/s</li>
                <li>Connectez jusqu'à 235 appareils</li>
                <li>Orientation manuelle</li>
                <li>Deux (2) ports LAN Ethernet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarlinkProviderPage;
