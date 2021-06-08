import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SAbout = styled(motion.section)`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
    color: white;
    @media (max-width:1300px){
     display:block ;
     padding: 2rem;
     text-align: center;
    }
    
`
export const SDesc = styled.div`
    flex: 2;
    padding-right: 5rem;
    z-index: 2;
    @media (max-width:1300px){
        padding: 0;
        button{
            margin: 2rem 0rem 5rem 0rem;
        }
    }
    h2{
        font-weight: lighter;
    }
`

export const SImage = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export const SHideDiv = styled.div`
    overflow: hidden;
`