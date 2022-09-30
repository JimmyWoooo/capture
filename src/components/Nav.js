import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { useLocation } from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    
    return(
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}} 
                        animate={{width: pathname === '/' ? "50%" : "0%"}}
                    />
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}} 
                        animate={{width: 
                            pathname === '/work' ||
                            pathname === '/work/pigeon-eye' ||
                            pathname === '/work/street-ballet' ||
                            pathname === '/work/jacky-spearow' ? "50%" : "0%"}}
                    />
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{width: "0%"}} 
                        animate={{width: pathname === '/contact' ? "50%" : "0%"}}
                    />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    align-items: center;
    top: 0;
    z-index: 5;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 2.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px){
        flex-direction: column;
        padding: 0rem;
        #logo{
            display: inline-block;
            margin: 1rem;
        }
        ul{
            justify-content: space-around;
            width: 100%;
            padding: 2rem;
        }
        li{
            padding: 0;
        }
    }
`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 1300px){
        left: 0%;
        bottom: -40%;
    }
    @media (max-width: 766px){
        left: 20%;
    }
`

export default Nav;