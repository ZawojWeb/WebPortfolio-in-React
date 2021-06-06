import React from 'react';
import home1 from "../img/home1.png";
import {SAbout,SDesc,SImage,SHideDiv} from '../styles'
const AboutSection = () => {
    return(
        <SAbout>
            <SDesc>
                <header>
                    <SHideDiv>
                        <h2>We Work to make</h2>
                    </SHideDiv>
                    <SHideDiv>
                        <h2>Your <span>dreams</span></h2>
                    </SHideDiv>
                    <SHideDiv>
                        <h2>come true.</h2>
                    </SHideDiv>
                </header>
                <p>Contact us for any photography or video ideas taht you have. We have professional with amazing skills.</p>
                <button>Contact Us</button>
            </SDesc>
            <SImage>
                <img src={home1} alt="guy with camera" />
            </SImage>
        </SAbout>
    );
}

// Styled components




export default AboutSection