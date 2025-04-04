"use client";

import MenuBar from "../components/menuBar/page";
import styles from "./contactCenter.module.css";
import Image from "next/image";
import CustomCarousel from "../components/carousel/page";
import { imagesContactCenter, lexacImages } from "../utils";
import ModalComponent from "../components/modal/page";
import { useState } from "react";
import DropdownMenu from "../components/dropdownMenu/page";

function ContactCenterPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleClickVideo = (title) => {
    console.log("title ***** ", title);
    if (title === "CHANLLENGE_MZO") {
      setCurrentVideo("/assets/videos/mzo_call_1.mp4");
    } else {
      setCurrentVideo("/assets/videos/jda.mp4");
    }
    setIsOpen(true);
  };

  return (
    <div>
      <MenuBar />
      <ModalComponent
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div>
          <div className={styles.video_container}>
            <video controls>
              <source src={currentVideo} type="video/mp4"></source>
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      </ModalComponent>
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
      <div className={styles.videoContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className={styles.video}
            onClick={(e) => {
              e.preventDefault();
              handleClickVideo("CHANLLENGE_MZO");
            }}
          >
            <Image
              src="/assets/play.png"
              style={{ zIndex: 9 }}
              width={60}
              height={60}
              alt="play logo"
              className={styles.playButton}
            />
            <Image
              src="/assets/miniature_challenge.jpg"
              style={{ zIndex: 0 }}
              objectFit="contain"
              layout="fill"
              alt="play logo"
            />
          </div>
          <span
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginTop: "10px",
            }}
          >
            RAZAFINDRAKOTO Zo Nirina José
          </span>
          <span style={{ color: "#555", fontSize: "1rem", marginTop: "5px" }}>
            CEO-Directeur and founder
          </span>
          <span
            style={{
              color: "#555",
              fontSize: "1rem",
              margin: "5px 0vh 8vh 0vh",
            }}
          >
            MZO Company - MZO Contact Center
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className={styles.video}
            onClick={(e) => {
              e.preventDefault();
              handleClickVideo("JDA_PRESENTATION");
            }}
          >
            <Image
              src="/assets/play.png"
              style={{ zIndex: 9 }}
              width={60}
              height={60}
              alt="play logo"
              className={styles.playButton}
            />
            <Image
              src="/assets/miniature_jda.jpg"
              style={{ zIndex: 0 }}
              objectFit="contain"
              layout="fill"
              alt="play logo"
            />
          </div>
          <span
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginTop: "10px",
            }}
          >
            Joao De Almeida
          </span>
          <span style={{ color: "#555", fontSize: "1rem", marginTop: "5px" }}>
            CEO de JDA DIFFUSION
          </span>
          <span
            style={{
              color: "#555",
              fontSize: "1rem",
              margin: "5px 0vh 8vh 0vh",
            }}
          >
            jdadiffusion.fr
          </span>
        </div>
      </div>
      <DropdownMenu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin:'50px'
        }}
      >
        <span className={styles.carouselTitle}>Challenge JDA Diffusion</span>
        <div className={styles.carouselContainer}>
          <CustomCarousel rows={imagesContactCenter} objectPosition="50% 0%" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className={styles.carouselTitle}>Lexac Conseil</span>
        <div className={styles.carouselContainer}>
          <CustomCarousel rows={lexacImages} objectPosition="50% 0%" />
        </div>
      </div>
    </div>
  );
}

export default ContactCenterPage;
