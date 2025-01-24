import style from "./about.module.css";
import Image from "next/image";
import CustomCarousel from "../carousel/page";
import ScrollAppear from "../scrollAppear/page";

const data=[
    "/assets/mzo_contact.png",
    "/assets/mzo_event.png",
    "/assets/mzo_business.png",
    "/assets/mzo_provider.png",
    "/assets/mzo_contact.png",
    "/assets/mzo_event.png",
    "/assets/mzo_business.png",
    "/assets/mzo_provider.png",
]

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
      <h5 className={style.title}>" Au cœur de vos projets, à la source de vos succès. "</h5>
        <CustomCarousel rows={data}/>
      <h5 className={style.sousTitle}>Avec Mzo Company,</h5>
      <h6 className={style.text}>Chaque service est conçu pour répondre à vos besoins spécifiques.</h6>
    </div>
  );
}

export default About;
