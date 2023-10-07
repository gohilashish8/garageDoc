import React from 'react'
import heroRightImg from '../../assets/Images/heroRightImage.png'
import playStoreIcon from '../../assets/Images/Icons/playstoreIcon.png'
import appStoreIcon from '../../assets/Images/Icons/appstore.png'
import TopLeftGreen from '../../OverLy/Hero/TopLeftGreen'
const Hero = () => {
    return (
        <section className='heroSection w-full py-[20px] md:py-[40px] relative z-10'>

            <div className="container mx-auto mt-[40px] ">
                <div className="flex flex-col md:flex-row-reverse ">
                    <div className="w-full md:w-[40%]">
                        <div className="mobile-image flex justify-center">
                            <img src={heroRightImg} alt="" />
                        </div>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <div className="hero-text flex justify-center flex-col  md:w-full lg:w-[560px] mx-auto mt-[30px] ">
                            <h1 className='heroTitle text-white text-center md:text-start text-[26px] xs:text-[32px] sm:text-[36px] xl:text-[56px]  font-semibold '>
                                Want to make your
                                <br className='hidden md:block' />
                                <span className='text-primary border-primary border-b-[3px] '> business </span>  smarter
                            </h1>

                            <div className="sub-title text-white text-center md:text-start text-[20px] xs:text-[22px] sm:text-[24px] xl:text-[30px]  tracking-[5px] my-[15px]">
                                Download our app today
                            </div>

                        </div>

                        <div className="hero-buttons flex justify-center md:justify-start   md:w-full lg:w-[560px] mx-auto flex-col xs:flex-row ">
                            
                                <a href='#' className="playStore xs:mr-2 my-2 sm:my-0">
                                        <img src={playStoreIcon} alt="playStoreIcon" className='w-[180px] mx-auto sm:mx-0' />
                                </a>

                                <a href='#' className="playStore xs:ml-2 my-2 sm:my-0">
                                        <img src={appStoreIcon} alt="playStoreIcon"  className='w-[180px] mx-auto sm:mx-0' />
                                </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* overly left top */}
            <div className="absolute  -top-[25%] -left-[25%] lg:top-0 lg:left-0 -z-[1]">
                <TopLeftGreen/>
            </div>


        </section>
    )
}

export default Hero