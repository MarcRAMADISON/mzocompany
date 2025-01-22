'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './carousel.module.css'
import Image from "next/image";



const CustomCarousel = ({rows=[]}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass={style.itemClass}
      className={style.carousel}
    >
        {(rows || []).map((row,index)=>{
            return <div key={index}>
                <Image src={row} alt="image about mzo" width={200} height={300} style={{width:'90%', height:'auto'}}/>
                </div>
        })}
    </Carousel>
  );
};

export default CustomCarousel;