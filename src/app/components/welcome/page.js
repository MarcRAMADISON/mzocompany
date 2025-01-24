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
      <div className="pageDoteContainer">
        <div className="pageDote"></div>
        <div className="pageDote"></div>
        <div className="pageDote"></div>
      </div>
    </div>
  );
}

export default Welcome;
