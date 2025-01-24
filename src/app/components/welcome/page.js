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
