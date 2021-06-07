import React from 'react';
import home1 from "../img/home1.png";
import {SAbout,SDesc,SImage,SHideDiv} from '../styles'

// Framer Motion
import {motion} from 'framer-motion'
const AboutSection = () => {


    return(
        <SAbout>
            <SDesc>
                <motion.header>
                    <SHideDiv>
                        <motion.h2>We Work to make</motion.h2>
                    </SHideDiv>
                    <SHideDiv>
                        <motion.h2>Your <span>dreams</span></motion.h2>
                    </SHideDiv>
                    <SHideDiv>
                        <motion.h2>come true.</motion.h2>
                    </SHideDiv>
                </motion.header>
                <p>Contact us for any photography or video ideas taht you have. We have professional with amazing skills.</p>
                <button>Contact Us</button>
            </SDesc>
            <SImage>
                <img src={home1} alt="guy with camera" />
            </SImage>
        </SAbout>
    );
}





export default AboutSection