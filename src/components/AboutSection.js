import React from 'react';
import home1 from "../img/home1.png"
import styled from 'styled-components'
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

const SAbout = styled.section`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
    color: white;
`

const SDesc = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`

const SImage= styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const SHideDiv = styled.div`
    overflow: hidden;
`


export default AboutSection