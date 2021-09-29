import React, { useState } from 'react'
// Animation 
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import { useAnimation } from 'framer-motion';
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
    const [SendN, setSendN] = useState(false)
    const ControlSendN = useAnimation();
    const SendMessegaAnim = {
        hidden: {
            right: "10%",
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1
            }
        },
        show: {

            right: "8%",
            y: 200,
            opacity: 0,
        },
        exit: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeOut",
                duration: 2,
            },
        }

    }
    if (SendN) {
        ControlSendN.start("show")
    } else {
        ControlSendN.start("hidden")
    }
    return (
        <SCotactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <STitle>
                <SHide>
                    <motion.h2 variants={titleAnim}>
                        Get in touch.
                    </motion.h2>
                </SHide>
            </STitle>
            <div>
                <SHide>
                    <SSocial variants={titleAnim}  >
                        <SCricle></SCricle>
                        <SH2 onHoverStart={() => setSendN(true)} onHoverEnd={() => setSendN(false)}>
                            Sund Us A <motion.span variants={SendMessegaAnim} initial="hidden" animate={ControlSendN} >Message</motion.span>
                        </SH2>
                    </SSocial>
                </SHide>
                <SHide>
                    <SSocial variants={titleAnim}>
                        <SCricle></SCricle>
                        <h2>Send an email.</h2>
                    </SSocial>
                </SHide>
                <SHide>
                    <SSocial variants={titleAnim}>
                        <SCricle></SCricle>
                        <h2>Social Media</h2>
                    </SSocial>
                </SHide>
            </div>
            <ScrollTop></ScrollTop>
        </SCotactStyle>
    )
}

const SCotactStyle = styled(motion.div)`
    padding: 5rem;
    color: #f0f0f0;
    min-height: 90vh;
    @media (max-width:1500px){
        padding: 2rem;
        font-size: 1rem;
    }
`
const STitle = styled.div`
    margin-bottom: 4rem;
    color: white;
    @media (max-width:1500px){
        margin-top: 5rem;
       
    }
`

const SHide = styled.div`
    overflow: hidden;
`
const SCricle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #f0f0f0;
`
const SSocial = styled(motion.div)`
   display :flex ;
   position: relative;
   align-items: center;
   h2{
    position: relative;
       margin: 2rem;
   }
   
`
const Nudes = styled(motion.span)`
    position: absolute;
    
`
const SH2 = styled(motion.h2)`
    position: relative;
       margin: 2rem;
       cursor: pointer;
`

export default ContactUs
