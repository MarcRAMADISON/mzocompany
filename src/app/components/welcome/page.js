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
        style={{ width: "40%", height: "auto" }}
      />
    </div>
  );
}

export default Welcome;
