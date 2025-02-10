'use client'

import style from "./activity.module.css";
import Image from "next/image";
import { listActivity } from "@/app/utils";
import ScrollAppear from "../scrollAppear/page";
import { useRouter } from "next/navigation";

function Activity() {
  const router=useRouter()

  return (
    <div className={style.container}>
      <div className={style.activityBlock}>
        {listActivity.map((activity, index) => {
          return (
            <ScrollAppear key={index}>
              <div className={style.activityCard} onClick={()=>activity.name === "Mi-Zesta Online"? window.open('https://www.facebook.com/mizestaonline', '_blank') : router.push(`${activity.pageUrl}`)}>
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
                <div style={{position:"relative",width:"300px",height:'320px',marginTop:'30px'}}>
                <Image
                  src={activity.illustrationUrl}
                  alt="illustration mzo activity"
                  layout="fill"
                  objectFit="contain"
                />
                </div>
                
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
