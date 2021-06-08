import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <SNav>
            <h1 id="logo"><Link to="/index.html">Portfolio Demo</Link></h1>
            <ul>
                <li>
                    <Link to="/index.html">About Us</Link>
                    <SLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/index.html" ? "50%" : "0%" }} />
                </li>
                <li><Link to="/work">Our Work</Link > <SLine transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/work" ? "50%" : "0%" }}></SLine></li>
                <li><Link to="/contact">Contact</Link><SLine transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/contact" ? "50%" : "0%" }}></SLine></li>
            </ul>
        </SNav>
    )
}

const SNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background: #282828;
    position: sticky;
    top:0%;
    z-index: 100;
a{
    text-decoration: none;
    color: white;
}
ul{
    display: flex;
    list-style: none;
    li{
        padding-left: 10rem;
        position: relative;
    }
}
#logo{
    font-family: 'Lobster',cursive;
    font-weight: lighter;
    a{
    font-size: 1.7rem;

    }
}
@media (max-width:1300px){
       flex-direction: column;
       padding: 2rem 1rem;
       ul{
           padding: 2rem;
           justify-content: space-around;
           width: 100%;
           li{
               padding: 0;
           }
       }
       #logo{
           display: inline-block;
           margin: 1rem;
       }
}
`

const SLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`
export default Nav