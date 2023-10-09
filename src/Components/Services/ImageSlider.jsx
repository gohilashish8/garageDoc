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
      spaceBetween={20}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper p-1"
      >
        <SwiperSlide className="py-2">
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-2">
          <div className="mobile-image flex justify-center">
            <img src={aboutPhoneImg} alt="aboutPhoneImg" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination-container"></div>
    </>
  );
};

export default ImageSlider;
