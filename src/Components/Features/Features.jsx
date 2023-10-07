import React from "react";
import featuresIcon1 from "../../assets/Images/Icons/featuresIcon1.png";
import featuresIcon2 from "../../assets/Images/Icons/featuresIcon2.png";
import featuresIcon3 from "../../assets/Images/Icons/featuresIcon3.png";
import featuresIcon4 from "../../assets/Images/Icons/featuresIcon4.png";
import featuresIcon5 from "../../assets/Images/Icons/featuresIcon5.png";
import featureImg from "../../assets/Images/featuresImg.png";

const Features = () => {
  return (
    <section className=" w-full py-[20px] md:py-[40px] relative z-10">
      <div className="container mx-auto faqSecbg p-4 sm:p-[40px] !pb-[200px] lg:!pb-[280px] ">

      <div className="flex flex-row justify-center pb-12">
          <div className=" text-center uppercase text-white lg:text-start text-[20px] py-4  md:py-0 xs:text-[20px] sm:text-[26px]  xl:text-[36px] tracking-[8px]">
          features
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center flex-row  space-y-4 space-x-0 xs:space-x-4 lg:space-y-0">
          <div></div>
          <div className=" w-[90%] xs:w-[45%] sm:w-[30%] md:w-[25%] lg:w-[18%] bg-white rounded-md ">
            <div className="flex justify-center py-4">
              <img src={featuresIcon1} alt="featuresIcon1" />
            </div>
            <div className="content text-center pb-4 px-2">
              <div className="text-[20px] font-bold">Created Orders</div>
              <div className="text-[18px]">Repair Order Created</div>
            </div>
          </div>
          <div className=" w-[90%] xs:w-[45%] sm:w-[30%] md:w-[25%] lg:w-[18%] bg-white rounded-md ">
            <div className="flex justify-center py-4">
              <img src={featuresIcon2} alt="featuresIcon2" />
            </div>
            <div className="content text-center pb-4 px-2">
              <div className="text-[20px] font-bold">In Progress</div>
              <div className="text-[18px]">Repair Order Created</div>
            </div>
          </div>
          <div className=" w-[90%] xs:w-[45%] sm:w-[30%] md:w-[25%] lg:w-[18%] bg-white rounded-md ">
            <div className="flex justify-center py-4">
              <img src={featuresIcon3} alt="featuresIcon3" />
            </div>
            <div className="content text-center pb-4 px-2">
              <div className="text-[20px] font-bold">complete Orders</div>
              <div className="text-[18px]">Vehicle Is Ready</div>
            </div>
          </div>
          <div className=" w-[90%] xs:w-[45%] sm:w-[30%] md:w-[25%] lg:w-[18%] bg-white rounded-md ">
            <div className="flex justify-center py-4">
              <img src={featuresIcon4} alt="featuresIcon1" />
            </div>
            <div className="content text-center pb-4 px-2">
              <div className="text-[20px] font-bold">Accounts</div>
              <div className="text-[18px]">Total item report </div>
            </div>
          </div>
          <div className=" w-[90%] xs:w-[45%] sm:w-[30%] md:w-[25%] lg:w-[18%] bg-white rounded-md ">
            <div className="flex justify-center py-4">
              <img src={featuresIcon5} alt="featuresIcon" />
            </div>
            <div className="content text-center pb-4 px-2">
              <div className="text-[20px] font-bold">orders</div>
              <div className="text-[18px]">All Repair orders</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto -mt-[10rem] ">
        <div className=" mx-4 lg:mx-20 featureBgimg bg-primary lg:bg-transparent rounded-lg">
          <div className="flex flex-col lg:flex-row  items-center">
            <div className="content text-white p-4 lg:pl-[50px] lg:w-[50%]">
              <div className=" text-[24px] xs:text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px]  font-semibold mb-3">join the biggest community</div>
              <div className="tracking-[4px] sm:text-[20px] font-medium mb-3">15 DAYS FREE TRIAL</div>
              <div className="bg-[#ffffff42] mb-3 inline-block p-2  sm:text-[24px]">₹2000/ 12 MONTH</div>
              <div className="text-sm mb-3">THEN ₹166 PER MONTH. CANCEL ANYTIME.</div>
            </div>
            <div className="img-secc lg:w-[50%]">
              <img src={featureImg} alt="featureImg" />
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

export default Features;
