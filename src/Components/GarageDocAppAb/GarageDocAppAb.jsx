import React from "react";
import aboutPhoneImg from "../../assets/Images/aboutPhoneImg.png";
import GarageDocAppAbLy from "../../OverLy/GarageDocAppAbLy/GarageDocAppAbLy";
const GarageDocAppAb = () => {
  return (
    <section className="abouteImg w-full py-[20px] md:pt-[120px] md:pb-[60px] relative z-10">
      <div className="container mx-auto  ">
        <div className="flex flex-col md:flex-row items-center lg:items-start ">
          <div className="w-full md:w-[40%] lg:w-1/2 ">
            <div className="mobile-image flex justify-center">
              <img src={aboutPhoneImg} alt="aboutPhoneImg" />
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-1/2 ">
            <div className="abConte ml-0 md:ml-8  mt-4 ">
              <div className=" text-center text-white lg:text-start text-[16px] py-4  md:py-0 xs:text-[20px] sm:text-[26px]  xl:text-[36px] tracking-[8px]">
                GARAGEDOC APP
              </div>
              <div className="text-white text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-2xl sm:font-medium">
                We have grown our position all over the world in a very short
                span of time. Delighting our customers with valuable industry
                awareness acquired and developed is our responsibility. We
                deliver affordable technical services and design solutions
                without compromising on quality. We always help our clients to
                solve all their problems and improve their business performance.
                We are always looking for highly ambitious specialists and
                dedicated professionals.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overly left bottom */}
      {/* <div className="absolute  hidden md:block top-[1%] -left-[5%] md:top-[10%] md:-left-[5%] xl:top-[20px] xl:-left-[5px] -z-[1]">
        <GarageDocAppAbLy/>
      </div> */}
    </section>
  );
};

export default GarageDocAppAb;
