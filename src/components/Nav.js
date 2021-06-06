import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <SNav>
            <h1 id="logo"><Link to="/">Portfolio Demo</Link></h1>
            <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/work">Our Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
    font-size: 1.8rem;
    font-family: 'Lobster',cursive;
    font-weight: lighter;
}
`
export default Nav