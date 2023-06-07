import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://i.ibb.co/Sd0ZKp8/ellysikkema-WRBy-Zhru-W6ounsplash.jpg" />
         </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/2jfYc17/3liz99-JOnae-Vo-Nk-TQunsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/CnY0F82/nicolegreen-Qgi-Aey-GUUVQunsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/nCR6PvS/kenny-eliason-ot-YC4eo-GJGg-unsplash.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Banner;