import React from "react";
import styled from 'styled-components';
import { About } from "../styles";
import Toggle from "./Toggle";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () =>{
    const [element, controls] = useScroll();

    return (
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toggle title="How do I start?">
                <div className="answer">
                    <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Dolore, reprehenderit.
                    </p>
                </div>
            </Toggle>
            <Toggle title="Daily Schedule">
                <div className="answer">
                    <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Dolore, reprehenderit.
                    </p>
                </div>
            </Toggle>
            <Toggle title="Different payment methods">
                <div className="answer">
                    <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Dolore, reprehenderit.
                    </p>
                </div>
            </Toggle>
            <Toggle title="What products do you offer?">
                <div className="answer">
                    <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Dolore, reprehenderit.
                    </p>
                </div>
            </Toggle>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    z-index: 2;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;