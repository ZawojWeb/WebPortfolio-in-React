import React from 'react'
import AboutSection from "../components/AboutSection"
import ServicesSection from '../components/ServicesSection'
import FAQ from '../components/FAQ'
// Animation 
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop';

const AboutUsPage = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <FAQ></FAQ>
            <ScrollTop></ScrollTop>
        </motion.div>
    )
}

export default AboutUsPage