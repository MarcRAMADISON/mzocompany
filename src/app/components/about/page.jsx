import style from "./about.module.css";
import Image from "next/image";
import CustomCarousel from "../carousel/page";
import ScrollAppear from "../scrollAppear/page";

const data = [
  "/assets/carrousel1.jpeg",
  "/assets/carrousel2.jpg",
  "/assets/carrousel3.jpg",
  "/assets/carrousel5.jpeg",
  "/assets/carrousel6.jpg",
  "/assets/carrousel9.jpeg",
  "/assets/carrousel11.jpg",
  "/assets/carrousel14.jpg",
  "/assets/carrousel15.jpg",
  "/assets/carrousel16.jpeg",
  "/assets/carrousel17.jpeg",
  "/assets/carrousel18.jpeg",
  "/assets/carrousel19.jpeg",
  "/assets/carrousel20.jpg",
];

function About() {
  return (
    <div className={style.container}>
      <Image
        src="/assets/mzo_logo_black.png"
        alt="mzo logo black"
        width={600}
        height={600}
        className={style.image}
      />
      <h5 className={style.title}>
        " Au cœur de vos projets, à la source de vos succès. "
      </h5>
      <CustomCarousel rows={data} />
      <h5 className={style.sousTitle}>Avec Mzo Company,</h5>
      <h6 className={style.text}>
        Chaque service est conçu pour répondre à vos besoins spécifiques.
      </h6>
    </div>
  );
}

export default About;
