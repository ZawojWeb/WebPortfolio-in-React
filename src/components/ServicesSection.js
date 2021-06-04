import React from 'react';

import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

const ServicesSection = () => {
    return(
        <section className="ServicesSection">
            <div className="description">
                <header>
                    <h2>High <span>quality</span> services</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt="clock icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={diaphragm} alt="diaphragm icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={money} alt="money icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt="teamwork icon" />
                                <h3>Effictien</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, at?</p>
                        </div>
                    </div>
                </header>
            </div>
            <div className="image">
                <img src={home2} alt="" />
            </div>
        </section>
    )
}

export default ServicesSection