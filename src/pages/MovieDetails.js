import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import {MovieState} from '../movieState';
import {motion} from 'framer-motion';
import { pageAnimation, textAnim, photoAnim, fade, picAnim } from "../animation";
import ScrollTop from "../components/ScrollTop";

const MovieDetails = () =>{
    const location = useLocation();
    const url = location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);
    const [current, setCurrent] = useState(0);

    useEffect(() =>{
        const currentMovie = movies.filter((stateMovie) =>stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url])

    const prev = () =>{
        setCurrent(current === 0 ? 2: current - 1)
    }

    const next = () =>{
        setCurrent(current === 2 ? 0: current + 1)
    }

    const parentAnim = {
        hidden:{
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: .25,
                staggerChildren: 0.25,
            }
        }
    }

    return(
        <>
            {movie && (
                <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <Headline variants={parentAnim}>
                        <motion.h1 variants={fade}>{movie.title}</motion.h1>
                        <motion.div  className="section">
                            <motion.div variants={photoAnim} className="image-container">
                                {movie.secondaryImg.map((pic, index) =>{
                                    return (
                                        <React.Fragment key={pic}>
                                            {index === current && (
                                                <motion.img variants={picAnim} src={pic} alt="movie" />
                                            )}
                                        </React.Fragment>
                                    )
                                })}
                            </motion.div>
                            <Awards 
                                key={movie.title}
                                variants={parentAnim}
                            >
                            <i className="fa-solid fa-circle-arrow-left" onClick={prev}></i>
                            {movie.awards.map((award, index) =>{
                                return (
                                    <React.Fragment key={award.title}>
                                    {index === current && (
                                        <Award 
                                            title={award.title} 
                                            description={award.description}
                                            next={next}
                                            prev={prev}
                                            index={index}
                                            current={current}
                                            key={award.title}
                                        />
                                    )}
                                    </React.Fragment>
                                )
                            })}
                            <i className="fa-solid fa-circle-arrow-right" onClick={next}></i>
                            </Awards>
                        </motion.div>
                    </Headline>
                    <ScrollTop/>
                </Details>
            )}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
`
const Headline = styled(motion.div)`
    padding: 5vh;
    h1{
        text-align: center;
        font-size: 3rem;
        font-weight: 100;
        padding-bottom: 1rem;
    }
    .section{
        display: flex;
        height: 75vh;
        .image-container{
            width: 40%;
            padding: 0rem 2rem;
            img{
                border-radius: 1rem;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    @media (max-width: 1700px){
        padding: 4vh;
        .image-container{
            width: 40%;
            img{
                width: 100%;
            }
        }
    } 
    @media (max-width: 1500px){
        padding: 3vh;
        .section{
            .image-container{
                width: 40%;
            }
        }
    } 
    @media (max-width: 1200px){
        padding: 2vh;
    }
    @media (max-width: 1024px){
        .section{
            flex-direction: column;
            align-items: center;
            .image-container{
                width: 90%;
                img{
                    border-radius: 2rem;
                }
            }
        }
    }
     
`

const Awards = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.0)
    );
    box-shadow: 5px 5px 5px #0f0f0f;
    border-radius: 2rem;
    padding: 2rem;
    .fa{
        font-size: 3rem;
        padding: 1rem;
    }
    .fa-circle-arrow-right, .fa-circle-arrow-left{
        color: #23d997;
        border-radius: 60%;
        background: white;
        font-size: 3rem;
        cursor: pointer;
        box-shadow: 3px 3px 3px #2d7a42;
    }
    i:active{
        scale: 0.9;
        color: #0eb075;
    }
    @media (max-width: 1700px){
        width: 85%;
    }   
    @media (max-width: 1500px){
        width: 70%;
    }   
    @media (max-width: 1300px){
        width: 65%;
    }
    @media (max-width: 1024px){
        width: 100%;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 2rem;
    }
    @media (max-width: 820px){
        width: 100%;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 2rem;
        .fa-circle-arrow-right, .fa-circle-arrow-left{
            font-size: 2rem;
            box-shadow: 2px 2px 2px #2d7a42;
        }
    }
    @media (max-width: 767px){
        border-radius: 1rem;
        .fa-circle-arrow-right, .fa-circle-arrow-left{
            font-size: 2rem;
        }
    }
`

const AwardStyle = styled(motion.div)`
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    padding: 2rem;
    h3{
        font-size: 2rem;
        font-weight: 100;
    }
    .line{
        width: 100%;
        background: #23d997;
        background: linear-gradient(
            to right bottom,
            rgba(32, 217, 151, 1),
            rgba(14, 176, 117, 0.5)
        );
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 2rem;
        justify-content: center;
        font-style: italic;
    }
    .fa-quote-left{
        margin-bottom: 10rem;
    }
    .fa-quote-right{
        margin-top: 10rem;
    }
    .text{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
    }
    @media (max-width: 1300px){
        p{
            font-size: 1.8rem;
        }
    } 
    @media (max-width: 480px){
        padding: 1rem;
        h3{
            font-size: 1.3rem;
        }
        p{
            font-size: 1rem;
        }
        .fa-quote-left, .fa-quote-right{
            font-size: 1rem;
        }
    }
`

const Award = ({title, description}) =>{
    const parentAnim = {
        hidden:{
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: .25,
                staggerChildren: 0.25,
            }
        }
    }

    return(
        <AwardStyle variants={parentAnim}>
            <motion.h3 variants={textAnim}>{title}</motion.h3>
            <motion.div className="line"></motion.div>
            <div className="text" >
                
            <span className="fa fa-quote-left"></span>
                <motion.p variants={textAnim} >
                    {description}
                </motion.p>
                
                <span className="fa fa-quote-right"></span>
            </div>
        </AwardStyle>
    )
}

export default MovieDetails;