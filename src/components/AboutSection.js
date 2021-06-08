import React from 'react';
import home1 from "../img/home1.png";
import {SAbout,SDesc,SImage,SHideDiv} from '../styles'
// Framer Motion
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'
import Wave from './Wave'
const AboutSection = () => {
    return(
        <SAbout>
            <SDesc>
                <motion.header>
                    <SHideDiv>
                        <motion.h2 variants={titleAnim} >We Work to make</motion.h2>
                    </SHideDiv>
                    <SHideDiv>
                        <motion.h2 variants={titleAnim} >Your <span>dreams</span></motion.h2>
                    </SHideDiv>
                    <SHideDiv>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </SHideDiv>
                </motion.header>
                <motion.p variants={fade}>Contact us for any photography or video ideas taht you have. We have professional with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </SDesc>
            <SImage>
                <motion.img variants={photoAnim} src={home1} alt="guy with camera" />
            </SImage>
            <Wave/>
        </SAbout>
    );
}





export default AboutSection