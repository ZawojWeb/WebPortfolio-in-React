import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {MovieState} from '../movieState'
// Animation 
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const MovieDetali = () => {
    const history = useHistory();
    console.log(history);
    const url = history.location.pathname;
// State
    const [Movies, setMovies] = useState(MovieState);
    const [Movie, setMovie] = useState(null)
// useEffect
useEffect(()=>{
    const currentMovie = Movies.filter((stateMovie)=> stateMovie.url === url);
    setMovie(currentMovie[0])
},[Movies,url])
    return (
        <>
        {Movie && (
            <SDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
                <SHeadLine>
                    <h2>{Movie.title}</h2>
                    <img src={Movie.mainImg} alt="" />
                </SHeadLine>
                <SAwards>
                    {Movie.awards.map((award)=>(
                        <Award title={award.title} desc={award.description} key={award.title}></Award>
                    ))}
                </SAwards>
                <SImageDispaly>
                    <img src={Movie.secondaryImg} alt="" />
                </SImageDispaly>
            </SDetails>
        )}
        </>
    )
}
const SDetails = styled(motion.article)`
 color:white;
`
const SHeadLine = styled.header`
    min-height: 90vh;
    padding-top: 10vh;
    position: relative;
    h2{
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%,-10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const SAwards =styled.section`
    min-height: 80vh;
    display: flex;
    margin: 5rem 5rem;
    align-items: center;
    justify-content: space-around;
`
const SAward = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 80%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 1rem 0rem;
    }
`

const SImageDispaly = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
// Award Component
const Award = ({title,desc}) =>{
    return(
        <SAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{desc}</p>
        </SAward>
    )
}

export default MovieDetali
