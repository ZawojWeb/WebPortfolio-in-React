import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Img
import athleteSmall from '../img/athlete-small.png'
import theracerSmall from '../img/theracer-small.png'
import goodtimesSmall from '../img/goodtimes-small.png'
// Aniamtion
import { motion } from 'framer-motion'
import {
    sliderContainer,
    slider,
    pageAnimation,
    fade,
    photoAnim,
    lineAnim,
} from '../animation'
import { useScroll } from '../components/useScroll'
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
    const [element1, controls1] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <SWork exit="exit" variants={pageAnimation} initial="hidden" animate="show"  >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <SMovie >
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <SHidden>
                    <Link to="/work/the-athlete"><motion.img variants={photoAnim} src={athleteSmall} alt="The Athlete" /></Link></SHidden>
            </SMovie>
            <SMovie ref={element1} variants={fade} animate={controls1} initial="hidden">
                <h2>The Theracer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer"><img src={theracerSmall} alt="The Theracer" /></Link>
            </SMovie>
            <SMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times"><img src={goodtimesSmall} alt="The Times" /></Link>
            </SMovie>
            <ScrollTop></ScrollTop>
        </SWork>
    )
}

const SWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem;

    h2{
        color: white;
        padding: 1rem 0rem;
    }
    @media (max-width:1300px){
     padding: 2rem;
    }
`

const SMovie = styled(motion.article)`
    margin-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const SHidden = styled.div`
    overflow: hidden;
`

// Framer aniamtion

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0%;
    width: 100%;
    height: 100vh;
    background:#fffebf ;
    z-index: 200;
`
const Frame2 = styled(Frame1)`
    background:#ff8efb ;
`
const Frame3 = styled(Frame1)`
    background:#8ed2ff ;
`
const Frame4 = styled(Frame1)`
    background:#8effa0 ;
`


export default OurWork
