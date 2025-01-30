"use client";

import { listActivity } from "@/app/utils";
import style from "./menuBar.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { listSocialMedia } from "@/app/utils";
import Link from "next/link";

function MenuBar() {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleActivity, setToggleActivity] = useState(false);
  const [toggleContact, setToggleContact] = useState(false);
  const [toggleFloatContact, setToggleFloatContact] = useState(false);

  const activityRef = useRef(null);
  const contactRef = useRef(null);
  const contactButtonRef = useRef(null);
  const activityButtonRef = useRef(null);
  const floatButtonRef = useRef(null);
  const floatRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      activityRef.current &&
      !activityRef.current.contains(event.target) &&
      contactRef.current &&
      !contactRef.current.contains(event.target) &&
      contactButtonRef.current &&
      !contactButtonRef.current.contains(event.target) &&
      activityButtonRef.current &&
      !activityButtonRef.current.contains(event.target) &&
      floatButtonRef.current &&
      !floatButtonRef.current.contains(event.target) &&
      floatRef.current &&
      !floatRef.current.contains(event.target)
    ) {
      const floatContact = document.querySelector("#floatContact");

      sousMenuContact.style.height = "0";
      sousMenuContact.style.opacity = "0";
      sousMenu.style.height = "0px";
      sousMenu.style.opacity = "0";
      floatContact.style.height = "0px";
      floatContact.style.opacity = "0";
      setToggleActivity(false);
      setToggleContact(false);
      setToggleFloatContact(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        idMenu.style.height = "300px";
        idMenu.style.opacity = "1";
      }

      return !prev;
    });
  };

  const handleActivityClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const sousMenu = document.querySelector("#sousMenu");
    const sousMenuContact = document.querySelector("#sousMenuContact");

    sousMenuContact.style.height = "0";
    sousMenuContact.style.opacity = "0";

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

  const handleContactClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const sousMenu = document.querySelector("#sousMenuContact");
    const sousMenuActivity = document.querySelector("#sousMenu");

    sousMenuActivity.style.height = "0";
    sousMenuActivity.style.opacity = "0";

    setToggleContact((prev) => {
      if (prev) {
        sousMenu.style.height = "0px";
        sousMenu.style.opacity = "0";
      } else {
        sousMenu.style.height = "390px";
        sousMenu.style.opacity = "1";
      }

      return !prev;
    });
  };

  const handleToggleFloatContact = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const floatContact = document.querySelector("#floatContact");

    setToggleFloatContact((prev) => {
      if (prev) {
        floatContact.style.height = "0px";
        floatContact.style.opacity = "0";
      } else {
        floatContact.style.height = "180px";
        floatContact.style.opacity = "1";
      }

      return !prev;
    });
  };

  return (
    <div>
      <div className={style.contactFloatBlock}>
        <div
          className={style.contactFloatMenu}
          id="floatContact"
          ref={floatRef}
        >
          {listSocialMedia.map((media, index) => {
            return (
              <Link href={media.url} target="_blank" key={index}>
                <Image
                  src={media.urlImage}
                  width={40}
                  height={40}
                  alt="social media link image"
                />
              </Link>
            );
          })}
        </div>
        <button
          onClick={handleToggleFloatContact}
          style={{
            background: "#fff",
            border: "none",
            padding: 0,
            cursor: "pointer",
            borderRadius: "50%",
            display: "flex",
            height: "60px",
            width: "60px",
          }}
          ref={floatButtonRef}
        >
          <Image
            src="/assets/contact_person.png"
            alt="contact person"
            height={60}
            width={60}
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "50%",
            }}
          />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
              ref={activityButtonRef}
            >
              <h5 className={style.activity}>Activité</h5>
              {toggleActivity ? (
                <div className={style.arrow_up}></div>
              ) : (
                <div className={style.arrow_down}></div>
              )}
            </div>
            <div className={style.contactContainer}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  zIndex: "999",
                }}
                id="activity"
                onClick={handleContactClick}
                ref={contactButtonRef}
              >
                <h5 className={style.activity}>Contact</h5>
                {toggleContact ? (
                  <div className={style.arrow_up}></div>
                ) : (
                  <div className={style.arrow_down}></div>
                )}
              </div>
              <div
                className={style.sous_menu_contact}
                id="sousMenuContact"
                ref={contactRef}
              >
                {listSocialMedia.map((media, index) => {
                  return (
                    <Link key={index} href={media.url} target="_blank">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={media.urlImage}
                          width={40}
                          height={40}
                          alt="social media link image"
                        />
                        <span className={style.contactValue}>
                          {media.value}
                        </span>
                      </div>
                    </Link>
                  );
                })}
                <Image
                  style={{ marginTop: "50px", placeSelf: "center" }}
                  src="/assets/mzo_logo_black.png"
                  alt="logo mzo company"
                  width={120}
                  height={80}
                />
                <span
                  className={style.contactValue}
                  style={{ placeSelf: "center", marginTop: "50px" }}
                >
                  copyright (c) 2025
                </span>
              </div>
            </div>
            <div className={style.doteContainer}>
              <div className={style.dote}></div>
              <div className={style.dote}></div>
              <div className={style.dote}></div>
            </div>
          </div>
        </div>
        <div
          style={{ justifyContent: "space-around" }}
          className={style.sous_menu}
          id="sousMenu"
          ref={activityRef}
        >
          {listActivity.map((activity, index) => {
            return (
              <div key={index} className={style.activityItem}>
                <Image
                  src={activity.logoUrl}
                  alt="logo mzo activity"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            );
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
        <div className={style.menuBlock} id="menuBlockId">
          <h5
            className={style.menuItem}
            style={{ marginTop: "30px", color: "#010029" }}
          >
            Acceuil
          </h5>
          <h5
            className={style.menuItem}
            style={{
              marginTop: "20px",
              paddingTop: "10px",
              color: "#010029",
              borderTop: "1px solid #010029",
              width: "90%",
              textAlign: "center",
            }}
          >
            Activités
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginRight: "20px",
              width: "100%",
            }}
          >
            {listActivity.map((activity, index) => {
              return (
                <Image
                  key={index}
                  src={activity.logoUrl}
                  width={50}
                  height={40}
                  alt="logo mzo activity"
                />
              );
            })}
          </div>
          <h5
            className={style.menuItem}
            style={{
              marginTop: "20px",
              paddingTop: "10px",
              color: "#010029",
              borderTop: "1px solid #010029",
              width: "90%",
              textAlign: "center",
            }}
          >
            Contact
          </h5>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            {listSocialMedia.map((media, index) => {
              return (
                <Link href={media.url} target="_blank" key={index}>
                  <Image
                    src={media.urlImage}
                    width={50}
                    height={50}
                    alt="logo mzo activity"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
