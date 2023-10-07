import React from "react";
import footerLogo from "../../assets/Images/headerLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#292929] ">
        
        <div className="flex flex-wrap justify-between p-5 lg:py-5 lg:px-5 xl:py-12 xl:px-12 space-y-4 lg:space-y-0">
          <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[40%]">
            <div className=" sm:mt-[30px] xl:mt-0 ">
              <a href="#" className="w-full">
                <img src={footerLogo} alt="logo" className=" mb-6" />
              </a>
              <p className=" text-white mt-4 w-full xs:w-[90%] sm:w-[50%] lg:w-[90%]  xs:text-[20px] sm:text-[22px] ">
                We pride ourselves on our meticulous attention to detail. Every
                aspect of your project is carefully planned and executed to
                perfection.
              </p>
            </div>
          </div>
           <div className="w-full sm:w-[50%] md:w-[50%] lg:w-[30%]">
            <h4 className="xs:text-[18px] sm:text-[20px]  xl:text-[24px] uppercase font-semibold  text-white tracking-[8px]">
              Useful links
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  contact us
                </a>
              </li>
            </ul>
          </div>
           <div className="w-full sm:w-[50%] md:w-[50%] lg:w-[30%]">
            <h4 className="xs:text-[18px] sm:text-[20px]  xl:text-[24px] uppercase font-semibold  text-white tracking-[8px]">
              features
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  created ORDERS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  in PROGRESS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  complete ORDERS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  Accounts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#e1e1e1d2] text-base md:text-lg"
                >
                  orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 bg-[#191919]">
          <p className="text-gray-300 text-sm">
            © 2023
            <a
              href="https://readymadeui.com/"
              target="_blank"
              className="hover:underline mx-1"
            >
              ReadymadeUI
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
