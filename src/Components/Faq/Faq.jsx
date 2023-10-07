import React from "react";
import faqImg from "../../assets/Images/faqImg.png";
import ContectUsLy from "../../OverLy/ContectUsLy/ContectUsLy";
import downArrow from '../../assets/Images/Icons/downArrow.svg'

const Faq = () => {
  return (
    <section className=" w-full py-[20px] md:py-[40px] relative z-10">
      <div className="container mx-auto faqSecbg  ">
        <div className="flex flex-col md:flex-row-reverse items-end space-y-4 md:space-y-0 md:mt-[40px]">
          <div className="w-full md:w-[50%] p-5  md:pl-0">
            <div className="flex flex-row justify-strat">
              <div className="context-text py-2 md:py6 text-white text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] xl:text-[36px] md:leading-8 xl:leading-[3rem] lg:pb-7">
                Frequently asked questions
              </div>
            </div>

            <div className="tringle my-4 bg-[#ffffff24] xl:bg-transparent rounded-xl relative p-2">
              <div className="img hidden xl:block">
                <ContectUsLy />
              </div>
              <div className="flex  justify-center xl:justify-start items-center xl:absolute top-[18px] left-[50px]">
                <div className="text-white w-[73%]  xs:text-[16px]  md:[18px] lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="icon w-[60px]">
                  <img src={downArrow} alt="downArrow" />
                </div>
              </div>
            </div>
            
            <div className="tringle my-4 bg-[#ffffff24] xl:bg-transparent rounded-xl relative p-2">
              <div className="img hidden xl:block">
                <ContectUsLy />
              </div>
              <div className="flex  justify-center xl:justify-start items-center xl:absolute top-[18px] left-[50px]">
                <div className="text-white w-[73%]  xs:text-[16px]  md:[18px] lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="icon w-[60px]">
                  <img src={downArrow} alt="downArrow" />
                </div>
              </div>
            </div>
            <div className="tringle my-4 bg-[#ffffff24] xl:bg-transparent rounded-xl relative p-2">
              <div className="img hidden xl:block">
                <ContectUsLy />
              </div>
              <div className="flex  justify-center xl:justify-start items-center xl:absolute top-[18px] left-[50px]">
                <div className="text-white w-[73%]  xs:text-[16px]  md:[18px] lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="icon w-[60px]">
                  <img src={downArrow} alt="downArrow" />
                </div>
              </div>
            </div>
            <div className="tringle my-4 bg-[#ffffff24] xl:bg-transparent rounded-xl relative p-2">
              <div className="img hidden xl:block">
                <ContectUsLy />
              </div>
              <div className="flex  justify-center xl:justify-start items-center xl:absolute top-[18px] left-[50px]">
                <div className="text-white w-[73%]  xs:text-[16px]  md:[18px] lg:text-[20px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="icon w-[60px]">
                  <img src={downArrow} alt="downArrow" />
                </div>
              </div>
            </div>

          </div>
          <div className="w-full md:w-[50%]">
            <img src={faqImg} alt="faqImg" />
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

export default Faq;
