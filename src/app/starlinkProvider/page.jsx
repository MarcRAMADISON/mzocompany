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
            marginTop: "20px",
          }}
        >
          <span className={styles.price}>226.000 AR</span>
          <span
            style={{
              color: "#ff8c00",
              fontSize: "0.8rem",
              fontWeight: "400",
              marginTop: "0px",
            }}
            className={styles.labelPrice}
          >
            /MOIS
          </span>
        </div>
        <span
          style={{
            color: "#000",
            fontSize: "1rem",
            fontWeight: "400",
            marginTop: "10px",
            maxWidth:'70%',
            textAlign:"center"
          }}
          //className={styles.titleDescription}
        >
          Données illimitées / Sans engagement
        </span>
        <div className={styles.offreContainer}>
          <div
            className={styles.starliknV4Container}
          >
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
            <div
              style={{
                position: "relative",
                width: "350px",
                height: "350px",
              }}
              className={styles.imageStarlinkV4}
            >
              <Image
                src="/assets/starlink-v4.png"
                layout="fill"
                objectFit="contain"
                alt="starlink v4"
              />
            </div>
          </div>
          <span style={{ placeSelf: "center" }}>
            Un coût materiel unique de 1.749.000Ar
          </span>
          <div
            style={{ display: "flex", placeSelf: "center", marginTop: "10px" }}
          >
            <span style={{ fontWeight: "700" }}>
              + prix d'expedition 113.000Ar
            </span>
            <span
              style={{
                fontWeight: "700",
                marginLeft: "10px",
                color: "#ff8c00",
              }}
            >
              DHL
            </span>
          </div>
        </div>
        <div className={styles.offreSecondContainer}>
          <div className={styles.firstBlock}>
            <div
              style={{
                position: "relative",
                width: "350px",
                height: "350px",
                marginBottom: "-80px",
                marginLeft: "50px",
              }}
            >
              <Image
                src="/assets/starlink-v4-mini.png"
                layout="fill"
                objectFit="contain"
                alt="starlink v4"
              />
            </div>
            <span style={{ marginTop: "50px" }} className={styles.offreTitle}>
              STARLINK MINI V4
            </span>
            <span style={{ marginTop: "10px" }}>
              Le forfait le plus abordable
            </span>
            <span style={{ marginTop: "10px" }} className={styles.offreTitle}>
              {" "}
              136.000 AR/MOIS
            </span>
            <span style={{ marginTop: "10px" }}>
              Données dépréciées illimitées
            </span>
          </div>
          <div className={styles.secondBlock}>
            <span
              style={{ color: "#ff8c00", fontWeight: "700" }}
              className={styles.titleDescription}
            >
              RESIDENTIEL LITE
            </span>
            <div
              style={{ paddingTop: "-10px", marginTop: "40px" }}
              className={styles.offreDescription}
            >
              <ul className={styles.list_dash2}>
                <li>WI-FI 5</li>
                <li>Connectez jusqu'à 128 appareils</li>
                <li>Routeur integré</li>
                <li>Orientation manuelle</li>
                <li>Débit 100mbits/s</li>
              </ul>
            </div>
            <span style={{ placeSelf: "center", marginTop: "30px" }}>
              Un coût materiel unique de 900.000Ar
            </span>
            <div
              style={{
                display: "flex",
                placeSelf: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ fontWeight: "700" }}>
                + prix d'expedition 113.000Ar
              </span>
              <span
                style={{
                  fontWeight: "700",
                  marginLeft: "10px",
                  color: "#ff8c00",
                }}
              >
                DHL
              </span>
            </div>
            <div className="pageDoteContainer">
              <div className="pageDote"></div>
              <div className="pageDote"></div>
              <div className="pageDote"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginBottom: "100px", marginTop: "150px" }}
        className={styles.fourthContainer}
      >
        <span
          style={{ color: "#ff8c00", margin: "50px 0px 10px 0px" }}
          className={styles.serviceTitle}
        >
          OFFRES STARLINK ENTREPRISE
        </span>
        <div className={styles.tarifContainer}>
          <div className={styles.tarifCard}>
            <span style={{ fontSize: "1.5rem" }} className={styles.offreTitle}>
              EMPLACEMENT FIXE
            </span>
            <span
              style={{
                fontSize: "0.9rem",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Pour les entreprises et les utilisateurs à forte consommations
            </span>
            <span style={{textAlign:"center"}} className={styles.subTitleTarif}>
              PRINCIPALES FONCTIONNALITES
            </span>
            <span className={styles.détailTarif}>
              Données standard illimitées
            </span>
            <span className={styles.détailTarif}>IP Publique</span>
            <span className={styles.détailTarif}>Priorité de réseau</span>
            <span className={styles.détailTarif}>Assistante prioritaire</span>
            <span className={styles.subTitleTarif}>Forfaits mensuels</span>
            <span
              style={{ textTransform: "uppercase", marginBottom: "20px" }}
              className={styles.détailTarif}
            >
              Données standard illimitées
            </span>
            <div className={styles.lineTarif}>
              <span style={{ fontSize: "0.9rem" }}>PRIORITAIRE - 40 GO</span>
              <span
                style={{
                  marginLeft: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                316800 AR
              </span>
              <span style={{ fontSize: "0.7rem" }}>/Mois</span>
            </div>
            <div className={styles.lineTarif}>
              <span style={{ fontSize: "0.9rem" }}>PRIORITAIRE - 1 TO</span>
              <span
                style={{
                  marginLeft: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                451200 AR
              </span>
              <span style={{ fontSize: "0.7rem" }}>/Mois</span>
            </div>

            <div className={styles.lineTarif}>
              <span style={{ fontSize: "0.9rem" }}>PRIORITAIRE - 2 TO</span>
              <span
                style={{
                  marginLeft: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                902400 AR
              </span>
              <span style={{ fontSize: "0.7rem" }}>/Mois</span>
            </div>
            <span
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Données standard illimitées après épuisement des données
              prioritaires. Données prioritaires supplémentaires disponsibles
              par Go.
            </span>
          </div>
          <div className={styles.tarifCard}>
            <span style={{ fontSize: "1.5rem" }} className={styles.offreTitle}>
              MOBILE SUR TERRE
            </span>
            <span
              style={{
                fontSize: "0.9rem",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Idéal pour les entreprises maritimes, les entreprises
              d'intervention d'urgence et les entreprises mobiles
            </span>
            <span style={{textAlign:"center"}} className={styles.subTitleTarif}>
              PRINCIPALES FONCTIONNALITES
            </span>
            <span className={styles.détailTarif}>
              Données illimitées sur le continent
            </span>
            <span className={styles.détailTarif}>
              En mouvement + utilisation en mer
            </span>
            <span className={styles.détailTarif}>Priorité de réseau</span>
            <span className={styles.détailTarif}>Assistante prioritaire</span>
            <span className={styles.subTitleTarif}>Forfaits mensuels</span>
            <span
              style={{ textTransform: "uppercase", marginBottom: "20px" }}
              className={styles.détailTarif}
            >
              Données standard illimitées
            </span>
            <div className={styles.lineTarif}>
              <span style={{ fontSize: "0.9rem" }}>
                MOBILE PRIORITAIRE - 1TO
              </span>
              <span
                style={{
                  marginLeft: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                5424000 AR
              </span>
              <span style={{ fontSize: "0.7rem" }}>/Mois</span>
            </div>
            <div className={styles.lineTarif}>
              <span style={{ fontSize: "0.9rem" }}>
                MOBILE PRIORITAIRE - 5 TO
              </span>
              <span
                style={{
                  marginLeft: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                27120000 AR
              </span>
              <span style={{ fontSize: "0.7rem" }}>/Mois</span>
            </div>

            <span
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Données mobiles prioritaires supplémentaires disponsibles par Go.
            </span>
          </div>
          <div className={styles.tarifCard}>
            <span style={{ fontSize: "1.5rem" }} className={styles.offreTitle}>
              MARITIME
            </span>
            <span
              style={{
                fontSize: "0.9rem",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Idéal pour les entreprises maritimes, les entreprises
              d'intervention d'urgence et les entreprises mobiles
            </span>
            <span style={{textAlign:"center"}} className={styles.subTitleTarif}>
              PRINCIPALES FONCTIONNALITES
            </span>
            <span className={styles.détailTarif}>
              Données illimitées sur le continent
            </span>
            <span className={styles.détailTarif}>
              En mouvement + utilisation en mer
            </span>
            <span className={styles.détailTarif}>Priorité de réseau</span>
            <span className={styles.détailTarif}>Assistante prioritaire</span>
            <span className={styles.subTitleTarif}>Forfaits mensuels</span>
            <span
              style={{ textTransform: "uppercase", marginBottom: "20px" }}
              className={styles.détailTarif}
            >
              Données standard illimitées
            </span>
            <div className={styles.lineTarif}>
              <span style={{ fontSize: "0.9rem" }}>
                MOBILE PRIORITAIRE - 1TO
              </span>
              <span
                style={{
                  marginLeft: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                5424000 AR
              </span>
              <span style={{ fontSize: "0.7rem" }}>/Mois</span>
            </div>
            <div className={styles.lineTarif}>
              <span style={{ fontSize: "0.9rem" }}>
                MOBILE PRIORITAIRE - 5 TO
              </span>
              <span
                style={{
                  marginLeft: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                27120000 AR
              </span>
              <span style={{ fontSize: "0.7rem" }}>/Mois</span>
            </div>

            <span
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Données mobiles prioritaires supplémentaires disponsibles par Go.
            </span>
          </div>
        </div>

        <span
          style={{
            placeSelf: "center",
            textAlign: "center",
            marginTop: "50px",
          }}
          className={styles.priceDescription}
        >
          Internet haut débit fiable pour les entreprises.
          <br /> A partir de 316.800Ar/Mois avec un coût de matériel de
          13.560.000 Ar
          <br /> + prix d'expédition 271.200 Ar
          <span
            style={{
              marginLeft: "10px",
              color: "#ff8c00",
              fontWeight: "700",
            }}
          >
            DHL
          </span>
        </span>
        <div className="pageDoteContainer">
          <div className="pageDote"></div>
          <div className="pageDote"></div>
          <div className="pageDote"></div>
        </div>
      </div>
      <div className={styles.fifteenContainer}>
        <div style={{display:'flex',flexDirection:'column'}}>
          <span style={{ color: "#ff8c00", margin: "50px 0px 10px 0px", textAlign:'left' }} className={styles.serviceTitle}>Pourquoi nous</span>
          <span className={styles.fifteenDescription} >
            Faire de service à moindre coût garantissant un support client
            personnalisé avec assistance starlink<br/><br/>
            Garantie pour tous nos
            matériaux <br/><br/>
            Accompagnement pour l'abonnement et l'installation
            téchnique de base Livraison rapide avec DHL<br/><br/>
             Kit entièrement à votre
            nom <br/><br/>
            Prix vérifiable sur site starlink et pas de frais caché<br/><br/>
             Retour
            des matériaux au bout de 30 jours si défaillant avec un abonnement de 1mois offert comme dédommagement

          </span>
        </div>
        <span className={styles.fifteenDetail} >
          Frais de préstation <span style={{fontSize:'1.3rem',fontWeight:'700'}}>500.000 Ar</span><br/> à payer en une seule fois avec la
          commande des kits
        </span>
      </div>
    </div>
  );
}

export default StarlinkProviderPage;
