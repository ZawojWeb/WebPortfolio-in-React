import React from 'react';
import styled from 'styled-components'
import { SAbout } from '../styles';
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll'
import { scrollReveal } from '../animation'

const FAQ = () => {
    const [element, controls] = useScroll();
    return (
        <SFaq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                    </div>
                </Toggle>
                <Toggle title="How Do I WORK">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                    </div>
                </Toggle>
                <Toggle title="How pay">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                    </div>
                </Toggle>
                <Toggle title="What products do you offer">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </SFaq>
    )
}
const SFaq = styled(SAbout)`
    display: block;
    span{
        display: block;
    
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answear{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FAQ