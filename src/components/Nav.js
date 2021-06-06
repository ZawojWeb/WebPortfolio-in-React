import React from 'react';
import styled from 'styled-components'

const Nav = () => {
    return(
        <SNav>
            <h1 id="logo"><a href="#">Portfolio Demo</a></h1>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Contact</a></li>
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