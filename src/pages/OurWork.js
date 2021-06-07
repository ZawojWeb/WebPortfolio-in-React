import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// Img
import athleteSmall from '../img/athlete-small.png'
import theracerSmall from '../img/theracer-small.png'
import goodtimesSmall from '../img/goodtimes-small.png'
// Aniamtion
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const OurWork = () => {
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete"><img src={athleteSmall} alt="Image of Athlete"/></Link>
            </Movie>
            <Movie>
                <h2>The Theracer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer"><img src={theracerSmall} alt="Image of Theracer"/></Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times"><img src={goodtimesSmall} alt="Image Good Times"/></Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem;

    h2{
        color: white;
        padding: 1rem 0rem;
    }
`

const Movie = styled.article`
    margin-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`


export default OurWork
