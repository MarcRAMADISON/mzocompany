import { useState } from "react";
import styles from "./Accordion.module.css";
import Image from "next/image";
import ModalComponent from "../modal/page";

const items = [
  {
    title: "Nos Challengers",
    contents: [
      {
        videoUrl: "/assets/videos/pepin_video.mp4",
        slogan: "Le pirate qui rafle tout sur son passage",
        title: "Killer#1 Pepin",
        miniature: "/assets/miniature_pepin.jpg",
      },
      {
        videoUrl: "/assets/videos/anthony_video.mp4",
        slogan: "Un boxeur sur le ring comme au téléphone",
        title: "Killer#2 Peter",
        miniature: "/assets/miniature_anthony.jpg",
      },
      {
        videoUrl: "/assets/videos/harvey_video.mp4",
        slogan: "Harvey Specter est là pour mettre les objections en pièces",
        title: "Killer#3 Peter",
        miniature: "/assets/miniature_harvey.jpg",
      },
      {
        videoUrl: "/assets/videos/axel_video.mp4",
        slogan: "Le 𝐡é𝐫𝐨𝐬 qui n'abandonne jamais",
        title: "Killer#4 Peter",
        miniature: "/assets/miniature_axel.jpg",
      },
      {
        videoUrl: "/assets/videos/staray_video.mp4",
        slogan: "Le loup chasseur de primes",
        title: "Killer#5 Staray",
        miniature: "/assets/miniature_staray.jpg",
      },
      {
        videoUrl: "/assets/videos/ares_video.mp4",
        slogan: "Le dieu de la guerre",
        title: "Killer#6 Arès",
        miniature: "/assets/miniature_ares.jpg",
      },
      {
        videoUrl: "/assets/videos/peter_video.mp4",
        slogan: "La victoire coule dans ses gènes !",
        title: "Killer#7 Peter",
        miniature: "/assets/miniature_peter.jpg",
      },
    ],
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickVideo = (url) => {
    if (url) {
      setCurrentVideo(url);
    }
    setIsOpen(true);
  };

  return (
    <>
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
      <div className={styles.accordion}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.header}
              onClick={() => toggleAccordion(index)}
            >
              {item.title} {openIndex === index ? "▲" : "▼"}
            </button>
            <div
              className={`${styles.content} ${
                openIndex === index ? styles.show : ""
              }`}
            >
              {item.contents.map((content, index) => {
                return (
                  <div
                    key={index}
                    style={{ display:"flex",flexDirection:"column",placeSelf: "center", margin: "auto" }}
                  >
                    <div
                      className={styles.video}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickVideo(content.videoUrl);
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
                        src={content.miniature}
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
                        fontSize: "1.1rem",
                        marginTop: "10px",
                      }}
                    >
                      {content.title}
                    </span>
                    <span style={{margin:"10px 0px 30px 0px"}}>{content.slogan}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
