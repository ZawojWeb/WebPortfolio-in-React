import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 3rem;
        border: 3px solid #23d997;
        color: white;
        background: transparent;
        transition: all 0.5s ease;

        &:hover{
            color: #23d997;
            background-color: white;
        }
       
    }
        h2{
            font-weight: lighter;
            font-size: 3rem;
        }
        h3{
            color: white;
        }
        h4{
            font-weight: bold;
        }
        span{
            font-weight: bold;
            color: #23d997;
        }
        a{
            font-size: 1.1rem;
        }
        p{
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1rem;
        }
`

export default GlobalStyle