import React from "react";
import { BsTelephone } from "react-icons/bs";
import LocetionIcon from "../../assets/Images/Icons/location.svg";
import ContectUsLy from "../../OverLy/ContectUsLy/ContectUsLy";
import AddMap from "./AddMap";

const ContectUs = () => {
  return (
    <section className="contectUs w-full py-[20px] md:py-[40px] relative z-10">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-center">
          <div className="uppercase text-center text-white lg:text-start text-[20px] py-4  md:py-0 xs:text-[20px] sm:text-[26px]  xl:text-[36px] tracking-[8px]">
            contact us
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:mt-[40px]">
          <div className="w-full md:w-[50%]">
            <AddMap />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="context-text py-2 md:py6 text-white text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] xl:text-[36px] md:leading-8 xl:leading-[3rem] lg:pb-7">
              Give us a call below to speak with one of our service
              representatives or book the appointment
            </div>
            <button className="px-6 py-1 text-sm rounded-full font-bold text-primary border-2 border-primary bg-transparent transition-all ease-in-out duration-300 hover:bg-primary hover:text-white flex items-center mt-[10px]">
              <BsTelephone size={16} className="mr-2" /> <span>Call Us</span>
            </button>

            <div className="tringle my-8 bg-[#ffffff24] xl:bg-transparent rounded-xl relative p-2">
              <div className="img hidden xl:block">
                <ContectUsLy />
              </div>
              <div className="flex  justify-center xl:justify-start items-center xl:absolute top-[15px] left-[40px]">
                <div className="icon w-[60px]">
                  <img src={LocetionIcon} alt="LocetionIcon" />
                </div>
                <div className="text-white w-[75%]  xs:text-[16px]  md:[18px] lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overly left top */}
      {/* <div className="absolute  -top-[25%] -left-[25%] lg:top-0 lg:left-0 -z-[1]">
        <TopLeftGreen/>
    </div> */}
    </section>
  );
};

export default ContectUs;
