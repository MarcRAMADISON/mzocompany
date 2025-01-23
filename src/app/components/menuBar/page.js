"use client";

import { listActivity } from "@/app/utils";
import style from "./menuBar.module.css";
import Image from "next/image";
import { useState } from "react";

function MenuBar() {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleActivity, setToggleActivity] = useState(false);

  const toggleMenu = () => {
    const idMenu = document.querySelector("#menuBlockId");
    const burgerMenu = document.querySelector("#burger_menu_id");
    const spans = burgerMenu.querySelectorAll("span");

    setToggleMobile((prev) => {
      if (prev) {
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
        idMenu.style.height = "0px";
        idMenu.style.opacity = "0";

      } else {
        spans[0].style.transform = "translateY(13px) rotate(45deg)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "translateY(-13px) rotate(-45deg)";
        idMenu.style.height = "100px";
        idMenu.style.opacity = "1";

      }

      return !prev;
    });
  };

  const handleActivityClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const sousMenu = document.querySelector("#sousMenu");

    setToggleActivity((prev) => {
      if (prev) {
        sousMenu.style.height = "0px";
        sousMenu.style.opacity = "0";
      } else {
        sousMenu.style.height = "150px";
        sousMenu.style.opacity = "1";
      }

      return !prev;
    });
  };

  return (
    <div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div className={style.container}>
          <Image
            className={style.logo}
            src="/assets/mzo_logo.png"
            alt="mzo logo"
            width={120}
            height={80}
          />
          <div className={style.menuItems}>
            <h5 className={style.menuItem}>Acceuil</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              id="activity"
              onClick={handleActivityClick}
            >
              <h5 className={style.activity}>Activité</h5>
              {toggleActivity? <div className={style.arrow_up}></div> :  <div className={style.arrow_down}></div>}
            </div>

            <h5 className={style.menuItem}>Contact</h5>
            <div className={style.doteContainer}>
              <div className={style.dote}></div>
              <div className={style.dote}></div>
              <div className={style.dote}></div>
            </div>
          </div>
        </div>
        <div className={style.sous_menu} id="sousMenu">
          {listActivity.map((activity,index)=>{
            return <Image key={index} src={activity.logoUrl} width={120} height={70} alt="logo mzo activity"/>
          })}
        </div>
      </div>

      <div className={style.mobileBlock} id="mobileBlockId">
        <div className={style.mobileContainer}>
          <Image
            src="/assets/mzo_logo.png"
            alt="mzo logo"
            width={100}
            height={60}
          />
          <div
            className={style.burger_menu}
            id="burger_menu_id"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={style.menuBlock} id="menuBlockId"></div>
      </div>
    </div>
  );
}

export default MenuBar;
