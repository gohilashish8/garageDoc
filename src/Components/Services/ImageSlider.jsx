import React, { useRef, useState } from "react";
import aboutPhoneImg from "../../assets/Images/sliderImg1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination swiper-pagination-bullets-dynamic swiper-pagination-bullets swiper-pagination-horizontal"></div>
    </>
  );
};

export default ImageSlider;
