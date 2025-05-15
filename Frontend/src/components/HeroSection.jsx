import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.section className='heroSection' id='heroSection'  
     
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
        <Navbar/>
      <div className="container">
        <div className="banner">
            <div className="largeBox"><h1 className='title'>Delicous</h1></div>
            <div className="combined_boxes">
                <div className="imageBox">
                    <img src="hero1.png" alt="hero1" />
                </div>
                <div className="textAndLogo">
                    <div className="textWithSvg">
                        <h1 className='title'>Food</h1>
                        <h1 className='title dishes_title'>Dishes</h1>
                        <img src="/threelines.svg" alt="three" />
                    </div>
                    <img src="/logoF.svg" alt="logo" className='logo' />
                </div>
            </div>
        </div>
        <div className="banner">
            <div className="imageBox">
                <img src="/hero2.png" alt="hero2" />
            </div>
            <h1 className='title dishes_title'>Dishes</h1>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
