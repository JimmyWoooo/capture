import React from "react";
import { useNavigate } from "react-router-dom";
import home1 from '../img/home1.jpg';
import {motion} from 'framer-motion';
import { About, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import ScrollTop from "./ScrollTop";

const AboutSection = () =>{
    const navigate = useNavigate();

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to Make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            true.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have.
                </motion.p>
                <motion.button variants={fade} onClick={()=> navigate('/contact')}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="handsome cameraman" />
            </Image>
            <Wave/>
            <ScrollTop/>
        </About>
    )
}

export default AboutSection;