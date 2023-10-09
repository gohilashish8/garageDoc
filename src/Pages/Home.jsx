import React from 'react'
import Hero from '../Components/Hero/Hero'
import Header from '../Components/Header/Header'
import GarageDocAppAb from '../Components/GarageDocAppAb/GarageDocAppAb'
import Services from '../Components/Services/Services'
import Footer from '../Components/Footer/Footer'
import ContectUs from '../Components/ContectUs/ContectUs'
import Faq from '../Components/Faq/Faq'
import Features from '../Components/Features/Features'
import WhyChooseUS from '../Components/WhyChooseUS/WhyChooseUS'
import CenterLeft from '../OverLy/overlay/CenterLeft'
import CenterRighrGArageAppAbLy from '../OverLy/overlay/CenterRighrGArageAppAbLy'
import FeatureRight from '../OverLy/overlay/FeatureRight'
import FeatureCenter from '../OverLy/overlay/FeatureCenter'
import ServiceLeft from '../OverLy/overlay/ServiceLeft'
import ServiceRightover from '../OverLy/overlay/ServiceRightover'
import ServiceRightGreen from '../OverLy/overlay/ServiceRightGreen'

export const Home = () => {
  return (
    <>
    <Header/>
    <div className='relative z-0 w-[95%] xs:w-full mx-auto'>
        <Hero/>
        <GarageDocAppAb/>
        <Features/>
        <WhyChooseUS/>
        <Services/>
        <Faq/>
        <ContectUs/>
        <Footer/>

        <div className="absolute top-[8%] left-0">
          <CenterLeft/>
        </div>
        <div className="absolute top-[9%] right-0">
          <CenterRighrGArageAppAbLy/>
        </div>
        <div className="absolute top-[26%] right-0">
          <FeatureRight/>
        </div>

        <div className="absolute top-[28%] right-[29%]">
          <FeatureCenter/>
        </div>
        <div className="absolute top-[53%] left-0">
          <ServiceLeft/>
        </div>
        <div className="absolute top-[58%] right-0">
          <ServiceRightover/>
        </div>
        <div className="absolute top-[46%] right-0">
          <ServiceRightGreen/>
        </div>
    </div>
    </>
  )
}
