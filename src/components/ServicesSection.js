import React from 'react';

import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

import {SAbout,SDesc,SImage} from '../styles'
import styled from 'styled-components';

import {fade} from '../animation';
import {useScroll} from './useScroll'


const ServicesSection = () => {
   const [element, controls] = useScroll();
    return(
        <SServices variants={fade} animate={controls} initial="hidden" ref={element}>
            <SDesc>
                <header>
                    <h2>High <span>quality</span> services</h2>
                    <SCards >
                        <SCard>
                            <div className="icon">
                                <img src={clock} alt="clock icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </SCard>

                        <SCard>
                            <div className="icon">
                                <img src={diaphragm} alt="diaphragm icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </SCard>
                        <SCard>
                            <div className="icon">
                                <img src={money} alt="money icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </SCard>
                        <SCard>
                            <div className="icon">
                                <img src={teamwork} alt="teamwork icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </SCard>
                    </SCards>
                </header>
            </SDesc>
            <SImage>
                <img src={home2} alt="" />
            </SImage>
        </SServices>
    )
}

const SServices = styled(SAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding:2rem 0rem 4rem 0rem;
    }
`

const SCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const SCard = styled.div`
    flex-basis: 17rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`
export default ServicesSection