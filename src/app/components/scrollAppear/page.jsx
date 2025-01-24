"use client"; // Nécessaire pour les composants avec des effets dans Next.js 13+

import React, { useEffect, useState } from "react";
import styles from "./ScrollAppear.module.css"; // Ton fichier CSS module

const ScrollAppear = ({ children,style={}, }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Ajoute la classe lorsqu'il est visible
        }
      },
      { threshold: 0.1 } // Déclenche quand 10% de l'élément est visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      style={style}
      ref={elementRef}
      className={`${styles.scrollAppear} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAppear;
