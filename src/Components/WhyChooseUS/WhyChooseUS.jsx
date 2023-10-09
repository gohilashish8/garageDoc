import React from "react";
import whyChooseUsImg1 from "../../assets/Images/whyChooseUsImg1.png";
import whyChooseUsImg2 from "../../assets/Images/whyChooseUsImg2.png";
import whyChooseUsImg3 from "../../assets/Images/whyChooseUsImg3.png";

const WhyChooseUS = () => {
  return (
    <section className="WhyChooseUsBg w-full py-[20px] md:py-[40px] relative z-10 mt-7 md:mt-[40px] mb-[20px]">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-center">
          <div className="uppercase text-center text-white lg:text-start text-[20px] py-4  md:py-0 xs:text-[20px] sm:text-[26px]  xl:text-[36px] tracking-[8px]">
            Why choose us
          </div>
        </div>

        <div className="flex flex-wrap justify-center flex-row  space-y-4 space-x-0 xs:space-x-4 lg:space-y-0 pt-20 pb-10">
          <div></div>
          <div className=" w-[90%] xs:w-[90%] sm:w-[47%]  md:w-[47%] lg:w-[28%]  rounded-md ">
            <div className="relative">
              <div className="img-sec">
                <img src={whyChooseUsImg1} alt="whyChooseUsImg" className="w-full" />
              </div>
              <div className="absolute w-[100%] h-full text-white top-0 left-0">
                <div className="text-center py-8 text-[22px] font-semibold">
                  Customer Satisfaction
                </div>
                <div className="text-center mx-1 sm:mx-5 landing-[31px] pt-2 sm:text-[18px] ">
                  Our track record of satisfied clients speaks for itself. We go
                  above and beyond to exceed your expectations.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] xs:w-[90%] sm:w-[47%]  md:w-[47%] lg:w-[28%]  rounded-md ">
            <div className="relative lg:mt-[80px]">
              <div className="img-sec">
                <img src={whyChooseUsImg2} alt="whyChooseUsImg" className="w-full" />
              </div>
             <div className="absolute w-[100%] h-full text-white top-0 left-0">
                <div className="text-center py-8 text-[22px] font-semibold">
                  Quality Products
                </div>
                <div className="text-center mx-1 sm:mx-5 landing-[31px] pt-2 sm:text-[18px] ">
                  We use only the highest quality materials and products,
                  ensuring that your garage is built to last and withstand the
                  test of time.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] xs:w-[90%] sm:w-[47%]  md:w-[47%] lg:w-[28%]  rounded-md ">
            <div className="relative">
              <div className="img-sec">
                <img src={whyChooseUsImg3} alt="whyChooseUsImg" className="w-full" />
              </div>
             <div className="absolute w-[100%] h-full text-white top-0 left-0">
                <div className="text-center py-8 text-[22px] font-semibold">
                  Customer Satisfaction
                </div>
                <div className="text-center mx-1 sm:mx-5 landing-[31px] pt-2 sm:text-[18px] ">
                  Punctuality and reliability are at the core of our service.
                  You can trust us.
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

export default WhyChooseUS;
