import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import archer1 from '../img/archer1.jpg';
import dancer1 from '../img/dancer1.jpg';
import jack1 from '../img/jack1.jpg';
import {motion} from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer, textAnim, spanAnim } from "../animation";
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () =>{
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    const createMarkup = (letter) =>{
        return {__html: letter}
    }

    const createSpan = (letter, x, y) =>{
        return <motion.span 
            variants={spanAnim} style={{display: "inline-block", fontSize: "4rem"}}
            dangerouslySetInnerHTML={createMarkup(letter.substring(x, y))}
            key={x}
            className='titleSpan'
            ></motion.span>
    }

    const createTitle = (title) =>{
        const arr = [];
        for(let x = 0; x < 16; x++){
            if(title.substring(x, x+1) === ' '){
                arr.push(<span key={x} className='titleSpan'>&nbsp;</span>)
            }else{
                arr.push(
                    createSpan(title, x, x+1)
                );
            }
        }
        return arr;
    }

    const container = {
        show: {
            transition:{
                duration: 2,
                staggerChildren: 0.02,
                delayChildren: 1
            }
        }
    }

    return(
        <Work 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show" 
        exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.div variants={container} className='container'>
                    {createTitle("Pigeon Eye")}
                </motion.div>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Info variants={fade}>
                    <Link to="/work/pigeon-eye">
                        <motion.div  className='section'>
                            <Hide className='hide'>
                                <motion.img variants={photoAnim} src={archer1} alt="archer image" />
                            </Hide>
                            <motion.div className='text' variants={textAnim}>
                                <motion.h1 variants={textAnim}>Description</motion.h1>
                                <motion.p variants={textAnim}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, autem odio non minima 
                                    mollitia inventore ut doloremque consequuntur est repellendus? Lorem ipsum dolor sit amet 
                                    consectetur adipisicing elit. Consequuntur dolorem ut corporis fuga. Unde accusantium asperiores 
                                    molestias quod similique ea odit exercitationem, nam, numquam sunt maxime rem, corporis provident 
                                    officiis?
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </Link>
                </Info>
            </Movie>
            <Movie ref={element} animate={controls} initial="hidden" variants={fade}>
                <motion.div variants={container} className='container'>
                    {createTitle("Street Ballet")}
                </motion.div>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Info variants={fade}>
                    <Link to="/work/street-ballet">
                        <motion.div  className='section'>
                            <Hide className='hide'>
                                <motion.img variants={photoAnim} src={dancer1} alt="dancer image" />
                            </Hide>
                            <motion.div className='text' variants={textAnim}>
                                <motion.h1 variants={textAnim}>Description</motion.h1>
                                <motion.p variants={textAnim}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, autem odio non minima 
                                    mollitia inventore ut doloremque consequuntur est repellendus? Lorem ipsum dolor sit amet 
                                    consectetur adipisicing elit. Consequuntur dolorem ut corporis fuga. Unde accusantium asperiores 
                                    molestias quod similique ea odit exercitationem, nam, numquam sunt maxime rem, corporis provident 
                                    officiis?
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </Link>
                </Info>
            </Movie>
            <Movie ref={element2} animate={controls2} initial="hidden" variants={fade}>
                <motion.div variants={container} className='container'>
                    {createTitle("Jacky Spearow")}
                </motion.div>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Info variants={fade}>
                    <Link to="/work/jacky-spearow">
                        <motion.div  className='section'>
                            <Hide className='hide'>
                                <motion.img variants={photoAnim} src={jack1} alt="jack image" />
                            </Hide>
                            <motion.div className='text' variants={textAnim}>
                                <motion.h1 variants={textAnim}>Description</motion.h1>
                                <motion.p variants={textAnim}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, autem odio non minima 
                                    mollitia inventore ut doloremque consequuntur est repellendus? Lorem ipsum dolor sit amet 
                                    consectetur adipisicing elit. Consequuntur dolorem ut corporis fuga. Unde accusantium asperiores 
                                    molestias quod similique ea odit exercitationem, nam, numquam sunt maxime rem, corporis provident 
                                    officiis?
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </Link>
                </Info>
            </Movie>
            <ScrollTop/>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 2rem 10rem;
    h2{
        color: white;
        padding: 1rem 0rem;
        font-style: italic;
    }
    @media (max-width: 1300px){
        padding: 2rem;
        .container{
           display: flex;
           justify-content: center;
        }
        .text{
            h1{
                font-size: 2rem;
            }
        }
    }
    @media (max-width: 767px){
        .section{
            .text{
                p{
                    font-size: 1.25rem;
                }
            }
        }
    }
    @media (max-width: 766px){
        .section{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
            }
            .text{
                h1{
                    padding-top: 2rem;
                    text-align: center;
                }
                p{
                    padding: 1rem 0rem;
                }
            }
        }
        .titleSpan{
            font-size: 2.5rem !important
        }
    }
`

const Movie = styled(motion.div)`
    padding-bottom: 4rem;
    .line{
        height: 0.5rem;
        background: #23d997;
    }
    img{
        height: auto;
        width: 90%;
        border-radius: 1rem;
    }
    a{
        display: contents;
    }
    span{
        color: white;
        font-weight: 100;
        font-style: italic;
        font-size: 4rem;
    }
`

const Hide = styled.div`
    overflow: hidden;
    width: 70%;
    height: 100%;
`

const Info = styled(motion.div)`
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    padding: 2rem;
    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.3);
    .section{
        display: flex;
        justify-content: space-between;
        h1{
            font-size: 3rem;
            text-decoration: underline;
            color: white;
        }
        p{
            font-size: 1.5rem;
            padding-right: 2rem;
        }
        .text{
            width: 100%
        }
    }
`

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff8ebf;
`

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default OurWork;