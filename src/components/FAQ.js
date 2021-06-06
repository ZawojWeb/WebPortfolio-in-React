import React from 'react';  
import styled from 'styled-components'
import {SAbout} from '../styles'
const FAQ = () => {
    return(
        <SFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How Do I WORK</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How pay</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, similique.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam modi ex repellendus molestias? Id ea laboriosam maxime magni deleniti?</p>
                </div>
                <div className="faq-line"></div>
            </div>
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