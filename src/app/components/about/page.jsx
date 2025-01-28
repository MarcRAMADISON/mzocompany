import style from "./about.module.css";
import Image from "next/image";
import CustomCarousel from "../carousel/page";
import ScrollAppear from "../scrollAppear/page";

const data = [
  "/assets/carrousel1.jpg",
  "/assets/carrousel2.jpg",
  "/assets/carrousel3.jpg",
  "/assets/carrousel4.jpg",
  "/assets/carrousel5.jpg",
  "/assets/carrousel6.jpg",
  "/assets/carrousel7.jpg",
  "/assets/carrousel8.jpg",
  "/assets/carrousel9.jpg",
  "/assets/carrousel10.jpg",
  "/assets/carrousel11.jpg",
  "/assets/carrousel12.jpg",
  "/assets/carrousel13.jpg",
  "/assets/carrousel14.jpg",
  "/assets/carrousel15.jpg",
  "/assets/carrousel16.jpg",
  "/assets/carrousel17.jpg",
  "/assets/carrousel18.jpg",
  "/assets/carrousel19.jpg",
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
