import style from "./activity.module.css";
import Image from "next/image";
import { listActivity } from "@/app/utils";
import ScrollAppear from "../scrollAppear/page";

function Activity() {
  return (
    <div className={style.container}>
      <div className={style.activityBlock}>
        {listActivity.map((activity, index) => {
          return (
            <ScrollAppear key={index}>
              <div className={style.activityCard}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100px",
                  }}
                >
                  <Image
                    src={activity.logoUrl}
                    alt="logo mzo activity"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h5 className={style.description}>{activity.descritption}</h5>
                <Image
                  src={activity.illustrationUrl}
                  alt="illustration mzo activity"
                  width={300}
                  height={320}
                  style={{ marginTop: "60px" }}
                />
              </div>
            </ScrollAppear>
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
