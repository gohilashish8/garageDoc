import React, { useState } from "react";
import headerLogo from "../../assets/Images/headerLogo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className={`shadow-md p-2 z-[9999] sm:px-10 bg-[#000000c3] font-sans min-h-[70px] fixed top-0 w-full ${isMobileMenuOpen ? "black" : "bg-[#0000009b]"}`}>
      <div className="flex flex-wrap items-center gap-4 justify-between">
        <a href="#">
          <img src={headerLogo} alt="logo" />
        </a>

        <div className="flex ">
          {/* <button className="px-4 py-2 text-sm rounded-full font-bold text-primary border-2 border-primary bg-transparent transition-all ease-in-out duration-300 hover:bg-primary hover:text-white">
            Login
          </button> */}
          <button className="lg:hidden ml-7 mr-2 " onClick={toggleMobileMenu}>
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
         
        <ul className={`flex transition-all duration-700 lg:ml-12 lg:space-x-4 max-lg:space-y-2 ${isMobileMenuOpen ? 'max-lg:block' : ' max-lg:hidden '}  max-lg:w-full`}>
          <li className="max-lg:border-b max-lg:bg-primary max-lg:py-2 px-3 max-lg:rounded">
            <a
              href="#"
              className="lg:hover:text-primary text-primary max-lg:text-white block font-semibold text-[15px]"
            >
              Home
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
            <a
              href="#"
              className="lg:hover:text-primary text-white block font-semibold text-[15px]"
            >
              Team
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
            <a
              href="#"
              className="lg:hover:text-primary text-white block font-semibold text-[15px]"
            >
              Feature
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
            <a
              href="#"
              className="lg:hover:text-primary text-white block font-semibold text-[15px]"
            >
              Blog
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
            <a
              href="#"
              className="lg:hover:text-primary text-white block font-semibold text-[15px]"
            >
              About
            </a>
          </li>
          <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
            <a
              href="#"
              className="lg:hover:text-primary text-white block font-semibold text-[15px]"
            >
              Contact
            </a>
          </li>
        </ul>
       
      </div>
    </header>
  );
};

export default Header;
