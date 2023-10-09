import React from "react";

import GarageDocAppAbLy from "../../OverLy/GarageDocAppAbLy/GarageDocAppAbLy";
import ImageSlider from "./ImageSlider";
import ServicesOverLay from "../../OverLy/ServicesOverLay/ServicesOverLay";
const Services = () => {
  return (
    <section className="abouteImg w-full py-[20px] md:pt-[120px] md:pb-[60px] relative z-10 ">
      <div className="container mx-auto  ">
        <div className="flex flex-col md:flex-row items-center  ">
          <div className="w-full md:w-[60%] lg:w-1/2 ">
            <div className="abConte ml-0 md:ml-8  ">
              <div className=" text-center text-white lg:text-start text-[16px] py-4  md:py-0 xs:text-[20px] sm:text-[26px]  xl:text-[36px] tracking-[8px]">
                Services
              </div>
              <div className="text-white text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-2xl sm:font-medium py-2">
                Expertise: Our team brings years of experience and expertise to
                every project. We know garages inside and out, ensuring
                top-notch service and results.
              </div>
              <div className="text-white text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-2xl sm:font-medium py-2">
                Customized Solutions: We understand that every garage and client
                is unique. Our solutions are tailored to meet your specific
                needs and preferences
              </div>
              <div className="text-white text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-2xl sm:font-medium py-2">
                Quality Products: We use only the highest quality materials and
                products, ensuring that your garage is built to last and
                withstand the test of time.
              </div>
              <div className="text-white text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-2xl sm:font-medium py-2">
                Communication: We believe in transparent and open communication.
                You'll be kept informed at every stage of the project.
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%] lg:w-1/2 mx-5 shadow-md  bg-[#636363] py-2 rounded-2xl ">
            <ImageSlider />
          </div>
        </div>
      </div>

      {/* overly right bottom */}
      {/* <div className="absolute  hidden md:block top-[1%] -right-[5%] md:top-[10%] md:-right-0 xl:top-[20px] xl:-right-0 -z-[1]">
        <ServicesOverLay />
      </div> */}
    </section>
  );
};

export default Services;
