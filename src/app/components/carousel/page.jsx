"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import Image from "next/image";
import style from "./carousel.module.css";

const CustomCarousel = ({ rows = [], disposition = "cover" }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      swipeable={true} 
      draggable={true} 
      showDots={false}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 0.5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass={style.itemClass}
      className={style.carousel}
    >
      {rows.map((row, index) => (
        <motion.div
          key={index}
          className={style.carouselItem}
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -50 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} 
          style={{ position: "relative", width: "90%", height: "400px", placeSelf: "center" }}
        >
          <Image
            src={row}
            alt="image about mzo"
            layout="fill"
            objectFit={disposition}
          />
        </motion.div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
