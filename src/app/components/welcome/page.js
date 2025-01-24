import style from "./welcome.module.css";
import Image from "next/image";

function Welcome() {
  return (
    <div className={style.container}>
      <Image
        src="/assets/welcome_illustration.png"
        alt="welcome mzo"
        width={600}
        height={600}
        className={style.image}
      />
      <Image
        src="/assets/background_welcome_page.png"
        alt="welcome mzo"
        width={1080}
        height={920}
        className={style.filigrane}
      />
      <h5 className={style.title}>VOTRE PARTENAIRE</h5>
      <h6 className={style.subTitle}>MULTISECTORIEL DE CONFIANCE</h6>
      <div className="pageDoteContainer">
        <div className="pageDote"></div>
        <div className="pageDote"></div>
        <div className="pageDote"></div>
      </div>
    </div>
  );
}

export default Welcome;
