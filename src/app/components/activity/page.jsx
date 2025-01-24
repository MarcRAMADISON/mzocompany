import style from "./activity.module.css";
import Image from "next/image";
import { listActivity } from "@/app/utils";

function Activity() {
  return (
    <div className={style.container}>
      <div className={style.activityBlock}>
        {listActivity.map((activity, index) => {
          return (
            <div key={index} className={style.activityCard}>
              <Image
                src={activity.logoUrl}
                alt="logo mzo activity"
                width={150}
                height={100}
              />
              <h5 className={style.description}>{activity.descritption}</h5>
              <Image
                src={activity.illustrationUrl}
                alt="illustration mzo activity"
                width={300}
                height={320}
                style={{marginTop:'60px'}}
              />
            </div>
          );
        })}
      </div>
      <div className="pageDoteContainer">
        <div className="pageDote"></div>
        <div className="pageDote"></div>
        <div className="pageDote"></div>
      </div>
    </div>
  );
}

export default Activity;
